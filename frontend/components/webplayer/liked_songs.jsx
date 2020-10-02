import React from "react";
import { Link } from "react-router-dom";
import SongIndexItem from "./song_Index_Item";

class LikedSongs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
    // this.props.fetchPlaylists();
    // this.props.fetchArtists();
  }

  render() {
    const { songs, artists } = this.props;
    if (!songs) return null;
    // console.log(this.props);
    return (
      <div className="webplayer-body-container">
        <div className="shortcuts-keyword-webplayer">Liked Songs</div>
        <ul className="webplayer-music-tile-line-item">
          {songs.map((song) => (
            <SongIndexItem
              song={song}
              artist={artists[song.artist_id]}
              key={song.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default LikedSongs;
