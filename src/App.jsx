import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Home/home";
import Login from "./components/Login/login";

const AppDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    youtube //
      .mostPopular()
      .then((result) => setVideos(result.items));
  }, []);
  const searchVideos = (value) => {
    youtube //
      .search(value)
      .then((result) => setVideos(result.items));
  };
  return (
    <AppDiv>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={<Home videos={videos} searchVideos={searchVideos} />}
        />
      </Routes>
    </AppDiv>
  );
};

export default App;
