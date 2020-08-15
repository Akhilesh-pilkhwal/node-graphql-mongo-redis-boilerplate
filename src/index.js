import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';
import Redis from 'ioredis';

import { getContext } from './utils/contextBuilding';
import connectMongo from './connectors/mongoConnector';
import { REDIS_URL } from './config';

const start = async () => {
  // Mongo connection
  const db = await connectMongo();
  const client = new Redis(REDIS_URL, { showFriendlyErrorStack: true })
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs, resolvers,
    context: (req) => ({
      ...getContext({ db, client, req })
    }),
  });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

start();
