import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./nav_bar"
import Footer from './footer'

class Agenda extends React.Component {

render() {
        return (
          <div>
            <Navbar />
            <div className="background-agenda-splash">
              <h2 className="agenda-title">AGENDA</h2>
              <div class="sound-wave">
              <div style={{ height: "49%"}}></div><div style={{ height: " 39%" }}></div><div style={{ height: " 30%" }}></div><div style={{ height: " 47%" }}></div><div style={{ height: " 66%" }}></div><div style={{ height: " 87%" }}></div><div style={{ height: " 93%" }}></div><div style={{ height: " 73%" }}></div><div style={{ height: " 70%" }}></div><div style={{ height: " 40%" }}></div><div style={{ height: " 44%" }}></div><div style={{ height: " 24%" }}></div><div style={{ height: " 49%" }}></div><div style={{ height: " 54%" }}></div><div style={{ height: " 40%" }}></div><div style={{ height: " 42%" }}></div><div style={{ height: " 40%" }}></div><div style={{ height: " 69%" }}></div><div style={{ height: " 85%" }}></div><div style={{ height: " 89%" }}></div><div style={{ height: " 59%" }}></div><div style={{ height: " 45%" }}></div><div style={{ height: " 35%" }}></div><div style={{ height: " 29%" }}></div><div style={{ height: " 18%" }}></div><div style={{ height: " 14%" }}></div><div style={{ height: " 9%" }}></div><div style={{ height: " 16%" }}></div>
              <div style={{ height: "49%"}}></div><div style={{ height: " 39%" }}></div><div style={{ height: " 30%" }}></div><div style={{ height: " 47%" }}></div><div style={{ height: " 66%" }}></div><div style={{ height: " 73%" }}></div><div style={{ height: " 70%" }}></div><div style={{ height: " 40%" }}></div><div style={{ height: " 44%" }}></div><div style={{ height: " 24%" }}></div><div style={{ height: " 49%" }}></div><div style={{ height: " 54%" }}></div><div style={{ height: " 40%" }}></div><div style={{ height: " 42%" }}></div><div style={{ height: " 40%" }}></div><div style={{ height: " 69%" }}></div><div style={{ height: " 85%" }}></div><div style={{ height: " 89%" }}></div><div style={{ height: " 59%" }}></div><div style={{ height: " 45%" }}></div><div style={{ height: " 35%" }}></div><div style={{ height: " 29%" }}></div><div style={{ height: " 18%" }}></div><div style={{ height: " 14%" }}></div><div style={{ height: " 9%" }}></div><div style={{ height: " 16%" }}></div>
              </div>
              <div className="agenda-timeline">
                <div className="agenda-timeline-items">Technologies</div>
                <div className="agenda-timeline-items">Features</div>
                <div className="agenda-timeline-items">Bonus</div>
                <div className="agenda-timeline-items">Learnings</div>
                <div className="agenda-timeline-items">Future</div>
                <div className="agenda-timeline-items">Questions</div>
                </div> 
            </div>
            <Footer />
          </div>
        );
    }
}

export default Agenda;