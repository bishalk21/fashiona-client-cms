import React from "react";
import { CarouselComponent } from "./CarouselComponent";
import { CarouselItem } from "./CarouselItem";
import "./carousels.css";

export const Carousels = () => {
  return (
    <div className="carousels">
      <h2>New Arrivals</h2>
      {CarouselItem.map((item, i) => {
        return (
          <CarouselComponent
            key={item.id}
            interval={item.interval}
            image={item.image}
            title={item.title}
            {...item}
          />
        );
      })}
    </div>
  );
};
