import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/home";
import Login from "./components/Login/login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
