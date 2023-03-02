import React from "react";
import { Container, Form } from "react-bootstrap";
import LandingPageFeatures from "../../components/features/landing-page-features/LandingPageFeatures";
import MostViewedProduct from "../../components/product/most-viewed/MostViewedProduct";
import StartingFromProduct from "../../components/product/starting-from-product/StartingFromProduct";
import LandingProduct from "../../components/special-product/landing-page-products/LandingProduct";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="main-lp">
      {/* 
    1. Row 
        - side-menu shop by cat
        - category list, vendor products, blog, features
        - become a seller, currency, language

    2. Row 
        - categories - show or hide
        - specials, deals - should enlarge on cat hide
        - offers with time deals

    3. Row
        - free shipping and return 
        - money back guarantee
        - online support 24/7
        - secure payment

   */}

      <div className="lp">
        <Container>
          <div className="row landing-page d-flex flex-nowrap">
            <div className="col more-select col-lg-8 col-md-8 col-sm-8 col-xs-8">
              {/* menu */}
              <ul className="d-flex align-items-center justify-content-between">
                <li className="home-page">Home</li>
                <li>
                  <Form.Select aria-label="Default select">
                    <option selected>Vendor</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </li>
                <li className="d-none d-sm-none d-md-block d-lg-block">
                  <Form.Select aria-label="Default select">
                    <option selected>Categories</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </li>
                <li className="d-none d-sm-none d-md-block d-lg-block">
                  <Form.Select aria-label="Default select">
                    <option selected>Products</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </li>
                <li className="d-none d-sm-none d-md-none d-lg-block">
                  <Form.Select aria-label="Default select">
                    <option selected>Features</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </li>
              </ul>
            </div>
            <div className="col others-curr-lang col-lg-4 col-md-4 col-sm-4 col-xs-4">
              {/* become a seller */}
              <div className="become-a-seller">
                <span className="text-bold">Become a Seller</span>
              </div>
              <div className="select curr-select">
                <Form.Select aria-label="Default Select">
                  <option selected>AU</option>
                  <option value="">IND</option>
                  <option value="">NEP</option>
                  <option value="">CHI</option>
                </Form.Select>
              </div>
              <div className="select lang-select d-none d-sm-none d-md-none d-lg-block">
                <Form.Select aria-label="Default Select">
                  <option selected>🇦🇺 ENG</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </Form.Select>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <LandingProduct />
      <LandingPageFeatures />
      <MostViewedProduct />
      <StartingFromProduct />
    </div>
  );
};

export default LandingPage;
