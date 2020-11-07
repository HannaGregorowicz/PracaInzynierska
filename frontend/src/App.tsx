import React from "react";
import Routes from "./routes";
import Navbar from "./components/navbar/Navbar";
import "./style.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
};

export default App;
