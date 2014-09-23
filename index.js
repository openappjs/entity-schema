var debug = require('debug')('entity-schema');

function EntitySchema (schema) {
  // call new constructor if not already
  if (!(this instanceof EntitySchema)) {
    return new EntitySchema(schema);
  }

  debug("constructor", schema);

  // check schema
  if (!EntitySchema.isEntitySchema(schema)) {
    var err = new Error('schema given is not a schema.')
    err.schema = schema;
    throw err;
  }

  // save schema
  Object.keys(schema).forEach(function (key) {
    this[key] = schema[key];
  }.bind(this));

  // if has properties, default to type object
  if (schema.properties) {
    this.type = schema.type || "object";
  }

  // save options
  // with default of empty object
  this.options = schema.options || {};
}

// prototype function to handle plugin functions
EntitySchema.prototype.use = function _EntitySchema_use (plugin) {
  debug("use", plugin);

  plugin.call(this, this);
}

// class function for checking EntitySchema's
EntitySchema.isEntitySchema = require('./isEntitySchema');

module.exports = EntitySchema;
