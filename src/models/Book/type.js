import { gql } from 'apollo-server';

const BookSchema = gql`
type Book {
    id: String
    title: String
    author: String
}

input bookInput {
  id: String
  title: String
  author: String
}
#query
extend type Query {
  books: [Book]
  book (
    id: String!
  ): Book
}
#mutations
extend type Mutation {
  bookAdd (
    book: bookInput!
  ): Book
  bookUpdate (
    book: bookInput!
  ): Book
  bookDelete (
    id: String!
  ): Boolean
}
`;

export default BookSchema;