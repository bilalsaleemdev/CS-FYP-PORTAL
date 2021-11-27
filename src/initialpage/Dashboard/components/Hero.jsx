import React from "react";
import svg from "../assets/img/undraw_working_remotely_jh40.svg";
import styles from "../assets/css/home.module.css";
export const Hero = () => {
  return (
    <div className={styles.Hero}>
      <img src={svg} alt="" />
      <div className={styles.presentation}>
        <h1>Employees </h1>
        <p>in our Zone</p>
        <a href="#">Explore</a>
      </div>
    </div>
  );
};
