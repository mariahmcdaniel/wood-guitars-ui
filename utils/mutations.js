import { gql } from "@apollo/client";


export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
    }
  }
}
`;

export const REGISTER_USER = gql`
  mutation addUser($email: String!, $username: String!, $password: String!, $age: String, $city: String, $state: String, $interestedIn: String, $gender: String, $pronouns: String, $firstName: String!, $lastName: String!) {
  addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;