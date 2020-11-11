import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/pages/homePage/HomePage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/classes" component={Classes} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/instructors" component={Instructors} />
        <Route path="/prices" component={Prices} />
      </Switch>
    </Router>
  );
}

const Classes = () => {
  return <h2>Zajęcia</h2>;
};

const Schedule = () => {
  return <h2>Grafik</h2>;
};

const Instructors = () => {
  return <h2>Instruktorzy</h2>;
};

const Prices = () => {
  return <h2>Cennik</h2>;
};
