"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _authors = [{
  name: 'J.K. Rowling',
  email: 'abc@gmail.com'
}, {
  name: 'Michael Crichton',
  email: 'abc@gmail.com'
}];
var _default = {
  Query: {
    authors: function authors() {
      return _authors;
    }
  }
};
exports["default"] = _default;