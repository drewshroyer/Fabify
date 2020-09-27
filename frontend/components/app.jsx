import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import Splash from "./splash/splash_form";
import WebPlayer from './webplayer/webplayer';
import Search from "./webplayer/search";
import Library from "./webplayer/library";
import { AuthRoute } from "../util/route_util";
import SessionForm from "./session_form/login_form";
import Navbar from "./splash/nav_bar";

const App = () => (
  <div>
    <Route exact path="/" component={Splash} />
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <Route exact path="/webplayer" component={WebPlayer} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/library" component={Library} />
  </div>
);

export default App;
