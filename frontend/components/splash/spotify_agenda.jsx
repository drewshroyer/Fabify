import { Link } from "react-router-dom";
import Navbar from "./nav_bar"
import Footer from './footer'
import React from 'react';

class Agenda extends React.Component {
  constructor(props) {
    super(props);
    this.startMoving = this.startMoving.bind(this);
    this.openAddSongModal = this.openAddSongModal.bind(this);
    this.closeAddSongModal = this.closeAddSongModal.bind(this);

  }

 componentDidMount() {
    this.startMoving()
 }
    startMoving() { 
        let timer = setInterval(function() {  
            let additionalHeight = 0;
            if(additionalHeight === 50) {
              additionalHeight--;
            }
        }, 500); 
    } 

    openAddSongModal() {
     let openModal = document.getElementsByClassName("technologies-popup")
    for(let i = 0; i < openModal.length; i++){
      openModal[i].style.display = 'block'
    }
  }

  closeAddSongModal() {
    let openModal = document.getElementsByClassName("technologies-popup")
    for(let i = 0; i < openModal.length; i++){
      openModal[i].style.display = 'none'
    }
  }

render() {
  let technologiesPopUp =  
        <div className="technologies-popup">
              <div className="technologies-inner">
                  <div className="technologies-timeline">
                  <div className="technologies-items">Ruby On Rails</div>
                  <div className="technologies-items">PostGreSQL</div>
                  <div className="technologies-items">AWS S3</div>
                  <div className="technologies-items">React</div>
                  <div className="technologies-items">Redux</div>
                  <div className="technologies-items">HTML/CSS</div>
                  <div className="technologies-items">Heroku</div>
                  <div className="technologies-items">Github</div>
                </div> 
                <div className="top-row">
                      <svg className="x-container" onClick={this.closeAddSongModal}>
                      <polygon points="52.506,12.908 51.092,11.494 32,30.586 12.908,11.494 11.494,12.908 30.586,32 11.494,51.092 12.908,52.506       32,33.414 51.092,52.506 52.506,51.092 33.414,32  "></polygon>
                      </svg>
                  </div>
          </div>
      </div>

        return (
          <div>
            <Navbar />
            <div className="background-agenda-splash">
              <h2 className="agenda-title">AGENDA</h2>
              <div className="sound-wave">
              <div style={{ height: "49%"}}></div><div style={{ height: " 39%" }}></div><div style={{ height: " 30%" }}></div><div style={{ height: " 47%" }}></div><div style={{ height: " 66%" }}></div><div style={{ height: " 87%" }}></div><div style={{ height: " 93%" }}></div><div style={{ height: " 73%" }}></div><div style={{ height: " 70%" }}></div><div style={{ height: " 40%" }}></div><div style={{ height: " 44%" }}></div><div style={{ height: " 24%" }}></div><div style={{ height: " 49%" }}></div><div style={{ height: " 54%" }}></div><div style={{ height: " 40%" }}></div><div style={{ height: " 42%" }}></div><div style={{ height: " 40%" }}></div><div style={{ height: " 69%" }}></div><div style={{ height: " 85%" }}></div><div style={{ height: " 89%" }}></div><div style={{ height: " 59%" }}></div><div style={{ height: " 45%" }}></div><div style={{ height: " 35%" }}></div><div style={{ height: " 29%" }}></div><div style={{ height: " 18%" }}></div><div style={{ height: " 14%" }}></div><div style={{ height: " 9%" }}></div><div style={{ height: " 16%" }}></div>
              <div style={{ height: "49%"}}></div><div style={{ height: " 39%" }}></div><div style={{ height: " 30%" }}></div><div style={{ height: " 47%" }}></div><div style={{ height: " 66%" }}></div><div style={{ height: " 73%" }}></div><div style={{ height: " 70%" }}></div><div style={{ height: " 40%" }}></div><div style={{ height: " 44%" }}></div><div style={{ height: " 24%" }}></div><div style={{ height: " 49%" }}></div><div style={{ height: " 54%" }}></div><div style={{ height: " 40%" }}></div><div style={{ height: " 42%" }}></div><div style={{ height: " 40%" }}></div><div style={{ height: " 69%" }}></div><div style={{ height: " 85%" }}></div><div style={{ height: " 89%" }}></div><div style={{ height: " 59%" }}></div><div style={{ height: " 45%" }}></div><div style={{ height: " 35%" }}></div><div style={{ height: " 29%" }}></div><div style={{ height: " 18%" }}></div><div style={{ height: " 14%" }}></div><div style={{ height: " 9%" }}></div><div style={{ height: " 16%" }}></div>
              </div>
              <div className="agenda-timeline">
                <div className="agenda-timeline-items" onClick={this.openAddSongModal}>Technologies</div>
                <div className="agenda-timeline-items">Features</div>
                <div className="agenda-timeline-items">Bonus</div>
                <div className="agenda-timeline-items">Learnings</div>
                <div className="agenda-timeline-items">Future</div>
                <div className="agenda-timeline-items">Questions</div>
                </div> 
                {technologiesPopUp}
            </div>
            <Footer />
          </div>
        );
    }
}

export default Agenda;