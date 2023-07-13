import React from "react";
import styles from "./Profile.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Exit = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.application.token);

  const handleExit = () => {
    navigate("/");
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleNo = () => {
    navigate("/profile");
  };
  return (
    <div>
      <p className={styles.p}>Аккаунт — Выйти</p>
      <div className={styles.profile}>
        <div className={styles.profileMain}>
          <div className={styles.profileSide}>
            <div className={styles.side}>
              <Link className={styles.linkk} to={"/profile"}>
                Основное
              </Link>
              <Link className={styles.linkk} to={"/dannie"}>
                Данные
              </Link>
              <Link className={styles.linkk} to={"/orders"}>
                История заказов
              </Link>
              <Link className={styles.linkk} to={"/exit"}>
                Выйти
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.exitMain}>
          <div className={styles.blockForExit}>
            <p className={styles.exitText}>Вы уверены что хотите выйти? </p>
            <div className={styles.blockBut}>
              <button className={styles.butt} onClick={handleExit}>
                {" "}
                Да{" "}
              </button>
              <button className={styles.butt} onClick={handleNo}>
                {" "}
                Нет{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exit;
