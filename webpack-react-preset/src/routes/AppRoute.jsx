import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import {routes} from "./routes";
import {HOME_ROUTE} from "./constants";

const AppRoute = () => {
  return (
    <Switch>
      {
        routes.map(({path, component}) => (
          <Route path={path} component={component} key={path} exact />
        ))
      }
      <Redirect to={HOME_ROUTE} />
    </Switch>
  );
};

export default AppRoute;
