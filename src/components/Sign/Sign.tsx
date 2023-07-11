import photo from "../../../public/Foto.png";
import styles from "./SignIn.module.css";
import { Link } from "react-router-dom";

const Sign = ({theme, setTheme}) => {
  return (
    <div className={theme ? styles.mainBlockIn : styles.mainBlockInDark}>
      <div className={styles.blockLinks}>
        <div className={styles.links}>
          <Link to={"/login"}>Войти</Link>
          <p>или</p>
          <Link to={"/auth"}>Зарегистрироваться</Link>
        </div>
      </div>
      <div className={styles.imageBlock}>
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Sign;
