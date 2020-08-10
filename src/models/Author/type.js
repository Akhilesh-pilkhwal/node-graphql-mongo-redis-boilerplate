import  { gql } from 'apollo-server';

const AuthorSchema = gql`
  type Author {
    name: String
    books: [Book]
    email: String
    phoneNumber: String
  }
  # Query
  extend type Query {
    authors: [Author]
  }
`;

export default AuthorSchema;