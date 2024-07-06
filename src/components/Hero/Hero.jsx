import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jessica</h1>
        <p className={styles.description}>
        I am a 6th semester student majoring in informatics from Universitas Amikom Yogyakarta 
        with an interest in data science and machine learning. Experienced in learning and 
        applying various deep learning and machine learning algorithms. Have skills in the Python 
        programming language and have the dedication to become a machine learning engineer in the future.
        </p>
        <a href="mailto:veganainggolan9560@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
