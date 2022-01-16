import React from "react";
import styles from "../assets/css/home.module.css";
export const Footer = () => {
  return (
    <div className={styles.footer} style={{display:'flex',justifyContent:'center' }}>
     <p style={{alignSelf:'center' , paddingTop:'10px'}}>@All Rights Reserved -Gamified Employee Portal</p>
    </div>
  );
};
