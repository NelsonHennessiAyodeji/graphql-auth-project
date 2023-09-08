const { gql } = require('apollo-server');

// The configuration/ organisation of my types, queries and mutations

module.exports = gql`
  type User {
    name: String
    email: String
    password: String
    token: String
  }

  input SignupInput {
    name: String
    email: String
    password: String
  }

  input LoginInput {
    email: String
    password: String
  }

  type Query {
    user(id: ID!): User
  }

  type Mutation {
    signupUser(signupInput: SignupInput): User
    loginUser(loginInput: LoginInput): User
  }
`;
