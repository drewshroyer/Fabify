import React from "react";
import { Link } from "react-router-dom";

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playingSong: false, selectedSong: "" };
    this.handleSongClick = this.handleSongClick.bind(this);
    this.handleAddSongToPlaylist = this.handleAddSongToPlaylist(this);
  }

    handleSongClick() {
    this.props.togglePlayPause(
      this.props.song.id,
      this.props.song.name,
      this.props.song.photo_url,
      this.props.artist.name
    );
  }

  handleAddSongToPlaylist() {

  }

  componentDidMount() {
    this.props.fetchSongs();
    this.props.fetchPlaylists();
  }

//   componentWillUpdate(prevProps) {
//     if (this.props.artistId !== prevProps.artistId) {
//     this.fetchArtist(this.props.artistId)
//     }
//   }

  render() {
    const { songs, artistName, artistBio, artistId} = this.props;
    let artistSongs = []
    songs.forEach(song => {
        if(song.artist_id === artistId){
            artistSongs.push(song);
        }
    })
    if (!artistSongs) return null;
    // let firstSong = artistSongs.1;
    // let artistPhoto = firstSong.photo_url;
    return (
      <div className="playlist-show-container">  
      <div className="artist-show-info-container">
      <ul >
         {artistSongs.map((song, idx) => (
             <div className="playlist-song-tile-container">
            <img src={song.photo_url} className="artist-show-music-tile-photo" />
            </div>
         ))}
        </ul>
          <div className="artist-subheader-show">Verified Artist</div>
        <div className="playlist-show-title">{artistName}</div>
          <div className="artist-show-description">
            {artistBio}
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
              <div className="playlist-song-tile-container" onClick={this.handleSongClick}>
        <div className="playlist-music-tile">
          <audio
            src={song.audio_url}
            className="playlist-music-tile-audio-file" // search how manipulate and format audio tags
            controls
            id={`audio-element--${song.id}`}
          />
          <div className="playlist-music-tile-number-container">
            <div className="playlist-music-tile-number">{song.id} 
              <div
                className="playlist-music-tile-audio"
              >
                <img
                  className="playlist-music-tile-play-button"
                  src={window.whitePlayButton}
                  alt="white-play-button"
                ></img>
              </div>
            </div>
          </div>
          <img src={song.photo_url} className="playlist-music-tile-photo" />
          <div className="playlist-music-tile-name">{song.name}</div>
          <div className="playlist-music-tile-artist">{artistName}</div>
          <div className="dropdown">
           <button className="three-dot-options" >...
           </button>
           <div className="dropdown-content">
             <div className="dropdown-content-flex">
             <div className="delete-playlist-button" onClick={this.handleDeletePlaylist}>Delete Playlist</div>
             <Link to="/webplayer">
             <div className="delete-playlist-button" onClick={this.removeSongFromPlaylist}>Add Song to Playlist</div>
             </Link>
             </div>
           </div>
           </div>
        </div>
      </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ArtistShow;