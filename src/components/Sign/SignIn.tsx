import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../../features/applicationSlice";
import { useNavigate } from "react-router-dom";
import photo from "../../../public/Foto.png";
import styles from "./SignIn.module.css";

const SignIn = ({ theme, setTheme }) => {
  const error = useSelector((state) => state.application.error);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isSign, setIsSign] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeLogin = (e) => {
    setLogin(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
   await dispatch(authSignIn({ login, password }));
    setIsSign(true);
  };

  useEffect(() => {
    if (isSign && !error) {
      navigate("/");
    }
  }, [isSign, error, navigate]);

  return (
    <div className={theme ? styles.mainBlockIn : styles.mainBlockInDark}>
      <div className={styles.blockOne}>
        <div className={styles.form}>
          <p>Войдите в аккаунт</p>
          <input
            onChange={changeLogin}
            value={login}
            type="text"
            placeholder="Введите логин"
          />
          <input
            onChange={changePassword}
            value={password}
            type="password"
            placeholder="Введите пароль"
          />
          <button onClick={handleLogin}>Войти</button>
          <br />
          {error}
        </div>
      </div>
      <div className={styles.imageBlock}>
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default SignIn;
