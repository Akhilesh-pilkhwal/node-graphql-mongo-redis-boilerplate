import { MongoClient } from 'mongodb';
import { MONGO_URL } from '../config';

module.exports = async () => {
  const db = await MongoClient.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return db;
}