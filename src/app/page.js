// app/page.js
import ProductPageWrapper from "@/app/components/ProductPageWrapper";

export const metadata = {
  title: "Appscrip PLP - Gaurav Mishra",
  description: "SSR-enabled PLP using FakeStoreAPI with Cart and Wishlist",
};

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();
  return <ProductPageWrapper products={products} />;
}