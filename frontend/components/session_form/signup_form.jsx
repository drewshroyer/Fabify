import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      confirmEmail: "",
      password: "",
      name: "",
      gender: "",
      birthdate: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

//   handleEmail = () => {
//     const { email, confirmEmail } = this.state;
//     if (email !== confirmEmail) {
//       alert("Emails don't match");
//     } else {
//       this.handleSubmit(e);
//     }
//   };

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div id="wrap">
        <div className="signup-form-container">
          <header>
            <Link to="/" className="header-link">
              <img
                src={window.spotifyLogoURL}
                alt="spotify_logo"
                width="135px"
                height="45px"
              ></img>
            </Link>
          </header>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h1>Sign up for free to start listening.</h1>
            <br />
            {this.renderErrors()}
            <div className="signup-form">
              <h2>Sign up with your email address</h2>
              <br />
              <label>
                What's your email?
                <input
                  className="signup-input-box"
                  type="email"
                  placeholder="Enter your email."
                  value={this.state.email}
                  onChange={this.update("email")}
                />
              </label>
              <br />
              <label>
                Confirm your email
                <input
                  className="signup-input-box"
                  type="email"
                  placeholder="Enter your email again"
                  value={this.state.email}
                  onChange={this.update("email")} /// how to confirm an email matches another
                />
              </label>
              <br />
              <label>
                Create a Password
                <input
                  className="signup-input-box"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                />
              </label>
              <br />
              <label>
                What should we call you?
                <input
                  className="signup-input-box"
                  type="name"
                  value={this.state.name}
                  placeholder="Enter a profile name"
                  onChange={this.update("name")}
                />
              </label>
              <br />
              <label>
                What's your date of birth?
                <input
                  className="signup-input-box"
                  type="date"
                  value={this.state.birthdate}
                  onChange={this.update("birthdate")}
                />
              </label>
              <br />
              What's your gender?
              <br />
              <div className="signup-gender-fields">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={this.update("gender")}
                />
                <label for="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={this.update("gender")}
                />
                <label for="female">Female</label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="non-binary"
                  onChange={this.update("gender")}
                />
                <label for="other">Non-binary</label>
              </div>
              <p>
                By clicking on Sign up, you agree to Spotify's Terms and
                Conditions of Use. To learn more about how Spotify collects,
                uses, shares and protects your personal data please read
                Spotify's Privacy Policy.
              </p>
              <input
                className="signup-session-submit"
                type="submit"
                value={this.props.formType}
                onSubmit={this.handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
