import { merge } from 'lodash';
import { gql } from 'apollo-server';
// Schema
import AuthorSchema from './models/Author/type';
import BookSchema from './models/Book/type';
// Resolvers
import AuthorResolver from './models/Author/resolver';
import BookResolver from './models/Book/resolver';

const RootSchema = gql`
    type Query {
    _empty:String
  }

  type Mutation {
    _empty:String
  }

  type Subscription {
    _empty:String
  }
`;

export const typeDefs = [RootSchema, AuthorSchema, BookSchema];
export const resolvers = merge(AuthorResolver, BookResolver);