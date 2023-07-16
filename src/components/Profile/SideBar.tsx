import React from "react";
import { Link } from "react-router-dom";
import styles from "./Profile.module.css";

const SideBar = () => {
  return (
    <div>
      <div className={styles.side}>
        <Link className={styles.linkk1} to="/profile">
          Основное
        </Link>
        <Link className={styles.linkk} to="/data">
          Данные
        </Link>
        <Link className={styles.linkk} to="/orders">
          История заказов
        </Link>
        <Link className={styles.linkk} to="/exit">
          Выйти
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
