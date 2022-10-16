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
            {/* <img src="images/logo.png" alt="logo" /> */}
            <div className="text title">
              <a href="/">
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
            <a href="" className="item">
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
      {/* =========== category nav ========= */}
      <nav className="category hidden-xs hidden-sm">
        <div className="nav__elements">
          <ul className="nav__groups">
            <li className="nav__group">
              <a className="nav__group__link">Furniture</a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list multi" data-type="table">
                    <li className="product-list__title title">To Work On</li>
                    <li className="product-list__link">
                      <a>Writing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a>Hipster desks</a>
                    </li>
                    <li className="product-list__link">
                      <a>Corner desks</a>
                    </li>
                    <li className="product-list__link">
                      <a>Floating desks</a>
                    </li>
                    <li className="product-list__link">
                      <a>Executive desks</a>
                    </li>
                    <li className="product-list__link">
                      <a>Gaming desks</a>
                    </li>
                    <li className="product-list__link">
                      <a>Console tables</a>
                    </li>
                    <li className="product-list__link">
                      <a>Standing desks</a>
                    </li>
                    <li className="product-list__link">
                      <a>Laptop stands</a>
                    </li>
                    <li className="product-list__link">
                      <a>Accent tables</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="chair">
                    <li className="product-list__title title">To Sit On</li>
                    <li className="product-list__link">
                      <a>Ergonomic chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a>Swivel chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a>Armchairs</a>
                    </li>
                    <li className="product-list__link">
                      <a>Kneeling chairs</a>
                    </li>
                    <li className="product-list__link">
                      <a>Chaise lounges</a>
                    </li>
                    <li className="product-list__link">
                      <a>Fabric sofas</a>
                    </li>
                    <li className="product-list__link">
                      <a>Sofa beds</a>
                    </li>
                    <li className="product-list__link">
                      <a>Bouncing balls</a>
                    </li>
                    <li className="product-list__link">
                      <a>Beanbags</a>
                    </li>
                  </ul>
                  <ul className="product-list multi" data-type="support">
                    <li className="product-list__title title">
                      Physical (& Emotional) Support
                    </li>
                    <li className="product-list__link">
                      <a>Footstools</a>
                    </li>
                    <li className="product-list__link">
                      <a>Ottomans</a>
                    </li>
                    <li className="product-list__link">
                      <a>Coffee tables</a>
                    </li>
                    <li className="product-list__link">
                      <a>Shelving Units</a>
                    </li>
                    <li className="product-list__link">
                      <a>Bookcases</a>
                    </li>
                    <li className="product-list__link">
                      <a>Pool tables</a>
                    </li>
                    <li className="product-list__link">
                      <a>Mini bars</a>
                    </li>
                  </ul>
                  <ul className="article-list">
                    <li className="article-list__title title">
                      For Your Inspiration
                    </li>
                    <li className="article-list__link">
                      <a>Are You Really A Millenial If You't Shop At Ikea?</a>
                    </li>
                    <li className="article-list__link">
                      <a>
                        The Latest Trend: Purchasing Tables from Hipster Cafes
                      </a>
                    </li>
                    <li className="article-list__link">
                      <a>
                        15 Uncomfortable but Instagram-Worthy Chairs For Your
                        Home Office
                      </a>
                    </li>
                  </ul>
                  <img
                    className="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-table.jpg"
                    data-match="table"
                  />
                  <img
                    className="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-chair.jpg"
                    data-match="chair"
                  />
                  <img
                    className="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-support.jpg"
                    data-match="support"
                  />
                </div>
              </ul>
            </li>
            <li className="nav__group">
              <a className="nav__group__link">Deco</a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list" data-type="floor">
                    <li className="product-list__title title">Floor Covers</li>
                    <li className="product-list__link">
                      <a>Area rugs</a>
                    </li>
                    <li className="product-list__link">
                      <a>Door mats</a>
                    </li>
                    <li className="product-list__link">
                      <a>Hallway runners</a>
                    </li>
                    <li className="product-list__link">
                      <a>Fake grass</a>
                    </li>
                  </ul>
                  <ul className="product-list" data-type="wall">
                    <li className="product-list__title title">Wall Covers</li>
                    <li className="product-list__link">
                      <a>Wall art</a>
                    </li>
                    <li className="product-list__link">
                      <a>#basic quotes</a>
                    </li>
                    <li className="product-list__link">
                      <a>Nature wallpapers</a>
                    </li>
                    <li className="product-list__link">
                      <a>Memo boards</a>
                    </li>
                    <li className="product-list__link">
                      <a>Chalk boards</a>
                    </li>
                  </ul>
                  <ul className="product-list" data-type="window">
                    <li className="product-list__title title">Window Capes</li>
                    <li className="product-list__link">
                      <a>Curtains</a>
                    </li>
                    <li className="product-list__link">
                      <a>Tapestries</a>
                    </li>
                    <li className="product-list__link">
                      <a>Hanging flowers</a>
                    </li>
                    <li className="product-list__link">
                      <a>Herb gardens</a>
                    </li>
                  </ul>
                  <ul className="product-list" data-type="cool">
                    <li className="product-list__title title">
                      It Just Looks Cool
                    </li>
                    <li className="product-list__link">
                      <a>Teepees</a>
                    </li>
                    <li className="product-list__link">
                      <a>Faerie lights</a>
                    </li>
                    <li className="product-list__link">
                      <a>Easels</a>
                    </li>
                    <li className="product-list__link">
                      <a>Vintage bicycles</a>
                    </li>
                  </ul>
                  <ul className="article-list">
                    <li className="article-list__title title">
                      For Your Inspiration
                    </li>
                    <li className="article-list__link">
                      <a>Do the Eat, Pray, Love: Fake Grass For Your Office</a>
                    </li>
                    <li className="article-list__link">
                      <a>
                        Do You Really Work Better When You're Stepping On A
                        White, Fluffy Rug?
                      </a>
                    </li>
                    <li className="article-list__link">
                      <a>Yoga Mats: An Exercise Tool and An Office Rug? Win!</a>
                    </li>
                  </ul>
                  <img
                    className="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-floor.jpg"
                    data-match="floor"
                  />
                  <img
                    className="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-wall.jpg"
                    data-match="wall"
                  />
                  <img
                    className="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-window.jpg"
                    data-match="window"
                  />
                  <img
                    className="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-cool.jpg"
                    data-match="cool"
                  />
                </div>
              </ul>
            </li>
            <li className="nav__group">
              <a className="nav__group__link">Work Friends</a>
              <ul className="nav__group__dropdown">
                <div className="multi-column">
                  <ul className="product-list" data-type="plant">
                    <li className="product-list__title title">Plants</li>
                    <li className="product-list__link">
                      <a>Succulents</a>
                    </li>
                    <li className="product-list__link">
                      <a>Large plants</a>
                    </li>
                    <li className="product-list__link">
                      <a>Lucky charm plants</a>
                    </li>
                    <li class="product-list__link">
                      <a>Solar-powered plants</a>
                    </li>
                    <li class="product-list__link">
                      <a>Crochet succulents</a>
                    </li>
                  </ul>
                  <ul class="product-list" data-type="buddy">
                    <li class="product-list__title title">Buddies</li>
                    <li class="product-list__link">
                      <a>Giant plush toys</a>
                    </li>
                    <li class="product-list__link">
                      <a>Celebrity cutouts</a>
                    </li>
                    <li class="product-list__link">
                      <a>Mirrors</a>
                    </li>
                  </ul>
                  <ul class="product-list" data-type="items">
                    <li class="product-list__title title">For The Table</li>
                    <li class="product-list__link">
                      <a>Origami</a>
                    </li>
                    <li class="product-list__link">
                      <a>Figurines</a>
                    </li>
                    <li class="product-list__link">
                      <a>Candles</a>
                    </li>
                    <li class="product-list__link">
                      <a>Pixar lamps</a>
                    </li>
                  </ul>
                  <ul class="product-list" data-type="pets">
                    <li class="product-list__title title">For The Pets</li>
                    <li class="product-list__link">
                      <a>Pet beds</a>
                    </li>
                    <li class="product-list__link">
                      <a>Pet houses</a>
                    </li>
                    <li class="product-list__link">
                      <a>Cat trees & condos</a>
                    </li>
                    <li class="product-list__link">
                      <a>Bunny hutches</a>
                    </li>
                  </ul>
                  <ul class="article-list">
                    <li class="article-list__title title">
                      For Your Inspiration
                    </li>
                    <li class="article-list__link">
                      <a>
                        Why Pets Make The Best Colleagues Ever! (They Don't
                        Talk, That's Why)
                      </a>
                    </li>
                    <li class="article-list__link">
                      <a>
                        Your Succulent Plants Die Too Easily? Try Crochet Plants
                        Instead
                      </a>
                    </li>
                    <li class="article-list__link">
                      <a>[Quiz] Which Eeveevolution Is Your Work Soulmate?</a>
                    </li>
                  </ul>
                  <img
                    class="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-plant.jpg"
                    data-match="plant"
                  />
                  <img
                    class="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-buddy.jpg"
                    data-match="buddy"
                  />
                  <img
                    class="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-items.jpg"
                    data-match="items"
                  />
                  <img
                    class="product-image"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/nav-pets.jpg"
                    data-match="pets"
                  />
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
