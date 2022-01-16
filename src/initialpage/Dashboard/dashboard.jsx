import React from "react";
import { Header } from "./components/Header";
import "./assets/css/layout.css";

import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { EmplyeesDisplay } from "./components/EmplyeesDisplay";
import { TopEmployees } from "./components/TopEmployees";
import styles from "./assets/css/home.module.css";
export const Dashboard = () => {
  return (
    <div className={styles.home}>
      <div className={styles.main_section}>
        <Header />
        <Hero />
      </div>
      <EmplyeesDisplay />

      <AboutUs />
      <Team />
      <Footer />
    </div>
  );
};
