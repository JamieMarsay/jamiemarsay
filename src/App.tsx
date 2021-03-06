import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "@Components/ScrollToTop/ScrollToTop";
import Cursor from "@Components/Cursor/Cursor";
import Main from "@Components/Main/Main";
import FourOhFour from "@Views/404/404";
import Home from "@Views/Home/Home";

const routes = [
  {
    view: Home,
    path: "/",
  },
  {
    view: FourOhFour,
    path: "",
  },
];

const App: FunctionComponent = () => {
  return (
    <Router>
      <ScrollToTop />
      <Cursor />
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
    </Router>
  );
};

export default App;
