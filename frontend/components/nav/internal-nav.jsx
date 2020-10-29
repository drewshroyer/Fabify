import React from "react";
import { Link } from "react-router-dom";
import CreatePlaylist from "../playlists/create_playlist_modal";
import PlaylistIndex from "../playlists/playlist_index";

class InternalNavbar extends React.Component {
    constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // componentDidMount() {
  //   this.props.fetchPlaylists();
  // }

  render() {
    return (
      <div className="internal-nav-bar-container">
        <div className="internal-nav-bar-inner-container">
          <Link to="/webplayer">
            <img
              id="internal-white-splash-logo"
              src={window.whiteFabifyLogoURL}
              alt="spotify_logo"
            ></img>
          </Link>
          <div className="internal-nav-column">
            <div className="internal-home-link">
              <svg
                className="internal-nav-icon"
                viewBox="0 0 512 512"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
                  fill="currentColor"
                ></path>
              </svg>
              <Link to={`/webplayer`} className="internal-nav-link">
                Home{" "}
              </Link>
            </div>
            <div className="internal-search-link">
              <svg
                className="internal-nav-icon"
                viewBox="0 0 512 512"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
              <Link to={`/search`} className="internal-nav-link">
                Search
              </Link>
            </div>
            <div className="internal-library-link">
              <svg
                className="internal-nav-icon"
                viewBox="0 0 512 512"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M311.873 77.46l166.349 373.587-39.111 17.27-166.349-373.587zM64 463.746v-384h42.666v384h-42.666zM170.667 463.746v-384h42.667v384h-42.666z"
                  fill="currentColor"
                ></path>
              </svg>
              <Link to={`/library`} className="internal-nav-link">
                Your Library
              </Link>
            </div>
            <div className="playlist-header">PLAYLISTS</div>
            <div
              className="internal-create-playlist-link"
            >
              <svg
                className="internal-nav-icon"
                viewBox="0 0 512 512"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
                  fill="currentColor"
                ></path>
              </svg>
              <div className="internal-nav-link">
                <button
                  className="open-create-playlist-modal"
                  onClick={this.toggleModal}
                >
                  Create Playlist
                </button>
                <CreatePlaylist
                  toggleModal={this.toggleModal}
                  show={this.state.isOpen}
                  onClick={this.toggleModal}
                />
              </div>
            </div>
            <div className="internal-liked-songs-link">
              <svg
                className="internal-nav-icon"
                viewBox="0 0 512 512"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
                  fill="currentColor"
                ></path>
              </svg>
              <Link to={`/likes`} className="internal-nav-link">
                Liked Songs
              </Link>
            </div>
            <div className="internal-nav-line"></div>
            <div className="user-playlists">
            <PlaylistIndex />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InternalNavbar;
