import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kim</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 5 years of experience using React, Vue, Laravel and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:synkdigitalsolutions@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/profile.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} /> */}
      {/* <div className={styles.bottomBlur} /> */}
    </section>
  );
};
