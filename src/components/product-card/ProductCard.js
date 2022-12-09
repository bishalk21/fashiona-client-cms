import React from "react";
import "./productCard.css";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../pages/cart-page/cartSlice";
import { useDispatch } from "react-redux";

export const ProductCard = ({
  _id,
  product,
  images,
  name,
  ratings,
  description,
  price,
  catId,
  subCatName,
  categories,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const findCategories = (catId) => {
    const item = categories.find((product) => product._id === catId);
    return item.catName;
  };
  return (
    <>
      <div className="product__card">
        {catId ? (
          <div className="product__card--header">{findCategories(catId)}</div>
        ) : (
          ""
        )}
        {subCatName ? (
          <div className="product__card--header">
            {findCategories(subCatName)}
          </div>
        ) : (
          ""
        )}
        <div className="product__card--body">
          <Link
            to={`/products/${product.slug}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <div className="product--image">
              <img
                src={`${process.env.REACT_APP_IMAGE_URL + images[0].slice(6)}`}
                // src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="product"
              />
            </div>{" "}
          </Link>

          <div className="product__card--product--name align-center">
            <strong>{name || product.name}</strong>
          </div>
          <div className="product__card--description">
            <strong>Description:</strong> {description || product.description}
          </div>
          <div className="product__card--ratings text-left">
            <strong>Ratings: </strong>{" "}
            <span>
              {" "}
              <i className="fa-solid fa-star text-warning" />
              {ratings || product.ratings}
            </span>
          </div>
          <div className="product__card--price text-left">
            {" "}
            <strong>Price: </strong>
            {price || product.price}
          </div>
        </div>
        <div className="product__card--footer">
          <div className="shop-now-button">
            <Link
              to={`/products/${product.slug}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <button>Shop Now</button>
            </Link>
          </div>
          <div className="shop-now-button">
            <button onClick={() => handleAddToCart(product)}>
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
      {/* ) : (
        <>
          <div className="product__img--skeleton"> </div>
          <div className="skeleton product__title--skeleton"></div>
          <div className="skeleton product__rating--skeleton"></div>
          <div className="skeleton product__price--skeleton"></div>
        </>
      )} */}
    </>
  );
};
