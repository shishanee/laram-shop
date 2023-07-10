import { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignUp } from "../../features/applicationSlice";
import { Link, useNavigate } from "react-router-dom";
import photo from "../../../public/Foto.png";
import styles from "./SignIn.module.css";



const SignUp = () => {
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

  const handleRegister = () => {
    dispatch(authSignUp({ login, password }));
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  return (
    <div className={styles.mainBlockIn}>
    <div className={styles.blockOne}>
      <div className={styles.form}>
        <p>Создайте аккаунт</p>
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
        <button onClick={handleRegister}>Зарегистрироваться</button>
      </div>
    </div>
    <div>
      <img src={photo} alt="" />
    </div>
  </div>
  );
};

export default SignUp;
