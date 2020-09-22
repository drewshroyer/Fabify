import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import { AuthRoute } from "../util/route_util";
import SessionForm from "./session_form/login_form";

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>Fabify</h1>
      </Link>
    </header>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
