var doc = require('./mappings/document');

var schema = {
  settings: require('./settings')(),
  mappings: {
    _doc: doc,
  }
};

module.exports = schema;
