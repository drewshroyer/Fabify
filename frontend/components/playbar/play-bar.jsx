import React from "react";
import { fetchSong } from "../../actions/song_actions";

class PlayBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songLength: "0:00",
    }
    this.togglePlayBar = this.togglePlayBar.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  togglePlayBar() {
    this.props.togglePlayPause(this.props.selectedSong);
  }

  handleBack() {
    const currentAudioEle = document.getElementById(`audio-element--${this.props.selectedSong}`);
    currentAudioEle.pause()
     let currentSong = this.props.selectedSong;
    let previousSong = this.props.songs.find(song => {
      return (song.id === currentSong - 1)
    })    
    const audioEle = document.getElementById(`audio-element--${this.props.selectedSong - 1}`);
    this.props.togglePlayPause(
      previousSong.id,
      previousSong.name,
      previousSong.photo_url,
      previousSong.name,
    );
      audioEle.play();
      this.setState({
        songLength: previousSong.song_length,
      })
  }

   handleNext() {
    const currentAudioEle = document.getElementById(`audio-element--${this.props.selectedSong}`);
    currentAudioEle.pause()
    let currentSong = this.props.selectedSong;
    let nextSong = this.props.songs.find(song => {
      return (song.id === currentSong + 1)
    })  
    const audioEle = document.getElementById(`audio-element--${nextSong.id}`);
    this.props.togglePlayPause(
      nextSong.id,
      nextSong.name,
      nextSong.photo_url,
      nextSong.name,
    );
      audioEle.play();
      this.setState({
        songLength: nextSong.song_length + `:${Math.floor(Math.random() * 60)}`,
      })
  }

  handleToggleShuffle() {
    let randomNumber = Math.floor(Math.random() * this.props.songs.length);
    let song1 = this.props.songs[randomNumber];
    const audioEle = document.getElementById(`audio-element--${song1.id}`);
    this.props.togglePlayPause(
      song1.id,
      song1.name,
      song1.photo_url,
      song1.name,
    );
      audioEle.play();

      this.setState({
        songLength: song1.song_length,
      })
  }

  // this method should help us not rerender the component but unsure how to effectively use it so far
  //  shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  //  }

  render() {
    const { selectedSong, name, artist, photo, songLength } = this.props;
    return (
      <div className="play-bar-container">
        <div className="left-play-bar">
          {photo && <img className="left-play-bar-photo-render" src={photo} />}
          <div className="left-play-bar-data">
            <div className="left-play-bar-name-render">{name}</div>
            <div className="left-play-bar-artist-render">{artist}</div>
          </div>
        </div>

        <div className="center-play-bar-vertical-container">
          <div className="center-play-bar">
            <img
              src={whitePreviousIcon}
              alt="whitePreviousIcon"
              className="previous-song-button"
              onClick={this.handleBack}
            />
            <img
              src={whitePlayCircleButton}
              alt="whitePlayCircleButton"
              className="main-play-button"
              onClick={this.togglePlayBar}
            />
            <img
              src={whitePauseCircleButton}
              alt="whitePlayCircleButton"
              className="main-pause-button"
              onClick={this.togglePlayBar}
            />
            <img
              src={whiteNextIcon}
              alt="whiteNextIcon"
              className="next-song-button"
              onClick={this.handleNext}
            />
          </div>
          <div className="timeline-slide-container">
            <div className="timeline-slide-time-count">O:OO</div>
            <input
              // type="range"
              min="1"
              max="100"
              placeholder="0"
              className="timeline-slider"
            />{" "}
            <div className="timeline-slide-time-count">{this.state.songLength}</div>
          </div>
        </div>

        <div className="right-play-bar">
          <img
            src={whiteVolumeIcon}
            alt="whiteVolumeIcon"
            className="white-volume-icon"
          />
          <div className="volume-slide-container">
            <input
              // onInput={setVolume(this.value)}
              // onChange={setVolume(this.value)}
              type="range"
              min="0"
              max="100"
              placeholder="100"
              className="volume-slider"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PlayBar;
