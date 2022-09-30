import React from "react";
import "./header.css";
import { BarsIcon } from "../../assets/Icon";
import CartIcon from "../../assets/CartIcon";
import { useDispatch } from "react-redux";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  NavItem,
  Row,
} from "react-bootstrap";
import { setShowSideMenu } from "../../pages/system-state/systemSlice";
import {
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const Header = () => {
  const dispatch = useDispatch();
  const handleShow = () => dispatch(setShowSideMenu(true));

  return (
    <header className="header fixed-mobile-header">
      <div className="header-info">
        <Container>
          <Row>
            {/* free shipping */}
            <Col md="4" className="text-center d-none d-md-block">
              <i className="fa fa-truck"></i>
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
            <Col md="4" className="text-center d-none d-md-block">
              <i className="fa fa-phone" />
              {"  "}
              <span>Call us +0123 456 789</span>
            </Col>
            <Col xs="12" className="text-center d-block d-md-none">
              <i className="fa fa-phone" />
              {"  "}
              <span> Need advice? Call us +0123 456 789</span>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="align-items-center top-header">
          <Col
            xs={{ size: 12, order: 1 }}
            sm={{ size: 12, order: 1 }}
            md={{ size: 3, order: 1 }}
            lg={{ size: 3, order: 1 }}
            className="pr-0"
          >
            <div className="brand">
              <i className="fa-solid fa-bars" onClick={handleShow}></i>
              <Navbar.Brand href="/" className="title">
                <span className="text-danger">F</span>
                <span className="text-danger">A</span>
                <span className="text-danger">S</span>
                <span className="text-danger">H</span>
                <span className="text-danger">I</span>
                <span className="text-danger">O</span>
                <span className="text-danger">N</span>
                <span className="text-danger">A</span>
              </Navbar.Brand>
            </div>
          </Col>
          <Col
            xs={{ size: 12, order: 4 }}
            sm={{ size: 12, order: 4 }}
            md={{ size: 12, order: 4 }}
            lg={{ size: 5, order: 2 }}
            className="pt-2 pt-lg-0"
          >
            <div className="">
              <Form className="">
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
          <Col
            xs={{ size: 12, order: 2 }}
            sm={{ size: 12, order: 2 }}
            md={{ size: 4, order: 1 }}
            lg={{ size: 5, order: 3 }}
            className="desktop-hidden"
          >
            <div className="header-links">
              <Button
                borderless
                variant="empty"
                ariaLabel="open the menu"
                icon={<BarsIcon />}
                onClick={() => console.log("open the menu")}
              />
              <CartIcon
                cartItems={2}
                onClick={() => console.log("open the cart")}
              />
            </div>
          </Col>
          <Col
            xs={{ size: 12, order: 2 }}
            sm={{ size: 12, order: 2 }}
            md={{ size: 9, order: 1 }}
            lg={{ size: 4, order: 3 }}
            // className='px-0'
          >
            <Navbar color="light" light expand="md" className="mt-1 mt-md-0">
              <CartIcon
                className="d-none d-md-block"
                cartItems={3}
                onClick={() => console.log("cart clicked")}
              />
              <Nav navbar>
                <Dropdown nav inNavbar>
                  <DropdownToggle nav>
                    Brands
                    <span className="fa fa-chevron-down dropdown-caret"></span>
                  </DropdownToggle>
                  <DropdownMenu right className="nav-brand-dropdown">
                    <div className="mini-brand"></div>
                  </DropdownMenu>
                </Dropdown>

                <NavItem>
                  <NavLink to="/shop" activeClassName="active">
                    Shop
                  </NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    Welcome
                    <span className="fa fa-chevron-down dropdown-caret"></span>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem onClick={() => console.log("login clicked")}>
                      Dashboard
                    </DropdownItem>
                    <DropdownItem onClick={() => console.log("login clicked")}>
                      Sign Out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    Welcome!
                    <span className="fa fa-chevron-down dropdown-caret"></span>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem onClick={() => console.log("login clicked")}>
                      Login
                    </DropdownItem>
                    <DropdownItem onClick={() => console.log("login clicked")}>
                      Sign Up
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};
