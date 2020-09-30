import React from "react";
import { Link } from "react-router-dom";

class SongIndexItem extends React.Component {
  render() {
    const { song, artist, photo } = this.props;
    return (
      <div className="webplayer-music-tile-container">
        <div className="webplayer-music-tile">
          <Link to={`/songs/${song.id}`}></Link>
          <div className="webplayer-music-tile-photo">{song.photo}</div>
          <div className="webplayer-music-tile-name">{song.name}</div>
          <div className="webplayer-music-tile-artist">{song.artist}</div>
        </div>
      </div>
    );
  }
}

export default SongIndexItem;
