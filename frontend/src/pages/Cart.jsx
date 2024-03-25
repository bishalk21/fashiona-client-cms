import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import MetaTags from "../utils/MetaTags";
import CartItem from "../components/Cart/CartItem";
import EmptyCart from "../components/Cart/EmptyCart";
import PriceSidebar from "../components/Cart/PriceSidebar";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ShippingAddress from "../components/Cart/ShippingAddress";
import fewaStoreApi from "../api/fewaStoreApi";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.PUBLIC_KEY);

const Cart = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.userLogin);
  let token = userInfo?.token;
  let totalAmount = cartItems.reduce(
    (sum, item) => sum + item.sellingPrice * item.quantity,
    0
  );

  const handleStripePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error("Stripe has not loaded yet. Please try again.");
      return;
    }

    if (!userInfo.address || !cartItems) {
      toast.error("Please add shipping address");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (result.error) {
      toast.error(result.error.message);
      return;
    }

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

      if (response.status !== 200) {
        throw new Error(response.data.message);
      }

      const { intent } = response.data;

      const confirmResult = await stripe.confirmCardPayment(
        intent.client_secret,
        {
          payment_method: result.paymentMethod.id,
        }
      );

      if (confirmResult.error) {
        toast.error(confirmResult.error.message);
        return;
      }

      const orderResponse = await fewaStoreApi.post(
        `/app/place-order`,
        {
          userName: userInfo.name,
          userEmail: userInfo.email,
          userPhone: userInfo.phone,
          orderedProduct: cartItems,
          shippingAddress: userInfo.address,
          stripe: {
            paymentIntentId: intent.id,
            chargeId: intent.charges.data[0].id,
            status: confirmResult.paymentIntent.status,
          },
          totalAmount: totalAmount,
          paymentStatus: "Success",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (orderResponse.status === 201) {
        localStorage.removeItem("cartItems");
        toast.success(orderResponse.data.msg);
        navigate("/orders");
      } else {
        throw new Error(orderResponse.data.msg);
      }
    } catch (error) {
      toast.error(error.message || "Failed to place the order.");
    }
  };

  //... (rest of your code)
  return (
    <Elements stripe={stripePromise}>
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
            <form onSubmit={handleStripePayment}>
              <CardElement />
              <button
                type="submit"
                disabled={cartItems.length < 1 || !stripe}
                className="flex items-center w-full justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                PLACE ORDER
              </button>
            </form>
          </PriceSidebar>
        </div>
        {/* <!-- row --> */}
      </main>
    </Elements>
  );
};

export default Cart;
