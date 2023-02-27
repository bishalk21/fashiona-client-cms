import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SpecialHead = () => {
  return (
    <div className="special-head">
      {/* free shipping, payment methods, customer support + small screen - Need advice&#63; Call us +0123 456 789 */}
      <Container>
        <Row>
          {/* free shipping */}
          <Col md="4" className="d-none d-md-block">
            <i class="fa-solid fa-truck"></i>
            {"  "}
            <span>Free Shipping over $99</span>
          </Col>
          {/* payment methods */}
          <Col md="4" className="text-center d-none d-md-block">
            <i className="fa fa-credit-card"></i>
            {"  "}
            <span>100% Payment Secure</span>
          </Col>
          {/* customer support */}
          <Col md="4" className="text-end d-none d-md-block">
            <i class="fa-solid fa-phone"></i>
            {"  "}
            <span>Call us +0123 456 789</span>
          </Col>
          <Col xs="12" className="text-center d-block d-md-none">
            <i class="fa-solid fa-phone"></i>
            {"  "}
            <span> Need advice&#63; Call us +0123 456 789</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SpecialHead;
