export default {
  Query: {
    books: (_, _1, context) => context
      .models.Book.getBooks(),
    book: (_, { id }, context) => context
      .models.Book.getById(id),
  },
  Mutation: {
    bookAdd: (_, book, context) => context
      .models.Book.bookAdd(book),
    bookUpdate: (_, book, context) => context
      .models.Book.bookUpdate(book),
    bookDelete: (_, book, context) => context
      .models.Book.bookDelete(book),
  }
};