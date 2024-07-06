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
            <img src={getImageUrl("about/website.png")} alt="Frontend icon" className={styles.monitorImage}/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/monitor.png")} alt="Analytics icon" className={styles.monitorImage}/>
            <div className={styles.aboutItemText}>
              <h3>Data Analytics</h3>
              <p>
              I have expertise in extracting, transforming and analyzing complex datasets 
              to gain actionable insights and support data-driven decision making.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/design.png")} alt="UI icon" className={styles.monitorImage}/>
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
              I have experience designing intuitive and engaging mobile applications and websites.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
