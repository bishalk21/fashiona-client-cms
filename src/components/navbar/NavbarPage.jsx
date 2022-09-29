import React from "react";
import "./navbar.css";
import aa from "../../assets/img/fashiona.png";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { CgShoppingCart } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { Badge } from "antd";

export const NavbarPage = () => {
  return (
    <div>
      <header className="bg text-white" variant="light">
        <Container>
          <Row className="d-flex justify-content-between align-items-center">
            <Col>
              <Navbar.Brand href="#home">
                <img
                  src={aa}
                  alt="FASHIONA"
                  width="120px"
                  max-height="100px"
                  style={{ padding: "3px" }}
                />
              </Navbar.Brand>
            </Col>
            <Col>
              <div className="mx-auto">
                <Form className="d-flex align-item-center">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </div>
            </Col>

            <Col>
              <Nav className="d-flex flex-end">
                <Nav.Link href="#cart">
                  <Badge style={{ backgroundColor: "#" }} count={6} showZero>
                    <CgShoppingCart size="24" color="#1890ff" />
                  </Badge>
                </Nav.Link>
                <Nav.Link href="#account" title="Account">
                  <FaUserCircle className="text fs-3" />
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};
