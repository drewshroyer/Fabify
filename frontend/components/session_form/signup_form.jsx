import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li> ))}
      </ul>
    );
  }

  render() {
    return (
      <div class="signup-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Sign up for free to start listening.
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="signup-form">
            <br />
            <label>
              What's your email?
              <input
                type="text"
                value="Enter your email."
                onChange={this.update("email")}
              />
            </label>
            <br />
            <label>
              Confirm your email
              <input
                type="text"
                value="Enter your email again"
                onChange={this.update("email")} /// how to confirm an email matches another
              />
            </label>
            <br />
            <label>
              Create a Password
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            <br />
            <label>
              What should we call you?
              <input
                type="name"
                value="Enter a profile name"
                onChange={this.update("name")}
              />
            </label>
            <br />
            <label>
              What's your date of birth?
              <input
                type="birthdate"
                value=""
                onChange={this.update("birthdate")}
              />
            </label>
            {/* <br />
                <label>What's your gender? </label> 
              <input type="radio" id="male" name="gender" value="male" onChange={this.update('gender')}>
                <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female" onChange={this.update('gender')}>
                    <label for="female">Female</label>
            <input type="radio" id="other" name="gender" value="non-binary" onChange={this.update('gender')}>
                <label for="other">Non-binary</label>
            <br /> */}
            <input
              className="signup-submit"
              type="submit"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
