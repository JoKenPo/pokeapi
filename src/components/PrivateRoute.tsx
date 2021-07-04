import { Redirect, Route, RouteProps } from 'react-router-dom';

import { isAuthenticated } from "../services/auth";

interface PrivateRouteProps extends RouteProps {
  component: any;
  isSignedIn: boolean;
}


function PrivateRoute(props: PrivateRouteProps) {
  const { component: Component, ...rest } = props
  
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}