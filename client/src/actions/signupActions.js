import axios from 'axios';
import Auth from '../token';
import { Router, browserHistory } from 'react-router';


const url = 'http://localhost:3001/api'

export function userSignupRequest(userData) {
   return () => {
     axios
     .post(`${url}/users`, userData)
     .then(response => {
      console.log(response)
       Auth.authenticateUser(response)
     })
     .catch(err => console.log(err))
  }
}
