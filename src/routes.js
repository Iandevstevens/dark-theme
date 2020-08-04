import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: Home },
  { path: "/about", key: "ROOT", exact: true, component: About },
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes() {
  return (
    <Switch>
      {ROUTES.map((route, i) => {
        return <RouteWithSubRoutes {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}
