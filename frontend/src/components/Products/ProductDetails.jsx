import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StarIcon } from "@heroicons/react/solid";
import ProductSlider from "../home/productSlider/ProductSlider";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  clearErrors,
  getProductDetails,
  getSimilarProducts,
} from "../../reduxStore/actions/productAction";
import { addItemsToCart } from "../../reduxStore/actions/cartAction";
import Loader from "../../layout/Loader";
import { getDeliveryDate } from "../../utils/functions";
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { product, error, loading } = useSelector(
    (state) => state.productDetails
  );
  const products = product;

  useEffect(() => {
    if (products?.category !== undefined) {
      dispatch(getSimilarProducts(product?.category));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, product, product.category]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (slug !== "") dispatch(getProductDetails(slug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, slug]);

  //buy & add now
  const navigate = useNavigate();

  const addItemToCart = (_id) => {
    dispatch(addItemsToCart(_id));
    navigate("/cart");
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        products &&
        Object.keys(products).length && (
          <div className="bg-white">
            <div className="pt-6">
              <div className="mt-6 max-w-2xl mx-auto px-6 lg:max-w-app lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
                  <img
                    src={`https://api.karkibishal.com/${products.imageUrl}`}
                    alt={products.imageUrl}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                  <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    <img
                      src={`https://api.karkibishal.com/${products.imageUrl}`}
                      alt={products.imageUrl}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    <img
                      src={`https://api.karkibishal.com/${products.imageUrl}`}
                      alt={products.imageUrl}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </div>
                <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                  <img
                    src={`https://api.karkibishal.com/${products.imageUrl}`}
                    alt={product.imageUrl}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>

              <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                    {products.name}
                  </h1>
                </div>

                <div className="mt-4 lg:mt-0 lg:row-span-3">
                  <div className="">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              reviews.average > rating
                                ? "text-indigo-500"
                                : "text-gray-300",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">
                        {reviews.average} out of 5 stars
                      </p>
                      <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        {reviews.totalCount} reviews
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-4">
                    <div className=" space-x-1">
                      <span className="font-semibold text-xl">
                        ₹&nbsp;{products.sellingPrice.toFixed(2)}
                      </span>{" "}
                      <span className="text-gray-700  line-through text-sm">
                        ₹{products.price.toFixed(2)}{" "}
                      </span>{" "}
                      <span className="text-sm font-medium text-indigo-600">
                        {products.discount}%&nbsp;off
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">Delivery by {getDeliveryDate()}</div>
                  <div className="my-4">
                    <h1 className="text-indigo-600 sm:text-xl font-semibold">
                      Available offers
                    </h1>
                    <p>
                      Coupon Discount: Rs. 125 off (check cart for final
                      savings)
                    </p>
                    <p>
                      Applicable on: Orders above Rs. 1599 (only on first
                      purchase)
                    </p>
                    <p>
                      Partner Offer: Buy this product and get upto ₹250 off on
                      Fewa Store.
                    </p>{" "}
                  </div>

                  <button
                    onClick={() => addItemToCart(products._id)}
                    className="my-4 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <div className="my-4 ">
                    <img
                      src={`https://api.karkibishal.com/${products.brand?.imageUrl}`}
                      alt={products.brand?.name}
                      className=" object-center object-cover h-16  "
                    />
                  </div>

                  <div className="mt-10 space-y-4">
                    <h2 className="text-lg font-semibold capitalize text-gray-900">
                      highlights:
                    </h2>{" "}
                    <p>{products.highlights}</p>
                    <h2 className="text-lg font-semibold capitalize text-gray-900">
                      specifications:
                    </h2>{" "}
                    <p className="">{products.specifications}</p>
                    <h2 className="text-lg font-semibold capitalize text-gray-900">
                      Description
                    </h2>
                    <p className="">{products.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <ProductSlider title={"Similar products"} />
          </div>
        )
      )}
    </>
  );
}
