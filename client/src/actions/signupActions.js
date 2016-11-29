import axios from 'axios';
import Auth from '../token';
import { browserHistory } from 'react-router';


const url = 'http://localhost:3001/api'

export function userSignupRequest(userData) {
   return () => {
     axios
     .post(`${url}/users`, userData)
     .then(response => {
      console.log(response)
       Auth.authenticateUser(response)
       browserHistory.push('/')
     })
     .catch(err => console.log(err))
  }
}


export function isLoggedIn() {
  if(!Auth.getToken()){
    browserHistory.push('/login')
  }
}
