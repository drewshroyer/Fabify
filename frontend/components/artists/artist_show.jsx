import React from "react";
import { Link } from "react-router-dom";
import PlaylistSongIndexItem from "../playlists/playlist_song_index"


class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playingSong: false, selectedSong: "" };
    this.handleSongClick = this.handleSongClick.bind(this);
    // this.handleAddSongToPlaylist = this.handleAddSongToPlaylist(this);
  }

    handleSongClick() {
    this.props.togglePlayPause(
      this.props.song.id,
      this.props.song.name,
      this.props.song.photo_url,
      this.props.artist.name
    );
  }

  handleAddSongToPlaylist(playlistSong) {
    this.props.addSongToPlaylist(playlistSong);
  }

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchPlaylists();
  }

  render() {
    const { playlists, songs, artistName, artistBio, artistId} = this.props;
    let artistSongs = []
    songs.forEach(song => {
        if(song.artist_id === artistId){
            artistSongs.push(song);
        }
    })
    if (!artistSongs) return null;
    return (
      <div className="playlist-show-container">  
      <div className="artist-show-info-container">
      <ul >
         {artistSongs.map((song, idx) => (
                 <div className="playlist-song-tile-container">
                <img src={song.photo_url} className={`artist-show-music-tile-photo-${idx}`} />
                </div>
         ))}
        </ul>
        <div className="artist-content-container">
          <div className="artist-subheader-show">Verified Artist</div>
        <div className="artist-show-name">{artistName}</div>
          <div className="artist-show-description">
            {artistBio}
          </div>
         </div>

        </div>
        <div className="artist-show-container">
          <div className="dropdown">
           <button className="three-dot-options" >
           </button>
           <div className="dropdown-content">
             <div className="dropdown-content-flex">  
             <Link to="/webplayer">
             <div className="delete-playlist-button">Return to Home</div>
             </Link>  
             <div className="delete-playlist-button" onClick={this.handleAddSongToPlaylist}>Add Song to Playlist</div>
             </div>
           </div>
           </div>
        </div>
         <div className="playlist-music-tile-line-item">
          <ul >
            {artistSongs.map((song, idx) => (
              <PlaylistSongIndexItem
                playlists={playlists}
                idx = {idx}
                song={song}
                artist={artistName}
                key={song.id}
                togglePlayPause={this.props.togglePlayPause}
                handleAddSongToPlaylist = {this.props.handleAddSongToPlaylist}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ArtistShow;