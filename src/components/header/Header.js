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
    <header className="header fixed-mobile-header">
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
            <i className="left-menu fa-solid fa-bars" onClick={handleShow}></i>
            {/* <img
              alt=""
             src="images/logo.png" alt="logo" /> */}
            <div className="text title">
              <a href="/">
                <span className="">s</span>
                <span className="">h</span>
                <span className="">o</span>
                <span className="">p</span>
                <span className="">B</span>
                <span className="">A</span>
                <span className="">B</span>
                <span className="">B</span>
                <span className="">A</span>
                <span className="">L</span>
              </a>
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
            <a href="/" className="item">
              <div className="group">
                <i className="fa-solid fa-user"></i>
                <div className="detail">
                  Account
                  <div className="sub">Sign In</div>
                </div>
              </div>
            </a>
            {/* RIGHT END CART */}
            <a href="/" className="item">
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
              <a href="/" className="nav__group__link">
                Clothings
              </a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list multi" data-type="table">
                    <li className="product-list__title title">To Work On</li>
                    <li className="product-list__link">
                      <a href="/">Writing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Hipster desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Corner desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Floating desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Executive desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Gaming desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Console tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Standing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Laptop stands</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Accent tables</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="chair">
                    <li className="product-list__title title">To Sit On</li>
                    <li className="product-list__link">
                      <a href="/">Ergonomic chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Swivel chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Armchairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Kneeling chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Chaise lounges</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Fabric sofas</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Sofa beds</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bouncing balls</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Beanbags</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="support">
                    <li className="product-list__title title">
                      Physical (& Emotional) Support
                    </li>
                    <li className="product-list__link">
                      <a href="/">Footstools</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Ottomans</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Coffee tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Shelving Units</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bookcases</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Pool tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Mini bars</a>
                    </li>
                  </ul>
                  <div className="article-list">
                    <ul>
                      <li className="article-list__title title">
                        For Your Inspiration
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          Are You Really A Millenial If You't Shop At Ikea?
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          The Latest Trend: Purchasing Tables from Hipster Cafes
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          15 Uncomfortable but Instagram-Worthy Chairs For Your
                          Home Office
                        </a>
                      </li>
                    </ul>
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-table.jpg"
                      data-match="table"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-chair.jpg"
                      data-match="chair"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-support.jpg"
                      data-match="support"
                    />
                  </div>
                </div>
              </ul>
            </li>

            {/* Cosmetics */}
            <li className="nav__group">
              <a href="/" className="nav__group__link">
                Cosmetics
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

            {/* Furnitures */}
            <li className="nav__group">
              <a href="/" className="nav__group__link">
                Furnitures
              </a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list" data-type="plant">
                    <li className="product-list__title title">Plants</li>
                    <li className="product-list__link">
                      <a href="/">Succulents</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Large plants</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Lucky charm plants</a>
                    </li>
                    <li class="product-list__link">
                      <a href="/">Solar-powered plants</a>
                    </li>
                    <li class="product-list__link">
                      <a href="/">Crochet succulents</a>
                    </li>
                  </ul>
                  <ul class="product-list" data-type="buddy">
                    <li class="product-list__title title">Buddies</li>
                    <li class="product-list__link">
                      <a href="/">Giant plush toys</a>
                    </li>
                    <li class="product-list__link">
                      <a href="/">Celebrity cutouts</a>
                    </li>
                    <li class="product-list__link">
                      <a href="/">Mirrors</a>
                    </li>
                  </ul>
                  <ul class="product-list" data-type="items">
                    <li class="product-list__title title">For The Table</li>
                    <li class="product-list__link">
                      <a href="/">Origami</a>
                    </li>
                    <li class="product-list__link">
                      <a href="/">Figurines</a>
                    </li>
                    <li class="product-list__link">
                      <a href="/">Candles</a>
                    </li>
                    <li class="product-list__link">
                      <a href="/">Pixar lamps</a>
                    </li>
                  </ul>
                  <ul class="product-list" data-type="pets">
                    <li class="product-list__title title">For The Pets</li>
                    <li class="product-list__link">
                      <a href="/">Pet beds</a>
                    </li>
                    <li class="product-list__link">
                      <a href="/">Pet houses</a>
                    </li>
                    <li class="product-list__link">
                      <a href="/">Cat trees & condos</a>
                    </li>
                    <li class="product-list__link">
                      <a href="/">Bunny hutches</a>
                    </li>
                  </ul>
                  <ul class="article-list">
                    <li class="article-list__title title">
                      For Your Inspiration
                    </li>
                    <li class="article-list__link">
                      <a href="/">
                        Why Pets Make The Best Colleagues Ever! (They Don't
                        Talk, That's Why)
                      </a>
                    </li>
                    <li class="article-list__link">
                      <a href="/">
                        Your Succulent Plants Die Too Easily? Try Crochet Plants
                        Instead
                      </a>
                    </li>
                    <li class="article-list__link">
                      <a href="/">
                        [Quiz] Which Eeveevolution Is Your Work Soulmate?
                      </a>
                    </li>
                  </ul>
                  <img
                    alt=""
                    class="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-plant.jpg"
                    data-match="plant"
                  />
                  <img
                    alt=""
                    class="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-buddy.jpg"
                    data-match="buddy"
                  />
                  <img
                    alt=""
                    class="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-items.jpg"
                    data-match="items"
                  />
                  <img
                    alt=""
                    class="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-pets.jpg"
                    data-match="pets"
                  />
                </div>
              </ul>
            </li>

            {/* Exercises/Fitness */}
            <li className="nav__group">
              <a href="/" className="nav__group__link">
                Fitness Health
              </a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list multi" data-type="table">
                    <li className="product-list__title title">To Work On</li>
                    <li className="product-list__link">
                      <a href="/">Writing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Hipster desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Corner desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Floating desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Executive desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Gaming desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Console tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Standing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Laptop stands</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Accent tables</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="chair">
                    <li className="product-list__title title">To Sit On</li>
                    <li className="product-list__link">
                      <a href="/">Ergonomic chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Swivel chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Armchairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Kneeling chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Chaise lounges</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Fabric sofas</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Sofa beds</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bouncing balls</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Beanbags</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="support">
                    <li className="product-list__title title">
                      Physical (& Emotional) Support
                    </li>
                    <li className="product-list__link">
                      <a href="/">Footstools</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Ottomans</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Coffee tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Shelving Units</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bookcases</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Pool tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Mini bars</a>
                    </li>
                  </ul>
                  <div className="article-list">
                    <ul>
                      <li className="article-list__title title">
                        For Your Inspiration
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          Are You Really A Millenial If You't Shop At Ikea?
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          The Latest Trend: Purchasing Tables from Hipster Cafes
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          15 Uncomfortable but Instagram-Worthy Chairs For Your
                          Home Office
                        </a>
                      </li>
                    </ul>
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-table.jpg"
                      data-match="table"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-chair.jpg"
                      data-match="chair"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-support.jpg"
                      data-match="support"
                    />
                  </div>
                </div>
              </ul>
            </li>

            {/* Books */}
            <li className="nav__group">
              <a href="/" className="nav__group__link">
                Books Library
              </a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list multi" data-type="table">
                    <li className="product-list__title title">To Work On</li>
                    <li className="product-list__link">
                      <a href="/">Writing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Hipster desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Corner desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Floating desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Executive desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Gaming desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Console tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Standing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Laptop stands</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Accent tables</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="chair">
                    <li className="product-list__title title">To Sit On</li>
                    <li className="product-list__link">
                      <a href="/">Ergonomic chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Swivel chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Armchairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Kneeling chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Chaise lounges</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Fabric sofas</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Sofa beds</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bouncing balls</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Beanbags</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="support">
                    <li className="product-list__title title">
                      Physical (& Emotional) Support
                    </li>
                    <li className="product-list__link">
                      <a href="/">Footstools</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Ottomans</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Coffee tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Shelving Units</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bookcases</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Pool tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Mini bars</a>
                    </li>
                  </ul>
                  <div className="article-list">
                    <ul>
                      <li className="article-list__title title">
                        For Your Inspiration
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          Are You Really A Millenial If You't Shop At Ikea?
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          The Latest Trend: Purchasing Tables from Hipster Cafes
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          15 Uncomfortable but Instagram-Worthy Chairs For Your
                          Home Office
                        </a>
                      </li>
                    </ul>
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-table.jpg"
                      data-match="table"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-chair.jpg"
                      data-match="chair"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-support.jpg"
                      data-match="support"
                    />
                  </div>
                </div>
              </ul>
            </li>

            {/* Pets */}
            <li className="nav__group">
              <a className="nav__group__link">Pets</a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list multi" data-type="table">
                    <li className="product-list__title title">To Work On</li>
                    <li className="product-list__link">
                      <a href="/">Writing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Hipster desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Corner desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Floating desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Executive desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Gaming desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Console tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Standing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Laptop stands</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Accent tables</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="chair">
                    <li className="product-list__title title">To Sit On</li>
                    <li className="product-list__link">
                      <a href="/">Ergonomic chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Swivel chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Armchairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Kneeling chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Chaise lounges</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Fabric sofas</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Sofa beds</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bouncing balls</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Beanbags</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="support">
                    <li className="product-list__title title">
                      Physical (& Emotional) Support
                    </li>
                    <li className="product-list__link">
                      <a href="/">Footstools</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Ottomans</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Coffee tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Shelving Units</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bookcases</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Pool tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Mini bars</a>
                    </li>
                  </ul>
                  <div className="article-list">
                    <ul>
                      <li className="article-list__title title">
                        For Your Inspiration
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          Are You Really A Millenial If You't Shop At Ikea?
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          The Latest Trend: Purchasing Tables from Hipster Cafes
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          15 Uncomfortable but Instagram-Worthy Chairs For Your
                          Home Office
                        </a>
                      </li>
                    </ul>
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-table.jpg"
                      data-match="table"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-chair.jpg"
                      data-match="chair"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-support.jpg"
                      data-match="support"
                    />
                  </div>
                </div>
              </ul>
            </li>

            {/* Offices */}
            <li className="nav__group">
              <a className="nav__group__link">Office Supplies</a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list multi" data-type="table">
                    <li className="product-list__title title">To Work On</li>
                    <li className="product-list__link">
                      <a href="/">Writing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Hipster desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Corner desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Floating desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Executive desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Gaming desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Console tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Standing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Laptop stands</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Accent tables</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="chair">
                    <li className="product-list__title title">To Sit On</li>
                    <li className="product-list__link">
                      <a href="/">Ergonomic chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Swivel chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Armchairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Kneeling chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Chaise lounges</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Fabric sofas</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Sofa beds</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bouncing balls</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Beanbags</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="support">
                    <li className="product-list__title title">
                      Physical (& Emotional) Support
                    </li>
                    <li className="product-list__link">
                      <a href="/">Footstools</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Ottomans</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Coffee tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Shelving Units</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bookcases</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Pool tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Mini bars</a>
                    </li>
                  </ul>
                  <div className="article-list">
                    <ul>
                      <li className="article-list__title title">
                        For Your Inspiration
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          Are You Really A Millenial If You't Shop At Ikea?
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          The Latest Trend: Purchasing Tables from Hipster Cafes
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          15 Uncomfortable but Instagram-Worthy Chairs For Your
                          Home Office
                        </a>
                      </li>
                    </ul>
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-table.jpg"
                      data-match="table"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-chair.jpg"
                      data-match="chair"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-support.jpg"
                      data-match="support"
                    />
                  </div>
                </div>
              </ul>
            </li>

            {/* Automotive */}
            <li className="nav__group">
              <a className="nav__group__link">Automotive Accessories</a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list multi" data-type="table">
                    <li className="product-list__title title">To Work On</li>
                    <li className="product-list__link">
                      <a href="/">Writing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Hipster desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Corner desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Floating desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Executive desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Gaming desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Console tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Standing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Laptop stands</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Accent tables</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="chair">
                    <li className="product-list__title title">To Sit On</li>
                    <li className="product-list__link">
                      <a href="/">Ergonomic chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Swivel chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Armchairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Kneeling chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Chaise lounges</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Fabric sofas</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Sofa beds</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bouncing balls</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Beanbags</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="support">
                    <li className="product-list__title title">
                      Physical (& Emotional) Support
                    </li>
                    <li className="product-list__link">
                      <a href="/">Footstools</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Ottomans</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Coffee tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Shelving Units</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bookcases</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Pool tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Mini bars</a>
                    </li>
                  </ul>
                  <div className="article-list">
                    <ul>
                      <li className="article-list__title title">
                        For Your Inspiration
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          Are You Really A Millenial If You't Shop At Ikea?
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          The Latest Trend: Purchasing Tables from Hipster Cafes
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          15 Uncomfortable but Instagram-Worthy Chairs For Your
                          Home Office
                        </a>
                      </li>
                    </ul>
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-table.jpg"
                      data-match="table"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-chair.jpg"
                      data-match="chair"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-support.jpg"
                      data-match="support"
                    />
                  </div>
                </div>
              </ul>
            </li>

            {/* Electronics */}
            <li className="nav__group">
              <a className="nav__group__link">Electronics</a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list multi" data-type="table">
                    <li className="product-list__title title">To Work On</li>
                    <li className="product-list__link">
                      <a href="/">Writing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Hipster desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Corner desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Floating desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Executive desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Gaming desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Console tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Standing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Laptop stands</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Accent tables</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="chair">
                    <li className="product-list__title title">To Sit On</li>
                    <li className="product-list__link">
                      <a href="/">Ergonomic chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Swivel chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Armchairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Kneeling chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Chaise lounges</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Fabric sofas</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Sofa beds</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bouncing balls</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Beanbags</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="support">
                    <li className="product-list__title title">
                      Physical (& Emotional) Support
                    </li>
                    <li className="product-list__link">
                      <a href="/">Footstools</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Ottomans</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Coffee tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Shelving Units</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bookcases</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Pool tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Mini bars</a>
                    </li>
                  </ul>
                  <div className="article-list">
                    <ul>
                      <li className="article-list__title title">
                        For Your Inspiration
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          Are You Really A Millenial If You't Shop At Ikea?
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          The Latest Trend: Purchasing Tables from Hipster Cafes
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          15 Uncomfortable but Instagram-Worthy Chairs For Your
                          Home Office
                        </a>
                      </li>
                    </ul>
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-table.jpg"
                      data-match="table"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-chair.jpg"
                      data-match="chair"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-support.jpg"
                      data-match="support"
                    />
                  </div>
                </div>
              </ul>
            </li>

            {/* Beverages */}
            <li className="nav__group">
              <a className="nav__group__link">Beverages</a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list multi" data-type="table">
                    <li className="product-list__title title">To Work On</li>
                    <li className="product-list__link">
                      <a href="/">Writing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Hipster desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Corner desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Floating desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Executive desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Gaming desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Console tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Standing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Laptop stands</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Accent tables</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="chair">
                    <li className="product-list__title title">To Sit On</li>
                    <li className="product-list__link">
                      <a href="/">Ergonomic chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Swivel chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Armchairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Kneeling chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Chaise lounges</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Fabric sofas</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Sofa beds</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bouncing balls</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Beanbags</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="support">
                    <li className="product-list__title title">
                      Physical (& Emotional) Support
                    </li>
                    <li className="product-list__link">
                      <a href="/">Footstools</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Ottomans</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Coffee tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Shelving Units</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bookcases</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Pool tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Mini bars</a>
                    </li>
                  </ul>
                  <div className="article-list">
                    <ul>
                      <li className="article-list__title title">
                        For Your Inspiration
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          Are You Really A Millenial If You't Shop At Ikea?
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          The Latest Trend: Purchasing Tables from Hipster Cafes
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          15 Uncomfortable but Instagram-Worthy Chairs For Your
                          Home Office
                        </a>
                      </li>
                    </ul>
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-table.jpg"
                      data-match="table"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-chair.jpg"
                      data-match="chair"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-support.jpg"
                      data-match="support"
                    />
                  </div>
                </div>
              </ul>
            </li>

            {/* Arts and Crafts */}
            <li className="nav__group">
              <a className="nav__group__link">Arts & Crafts</a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list multi" data-type="table">
                    <li className="product-list__title title">To Work On</li>
                    <li className="product-list__link">
                      <a href="/">Writing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Hipster desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Corner desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Floating desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Executive desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Gaming desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Console tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Standing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Laptop stands</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Accent tables</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="chair">
                    <li className="product-list__title title">To Sit On</li>
                    <li className="product-list__link">
                      <a href="/">Ergonomic chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Swivel chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Armchairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Kneeling chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Chaise lounges</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Fabric sofas</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Sofa beds</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bouncing balls</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Beanbags</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="support">
                    <li className="product-list__title title">
                      Physical (& Emotional) Support
                    </li>
                    <li className="product-list__link">
                      <a href="/">Footstools</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Ottomans</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Coffee tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Shelving Units</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bookcases</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Pool tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Mini bars</a>
                    </li>
                  </ul>
                  <div className="article-list">
                    <ul>
                      <li className="article-list__title title">
                        For Your Inspiration
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          Are You Really A Millenial If You't Shop At Ikea?
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          The Latest Trend: Purchasing Tables from Hipster Cafes
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          15 Uncomfortable but Instagram-Worthy Chairs For Your
                          Home Office
                        </a>
                      </li>
                    </ul>
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-table.jpg"
                      data-match="table"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-chair.jpg"
                      data-match="chair"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-support.jpg"
                      data-match="support"
                    />
                  </div>
                </div>
              </ul>
            </li>

            {/* Toys and Games */}
            <li className="nav__group">
              <a className="nav__group__link">Toys & Games</a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list multi" data-type="table">
                    <li className="product-list__title title">To Work On</li>
                    <li className="product-list__link">
                      <a href="/">Writing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Hipster desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Corner desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Floating desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Executive desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Gaming desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Console tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Standing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Laptop stands</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Accent tables</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="chair">
                    <li className="product-list__title title">To Sit On</li>
                    <li className="product-list__link">
                      <a href="/">Ergonomic chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Swivel chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Armchairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Kneeling chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Chaise lounges</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Fabric sofas</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Sofa beds</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bouncing balls</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Beanbags</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="support">
                    <li className="product-list__title title">
                      Physical (& Emotional) Support
                    </li>
                    <li className="product-list__link">
                      <a href="/">Footstools</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Ottomans</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Coffee tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Shelving Units</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bookcases</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Pool tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Mini bars</a>
                    </li>
                  </ul>
                  <div className="article-list">
                    <ul>
                      <li className="article-list__title title">
                        For Your Inspiration
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          Are You Really A Millenial If You't Shop At Ikea?
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          The Latest Trend: Purchasing Tables from Hipster Cafes
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          15 Uncomfortable but Instagram-Worthy Chairs For Your
                          Home Office
                        </a>
                      </li>
                    </ul>
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-table.jpg"
                      data-match="table"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-chair.jpg"
                      data-match="chair"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-support.jpg"
                      data-match="support"
                    />
                  </div>
                </div>
              </ul>
            </li>

            {/* Medicines */}
            <li className="nav__group">
              <a className="nav__group__link">Medicines</a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list multi" data-type="table">
                    <li className="product-list__title title">To Work On</li>
                    <li className="product-list__link">
                      <a href="/">Writing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Hipster desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Corner desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Floating desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Executive desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Gaming desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Console tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Standing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Laptop stands</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Accent tables</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="chair">
                    <li className="product-list__title title">To Sit On</li>
                    <li className="product-list__link">
                      <a href="/">Ergonomic chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Swivel chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Armchairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Kneeling chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Chaise lounges</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Fabric sofas</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Sofa beds</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bouncing balls</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Beanbags</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="support">
                    <li className="product-list__title title">
                      Physical (& Emotional) Support
                    </li>
                    <li className="product-list__link">
                      <a href="/">Footstools</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Ottomans</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Coffee tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Shelving Units</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Bookcases</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Pool tables</a>
                    </li>
                    <li className="product-list__link">
                      <a href="/">Mini bars</a>
                    </li>
                  </ul>
                  <div className="article-list">
                    <ul>
                      <li className="article-list__title title">
                        For Your Inspiration
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          Are You Really A Millenial If You't Shop At Ikea?
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          The Latest Trend: Purchasing Tables from Hipster Cafes
                        </a>
                      </li>
                      <li className="article-list__link">
                        <a href="/">
                          15 Uncomfortable but Instagram-Worthy Chairs For Your
                          Home Office
                        </a>
                      </li>
                    </ul>
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-table.jpg"
                      data-match="table"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-chair.jpg"
                      data-match="chair"
                    />
                    <img
                      alt=""
                      className="product-image"
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-support.jpg"
                      data-match="support"
                    />
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
