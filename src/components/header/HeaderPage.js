import "./header.css";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";
import React from "react";
import { NavbarPage } from "../navbar/NavbarPage";

export const HeaderPage = () => {
  return (
    <div>
      <NavbarPage />
      <Navbar
        collapseOnSelect
        expand="md"
        class="bg text-white"
        variant="light"
      >
        <Container>
          <Row className="">
            <Col>
              <Navbar.Brand href="#home" className="title">
                <span className="text-danger">F</span>
                <span className="text-danger">A</span>
                <span className="text-danger">S</span>
                <span className="text-danger">H</span>
                <span className="text-danger">I</span>
                <span className="text-danger">O</span>
                <span className="text-danger">N</span>
                <span className="text-danger">A</span>
              </Navbar.Brand>
            </Col>
            <Col>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                  className="ms-auto my-2 my-lg-0"
                  style={{ display: "flex", flexWrap: "nowrap" }}
                >
                  <Nav.Link href="#mens">
                    <NavDropdown title="MENS" id="basic-nav-dropdown">
                      <small className="text-danger">MENS</small>
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav.Link>
                  <Nav.Link href="#womens">
                    <NavDropdown title="WOMENS" id="basic-nav-dropdown">
                      <small className="text-danger">WOMENS</small>
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav.Link>
                  <Nav.Link href="#womens">
                    <NavDropdown title="WOMENS" id="basic-nav-dropdown">
                      <small className="text-danger">WOMENS</small>
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav.Link>
                  <Nav.Link href="#womens">
                    <NavDropdown title="WOMENS" id="basic-nav-dropdown">
                      <small className="text-danger">WOMENS</small>
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
};
