import styles from "./HomePage.module.css";
import photo from "../../../public/guys.png";
import Clothes from "../Clothes/Clothes";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.blockOne}>
        <h1>L A R A M </h1>
        <p>
          Магазин брендовой одежды, не ограничивающий себя рамками каких-либо
          концепций
        </p>
      </div>
      <div className={styles.blockTwo}>
        <img src={photo} alt="" />
      </div>
      <Clothes />
    </div>
  );
};

export default HomePage;
