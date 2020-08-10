"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolvers = exports.typeDefs = void 0;

var _lodash = require("lodash");

var _apolloServer = require("apollo-server");

var _type = _interopRequireDefault(require("./models/Author/type"));

var _type2 = _interopRequireDefault(require("./models/Book/type"));

var _resolver = _interopRequireDefault(require("./models/Author/resolver"));

var _resolver2 = _interopRequireDefault(require("./models/Book/resolver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    type Query {\n    _empty:String\n  }\n\n  type Mutation {\n    _empty:String\n  }\n\n  type Subscription {\n    _empty:String\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RootSchema = (0, _apolloServer.gql)(_templateObject());
var typeDefs = [RootSchema, _type["default"], _type2["default"]];
exports.typeDefs = typeDefs;
var resolvers = (0, _lodash.merge)(_resolver["default"], _resolver2["default"]);
exports.resolvers = resolvers;