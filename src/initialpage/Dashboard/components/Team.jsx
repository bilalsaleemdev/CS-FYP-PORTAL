import React from "react";
import { TeamCard } from "./TeamCard";
import styles from "../assets/css/home.module.css";
export const Team = () => {
  return (
    <div className={styles.Team} id="team">
      <div className={styles.contentarea}>
        <h1>Our Team</h1>
        <div className={styles.cardswrapper}>
          <TeamCard
            img="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
            name="Hafiz Awais Yasin"
            des="Group Team Leader"
          />
          <TeamCard
            img="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            name="Miral Fatima"
            des="Group Member"
          />
          <TeamCard
            img="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            name="Ahtasham Ahmad"
            des="Group Member"
          />{" "}
          <TeamCard
            img="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            name="Ma'am Iqra Obaid"
            des="Supervisor"
          />
        </div>
      </div>
    </div>
  );
};
