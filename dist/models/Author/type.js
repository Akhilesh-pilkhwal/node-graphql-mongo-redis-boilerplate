"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type Author {\n    name: String\n    books: [Book]\n    email: String\n    phoneNumber: String\n  }\n  # Query\n  extend type Query {\n    authors: [Author]\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AuthorSchema = (0, _apolloServer.gql)(_templateObject());
var _default = AuthorSchema;
exports["default"] = _default;