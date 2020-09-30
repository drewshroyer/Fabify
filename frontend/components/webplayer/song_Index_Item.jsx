import React from "react";
import { Link } from "react-router-dom";

class SongIndexItem extends React.Component {
  render() {
    const { song, artist} = this.props;
    return (
      <div className="webplayer-music-tile-container">
        <div className="webplayer-music-tile">
          <Link to={`/songs/${song.id}`}></Link>
          <img src={song.photo_url} className="webplayer-music-tile-photo" />
          <div className="webplayer-music-tile-name">{song.name}</div>
          <div className="webplayer-music-tile-artist">{artist.name}</div>
          <audio
            src={song.audio_url}
            className="webplayer-music-tile-audio" // search how manipulate and format audio tags 
            controls
          />
        </div>
      </div>
    );
  }
}

export default SongIndexItem;
