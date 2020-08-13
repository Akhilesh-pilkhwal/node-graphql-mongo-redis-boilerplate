export default class RedisConnector {
  constructor(redisClient) {
    this.cacheStore = redisClient;
  }

  deleteKey(key) {
    try {
      return this.cacheStore.del(key);
    } catch (error) {
      return error;
    }
  }
}
