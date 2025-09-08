import React, { useState, useEffect } from "react";
import ProductCarousel from "../Corousel"
import ProductSearch from "../components/ProductSearch";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from backend API or replace with your product list
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="text-center mt-5">
      <ProductSearch products={products} /> {/* Search bar for all products */}
      <h1>Welcome to Inventory</h1>
      <p>Your reliable inventory management and shopping system.</p>
      <ProductCarousel products={products.slice(0, 3)} /> {/* Show first 3 in carousel */}
    </div>
  );
};

export default Home;
