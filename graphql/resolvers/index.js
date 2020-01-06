const authResolver = require("./auth");

const employeeResolver = require("./employee");
const addressResolver = require("./address");
const skillResolver = require("./skill.js");

const rootResolver = {
  ...authResolver,
  ...employeeResolver,
  ...addressResolver,
  ...skillResolver
};

module.exports = rootResolver;
