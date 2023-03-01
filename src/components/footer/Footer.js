import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>Sydney, Australia</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>+012 345 6789</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>cs@@fewastore.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src="" className="img-fluid" alt="Fewa Store" />
                    </a>
                    <br />
                    @fewastore
                  </div>
                  <div className="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="fa">
                      <i className="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="tw">
                      <i className="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="gg">
                      <i className="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about">about</a>
                    </li>
                    <li>
                      <a href="/services">services</a>
                    </li>
                    <li>
                      <a href="/portfolio">portfolio</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                    <li>
                      <a href="/about">About us</a>
                    </li>
                    <li>
                      <a href="/services">Our Services</a>
                    </li>
                    <li>
                      <a href="/expert">Expert Team</a>
                    </li>
                    <li>
                      <a href="/contact">Contact us</a>
                    </li>
                    <li>
                      <a href="/news">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; {new Date().getFullYear()}{" "}
                    <a href="https://github.com/bishalk21/fashiona-client-cms">
                      @fewastore
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="/home">Home</a>
                    </li>
                    <li>
                      <a href="terms">Terms</a>
                    </li>
                    <li>
                      <a href="/privacy">Privacy</a>
                    </li>
                    <li>
                      <a href="/policy">Policy</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
