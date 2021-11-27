import React from "react";
import { EmployeeCard } from "./EmployeeCard";
import First from "../assets/img/1st Badge.png";
import Second from "../assets/img/2nd Badge.png";
import Third from "../assets/img/3rd Badge.png";
import Fourth from "../assets/img/4th Badge.png";
import Fifth from "../assets/img/5th Badge.png";
import profileM from "../assets/img/undraw_profile_pic_ic-5-t.svg";
import profilef from "../assets/img/undraw_female_avatar_w3jk.svg";
import profileC from "../assets/img/undraw_male_avatar_323b.svg";
import styles from "../assets/css/home.module.css";
export const TopEmployees = () => {
  return (
    <div className={`${styles.AboutUs} ${styles.TopEmployees}`}>
      <div className="top_shadow"></div>
      <div className={styles.content}>
        <h1 style={{ textAlign: "center" }}>Top 5 Employees of the month</h1>

        <div className={styles.employee_wrapper}>
          <EmployeeCard
            badge={First}
            profile={profileM}
            name="Atif Asim"
            email="mytechlife96@gmail.com"
          />
          <EmployeeCard
            badge={Second}
            profile={profilef}
            name="Yahoo baba"
            email="Yahoo@baba.com"
          />
          <EmployeeCard
            badge={Third}
            profile={profileM}
            name="Zubair Rana"
            email="Zubair@gmail.com"
          />
          <EmployeeCard
            badge={Fourth}
            profile={profileC}
            name="Umer Ansari"
            email="UmerAnsari@gmail.com"
          />
          <EmployeeCard
            badge={Fifth}
            profile={profileM}
            name="Salman Asim"
            email="Salman_Asim@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};
