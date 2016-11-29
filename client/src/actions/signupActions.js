import axios from 'axios';

const url = 'http://localhost:3001/api'

export function userSignupRequest(userData) {
   return () => {
     axios.post(`${url}/users`, userData);
  }
}
