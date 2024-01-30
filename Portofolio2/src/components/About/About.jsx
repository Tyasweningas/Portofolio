import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              I'm a freshman at Batam State Polytechnic, majoring in Software Engineering Technology. I have a high interest and passion in Software Engineering, especially for front-end development. Currently, i'm focusing on creating a website by myself using HTML5, CSS, JavaScript, React Js, and Node Js.

              <p>I am highly motivated to learn new things, take responsibility, manage my time effectively, and maintain an open, creative, and critical mindset. Proficient in problem-solving, collaborative work, and team collaboration, I enjoy connecting with various individuals to foster mutual growth and development</p>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
