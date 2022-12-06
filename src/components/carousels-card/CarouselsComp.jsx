import React from "react";
import "./carouselStyle.css";
import Carousel from "react-bootstrap/Carousel";

export const CarouselComponent = () => {
  return (
    <div className="carousels">
      <h2>New Arrivals</h2>
      <Carousel variant="dark">
        <Carousel.Item interval={1000}>
          <img
            src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            className="d-block w-100"
            alt="First slide"
            maxheight="600px"
          />
          <Carousel.Caption className="d-flex justify-content-center">
            <div className="carousel-button">Shop Now</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1612731486606-2614b4d74921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1720&q=80"
            alt="Second slide"
            maxheight="700px"
          />
          <Carousel.Caption className="d-flex justify-content-center">
            <div className="carousel-button">Shop Now</div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Third slide"
          />
          <Carousel.Caption className="d-flex justify-content-center">
            <div className="carousel-button">
              Shop Now <i className="fa-solid fa-chevron-right"></i>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1605036927639-1555563331a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Fourth slide"
          />
          <Carousel.Caption className="d-flex justify-content-center">
            <div className="carousel-button">
              Shop Now <i className="fa-solid fa-chevron-right"></i>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
            alt="Fourth slide"
          />
          <Carousel.Caption className="d-flex justify-content-center">
            <div className="carousel-button">
              Shop Now <i className="fa-solid fa-chevron-right"></i>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
