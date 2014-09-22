var debug = require('debug')('entity-schema');

function EntitySchema (schema, options) {
  // call new constructor if not already
  if (!(this instanceof EntitySchema)) {
    return new EntitySchema(schema, options);
  }

  debug("constructor", schema, options);

  // check schema
  if (!EntitySchema.isEntitySchema(schema)) {
    var err = new Error('schema given is not a schema.')
    err.schema = schema;
    throw err;
  }

  // save schema
  this.schema = schema;
  
  // save options
  // with default of empty object
  this.options = options || {};
}

// prototype function to handle plugin functions
EntitySchema.prototype.use = function _EntitySchema_use (plugin) {
  debug("use", plugin);

  plugin.call(this, this);
}

// class function for checking EntitySchema's
EntitySchema.isEntitySchema = require('./isEntitySchema');

module.exports = EntitySchema;
