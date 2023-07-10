import { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignIn } from "../../features/applicationSlice";
import { Link, useNavigate } from "react-router-dom";

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
    navigate('/')
  };
  return (
    <div >
      <div >
        <Link  to={"/login"}>
          Вход
        </Link>
        <Link to={"/auth"}>Регистрация</Link>
      </div>
      <input
        onChange={changeLogin}
        value={login}
        type="text"
        placeholder="Login"
      />
      <input
        onChange={changePassword}
        value={password}
        type="password"
        placeholder="Password"
      />
      <div>
        <input type="checkbox" />
        Запомнить меня
      </div>
      <button onClick={handleLogin}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;