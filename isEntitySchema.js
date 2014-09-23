var debug = require('debug')('entity-schema:isEntitySchema');

module.exports = function isEntitySchema (schema) {
  debug(schema);

  return !!(
    typeof schema === 'object' &&
    typeof schema.id === 'string' &&
    (
      typeof schema.properties === 'object' ||
      typeof schema.$ref === 'string'
    )
  );
};
