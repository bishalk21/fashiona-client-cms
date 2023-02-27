import React from "react";
import { Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setShowSideMenu } from "../../utils/system-state/systemSlice";

const MainNavbar = () => {
  const dispatch = useDispatch();
  const handleOnSearch = (e) => {};
  const handleShow = () => dispatch(setShowSideMenu(true));

  return (
    <>
      {/* ========== navbar ========== */}
      <Navbar className="navbar" expand="lg">
        <div className="container d-flex justify-content-between">
          {/* LOGO */}
          <div className="logo">
            {/* <img
              alt=""
             src="images/logo.png" alt="logo" /> */}
            <div className="text title">
              <h1 className="site-title">
                <i
                  className="left-menu bars-icon fa-solid fa-bars"
                  onClick={handleShow}
                ></i>
                <a href="/" title="Bishalmart" rel="home">
                  Fewa-Store
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
            <div className="item right" tabIndex="0">
              <div className="search-group">
                <select>
                  <option value="all">All</option>
                  <option value="all">MENS</option>
                  <option value="all">WOMENS</option>
                  <option value="all">KIDS</option>
                  <option value="all">SEASONAL</option>
                </select>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={handleOnSearch}
                />
                {/* search icon */}
                <i class="fa-solid fa-magnifying-glass search-icon"></i>
              </div>
            </div>

            <div className="d-flex">
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

              {/* RIGHT FAVORITES */}
              <a href="/myfavourites" className="item">
                <div className="group">
                  <i class="fa-solid fa-heart"></i>
                  <div className="detail">
                    My Favourites
                    <div className="sub">0 items</div>
                  </div>
                </div>
              </a>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default MainNavbar;
