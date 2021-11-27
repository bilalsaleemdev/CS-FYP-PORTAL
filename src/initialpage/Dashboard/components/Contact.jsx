import React from "react";
import styles from "../assets/css/home.module.css";
export const Contact = () => {
  return (
    <div className={styles.Contact} id="contact_us">
      <div className={styles.contentarea}>
        <h1>Contact Us</h1>

        <form>
          <div className="input-wrapper">
            <label htmlFor="fname">First Name</label>
            <input type="text" placeholder="First Name" id="fname" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="name">Last Name</label>
            <input type="text" placeholder="Last Name" id="name" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter your Email" id="email" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="skills">Skills</label>
            <input type="text" placeholder="Enter your skills" id="skills" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="job_desc">Job Description</label>
            <textarea
              name=""
              id="job_desc"
              cols="30"
              placeholder="Job Description"
              rows="10"
            ></textarea>
          </div>
          <div className="input-wrapper">
            <label htmlFor="hire">Why we should hire you?</label>
            <textarea
              name=""
              id="hire"
              cols="30"
              rows="10"
              placeholder="Any Special Reason"
            ></textarea>
          </div>
          <div className="input-wrapper">
            <button>Apply Job</button>
          </div>
        </form>
      </div>
    </div>
  );
};
