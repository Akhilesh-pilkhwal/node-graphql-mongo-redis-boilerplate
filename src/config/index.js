//For node environment variables
require('dotenv').config();

export const MONGO_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017';