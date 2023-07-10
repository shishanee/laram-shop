import { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignUp } from "../../features/applicationSlice";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <div>
        <Link to={"/login"}>Вход</Link>
        <Link to={"/auth"}>Регистрация</Link>
      </div>
      <input
        value={login}
        onChange={changeLogin}
        type="text"
        placeholder="Login"
      />
      <input
        value={password}
        onChange={changePassword}
        type="password"
        placeholder="Password"
      />
      <button disabled={login >= 0 || password >= 0} onClick={handleRegister}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
