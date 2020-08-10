"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MongoConnector = /*#__PURE__*/function () {
  function MongoConnector(connection) {
    _classCallCheck(this, MongoConnector);

    this.connection = connection;
  }

  _createClass(MongoConnector, [{
    key: "closeConnection",
    value: function closeConnection() {
      this.connection.close();
    }
  }, {
    key: "collection",
    value: function collection(collectionName) {
      // caching, batching and logging could be added here
      return connection.collection(connectionName);
    }
  }]);

  return MongoConnector;
}();