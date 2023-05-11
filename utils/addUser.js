import axios from "axios";

export function newUser (firstName, lastName, username, email, password) {
  axios
  .post('http://localhost:1337/auth/local/register', {
  firstName: `${firstName}`,
  lastName: `${lastName}`,
  username: `${username}`,
  email: `${email}`,
  password: `${password}`,  
  })
  .then(response => {
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
  })
  .catch(error => {
    console.log('An error occurred:', error.response);
  });
}
 
