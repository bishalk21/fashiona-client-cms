import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./footer.css";

export const Footer = () => {
  const infoLinks = [
    { id: 0, name: "Contact Us", to: "/contact" },
    { id: 1, name: "Sell With Us", to: "/sell" },
    { id: 2, name: "Shipping", to: "/shipping" },
  ];
  const footerBusinessLinks = (
    <ul className="support-links">
      <li className="footer-link">
        <Link to="/dashboard">Account Details</Link>
      </li>
      <li className="footer-link">
        <Link to="/dashboard/orders">Orders</Link>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map((item) => (
    <li key={item.id} className="footer-link">
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-block">
            <div className="block-title">
              <h3 className="text-uppercase">Customer Service</h3>
            </div>
            <div className="block-content">
              <ul>{footerLinks}</ul>
            </div>
          </div>
          <div className="footer-block">
            <div className="block-title">
              <h3 className="text-uppercase">Links</h3>
            </div>
            <div className="block-content">
              <ul>{footerLinks}</ul>
            </div>
          </div>
          <div className="footer-block">
            <div className="block-title">
              <h3 className="text-uppercase">Newsletter</h3>
              <footerBusinessLinks />
              {/* <Newsletter /> */}
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <span>
            {" "}
            &copy;
            {new Date().getFullYear()} E-shop Babbal
          </span>
        </div>
        <ul className="footer-social-item">
          <li>
            <a href="/#facebook" rel="noreferrer noopener" target="_blank">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="/#instagram" rel="noreferrer noopener" target="_blank">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="/#pinterest" rel="noreferrer noopener" target="_blank">
              <i className="fab fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="/#twitter" rel="noreferrer noopener" target="_blank">
              <i className="fab fa-twitter" />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};
