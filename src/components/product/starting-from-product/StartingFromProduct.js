import React from "react";
import "./startingFromProduct.css";
import action_product from "./assets/aciton-camera.png";
import for_all_styles from "./assets/for-all-styles.png";
import { Col, Row } from "react-bootstrap";

const StartingFromProduct = () => {
  return (
    <>
      <Row className="starting-from-product flex-wrap">
        <Col xs={12} md={6} className="starting-from action-camera">
          <img src={action_product} alt="action-product" />
        </Col>
        <Col xs={12} md={6} className="starting-from for-all-styles">
          <img src={for_all_styles} alt="for all styles" />
        </Col>
      </Row>
    </>
  );
};

export default StartingFromProduct;
