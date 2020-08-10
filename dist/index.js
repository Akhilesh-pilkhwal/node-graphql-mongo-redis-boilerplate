"use strict";

var _apolloServer = require("apollo-server");

var _schema = require("./schema");

console.log('typeDefs', _schema.typeDefs);
console.log('resolvers', _schema.resolvers); // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

var server = new _apolloServer.ApolloServer({
  typeDefs: _schema.typeDefs,
  resolvers: _schema.resolvers
}); // The `listen` method launches a web server.

server.listen().then(function (_ref) {
  var url = _ref.url;
  console.log("\uD83D\uDE80  Server ready at ".concat(url));
});