import React from "react";
import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

const Exit = () => {
  const navigate = useNavigate();
  const handleExit = () => {
    navigate("/");
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleNo = () => {
    navigate("/profile");
  };
  return (
    <div className={styles.paddingTop}>
      <p className={styles.p}>Аккаунт — Выйти</p>
      <div className={styles.flex}>
        <SideBar />
        <div className={`${styles.center} ${styles.exitMain}`}>
          <p className={styles.exitText}>Вы уверены что хотите выйти? </p>
          <button className={styles.butt} onClick={handleExit}>
            Да
          </button>
          <button className={styles.butt} onClick={handleNo}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exit;
