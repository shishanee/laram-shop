import React from "react";
import styles from "./Profile.module.css";
import SideBar from "./SideBar";
import Basic from "./Basic";

const Profile = () => {
  return (
    <div className={styles.paddingTop}>
      <p className={styles.p}>Аккаунт — Основное</p>
      <div className={styles.flex}>
        <SideBar />
        <Basic />
      </div>
    </div>
  );
};

export default Profile;
