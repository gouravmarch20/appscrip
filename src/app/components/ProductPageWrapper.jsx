"use client";
import React, { useState } from "react";
// import ProductCard from "./ProductCard";
import Header from "@/app/components/Header";
import useCartWishlist from "@/app/hooks/useCartWishlist";
import ProductList from "./ProductList";
import ProductAside from "./ProductAside";

export default function ProductPageWrapper({ products }) {
  const { cart, wishlist, addToCart, addToWishlist } = useCartWishlist();
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <>
      {/* <h1>sfad {cart.length}</h1> */}
      <Header cart={cart} wishlist={wishlist} />
      <div style={{ display: "flex", gap: "20px" }}>
        <ProductAside products={products} onFilter={setFilteredProducts} />
        <ProductList products={filteredProducts} addToCart={addToCart} addToWishlist={addToWishlist} />
      </div>
    </>
  );
}
