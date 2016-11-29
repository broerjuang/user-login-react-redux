import React from 'react';
import { isLoggedIn } from '../../actions/signupActions'

const Watch = () => {
  isLoggedIn()
  return (
    <div className="jumbotron">
        <h1>Watching Dude!</h1>
      </div>
  )
}

export default Watch;
