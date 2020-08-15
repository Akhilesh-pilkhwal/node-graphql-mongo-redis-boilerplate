export default {
  Query: {
    authors: (_, _1, context) => context
      .models.Author.getAuthors(),
    author: (_, { id }, context) => context
      .models.Author.getById(id),
  },
  Mutation: {
    authorAdd: (_, { author }, context) => context
      .models.Author.authorAdd(author),
    authorUpdate: (_, { author }, context) => context
      .models.Author.authorUpdate(author),
    authorDelete: (_, { id }, context) => context
      .models.Author.authorDelete(id),
  }
};