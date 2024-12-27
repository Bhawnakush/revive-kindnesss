'use client'
import { services3 } from "@/data/services"; // Ensure services3 contains image URLs
import React from "react";
import Image from "next/image";

const ServiceItem = ({ src, title, text }) => (
  <div
    style={{
      flex: "0 0 33.33%", // Three cards in one row
      maxWidth: "33.33%",
      display: "flex",
      justifyContent: "center",
      padding: "15px", // Increased padding for better spacing
      boxSizing: "border-box",
    }}
  >
    <div
      style={{
        width: "550px", // Adjust width of the card
        border: "0px solid #e0e0e0",
        borderRadius: "10px",
        overflow: "hidden", // Ensures content fits within card boundaries
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for elevation
        backgroundColor: "#fff",
        textAlign: "left",
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Add hover effect
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)"; // Slight scaling on hover
        e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.2)"; // Increase shadow
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)"; // Reset scale
        e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)"; // Reset shadow
      }}
    >
      {/* Image Section */}
      <div style={{ width: "100%", height: "auto" }}>
        <Image
          src={src} // Image source
          alt={title} // Alt text for accessibility
          width={550} // Match card width
          height={300} // Set desired height for the image
          style={{ objectFit: "cover" }} // Ensures the image fills the space nicely
        />
      </div>

      {/* Text Section */}
      <div style={{ padding: "20px" }}>
        <h4
          style={{
            margin: "0 0 10px",
            fontSize: "20px", // Adjust font size for the heading
            color: "#333",
          }}
        >
          {title}
        </h4>
        <p
          style={{
            margin: 0,
            fontSize: "15px", // Slightly larger font size for text
            color: "#666",
            lineHeight: "1.6", // Adjusted line height for better readability
          }}
        >
          {text}
        </p>
      </div>
    </div>
  </div>
);

export default function Service() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between", // Align cards with space between them
        flexWrap: "wrap", // Allows wrapping on smaller screens
        margin: "-10px", // Match padding for even spacing
      }}
    >
      {services3.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </div>
  );
}
