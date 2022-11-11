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
                <a href="index.html" title="Bishalmart" rel="home">
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
            <a href="#cart" className="item">
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
                Clothings
              </a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list" data-type="floor">
                    <li className="product-list__title title">Floor Covers</li>
                    <li className="product-list__link">
                      <a href="/">Area rugs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Door mats</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Hallway runners</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Fake grass</a>
                    </li>
                  </ul>
                  <ul className="product-list" data-type="wall">
                    <li className="product-list__title title">Wall Covers</li>
                    <li className="product-list__link">
                      <a href="/">Wall art</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">#basic quotes</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Nature wallpapers</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Memo boards</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Chalk boards</a>
                    </li>
                  </ul>
                  <ul className="product-list" data-type="window">
                    <li className="product-list__title title">Window Capes</li>
                    <li className="product-list__link">
                      <a href="/">Curtains</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Tapestries</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Hanging flowers</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Herb gardens</a>
                    </li>
                  </ul>
                  <ul className="product-list" data-type="cool">
                    <li className="product-list__title title">
                      It Just Looks Cool
                    </li>
                    <li className="product-list__link">
                      <a href="/">Teepees</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Faerie lights</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Easels</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Vintage bicycles</a>
                    </li>
                  </ul>
                  <ul className="article-list">
                    <li className="article-list__title title">
                      For Your Inspiration
                    </li>
                    <li className="article-list__link">
                      <a href="/">
                        Do the Eat, Pray, Love: Fake Grass For Your Office
                      </a>
                    </li>
                    <li className="article-list__link">
                      <a href="/">
                        Do You Really Work Better When You're Stepping On A
                        White, Fluffy Rug?
                      </a>
                    </li>
                    <li className="article-list__link">
                      <a href="/">
                        Yoga Mats: An Exercise Tool and An Office Rug? Win!
                      </a>
                    </li>
                  </ul>
                  <img
                    alt=""
                    className="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-floor.jpg"
                    data-match="floor"
                  />
                  <img
                    alt=""
                    className="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-wall.jpg"
                    data-match="wall"
                  />
                  <img
                    alt=""
                    className="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-window.jpg"
                    data-match="window"
                  />
                  <img
                    alt=""
                    className="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-cool.jpg"
                    data-match="cool"
                  />
                </div>
              </ul>
            </li>

            {/* Cosmetics */}
            <li className="nav__group">
              <a href="/" className="nav__group__link">
                Cosmetics
              </a>
            </li>

            {/* Furnitures */}
            <li className="nav__group">
              <a href="/" className="nav__group__link">
                Furnitures
              </a>
            </li>

            {/* Exercises/Fitness */}
            <li className="nav__group">
              <a href="/" className="nav__group__link">
                Fitness Health
              </a>
            </li>

            {/* Books */}
            <li className="nav__group">
              <a href="/" className="nav__group__link">
                Books Library
              </a>
            </li>

            {/* Pets */}
            <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Pets
              </a>
            </li>

            {/* Offices */}
            <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Office Supplies
              </a>
            </li>

            {/* Automotive */}
            <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Automotive Accessories
              </a>
            </li>

            {/* Electronics */}
            <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Electronics
              </a>
            </li>

            {/* Beverages */}
            <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Beverages
              </a>
            </li>

            {/* Arts and Crafts */}
            <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Arts & Crafts
              </a>
            </li>

            {/* Toys and Games */}
            <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Toys & Games
              </a>
            </li>

            {/* Medicines */}
            <li className="nav__group">
              <a href="#product" className="nav__group__link">
                Medicines
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
