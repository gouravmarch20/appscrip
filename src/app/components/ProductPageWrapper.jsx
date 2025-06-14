"use client";
import React, { useState } from "react";
// import ProductCard from "./ProductCard";
import Header from "@/app/components/Header";
import useCartWishlist from "@/app/hooks/useCartWishlist";
import ProductList from "./ProductList";
import ProductAside from "./ProductAside";
import "@/app/css/ProductPageWrapper.css";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import CustomToast from "./Toast";

export default function ProductPageWrapper({ products }) {
  const {
    cart,
    wishlist,
    addToCart,
    addToWishlist,
    removeFromWishlist,
    increaseQuantity,
    removeFromCart,
    totalPrice,
    decreaseQuantity,
    toast
  } = useCartWishlist();
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div>
      {/* <h1>sfad {cart.length}</h1> */}
      <TopBar />
      <MainHeader />
      <Header
        cart={cart}
        wishlist={wishlist}
        totalPrice={totalPrice}
        removeFromWishlist={removeFromWishlist}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <div className="product-aside_wrapper">
        <ProductAside products={products} onFilter={setFilteredProducts} />
        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
          addToWishlist={addToWishlist}
        />
      </div>
      <CustomToast toast={toast} />

      <Footer />

      {/* </div> */}
    </div>
  );
}
