import React from "react";

const FlashDealProduct = () => {
  return (
    <div>
      <div className="flash-deal-product">
        <small className="discount-percent">-89%</small>
        <h4 className="flash-deals text-center d-none d-sm-none d-md-block">
          Flash Deals
        </h4>
        <img
          src="https://images.unsplash.com/photo-1616088886430-ccd86fef0713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80"
          alt="camera"
        />
        <h4 className="title mb-0">Camera</h4>
        <span>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </span>
        <div className="price inline d-flex gap-3">
          <span>
            <strike className="actual-price">$499.99</strike>
          </span>
          <span className="discounted-price text-bold">$120.99</span>
        </div>
        <div className="offer-ends-in">
          <small className="uppercase inline-block">
            OFFER ENDS IN: 117 DAYS, 18:11:08
          </small>
        </div>
        <div className="pb-2 d-flex align-items-center justify-content-center gap-1">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
          />
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
          />
        </div>
      </div>
    </div>
  );
};

export default FlashDealProduct;
