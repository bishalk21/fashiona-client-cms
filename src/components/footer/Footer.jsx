import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      {/* <!-- FOOTER --> */}

      <footer className="page-footer container-fluid col-sm-12">
        <hr />
        <div className="container">
          <div className="col-sm-4">
            <h4>Help</h4>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Payments</a>
              </li>

              <li>
                <a href="">Shipping</a>
              </li>

              <li>
                <a href="">Cancellations & Return</a>
              </li>

              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-4">
            <h4>Lifestyle Store</h4>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Contact Us</a>
              </li>

              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Stories</a>
              </li>
              <li>
                <a href="">Sell With Us</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-4">
            <h4>MISC</h4>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="">Online Shopping</a>
              </li>
              <li>
                <a href="">Gift Card</a>
              </li>
              <li>
                <a href=""></a>
              </li>
              Sitemap
            </ul>
          </div>
        </div>

        <div className="container-fluid col-lg-10 col-lg-offset-1">
          <div className="row">
            <hr />
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-map-marker"></span>
              <h3 className="text-center">&nbsp;TRACK YOUR ORDER</h3>
            </div>

            <div className="col-sm-4">
              <span className="glyphicon glyphicon-refresh"></span>
              <h3 className="text-center">&nbsp;&nbsp;FREE & EASY RETURNS</h3>
            </div>

            <div className="col-sm-4">
              <span className="glyphicon glyphicon-remove-circle"></span>
              <h3 className="text-center">ONLINE CANCELLATIONS</h3>
            </div>
          </div>
        </div>
        <br />
        {/* <!--/div> */}

        <div
          className="container-fluid"
          style={{ position: "relative", top: "6em", marginBottom: "20px" }}
        >
          <div className="col-sm-5">
            <h5 style={{ fontSize: "0.95em" }}>
              Policies:{" "}
              <a href="" style={{ textDecoration: "none" }}>
                {" "}
                Return Policy{" "}
              </a>
              |
              <a href="" style={{ textDecoration: "none" }}>
                {" "}
                Terms of use{" "}
              </a>
              |
              <a href="" style={{ textDecoration: "none" }}>
                {" "}
                Security{" "}
              </a>
              |
              <a href="" style={{ textDecoration: "none" }}>
                {" "}
                Privacy{" "}
              </a>
              |
              <a href="" style={{ textDecoration: "none" }}>
                {" "}
                Infringement
              </a>
            </h5>
          </div>

          <div className="col-sm-3">
            <h5 style={{ fontSize: "0.95em" }}>
              {" "}
              &copy; {new Date().getFullYear()} EVEREST.shop - All rights
              reserved
            </h5>
          </div>

          <div className="col-sm-4 row contact">
            <h5 className="col-sm-5" style={{ fontSize: "0.95em" }}>
              Keep in touch
            </h5>
            <div className="col-sm-7">
              <button
                className="btn btn-default"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              >
                <i className="fa fa-facebook-f"></i>
              </button>

              <button
                className="btn btn-default"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              >
                <i className="fa fa-twitter"></i>
              </button>

              <button
                className="btn btn-default"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              >
                <i className="fa fa-google"></i>
              </button>

              <button
                className="btn btn-default"
                style={{ borderRadius: "50%", width: "40px", height: "40px" }}
              >
                <i className="fa fa-youtube"></i>
              </button>
            </div>
          </div>
        </div>
        <hr />
      </footer>
    </>
  );
};
