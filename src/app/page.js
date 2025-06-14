// app/page.js
import ProductCard from "@/app/components/ProductCard";
import Head from "next/head";

export const metadata = {
  title: "Product Listing Page | Appscrip Task",
  description: "A demo PLP page built by Gaurav Mishra for Appscrip",
};

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' }); // SSR
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main>
      <h1>Product Listing</h1>
      <section className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    </main>
  );
}