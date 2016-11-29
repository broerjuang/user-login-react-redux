import React, { Component } from 'react';
// import { browserHistory } from 'react-router';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.loginRequest(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login </h1>
        <div className="form-group">
          <label className="control-label">username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            name="username"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            name="password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-md">
            Login
          </button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  loginRequest: React.PropTypes.func.isRequired
}

export default LoginForm;