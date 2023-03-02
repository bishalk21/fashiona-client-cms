import React from "react";
import { Container } from "react-bootstrap";
import "./topCategories.css";

const TopCategories = () => {
  return (
    <>
      <div className="top-categories pt-3">
        <Container>
          <h3 className="title">Top Categories</h3>
          <hr />
          <div className="top-category">
            <ul className="top-category-list">
              <li>
                <i class="fa-solid fa-caravan"></i>
                <span className="d-flex align-items-center justify-content-center">
                  Motors
                </span>
              </li>
              <li>
                <i class="fa-solid fa-caravan"></i>
                <span className="d-flex align-items-center justify-content-center">
                  Electronics
                </span>
              </li>

              <li>
                <i class="fa-solid fa-caravan"></i>
                <span className="d-flex align-items-center justify-content-center">
                  Books
                </span>
              </li>

              <li>
                <i class="fa-solid fa-caravan"></i>
                <span className="d-flex align-items-center justify-content-center">
                  Gifts
                </span>
              </li>
              <li>
                <i class="fa-solid fa-caravan"></i>
                <span className="d-flex align-items-center justify-content-center">
                  Clothes
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopCategories;
