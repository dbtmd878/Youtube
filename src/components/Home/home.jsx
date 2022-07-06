import React from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../service/authentication";

const Home = () => {
  const navigate = useNavigate();
  const authService = new AuthService();
  const logoutFnc = () => {
    authService.logout();
    return navigate("/");
  };
  return (
    <div>
      <h1>this is homepage</h1>
      <button onClick={logoutFnc}>logout</button>
    </div>
  );
};

export default Home;
