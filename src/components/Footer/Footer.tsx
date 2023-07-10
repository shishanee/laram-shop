import instagram from "../../../public/ins.png";
import telegram from "../../../public/telegram.png";
import vk from "../../../public/vk.png";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.linksOne}>
          <Link>Гарантия</Link>
          <Link>Доставка & Возвраты</Link>
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
          <button >Подписаться</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
