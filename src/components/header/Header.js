import React from "react";
import "./header.css";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { BarsIcon } from "../../assets/Icon";
import CartIcon from "../../assets/CartIcon";
import { useDispatch } from "react-redux";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavItem,
  Row,
} from "react-bootstrap";
import { setShowSideMenu } from "../../pages/system-state/systemSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const handleShow = () => dispatch(setShowSideMenu(true));

  return (
    // header
    <header className="header fixed-mobile-header">
      <div className="header-info">
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

      {/* navbar */}
      <Navbar className="navbar" expand="lg">
        <div className="container">
          {/* <i class="material-icons menu-icon">menu</i> */}

          {/* LOGO */}
          <div className="logo ">
            <i className="fa-solid fa-bars" onClick={handleShow}></i>
            {/* <img src="images/logo.png" alt="logo" /> */}
            <div className="text title">
              <span className="">E</span>
              <span className="">V</span>
              <span className="">E</span>
              <span className="">R</span>
              <span className="">E</span>
              <span className="">S</span>
              <span className="">T</span>
              <span className="">.</span>
              <span className="">s</span>
              <span className="">h</span>
              <span className="">o</span>
              <span className="">p</span>
            </div>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i class="fa-solid fa-bars-staggered"></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            {/* SEARCH MID */}
            <div className="item search right" tabIndex="0">
              <div className="search-group">
                <select>
                  <option value="all">All</option>
                  <option value="all">MENS</option>
                  <option value="all">WOMENS</option>
                  <option value="all">KIDS</option>
                  <option value="all">SEASONAL</option>
                </select>
                <input type="text" placeholder="Search" />
                {/* search icon */}
                <i className="fa-solid fa-search"></i>
              </div>
            </div>

            {/* RIGHT END Account */}
            <a href="#" className="item">
              <div className="group">
                <i className="fa-solid fa-user"></i>
                <div className="detail">
                  Account
                  <div className="sub">Sign In</div>
                </div>
              </div>
            </a>
            {/* RIGHT END CART */}
            <a href="#" className="item">
              <div className="group">
                <i className="fa-solid fa-shopping-cart"></i>
                <div className="detail">
                  Cart
                  <div className="sub">0 items</div>
                </div>
              </div>
            </a>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
};
