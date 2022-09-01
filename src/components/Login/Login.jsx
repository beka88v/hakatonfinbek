import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

const Login = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState();
  // const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  // const [passwordConfirm, setPasswordConfirm] = useState();

  // console.log(email);
  // console.log(userName);
  // console.log(passwordConfirm);
  // console.log(password);

  function handleSave() {
    // if (!email.trim() || !password.trim() ) {
    //   alert("Заполните поля!");
    //   return;
    // }

    // let formData = new FormData();
    // formData.append("email", email);
    // formData.append("username", userName);
    // formData.append("password_confirm", passwordConfirm);
    // formData.append("password", password);

    login(email, password);
  }

  return (
    <div className="regestration">
      <div className="regestration__panel">
        {/* <input
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          placeholder="Введите электронную почту"
          type="text"
        /> */}

        <input
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          placeholder="Имя пользователя"
          type="text"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          placeholder="Создайте пароль"
          type="password"
        />

        {/* <input
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className="input"
          placeholder="Введите свой пароль"
          type="password"
        /> */}

        <button onClick={handleSave} className="rgs__btn">
          Продолжить
        </button>
        <Link to="/">У вас уже есть аккаунт?</Link>
      </div>
    </div>
  );
};

export default Login;
