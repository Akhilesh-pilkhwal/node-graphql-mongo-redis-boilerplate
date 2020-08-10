"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _books = [{
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'J.K. Rowling'
}, {
  title: 'Jurassic Park',
  author: 'Michael Crichton'
}];
var _default = {
  Query: {
    books: function books() {
      return _books;
    }
  }
};
exports["default"] = _default;