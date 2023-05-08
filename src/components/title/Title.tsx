import React from "react";
import styles from "./Title.module.css";

const Title = () => {
  return (
    <div className={styles["title-wrapper"]}>
      <h1 className={styles.title}>
        The Hot dog
        <br /> shop locator
      </h1>
    </div>
  );
};

export default Title;
