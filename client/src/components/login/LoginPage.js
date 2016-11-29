import React from 'react';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions/loginRequest';

class LoginPage extends React.Component {
  render() {
    const { loginRequest } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm loginRequest={loginRequest} />
        </div>
      </div>
    );
  }
}

LoginRequest.propTypes = {
  loginRequest: React.PropTypes.func.isRequired
}


export default connect(null, { loginRequest })(LoginPage);
