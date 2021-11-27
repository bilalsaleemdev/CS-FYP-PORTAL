import React from "react";
import styles from "../assets/css/home.module.css";
export const EmployeeCard = ({ badge, profile, name, email }) => {
  return (
    <div className={styles.EmployeeCard}>
      <img src={badge} alt="" className={styles.badge} />
      <img src={profile} alt="" className={styles.profile_img} />

      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};
