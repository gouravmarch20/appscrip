"use client";

import { useState, useRef } from "react";
import useCartWishlist from "@/app/hooks/useCartWishlist";
import useOutsideClick from "@/app/hooks/useOutsideClick";
import "@/app/css/Header.css";

export default function Header({
  cart,
  wishlist,
  removeFromWishlist,
  totalPrice,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);

  const cartRef = useRef(null);
  const wishlistRef = useRef(null);

  // Close drawers on outside click
  useOutsideClick(cartRef, () => setShowCart(false));
  useOutsideClick(wishlistRef, () => setShowWishlist(false));

  return (
    <>
      <header className="header">
        <h1 className="logo">My Store</h1>
        <div className="icons">
          <button onClick={() => setShowWishlist(true)}>
            Wishlist ({wishlist.length})
          </button>
          <button onClick={() => setShowCart(true)}>
            Cart ({cart.length})
          </button>
        </div>
      </header>

      {/* Cart Drawer */}
      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        {showCart && (
          <div className="drawer open" ref={cartRef}>
            <button className="close-btn" onClick={() => setShowCart(false)}>
              ×
            </button>
            <h2>Cart</h2>
            {cart.length === 0 ? (
              <p>No items in Cart</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="drawer-item">
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                  <p>Price: ${item.price}</p>
                  <p>Qty: {item.quantity}</p>

                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>

                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              ))
            )}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
          </div>
        )}
      </div>

      {/* Wishlist Drawer */}
      <div
        style={{
          paddingBottom: "20px",
        }}
      >
        {showWishlist && (
          <div className="drawer open" ref={wishlistRef}>
            <button
              className="close-btn"
              onClick={() => setShowWishlist(false)}
            >
              ×
            </button>
            <h2>Wishlist</h2>
            {wishlist.length === 0 ? (
              <p>No items in Wishlist</p>
            ) : (
              wishlist.map((item) => (
                <div key={item.id} className="drawer-item">
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                  <button onClick={() => removeFromWishlist(item.id)}>
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}
