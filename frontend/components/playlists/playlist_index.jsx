import React from 'react'
import { Link } from 'react-router-dom'

class PlaylistIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { playlist } = this.props;
        return (
      <div className="webplayer-music-tile-container">
        <div className="webplayer-music-tile">
          <Link to={`/playlists/${playlist.id}`}></Link>
          <div className="webplayer-music-tile-name">{playlist.name}</div>
        </div>
      </div>
        )
    }
}

export default PlaylistIndex;