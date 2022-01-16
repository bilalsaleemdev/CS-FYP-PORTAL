import React from "react";
import svg from "../assets/img/undraw_team_spirit_re_yl1v.svg";
import styles from "../assets/css/home.module.css";
export const AboutUs = () => {
  return (
    <div className={styles.AboutUs} id="about_us">
      <div className={styles.content}>
        <div className={styles.presentation}>
          <h1>About Us</h1>
          <p>
          Gamification is an emerging field that plays an important role in setting up the motivation of the users. The idea of our project is to build a Gamified Employee Portal that would help increase user motivation and the overall performance factors. This portal is considered to be the most essential human resource performance management system.
          One of the significant resources of a company is the people, their knowledge, and their skills. The purpose of implementing this system is to motivate employees to perform better by providing them the appropriate feedback along with monitoring everyone's performance in depth.</p>
          <p>The CEO observes the details of his employees and projects they've completed. This portal will be the epitome of using gaming elements for motivating the employees to perform better. The employees will also have some levels such as Silver, Gold, and Platinum, which they can earn by completing tasks and earning five-star feedbacks from the Manager on the completed tasks. The employee can also see his position in the company through the Leaderboard, which will motivate him to work with more passion.
          </p>
        </div>
        <img src={svg} alt="" />
      </div>
    </div>
  );
};
