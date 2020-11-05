import React from "react";

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: {
        name: "",
        // author_id: currentUser.id,
      },
      isOpen: true,
    };

    this.handleClickforCancel = this.handleClickforCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.playlist);
    this.props.createPlaylist(this.state.playlist);
    this.props.toggleModal();
  }

  handleChange(field) {
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }

  handleClickforCancel() {
    this.props.toggleModal();
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-container">
        <div className="inner-modal-container">
          <div className="create-playlist-modal">
            <div className="x-icon">
              <button
                className="x-icon-style"
                onClick={this.handleClickforCancel}
              >
                X
              </button>
            </div>
            <h1 className="create-new-playlist-container">
              Create new playlist
            </h1>
            <div className="create-playlist-input-bar">
              <form className="create-playlist-form-container" onSubmit={this.handleSubmit}>
                <div className="new-playlist-input">
                  <div className="new-playlist-input-title">Playlist Name</div>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                    placeholder="New Playlist"
                    className="new-playlist-input-text"
                  />
                </div>
                <div className="cancel-create-buttons">
                  <button
                    className="playlist-cancel-button"
                    onClick={this.handleClickforCancel}
                    value="CANCEL"
                  >
                    CANCEL
                  </button>
                  <input
                    className="playlist-create-button"
                    type="submit"
                    value="CREATE"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePlaylist;