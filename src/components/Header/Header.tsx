import { Link } from "react-router-dom";
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={'/'}><h1>L A R A M</h1></Link>
      </div>
      <div className={styles.headerCenter}>
        <Link>КОЛЛЕКЦИИ</Link>
        <Link>SALE</Link>
      </div>
      <div className={styles.headerRight}>
        <Link>КОРЗИНА</Link>
        <Link to={'/account'}>АККАУНТ</Link>
      </div>
    </div>
  );
};

export default Header;
