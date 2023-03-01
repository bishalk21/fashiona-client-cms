import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FlashDealProduct from "./FlashDealProduct";
import LandingProductSlide from "./LandingProductSlide";

const LandingProduct = () => {
  return (
    <div className="landing-product mt-2">
      <Container>
        <Row>
          <Col md={9} sm={9}>
            <LandingProductSlide />
          </Col>
          <Col md={3} sm={3} className="d-none d-sm-block d-md-block">
            <FlashDealProduct />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingProduct;
