import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignUp } from "../../features/applicationSlice";
import { Link, useNavigate } from "react-router-dom";
import photo from "../../../public/Foto.png";
import styles from "./SignIn.module.css";

const SignUp = ({ theme, setTheme }) => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector((state) => state.application.error);
  const [isSign, setIsSign] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeLogin = (e) => {
    setLogin(e.target.value);
  };
  const changeName = (e) => {
    setName(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    await dispatch(authSignUp({ name, login, password }));
    setIsSign(true);
  };

  useEffect(() => {
    if (isSign && !error) {
      navigate("/login");
    }
  }, [isSign, error, navigate]);

  return (
    <div className={theme ? styles.mainBlockIn : styles.mainBlockInDark}>
      <div className={styles.blockOne}>
        <div className={styles.form}>
          <p>Создайте аккаунт</p>
          <input
            onChange={changeName}
            value={name}
            type="text"
            placeholder="Введите ваше имя"
          />
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

export default SignUp;
