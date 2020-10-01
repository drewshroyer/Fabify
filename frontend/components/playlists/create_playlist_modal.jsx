import React from "react";
import {Link} from 'react-router-dom';
import { openModal, closeModal } from "../../actions/modal_actions";

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currentUser, fetchUser } = this.props;
    this.props.closeModal();
    const newState = Object.assign({}, this.state);
    if (this.state.title.length === 0) {
      newState.title = "New Playlist";
    }
    this.props.processForm(newState).then(fetchUser(currentUser.id));
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
      if (!this.props.show) {
        return null;
      }
    return (
      <div className="modal-container">
        <div className="inner-modal-container">
          <div className="create-playlist-modal">
            <div onClick={this.props.closeModal} className="x-icon">
              X
            </div>
            <h1 className="create-new-playlist-container">
              Create new playlist
            </h1>
            <div className="create-playlist-input-bar">
              <form onSubmit={this.handleSubmit}>
                <div className="new-playlist-input">
                  <div className="new-playlist-input-title">Playlist Name</div>
                      <input
                        type="text"
                        value={this.state.title}
                        onChange={this.update("title")}
                        placeholder="New Playlist"
                        className="new-playlist-input-text"
                      />
                  </div>
                  </form>
                </div>
              <div className="cancel-create-buttons">
                <button
                  className="playlist-cancel-button"
                  onClick={() => this.props.closeModal()}
                  value="CANCEL"
                >
                  CANCEL
                </button>
                <button
                  className="playlist-create-button"
                  type="submit"
                  value="CREATE"
                  onSubmit={this.handleSubmit}
                >
                  CREATE
                </button>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default CreatePlaylist;