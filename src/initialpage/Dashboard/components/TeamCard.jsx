import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import styles from "../assets/css/home.module.css";
export const TeamCard = ({ img, name }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa maiores
        ducimus cupiditate nam velit nihil at voluptates facere veritatis
        repellendus!
      </p>
      <div className={styles.icons_wrapper}>
        <a href="#">
          <FacebookIcon />
        </a>
        <a href="#">
          <LinkedInIcon />
        </a>
        <a href="#">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
};
