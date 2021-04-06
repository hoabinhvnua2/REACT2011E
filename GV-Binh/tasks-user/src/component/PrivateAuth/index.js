import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router";

PrivateAuth.propTypes = {};

function PrivateAuth({ component: Component, ...rest }) {
  const [auth, setAuth] = useState(true);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth) {
          return <Redirect to={{ pathname: "/sign-in" }} />;
        }
        return <Component {...props}/>;
      }}
    />
  );
}

export default PrivateAuth;
