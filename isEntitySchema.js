var debug = require('debug')('entity-schema:isEntitySchema');

var isSchema = require('schema-is-schema');

module.exports = function isEntitySchema (schema) {
  debug(schema);

  return isSchema(schema, {
    draft: "4-no-id-format",
  }) === true;
};
