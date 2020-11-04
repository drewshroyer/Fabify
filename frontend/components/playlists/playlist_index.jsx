import React from 'react'
import { Link } from 'react-router-dom'

class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { playlist } = this.props;
        return (
          <div className="nav-bar-playlist-list">
            <Link to={`/playlists/${playlist.id}`}></Link>
            <div className="nav-bar-playlist-name">{playlist.name}</div>
          </div>
        );
    }
}

export default PlaylistIndex;