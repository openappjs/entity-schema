var expect = require('chai').expect;

var personSchema = {
  id: "Person",
  prefixes: {
    "": "http://schema.org/",
    foaf: "http://xmlns.com/foaf/0.1/",
    org: "http://www.w3.org/TR/vocab-org#",
  },
  properties: {
    name: {
      type: "string",
      context: "foaf:name",
    },
    memberships: {
      type: "array",
      context: "org:hasMembership",
      items: {
        reverse: "member",
        $ref: "Membership",
      },
    },
  },
};

describe("#EntitySchema", function () {
  var EntitySchema;

  it("should require module", function () {
    EntitySchema = require('../');
    expect(EntitySchema).to.exist;
    expect(EntitySchema).to.have.property("isEntitySchema");
    expect(EntitySchema.isEntitySchema).to.be.a('function');
  });

  it("should create person schema", function () {
    var personEntitySchema = EntitySchema(personSchema);
    expect(personEntitySchema).to.exist;
    expect(personEntitySchema).to.have.property("id", personSchema.id);
    expect(personEntitySchema).to.have.property("properties", personSchema.properties);
    expect(personEntitySchema).to.have.property("prefixes", personSchema.prefixes);
    expect(personEntitySchema).to.have.property("options")
      .that.deep.equals({});
    expect(personEntitySchema).to.have.property("use", EntitySchema.prototype.use);
  });

  describe("EntitySchema.isEntitySchema()", function () {
    var personEntitySchema;

    before(function () {
      personEntitySchema = EntitySchema(personSchema);
    });

    it("of personSchema should be true", function () {
      expect(EntitySchema.isEntitySchema(personSchema)).to.be.true;
    });
  });
});
