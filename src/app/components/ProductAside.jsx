"use client";

import { useState, useEffect } from "react";
import "@/app/css/ProductAside.css";

export default function ProductAside({ products, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortType, setSortType] = useState("recent");
  const [priceRange, setPriceRange] = useState([0, 200]); // [min, max]

  const categories = ["all", ...new Set(products.map((item) => item.category))];

  useEffect(() => {
    handleFilter();
  }, [searchTerm, selectedCategory, sortType, priceRange]);

  const handleFilter = () => {
    let filtered = [...products];

    // Search
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // Price range
    filtered = filtered.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    // Sorting
    switch (sortType) {
      case "priceLowHigh":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceHighLow":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "nameAZ":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "nameZA":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      case "recent":
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    onFilter(filtered);
  };

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    const newRange = [...priceRange];
    if (name === "min") newRange[0] = Number(value);
    if (name === "max") newRange[1] = Number(value);
    if (newRange[0] <= newRange[1]) setPriceRange(newRange);
  };

  return (
    <aside className="aside invisible">
      <h3>Search & Filter</h3>

      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div className="price-filter">
        <p>Price Range: ${priceRange[0]} - ${priceRange[1]}</p>
        <input
          type="range"
          name="min"
          min="0"
          max="200"
          value={priceRange[0]}
          onChange={handleSliderChange}
        />
        <input
          type="range"
          name="max"
          min="0"
          max="200"
          value={priceRange[1]}
          onChange={handleSliderChange}
        />
      </div>

      <select
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="recent">Recently Added</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="nameAZ">Name: A-Z</option>
        <option value="nameZA">Name: Z-A</option>
        <option value="rating">Rating</option>
      </select>
    </aside>
  );
}