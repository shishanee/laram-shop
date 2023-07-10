import photo from "../../../public/Foto.png";
import styles from "./SignIn.module.css";
import { Link } from "react-router-dom";

const Sign = () => {
  return (
    <div className={styles.mainBlockIn}>
      <div className={styles.blockLinks}>
        <div className={styles.links}>
          <Link to={"/login"}>Войти</Link>
          <p>или</p>
          <Link to={"/auth"}>Зарегистрироваться</Link>
        </div>
      </div>
      <div>
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Sign;