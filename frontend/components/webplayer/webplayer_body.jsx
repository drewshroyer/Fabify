import React from "react";
import SongIndexItem from "./song_Index_Item";
import PlaylistIndex from "../playlists/playlist_index"

class WebPlayerBody extends React.Component {
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
    if(!songs) return null;
    return (
      <div className="webplayer-body-container">
        <div className="webplayer-top-shortcuts-see-all">
        <div className="shortcuts-keyword-webplayer">Shortcuts</div>
        <div className="see-all-playlists-keyword-webplayer">See All Playlists</div>
        </div>
        <ul className="webplayer-music-tile-line-item">
          {songs.map((song) => (
            <SongIndexItem
              song={song}
              artist={artists[song.artist_id]}
              key={song.id}
              togglePlayPause={this.props.togglePlayPause}
            />
          ))}
        </ul>
        <ul className="webplayer-music-tile-line-item">
          {/* {playlists.map((playlist) => (
            <PlaylistIndex playlist={playlist} key={playlist.id} />
          ))} */}
        </ul>
      </div>
    );
  }
}

export default WebPlayerBody;