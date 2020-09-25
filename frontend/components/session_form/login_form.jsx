import React from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  clearErrors() {
    return (
     <div></div>
    );
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li> ))}
      </ul>
    );
  }

  render () {
      return (
        <div id="wrap">
          <div className="login-form-container">
            <header>
              <Link to="/" className="header-link">
                <img
                  src={window.spotifyLogoURL}
                  alt="spotify_logo"
                  width=" 198px"
                  height="66px"
                ></img>
              </Link>
            </header>
            <span className="line"></span>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <div className="login-center-text">
                To continue, log in to Fabify.
              </div>
              <br />
              {this.renderErrors()}
              <div className="login-form">
                <br />
                <label>
                  Email address or username
                  <br />
                  <input
                    className="login-input-box"
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                  />
                </label>
                <br />
                <br />
                <label>
                  Password
                  <br />
                  <input
                    className="login-input-box"
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                  />
                </label>
                <br />
                <label>
                  <input
                    className="login-session-submit"
                    type="submit"
                    value={this.props.formType}
                    onSubmit={this.handleSubmit}
                  />
                </label>
                <br />
                <br />
                <span className="line"></span>
                <label>
                  <div className="login-center-text">
                    Don't have an account?
                  </div>
                  <br />
                  <button className="signUp-button" type="submit" value="">
                    <Link to={`/signup`}>SIGN UP FOR FABIFY</Link>
                  </button>
                </label>
              </div>
            </form>
          </div>
        </div>
      );
  }
}


export default LoginForm;