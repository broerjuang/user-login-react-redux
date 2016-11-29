import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginUser from './components/LoginUser';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPage} />
    <Route path="home" component={LoginUser} />
  </Route>
)
