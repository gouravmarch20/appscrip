"use client";

import React from "react";
import "@/app/css/Toast.css"; // You can design this

export default function CustomToast({ toast }) {
  if (!toast) return null;

  return (
    <div className={`custom-toast ${toast.type}`}>
      {toast.message}
    </div>
  );
}