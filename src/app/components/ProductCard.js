// components/ProductCard.jsx
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ data }) => {
  return (
    <article className="product-card">
      <img
        src={data.image}
        alt={`Image of ${data.title}`}
        width="200"
        height="200"
      />
      <h2>{data.title}</h2>
      <p>${data.price}</p>
    </article>
  );
};

export default ProductCard;
