import Book from '../models/Book';
import Author from '../models/Author';
import RedisConnector from '../connectors/redisConnector';

export const getContext = ({ db, redisClient, req = null }) => {
  const redis = new RedisConnector(redisClient);
  return {
    req,
    conn: {
      redis,
    },
    models: {
      Book: new Book({ db }),
      Author: new Author({ db })
    }
  }
}