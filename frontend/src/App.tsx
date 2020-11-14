import React from "react";
import Routes from "./routes";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./style.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
