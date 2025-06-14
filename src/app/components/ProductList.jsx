"use client";

import ProductCard from "./ProductCard";
import useCartWishlist from "@/hooks/useCartWishlist";
import  './ProductList.css'
export default function ProductList({ products }) {
  const { addToCart, addToWishlist } = useCartWishlist();

  return (
    <div className="product-grid">
      {products.map(product => (
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