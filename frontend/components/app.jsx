import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import Splash from "./splash/splash_form";
import WebPlayer from './webplayer/webplayer';
import Search from "./webplayer/search";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LikedSongs from "./webplayer/liked_songs"
import PlaylistShowBody from "./playlists/playlist_show_body";
import PlaylistAllIndex from "./playlists/playlist_home_index_container";

const App = () => (
  <div>
    <Route exact path="/" component={Splash} />
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <ProtectedRoute exact path="/webplayer" component={WebPlayer} />
    <ProtectedRoute
      exact
      path="/playlists/:playlistId"
      component={PlaylistShowBody}
    />
    <ProtectedRoute exact path="/likes" component={LikedSongs} />
    <ProtectedRoute
      exact
      path="/playlists/:playlistId"
      component={PlaylistShowBody}
    />
    <ProtectedRoute
      exact
      path="/playlists"
      component={PlaylistAllIndex}
    />
  </div>
);

export default App;
