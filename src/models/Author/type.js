import { gql } from 'apollo-server';

const AuthorSchema = gql`
  type Author {
    id: String
    name: String
    books: [Book]
    email: String
    phoneNumber: String
  }

  input authorInput {
    id: String
    name: String
    email: String
    phoneNumber: String
    books: [String]
  }
  # Query
  extend type Query {
    authors: [Author]
    author (
      id: String!
    ): Author
  }
  #mutations
  extend type Mutation {
    authorAdd (
      author: authorInput!
    ): Author
    authorUpdate (
      author: authorInput!
    ): Author
    authorDelete (
      id: String!
    ): Boolean
  }
`;

export default AuthorSchema;