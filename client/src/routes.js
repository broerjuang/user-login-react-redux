import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.js';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import Dashboard from './components/Dashboard';
import LoginPage from './components/login/LoginPage';
import Watch from './components/features/Watch';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="signup" component={SignupPage} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="login" component={LoginPage} />
    <Route path="watch" component={Watch} />
  </Route>
)
