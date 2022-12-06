import React from "react";
import { Carousel } from "react-bootstrap";

export const CarouselComponent = ({ interval, image, title }) => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item interval={interval}>
          <img src={image} className="d-block w-100" alt={title} />
          <Carousel.Caption className="d-flex justify-content-center">
            <div className="carousel-button">Shop Now</div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
