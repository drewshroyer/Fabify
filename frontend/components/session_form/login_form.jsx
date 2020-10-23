import React from "react";
import { withRouter, Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillUnmount() {
    this.clearErrors();
  }

  clearErrors() {
    return <div></div>;
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  handleDemoLogin(e) {
    e.preventDefault();
    let user = {
      email: "DemoUser@gmail.com",
      password: "password",
    };
    this.props.login(user);
  }

  render() {
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
            <div className="login-form">
              <button className="demo-user-login-button" type="submit" value="">
                Demo User Login
              </button>
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
                <div className="login-center-text">Don't have an account?</div>
                <br />
                <button className="signUp-button" type="submit" value="">
                  <Link to={`/signup`}>SIGN UP FOR FABIFY</Link>
                </button>
                {this.renderErrors()}
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
