"use client";

import { useState } from "react";
import "./ProductAside.css";

export default function ProductAside({ products, onFilter }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortType, setSortType] = useState("recent");

  // Get unique categories
  const categories = ["all", ...new Set(products.map((item) => item.category))];

  const handleFilter = () => {
    let filtered = [...products];

    // Search
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

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

  // Apply filter when any changes
  const handleChange = () => {
    handleFilter();
  };

  return (
    <aside className="aside">
      <h3>Filter & Sort</h3>

      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleChange();
        }}
      />

      <select
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          handleChange();
        }}
      >
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={sortType}
        onChange={(e) => {
          setSortType(e.target.value);
          handleChange();
        }}
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