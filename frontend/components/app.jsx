import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import SignUpFormContainer from "./session_form/signup_form_container";
import LogInFormContainer from "./session_form/login_form_container";
import Splash from "./splash/splash_form";
import WebPlayer from './webplayer/webplayer';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import PlaylistShowBody from "./playlists/playlist_show_body";
import ArtistShowBody from "./artists/artist_body";
import PlaylistAllIndex from "./playlists/playlist_home_index_container";
import AllSongs from "./webplayer/all_songs";

const App = () => (
  <div>
    <Route exact path="/" component={Splash} />
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <ProtectedRoute exact path="/webplayer" component={WebPlayer} />
     <ProtectedRoute
      exact
      path="/playlists"
      component={PlaylistAllIndex}
    />
    <ProtectedRoute
      exact
      path="/playlists/:playlistId"
      component={PlaylistShowBody}
    />
    <ProtectedRoute
      exact
      path="/artists/:artistId"
      component={ArtistShowBody}
    />
     <ProtectedRoute
      exact
      path="/songs"
      component={AllSongs}
    />
    {/* <ProtectedRoute exact path="/likes" component={WebPlayer} /> */}
  </div>
);

export default App;
