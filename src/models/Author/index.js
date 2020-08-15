import { getUniqueId } from '../../utils';

export default class Author {
  constructor({ db }) {
    this.db = db;
    this.collectionName = 'authors'
  }

  async getById(id) {
    return this.db
      .collection(this.collectionName)
      .findOne({
        id,
        $or: [
          { deleted: { $exists: false } },
          { deleted: false }
        ]
      });
  }

  async getAuthors() {
    const Authors = await this.db
      .collection(this.collectionName)
      .find({
        $or: [
          { deleted: { $exists: false } },
          { deleted: false }
        ]
      })
      .toArray();
    return Authors;
  }

  async authorAdd(author) {
    const id = getUniqueId();
    await this.db
      .collection(this.collectionName)
      .insertOne({
        id,
        ...author,
      });
    return this.getById(id);
  }

  async authorUpdate(author) {
    await this.db
      .collectionName(this.collectionName)
      .updateOne({
        id: author.id
      }, {
        $set: {
          ...author,
        }
      });
    return this.getById(author.id);
  }

  async authorDelete(id) {
    await this.db
      .collectionName(this.collectionName)
      .updateOne({
        id
      }, {
        $set: {
          deleted: true
        }
      })
    return true;
  }
}
