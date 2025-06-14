"use client";
import React from 'react';
import '@/app/css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from metta muse.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <p>🇺🇸 USD</p>
          <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div className="footer-column">
          <h4>metta muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-column follow">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <span>📸</span> <span>💼</span>
          </div>

          <h4>metta muse ACCEPTS</h4>
          <div className="payment-icons">
            <span>🅶</span>
            <span>💳</span>
            <span>💳</span>
            <span>🅰️</span>
            <span>🍎</span>
            <span>🅿️</span>
          </div>
        </div>
      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}