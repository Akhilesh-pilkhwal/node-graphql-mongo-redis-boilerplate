import { MongoClient } from 'mongodb';
import { MONGO_URL, DB_NAME } from '../config';

module.exports = async () => {
  const client = await MongoClient.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return client.db(DB_NAME);
}