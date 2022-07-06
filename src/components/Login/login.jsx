import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../service/authentication";

const Login = (props) => {
  const navigate = useNavigate();
  const authService = new AuthService();
  const loginFnc = (e) => {
    authService.login(e.target.value).then((result) => {
      const user = result.user.uid;
      return navigate("/home", user);
    });
  };

  useEffect(() => {
    authService.signedInUser(() => navigate("/home"));
  });

  return (
    <div>
      <button onClick={loginFnc} value={"Google"}>
        Google Login
      </button>
      <button onClick={loginFnc} value={"Github"}>
        Github Login
      </button>
    </div>
  );
};

export default Login;
