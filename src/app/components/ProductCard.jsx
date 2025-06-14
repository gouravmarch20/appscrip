"use client";
import  '@/app/css/ProductCard.css'
export default function ProductCard({ data, addToCart, addToWishlist }) {
  return (
    <div className="product-card">
      <img src={data.image} alt={`Image of ${data.title}`} />
      <h2>{data.title}</h2>
      <p>${data.price}</p>
      <button onClick={() => addToCart(data)}>Add to Cart</button>
      <button onClick={() => addToWishlist(data)}>Wishlist</button>
    </div>
  );
}