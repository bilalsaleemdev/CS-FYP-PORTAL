import React from "react";

export const Aside = () => {
  return (
    <aside>
      <li>
        <a href="#team">Team</a>
      </li>
      <li>
        <a href="#about_us">About Us</a>
      </li>
      <li>
        <a href="#contact_us">Contact Us</a>
      </li>
      <li>
        <a href="#" className="button">
          Sign Up
        </a>
      </li>{" "}
      <li>
        <a href="#" className="button">
          Login
        </a>
      </li>
    </aside>
  );
};
