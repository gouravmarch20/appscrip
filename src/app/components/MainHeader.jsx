"use client";
import React from "react";
import "@/app/css/MainHeader.css";

export default function MainHeader() {
  return (
    <header className="main-header">
      <div className="logo">LOGO</div>

      <nav className="nav-links">
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>

      <div className="header-icons">
        <span>🔍</span>
        <span>🤍</span>
        <span>🛍️</span>
        <span>👤</span>
        <span>ENG </span>
      </div>
    </header>
  );
}
