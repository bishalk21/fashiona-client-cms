import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./bestSeller.css";

const BestSeller = () => {
  return (
    <>
      <div className="best-seller pt-3">
        <Container>
          <h3 className="title">Best Seller on {"electronics"}</h3>
          <hr />

          <Row>
            <Col xs={7} sm={6} md={5}>
              {" "}
              <div className="best-seller-product best-seller-product-one">
                <img
                  src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                  alt="smart-watches"
                />
                <div className="product-name">Smar Watches</div>
                <div className="product-price">$100.00</div>
              </div>
            </Col>
            <Col xs={5} sm={6} md={7}>
              <div className="best-seller-product-list">
                <div className="best-seller-product">
                  <img
                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    alt="smart-watches"
                  />
                  <div className="product-name">Smar Watches</div>
                  <div className="product-price">$100.00</div>
                </div>
                <div className="best-seller-product">
                  <img
                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    alt="smart-watches"
                  />
                  <div className="product-name">Smar Watches</div>
                  <div className="product-price">$100.00</div>
                </div>
                <div className="best-seller-product">
                  <img
                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    alt="smart-watches"
                  />
                  <div className="product-name">Smar Watches</div>
                  <div className="product-price">$100.00</div>
                </div>
                <div className="best-seller-product">
                  <img
                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    alt="smart-watches"
                  />
                  <div className="product-name">Smar Watches</div>
                  <div className="product-price">$100.00</div>
                </div>
                <div className="best-seller-product">
                  <img
                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    alt="smart-watches"
                  />
                  <div className="product-name">Smar Watches</div>
                  <div className="product-price">$100.00</div>
                </div>
                <div className="best-seller-product">
                  <img
                    src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    alt="smart-watches"
                  />
                  <div className="product-name">Smar Watches</div>
                  <div className="product-price">$100.00</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BestSeller;
