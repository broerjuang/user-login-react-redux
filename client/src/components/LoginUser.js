import React from 'react';
import { isLoggedIn } from '../actions/signupActions';

class LoginUser extends React.Component {
  render() {
    isLoggedIn()
    return (
      <div className="jumbotron">
        <h1>Only Login Can see this!</h1>
      </div>
    );
  }
}

export default LoginUser;
