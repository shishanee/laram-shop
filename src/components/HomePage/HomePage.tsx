import styles from "./HomePage.module.css";
import photo from "../../../public/guys.png";
import Clothes from "../Clothes/Clothes";
import * as React from "react";


const HomePage = ({theme, setTheme}) => {  

  return (
    <div className={theme ? styles.homePage : styles.homePageDark}>
      <div className={styles.cont}></div>
      <div className={styles.blockOne}>
        <h1>L A R A M </h1>
        <p>
          Магазин брендовой одежды, не ограничивающий себя рамками каких-либо
          концепций
        </p>
      </div>
      <div className={styles.cont}></div>
      <div className={styles.blockTwo}>
        <img src={photo} alt="" />
      </div>
      <Clothes />
    </div>
  );
};

export default HomePage;
