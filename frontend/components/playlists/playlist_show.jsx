import React from "react";
import PlaylistSongIndexItem from "../playlists/playlist_song_index";

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteThisPlaylist = this.deleteThisPlaylist.bind(this);
  }

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchPlaylists();
    // this.props.fetchArtists();
  }

  //   deleteCurrentPlaylist() {
  //     this.props
  //       .deletePlaylist(this.props.playlistId)
  //       .then(() => this.props.history.push("/webplayer"));
  //   }

  render() {
    // debugger
    //  if (!this.props.playlist || !this.props.songs || !this.props.albums) {
    //    return null;
    //  }
    const { songs, artists, playlists } = this.props;
    if (!songs) return null;

    return (
      <div className="playlist-show-container">
        <div
          data-testid="background-image"
          className="background-header-image-playlist-show"
        >
          <div className="playlist-subheader-show">Playlist</div>
          <div className="playlist-show-title">New Music Friday</div>
          <div className="playlist-show-description">
            Brand new music from Sam Smith, Miley Cyrus, 070 Shake, and more!
          </div>
        </div>
        <ul className="playlist-music-tile-line-item">
          {songs.map((song) => (
            <PlaylistSongIndexItem
              song={song}
              artist={artists[song.artist_id]}
              key={song.id}
              togglePlayPause={this.props.togglePlayPause}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default PlaylistShow;
