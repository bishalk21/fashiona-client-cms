import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import MetaTags from "../utils/MetaTags";
import CartItem from "../components/Cart/CartItem";
import EmptyCart from "../components/Cart/EmptyCart";
import PriceSidebar from "../components/Cart/PriceSidebar";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ShippingAddress from "../components/Cart/ShippingAddress";
import logo from "../assets/images/fewaStoreApilogo.png";
import fewaStoreApi from "../api/fewaStoreApi";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.userLogin);
  let token = userInfo?.token;
  let totalAmount = cartItems.reduce(
    (sum, item) => sum + item.sellingPrice * item.quantity,
    0
  );
  let orderData = {};

  const displaystripe = async (e) => {
    e.preventDefault();
    if (!userInfo.address || !cartItems) {
      toast.error("Please add shipping address");
    } else {
      try {
        const response = await fewaStoreApi.post(
          `/app/create-order`,
          { totalAmount },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          orderData = response.data.orderData;
        }
      } catch (error) {
        toast(error.response.data.message);
      }

      const res = await loadScript(
        "https://checkout.stripe.com/v1/checkout.js"
      );
      if (!res) {
        toast("Payment gateway failed to load !");
        return;
      }
      const options = {
        key: import.meta.env.PUBLIC_KEY,
        currency: "INR",
        amount: orderData.amount,
        order_id: orderData.id,
        name: "fewaStoreApi",
        description: "Payment Gateway in Live Mode. ",
        image: logo,
        handler: function (response) {
          try {
            fewaStoreApi
              .post(
                `/app/place-order`,
                {
                  userName: userInfo.name,
                  userEmail: userInfo.email,
                  userPhone: userInfo.phone,
                  orderedProduct: cartItems,
                  shippingAddress: userInfo.address,
                  paymentResult: response,
                  stripe: {
                    paymentId: response.stripe_payment_id,
                    orderId: response.stripe_order_id,
                    signature: response.stripe_signature,
                  },
                  totalAmount: totalAmount,
                  paymentStatus: response.stripe_payment_status || "Success",
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then((res) => {
                if (res.status === 201) {
                  localStorage.removeItem("cartItems");
                  toast.success(res.data.msg);
                  navigate("/orders");
                } else {
                  toast.error(res.data.msg);
                }
              });
          } catch (error) {
            toast(error.response.data.message);
          }
        },
        prefill: {
          name: userInfo?.name,
          email: userInfo?.email,
          contact: userInfo?.phone,
        },
      };
      const paymentObject = new window.stripe(options);
      paymentObject.open();
      paymentObject.on("payment.failed", function (response) {
        toast(response.error.code);
        toast(response.error.description);
        toast(response.error.reason);
      });
    }
  };

  return (
    <>
      <MetaTags title="Shopping Cart | Fewa Store" />
      <main className="w-full ">
        {/* <!-- row --> */}
        <div className="flex flex-col  sm:flex-row gap-4 sm:gap-8  sm:max-w-app sm:mt-6 mt-4  mx-2 sm:mx-auto ">
          {/* <!-- cart column --> */}
          <div className="flex-1">
            <ShippingAddress />
            {/* <!-- cart items container --> */}
            <div className="flex flex-col shadow my-4 bg-white">
              <span className="font-semibold text-indigo-600 text-lg px-2 sm:px-8 py-4 border-b">
                My Cart ({cartItems.length})
              </span>

              {cartItems && cartItems.length === 0 && <EmptyCart />}

              {cartItems &&
                cartItems.map((item) => (
                  <CartItem key={uuidv4()} {...item} inCart={true} />
                ))}
            </div>
          </div>

          <PriceSidebar cartItems={cartItems}>
            <button
              onClick={displaystripe}
              data-payment_button_id="pl_JuIZnt0weQhXaZ"
              disabled={cartItems.length < 1 ? true : false}
              className={
                "flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              }
            >
              PLACE ORDER
            </button>
          </PriceSidebar>
        </div>
        {/* <!-- row --> */}
      </main>
    </>
  );
};

export default Cart;
