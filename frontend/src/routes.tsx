import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./components/pages/homePage/HomePage";
import Classes from "./components/pages/classes/Classes";
import Prices from "./components/pages/prices/Prices";
import Contact from "./components/pages/contact/Contact";
import LogInPanel from "./components/pages/logIn/LogInPanel";
import AdminPanel from "./components/pages/adminPanel/AdminPanel";
import UserPanel from "./components/pages/userPanel/UserPanel";
import Schedule from "./components/pages/schedule/Schedule";

export default function Routes() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/classes" component={Classes} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/instructors" component={Instructors} />
        <Route path="/prices" component={Prices} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={LogInPanel} />
        <Route path="/user" component={UserPanel} />
        <Route path="/admin" component={AdminPanel} />
      </Switch>
      <Footer />
    </Router>
  );
}

const Instructors = () => {
  return <h2>Instruktorzy</h2>;
};
