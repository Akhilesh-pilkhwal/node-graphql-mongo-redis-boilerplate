import { getUniqueId } from '../../utils';

export default class Book {
  constructor({ db }) {
    this.db = db;
    this.collectionName = 'books'
  }

  async getById(id) {
    return await this.db
      .collection(this.collectionName)
      .findOne({
        id,
        $or: [
          { deleted: { $exists: false } },
          { deleted: false }
        ]
      });
  }

  async getByIdArray(ids) {
    return await this.db
      .collection(this.collectionName)
      .find({
        id: { $in: ids }
      })
      .toArray();
  }

  async getBooks() {
    const books = await this.db
      .collection(this.collectionName)
      .find({})
      .toArray();
    return books;
  }

  async bookAdd(book) {
    const id = getUniqueId();
    await this.db
      .collection(this.collectionName)
      .insertOne({
        id,
        ...book,
      });
    return this.getById(id);
  }

  async bookUpdate(book) {
    await this.db
      .collectionName(this.collectionName)
      .updateOne({
        id: book.id
      }, {
        $set: {
          ...book,
        }
      });
    return this.getById(book.id);
  }

  async bookDelete(id) {
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
