import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jessica Vega</h1>
        <p className={styles.description}>
        I am a 6th semester student with a passion for technology and design. My interests are focused on web development, especially <b>frontend, data processing, and UI/UX design. </b> 
        I am experienced in learning and applying various deep learning and machine learning algorithms in several projects and problems, and proficient in <b>Python. </b> In my personal 
        exploration, I have developed the ability to create intuitive and engaging user interfaces. I enjoy being creative in creating attractive and user-friendly <b>UI/UX designs</b>.
        </p>
        <a href="https://drive.google.com/file/d/1TKj8-z75n1qJjnCQMuaePdF59wgnirkp/view?usp=drive_link" className={styles.contactBtn}>
          My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/image.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

