import React from "react";
import "./header.css";
import { useDispatch } from "react-redux";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { setShowSideMenu } from "../../pages/system-state/systemSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const handleShow = () => dispatch(setShowSideMenu(true));

  return (
    // header
    <header className="header fixed-mobile-header sticky">
      {/* ======== top info ========= */}
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

      {/* ========== navbar ========== */}
      <Navbar className="navbar" expand="lg">
        <div className="container">
          {/* <i class="material-icons menu-icon">menu</i> */}

          {/* LOGO */}
          <div className="logo">
            {/* <img
              alt=""
             src="images/logo.png" alt="logo" /> */}
            <div className="text title">
              <h1 className="site-title">
                <i
                  className="left-menu fa-solid fa-bars"
                  onClick={handleShow}
                ></i>
                <a href="/" title="Bishalmart" rel="home">
                  Bishalmart
                </a>
              </h1>
              <div className="site-description">Online Shopping</div>
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
            <a href="#account" className="item">
              <div className="group">
                <i className="fa-solid fa-user"></i>
                <div className="detail">
                  Account
                  <div className="sub">Sign In</div>
                </div>
              </div>
            </a>
            {/* RIGHT END CART */}
            <a href="/cart" className="item">
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

      {/* =========== category nav ========= */}
      <nav className="category">
        <div className="nav__elements">
          <ul className="nav__groups">
            {/* Clothing */}
            <li className="nav__group">
              <a href="#clothings" className="nav__group__link">
                MENS
              </a>
            </li>

            {/* Cosmetics */}
            <li className="nav__group">
              <a href="/" className="nav__group__link">
                WOMENS
              </a>
            </li>

            {/* Furnitures */}
            {/* <li className="nav__group">
              <a href="/" className="nav__group__link">
                Furnitures
              </a>
            </li> */}

            {/* Exercises/Fitness */}
            <li className="nav__group">
              <a href="/" className="nav__group__link">
                KIDS
              </a>
            </li>

            {/* Books */}
            <li className="nav__group">
              <a href="/" className="nav__group__link">
                COSMETICS
              </a>
            </li>

            {/* Pets */}
            {/* <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Pets
              </a>
            </li> */}

            {/* Offices */}
            {/* <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Office Supplies
              </a>
            </li> */}

            {/* Automotive */}
            {/* <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Automotive Accessories
              </a>
            </li> */}

            {/* Electronics */}
            {/* <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Electronics
              </a>
            </li> */}

            {/* Beverages */}
            {/* <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Beverages
              </a>
            </li> */}

            {/* Arts and Crafts */}
            {/* <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Arts & Crafts
              </a>
            </li> */}

            {/* Toys and Games */}
            <li className="nav__group">
              <a href="#product" className="nav__group__link">
                SALE
              </a>
            </li>

            {/* Medicines */}
            {/* <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Medicines
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};
