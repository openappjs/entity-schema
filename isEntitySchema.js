var debug = require('debug')('entity-schema:isEntitySchema');

module.exports = function isEntitySchema (schema) {
  debug(schema);

  if (schema && schema.schema) {
    return isEntitySchema(schema.schema);
  }

  return !!(
    typeof schema === 'object' &&
    typeof schema.id === 'string' &&
    typeof schema.properties === 'object'
  );
};
