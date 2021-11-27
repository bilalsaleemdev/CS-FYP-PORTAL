import React from "react";
import styles from "../assets/css/home.module.css";
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <ul>
          <li>Logo</li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            expedita optio facilis alias omnis quaerat amet laboriosam quibusdam
            illo, culpa eum hic earum officiis odio quod ab ipsum quam ipsa sint
            fugit obcaecati illum nesciunt, libero nihil? Magnam, ipsa eum.
          </li>
        </ul>
        <ul>
          <li>Product</li>
          <li>
            <a href="#">Features</a>
          </li>{" "}
          <li>
            <a href="#">Pricing</a>
          </li>{" "}
          <li>
            <a href="#">Product</a>
          </li>{" "}
          <li>
            <a href="#">Support</a>
          </li>
        </ul>{" "}
        <ul>
          <li>Integration</li>
          <li>
            <a href="#">About Us</a>
          </li>{" "}
          <li>
            <a href="#">Blog</a>
          </li>{" "}
          <li>
            <a href="#">Media</a>
          </li>{" "}
          <li>
            <a href="#">contact Us</a>
          </li>
        </ul>{" "}
        <ul>
          <li>Policies</li>
          <li>
            <a href="#">Privacy Policy,</a>
          </li>{" "}
          <li>
            <a href="#">Terms and conditions</a>
          </li>{" "}
          <li>
            <a href="#">Careers</a>
          </li>{" "}
          <li>
            <a href="#">Affiliates</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
