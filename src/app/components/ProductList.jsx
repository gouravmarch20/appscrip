"use client";

import ProductCard from "./ProductCard";
  
import "./ProductList.css";
export default function ProductList({ products , addToCart , addToWishlist }) { 
  
  return (
    <div className="product-grid" >
 
      {products.map((product) => (
        <ProductCard
          key={product.id}
          data={product}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
        />
      ))}
    </div>
  );
}
