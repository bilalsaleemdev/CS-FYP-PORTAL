import React from "react";
import { Events } from "../helper/events";
import badge from "../assets/img/1st Badge.png";
import Profile from "../assets/img/undraw_profile_pic_ic-5-t.svg";

import styles from "../assets/css/home.module.css";
export const EmplyeesDisplay = () => {
  return (
    <div className={styles.home_hero}>
      <h1>Employee of the month</h1>
      <div className={styles.content_wrapper}>
        <div className={styles.events_list}>
          <div className={styles.head_events}>
            <h2 style={{ color: "#000" }}>Upcoming Events</h2>
          </div>
          <div className={styles.body_events}>
            <div className={styles.header_body_events}>
              <h3 style={{ color: "#000" }}>Event Name</h3>
              <h3 style={{ color: "#000" }}>Date</h3>
            </div>
            <div className={styles.events_wrapper}>
              {Events.map((EachEmp) => (
                <div className={styles.events_wrapper_content}>
                  <h3>{EachEmp.name}</h3>
                  <h3>{EachEmp.date}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.employee_details}>
          <div className={styles.presentation}>
            <div className={styles.inner_flex}>
              <h2>Employee Of the Month</h2>
              <p>xyz</p>
            </div>
            <div className={styles.inner_flex}>
              <h2>Name</h2>
              <p>xyz</p>
            </div>
            <div className={styles.inner_flex}>
              <h2>Department</h2>
              <p>xyz</p>
            </div>
            <div className={styles.inner_flex}>
              <h2>Earned Badges</h2>
              <p>xyz</p>
            </div>
          </div>

          <div className={styles.imagewrapper}>
            <img src={badge} alt="" className={styles.badge_top_employee} />
            <img src={Profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
