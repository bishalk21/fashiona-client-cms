import "./specialItems.css";
import React from "react";
//redux
import { useSelector } from "react-redux";
import { ProductCard } from "../product-card/ProductCard";

export const SpecialItemComponent = () => {
  const { products } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);

  return (
    <section className="special-item">
      <h2>Best seller</h2>
      <section className="special-item-section">
        {products
          .filter((product) => product.ratings > 4)
          .slice(0, 4)
          .map((item, i) => (
            <ProductCard
              product={item}
              key={i}
              _id={item._id}
              catId={item.catId}
              categories={categories}
              name={item.name}
              price={item.price}
              description={item.description}
              images={item.images}
              ratings={item.ratings}
            />
          ))}
      </section>
    </section>
  );
};
