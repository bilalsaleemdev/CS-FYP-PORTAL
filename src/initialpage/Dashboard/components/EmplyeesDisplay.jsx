import React, { Component, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios, { CancelTokenSource } from "axios";
import { Events } from "../helper/events";
import badge from "../assets/img/1st Badge.png";
import Profile from "../assets/img/undraw_profile_pic_ic-5-t.svg";
import { getAllProgressOfEmployee } from "../../../api/network/customer/EmployeeApi";

import styles from "../assets/css/home.module.css";
export const EmplyeesDisplay = () => {
  const cancelTokenSource = axios.CancelToken.source();
  const [topUser, setTopUser] = useState({});

  useEffect(() => {
    topEmployee();
  }, []);

  const topEmployee = async () => {
    const response = await getAllProgressOfEmployee(cancelTokenSource.token);
    console.log("miral testing", response);
    setTopUser(response.data[0]);
  };

  return (
    <div className={styles.home_hero}>
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
        <div className={styles.events_list}>
          <div className={styles.head_events}>
            <h2 style={{ color: "#000" }}>Employee Of The Month</h2>
          </div>
          <div className={styles.body_events}>
            <div className={styles.events_wrapper}>
              <div className={styles.events_wrapper_content}>
                <h3>{`Name:`}</h3>
                <h3>{`${topUser.name}`}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
