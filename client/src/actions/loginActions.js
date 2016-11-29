import axios from 'axios';
import Auth from '../token';
import { browserHistory } from 'react-router';


const url = 'http://localhost:3001/api'

export function loginRequest(userData) {
   return () => {
     axios
     .post(`${url}/login`, userData)
     .then(response => {
       Auth.authenticateUser(response)
       browserHistory.push('/dashboard')
     })
     .catch(err => console.log(err))
  }
}