import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AuthService from "../../service/authentication";
import Footer from "../footer/footer";
import Header from "../header/header";

const LoginSection = styled.section`
  width: 30em;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const LoginDiv = styled.div`
  background-color: white;
`;

const Ullist = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
`;

const List = styled.li`
  margin-bottom: 0.5em;
  padding: 0.6rem;
`;

const Button = styled.button`
  width: 100%;
  height: 2.5em;
  font-size: 1.2rem;
  border-radius: 1.2rem;
  background-color: transparent;
  cursor: pointer;
  border: 0.2rem solid black;
  outline: 0;
`;

const Login = (props) => {
  const navigate = useNavigate();
  const authService = new AuthService();
  const loginFnc = (e) => {
    authService.login(e.target.value).then((result) => {
      const user = result.user.uid;
      navigate("/home", {
        state: {
          id: 1,
          name: user,
        },
      });
    });
  };

  useEffect(() => {
    authService.signedInUser((user) => {
      user &&
        navigate("/home", {
          state: {
            id: 1,
            name: user.uid,
          },
        });
    });
  }, []);

  return (
    <LoginSection>
      <Header />
      <LoginDiv>
        <h1>Login</h1>
        <Ullist>
          <List>
            <Button onClick={loginFnc} value={"Google"}>
              Google Login
            </Button>
          </List>
          <List>
            <Button onClick={loginFnc} value={"Github"}>
              Github Login
            </Button>
          </List>
        </Ullist>
      </LoginDiv>
      <Footer />
    </LoginSection>
  );
};

export default Login;
