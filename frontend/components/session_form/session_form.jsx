import React from 'react';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({[field]: e.currentTarget.value });
  }

  render () {
      return (
        <div class="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            Sign up for free to start listening.
            <br />
            Please {this.props.formType} or {this.props.navLink}
            {this.renderErrors()}
            <div className="login-form">
              <br />
              <label>
                Email:
                <input type="text" value={this.state.email} onChange={this.update("email")}
                />
              </label>
 
              <label>
                Password:
                <input type="password" value={this.state.password} onChange={this.update("password")}
                />
              </label>
              <br />
              <input className="session-submit" type="submit" value={this.props.formType}
              />
            </div>
          </form>
        </div>
      );
  }
}


export default SessionForm;