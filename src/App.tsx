import React, { FunctionComponent } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import Main from "@Components/Main/Main";
import Contact from "@Views/Contact/Contact";
import FourOhFour from "@Views/404/404";
import About from "@Views/About/About";
import Home from "@Views/Home/Home";
import Work from "@Views/Work/Work";

const routes = [
  {
    view: About,
    path: "/about"
  },
  {
    view: Contact,
    path: "/contact"
  },
  {
    view: Home,
    path: "/home"
  },
  {
    view: Work,
    path: "/work"
  },
  {
    view: FourOhFour,
    path: ""
  }
];

const App: FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ view, path }, key) => (
          <Route
            component={() => <Main Current={view} />}
            path={path}
            key={key}
            strict
            exact
          />
        ))}
      </Switch>

      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
    </Router>
  );
};

export default App;
