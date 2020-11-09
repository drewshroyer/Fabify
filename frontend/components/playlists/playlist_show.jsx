import React from "react";
import PlaylistSongIndexItem from "../playlists/playlist_index";

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchPlaylists();
    // this.props.fetchArtists();
  }

  render() {
    // debugger
    const { songs, artists, playlists } = this.props;
    if (!songs) return null;
    return (
      <div className="webplayer-body-container">
        <div className="shortcuts-keyword-webplayer">TEST TEST</div>
        {/* <ul className="webplayer-music-tile-line-item">
          {songs.map((song) => (
            <PlaylistSongIndexItem
              song={song}
              artist={artists[song.artist_id]}
              key={song.id}
              togglePlayPause={this.props.togglePlayPause}
            />
          ))}
        </ul> */}
      </div>
    );
  }
}

export default PlaylistShow;