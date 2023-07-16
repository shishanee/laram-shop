import React from "react";
import SideBar from "./SideBar";
import styles from "./Profile.module.css";

const Data = () => {
  return (
    <div className={styles.paddingTop}>
      <p className={styles.p}>Аккаунт — Данные</p>
      <div className={styles.flex}>
        <SideBar />
        <div>rwqrqw</div>
      </div>
    </div>
  );
};

export default Data;
