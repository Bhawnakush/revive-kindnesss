import React, { useState } from "react";

export default function ServicesPage() {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className="servicesPage">
      {/* Services button */}
      <a
        href="#"
        className="mn-has-sub opacity-1"
        onClick={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}
      >
        Services <i className="mi-chevron-down" />
      </a>

      {/* Dropdown menu with sliding effect */}
      <ul className={`mn-sub to-left ${isDropdownOpen ? "open" : "closed"}`}>
        <li>
          <a href="/services/a">Category A</a>
        </li>
        <li>
          <a href="/services/b">Category B</a>
        </li>
        <li>
          <a href="/services/c">Category C</a>
        </li>
      </ul>
    </li>
  );
}
