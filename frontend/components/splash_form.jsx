import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {

render() {
        return (
          <div className="background-splash">
            <div className="splash-title">Listening is everything</div>
            <h5>Millions of songs and podcasts. No credit card needed.</h5>
            <button className="splash-signUp-button" type="submit" value="">
              <Link to={`/signup`}>GET FABIFY FREE</Link>
            </button>
          </div>
        );
    }
}

export default Splash;