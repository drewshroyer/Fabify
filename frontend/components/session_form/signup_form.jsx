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

  renderErrors() {
    return (
      <ul className="render-errors-ul">
        {this.props.errors.map((error, i) => (
          <div key={`error-${i}`}>{error}</div>
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
          <form onSubmit={this.handleSubmit} className="sign-up-form-box" >
            <div className="sign-up-header-container">Sign up for free to start listening.</div>
            <br />
            <div className="sign-up-thin-divider"></div>
            {this.renderErrors()}
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
                <label htmlFor="male" className="gender-input">Male</label>
                <input           
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={this.update("gender")}
                />
                <label htmlFor="female" className="gender-input">Female</label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="non-binary"
                  onChange={this.update("gender")}
                />
                <label htmlFor="other" className="gender-input">Non-binary</label>
              </div>
              <p>
                By clicking on Sign up, you agree to Fabify's Terms and
                Conditions of Use. To learn more about how Fabify collects,
                uses, shares and protects your personal data please read
                Fabify's Privacy Policy.
              </p>
              <input
                className="signup-session-submit"
                type="submit"
                value={this.props.formType}
                onSubmit={this.handleSubmit}
              />
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
