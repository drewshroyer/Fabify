import React from "react";
import { Link } from "react-router-dom";

class PlaylistIndex extends React.Component {

    componentDidMount(){
        this.props.fetchUserPlaylists();
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

export default PlaylistIndex;