import { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignIn } from "../../features/applicationSlice";
import { useNavigate } from "react-router-dom";
import photo from "../../../public/Foto.png";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeLogin = (e) => {
    setLogin(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    dispatch(authSignIn({ login, password }));
    navigate("/");
  };
  return (
    <div className={styles.mainBlockIn}>
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
        </div>
      </div>
      <div className={styles.imageBlock}>
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default SignIn;
