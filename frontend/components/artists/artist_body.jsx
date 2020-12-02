import React from "react";
import { connect } from "react-redux";
import InternalNavbarContainer from "../nav/internal-nav_container";
import PlayBarContainer from "../playbar/play-bar-container";
import ArtistShowContainer from "./artist_show_container";
import { logout } from "../../actions/session_actions";
import { fetchArtist } from "../../actions/artist_actions";

class ArtistShowBody extends React.Component {
    constructor(props) {
    super(props);
    this.togglePlayPause = this.togglePlayPause.bind(this);
    this.state = { 
        playingSong: false, 
        selectedSong: "",
        name: "",
        photo: "",
        artist: "",
        artistName: "",
        artistBio: "",
        artistId: ""
     };
  }

  componentDidMount() {
     this.props.fetchArtist(this.props.match.params.artistId);
     this.setState({
        artistName: this.props.artist.name,
        artistBio: this.props.artist.biography,
        artistId: this.props.artist.id
    })
   }

   componentDidUpdate(prevProps, prevState) {
      if(prevProps.artist.name !== this.props.artist.name) {
        this.setState({
          artistName: this.props.artist.name,
          artistBio: this.props.artist.biography,
          artistId: this.props.artist.id
        })
      }
      if(prevProps.match.params.artistId !== this.props.match.params.artistId) {
        this.props.fetchArtist(this.props.match.params.artistId);
      }
   }

   togglePlayPause(id, name, photo, artist) {
    const audioEle = document.getElementById(`audio-element--${id}`);
    if (this.state.selectedSong === id) {
      this.setState({ playingSong: !this.state.playingSong });
    } else {
      // this where we set a new song
      this.setState({
        selectedSong: id,
        playingSong: false,
        name: name,
        photo: photo,
        artist: artist,
      });
    }
    if (this.state.playingSong) {
      audioEle.pause();
    } else {
      audioEle.play();
    }
  }

  render() {
    const { songs } = this.props;
    return (
      <div className="web-player-container">
        <InternalNavbarContainer />
        <div className="webplayer-outer-body-container">
          <div className="top-bar-container">
            <div className="dropdown">
           <button className="webplayer-logout-button">Menu
           </button>
           <div className="dropdown-content-webplayer">
             <div className="dropdown-content-flex">  
             <div className="delete-playlist-button">
               <a
            className="nav-bar-link"
            id="nav-bar-dash"
            href={"http://www.drewshroyer.github.io/"}
            target = "_blank"
          >
            Drew Shroyer
          </a>
          </div>
             <div className="delete-playlist-button">
               <a
            className="nav-bar-link"
            id="nav-bar-dash"
            href={"https://www.linkedin.com/in/drew-shroyer-861b32a4/"}
            target = "_blank"
          >
            LinkedIn
          </a></div>
             <div className="delete-playlist-button"> <a
            className="nav-bar-link"
            id="nav-bar-dash"
            target = "_blank"
            href={"https://www.github.com/drewshroyer/"}
          >
            GitHub
          </a> </div>
             <div className="delete-playlist-button">
                <div className="nav-bar-link" onClick={this.props.logout}>Logout
                </div>
              </div>
             </div>
           </div>
           </div>
          </div>
        <div className="webplayer-body-container">
        <ArtistShowContainer 
            artistId={this.state.artistId}
            artistName={this.state.artistName}
            artistBio={this.state.artistBio}
            togglePlayPause={this.togglePlayPause}
        />
        </div>
        </div>
        <PlayBarContainer
            togglePlayPause={this.togglePlayPause}
            selectedSong={this.state.selectedSong}
            name={this.state.name}
            photo={this.state.photo}
            artist={this.state.artist}
        />
     </div>
    )
  }
}

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchArtist: id => dispatch(fetchArtist(id)),
  };
};

const mSTP = (state, ownProps) => {  
  return {
    artist: state.entities.artists[ownProps.match.params.artistId] || {}
  };
};

export default connect(mSTP, mDTP)(ArtistShowBody);