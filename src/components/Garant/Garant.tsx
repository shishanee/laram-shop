import styles from "./Garant.module.css";
import photo from "../../../public/photoOne.jpg";
import * as React from "react";

const Garant = ({ theme, setTheme }) => {
  return (
    <div className={theme ? styles.blockMain : styles.blockMainDark}>
      <div className={styles.blockOne}>
        <h1>Гарантия</h1>
        <p>
          Мы предоставляем гарантию на продукт в течении 30 календарных дней с
          момента покупки. Если вы обнаружили неисправность фурнитуры, швов или
          ткани, то свяжитесь с нами. <br /> <br /> Гарантия не действует, если
          повреждение связанно с естественным износом материла при неверном
          использовании, а также при несоблюдении рекомендаций по уходу. <br />{" "}
          <br /> Для оказания услуги возврата принимаются только чистые изделия
          без специфичных запахов. Магазин вправе отказать в оказании услуги не
          соответствующим требованиям вещь.
        </p>
      </div>
      <div className={styles.blockTwo}>
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Garant;
