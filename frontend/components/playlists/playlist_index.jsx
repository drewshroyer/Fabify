import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPlaylists } from '../../actions/playlist_actions';

const mSTP = state => {
    return {
        playlists: Object.values(state.entities.playlists)
    }
}

const mDTP = dispatch => {
    return {
        fetchPlaylists: () => dispatch(fetchPlaylists()),
    }
}

class PlaylistIndex extends React.Component {

    componentDidMount(){
        this.props.fetchPlaylists();
    }
    
    render() {
        if (this.props.playlists.length === 0) {
            return null;     
        }
        const playlistIndex = this.props.playlists.map( playlist => {
            return (
                <li>
                    <Link to={`/playlist/${playlist.id}`}>{playlist.title}</Link> 
                </li>
            )
        });
        return (
            <div>
                <ul>
                    {playlistIndex}
                </ul>
            </div>
        )
    }
}

export default connect(mSTP, mDTP)(PlaylistIndex)