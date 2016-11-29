import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { loginRequest } from '../../actions/loginActions';

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

LoginPage.propTypes = {
  loginRequest: React.PropTypes.func.isRequired
}


export default connect(null, { loginRequest })(LoginPage);
