import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "https://fullstack-na-raslabone.herokuapp.com/";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const config = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  const register = async (formData) => {
    // let formData = new FormData();
    // formData.append("email", email);
    // formData.append("username", username);
    // formData.append("password", password);
    // formData.append("password_confirm", password_confirm);
    console.log(formData);
    try {
      const res = await axios.post(`${API}account/register/`, formData, config);
      console.log(res);
    } catch (error) {
      console.log(error);
      setError("Error occured");
    }
  };

  const login = async (email, password) => {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      let res = await axios.post(`${API}account/api/token/`, formData, config);
      navigate("/");
      console.log(res.data);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      //   getProfile();
      localStorage.setItem("username", user);
    } catch (error) {
      console.log(error);
      setError("Wrong username or password", error);
    }
  };

  const logout = async () => {
    if (localStorage.getItem("token")) {
      let token = JSON.parse(localStorage.getItem("token"));

      try {
        const Authorization = `Bearer ${token.access}`;

        console.log(Authorization);

        let formData = new FormData();
        formData.append("refresh", token.refresh);
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("email");

        let res = await axios.post(`${API}user_account/logout/`, formData, {
          headers: { Authorization },
        });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };

  //   const getProfile = async () => {
  //     let token = JSON.parse(localStorage.getItem("token"));
  //     const Authorization = `Bearer ${token.access}`;

  //     await axios(`${API}user_account/profile/`, {
  //       headers: { Authorization },
  //     }).then((res) => {
  //       setUser(res.data.username);
  //     });
  //   };

  //   const getProfiles = async () => {
  //     let res = await axios(`${API}user_account/profiles/`);
  //     setUsers(res.data.results);
  //   };

  return (
    <authContext.Provider
      value={{
        register,
        login,
        // getProfiles,
        logout,
        error,
        user,
        users,
        setError,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
