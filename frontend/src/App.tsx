import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-slideshow-image/dist/styles.css";
import Routes from "./routes";
import "./style.css";

const App = () => {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
};

export default App;
