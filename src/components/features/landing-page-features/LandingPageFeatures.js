import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./lpFeatures.css";

const LandingPageFeatures = () => {
  return (
    <div className="fewa-features">
      <Container>
        <Row>
          {/* <Col>FREE SHIPPING & RETURN</Col> */}
          <Col className="free-shipping d-flex justify-content-between align-items-center gap-2">
            <div className="icon d-flex align-items-center justify-content-center fs-3">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <div className="free-shipping-return">
              <span className="free-shipping-text title-text">
                FREE SHIPPING & RETURN
              </span>
              <span className="free-shipping-on sub-text">
                Free shipping on orders over $69.99
              </span>
            </div>
          </Col>
          <Col className="money-back d-sm-flex gap-2 d-none">
            <div className="icon d-flex align-items-center justify-content-center fs-3">
              <i class="fa-solid fa-sack-dollar"></i>
            </div>
            <div className="money-back-guarantee">
              <span className="money-back-text title-text">
                MONEY BACK GUARANTEE
              </span>
              <span className="money-back-on sub-text">
                100% money back guarantee
              </span>
            </div>
          </Col>
          <Col className="online-support d-flex gap-2">
            <div className="icon d-flex align-items-center justify-content-center fs-3">
              <i class="fa-solid fa-circle-info"></i>
            </div>
            <div className="online-support-return">
              <span className="online-support-text title-text">
                ONLINE SUPPORT 24/7
              </span>
              <span className="online-support-on sub-text">
                Lorem, ipsum dolor sit amet
              </span>
            </div>
          </Col>
          <Col className="free-shipping d-none d-sm-none d-md-flex gap-2">
            <div className="icon d-flex align-items-center justify-content-center fs-3">
              <i class="fa-solid fa-money-check-dollar"></i>
            </div>
            <div className="free-shipping-return">
              <span className="free-shipping-text title-text">
                SECURE PAYMENT
              </span>
              <span className="free-shipping-on sub-text">
                Lorem, ipsum dolor sit amet
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPageFeatures;
