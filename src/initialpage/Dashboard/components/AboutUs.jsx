import React from "react";
import svg from "../assets/img/undraw_team_spirit_re_yl1v.svg";
import styles from "../assets/css/home.module.css";
export const AboutUs = () => {
  return (
    <div className={styles.AboutUs} id="about_us">
      <div className={styles.content}>
        <div className={styles.presentation}>
          <h1>About us</h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
            blanditiis exercitationem, tempore sit aut nesciunt magni
            architecto. Tempore beatae commodi, expedita, hic laborum
            perferendis voluptatibus vero aperiam quibusdam alias saepe. Sequi
            sed culpa in consequuntur odio, perspiciatis, quisquam incidunt
            consectetur dicta excepturi, maiores explicabo debitis aliquid? Aut
            expedita officiis earum facere autem optio reprehenderit itaque
            ipsum voluptates at, necessitatibus, voluptatibus quibusdam alias
            quaerat, sed aliquid nisi non est officia iste dignissimos harum
            error! Adipisci hic sequi tempora culpa accusantium facilis sint,
            earum dicta repudiandae voluptas quam corporis nulla voluptates
            ullam quod illum saepe mollitia suscipit possimus aspernatur?
            Blanditiis, ex tenetur.
          </p>
          <div className={styles.read_more_wrapper}>
            <a href="#">Read More</a>
          </div>
        </div>
        <img src={svg} alt="" />
      </div>
    </div>
  );
};
