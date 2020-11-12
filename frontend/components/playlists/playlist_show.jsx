import React from "react";
import PlaylistSongIndexItem from "../playlists/playlist_index";

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteThisPlaylist = this.deleteThisPlaylist.bind(this);
  }

//   componentDidMount() {
//     // this.props.fetchSongs();
//     // let playlistId = this.props.match.params.playlistId;
//     this.props.fetchPlaylist(this.props.playlistId);
//     // this.props.fetchArtists();
//   }

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
      </div>
    );
  }
}

export default PlaylistShow;
