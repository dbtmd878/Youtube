import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AuthService from "../../service/authentication";
import Footer from "../footer/footer";
import Header from "../header/header";
import List from "../List/list";

const HomeSection = styled.section`
  width: 100%;
  height: 100vh;
`;

const Home = ({ videos }) => {
  const navigate = useNavigate();
  const authService = new AuthService();
  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    authService.signedInUser((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  return (
    <HomeSection>
      <Header onLogout={onLogout} />
      <List videos={videos} />
      <Footer />
    </HomeSection>
  );
};

export default Home;
