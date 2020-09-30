import React from "react";
import { Link } from "react-router-dom";
import SongIndexItem from "./song_Index_Item";

class WebPlayerBody extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchPlaylists();
  }

  render() {
    const { songs } = this.props;
    if(!songs) return null;
    return (
      <div className="webplayer-body-container">
        <div className="shortcuts-keyword-webplayer">Shortcuts</div>
        <ul className="webplayer-music-tile-line-item">
          {songs.map((song) => (
            <SongIndexItem song={song} key={song.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default WebPlayerBody;