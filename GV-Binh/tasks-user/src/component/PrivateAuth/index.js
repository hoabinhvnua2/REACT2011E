import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router";

PrivateAuth.propTypes = {};

function PrivateAuth({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("user") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/sign-in", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateAuth;
