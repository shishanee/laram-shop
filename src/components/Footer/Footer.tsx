import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = ({ theme, setTheme }) => {
  return (
    <div className={theme ? styles.footer : styles.footerDark}>
      <div className={styles.links}>
        <div className={styles.linksOne}>
          <Link to={"/garant"}>Гарантия</Link>
          <Link to={"/delivery"}>Доставка</Link>
        </div>
        <div className={styles.linksTwo}>
          <Link>
            <p>Telegram</p>
          </Link>
          <Link>
            <p>Instagram</p>
          </Link>
        </div>
      </div>
      <div className={styles.discount}>
        <p>Дарим 10% скидку за подписку</p>
        <div className={styles.email}>
          <input placeholder="Введите email" type="email" />
          <button>Подписаться</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
