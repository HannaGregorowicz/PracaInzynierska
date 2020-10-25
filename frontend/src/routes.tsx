import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Routes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li>
              <Link to="/classes">Zajęcia</Link>
            </li>
            <li>
              <Link to="/schedule">Grafik</Link>
            </li>
            <li>
              <Link to="/instructors">Instruktorzy</Link>
            </li>
            <li>
              <Link to="/prices">Cennik</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/classes" component={Classes} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/instructors" component={Instructors} />
          <Route path="/prices" component={Prices} />
        </Switch>
      </div>
    </Router>
  );
}

const HomePage = () => {
  return <h2>Strona główna</h2>;
};

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
