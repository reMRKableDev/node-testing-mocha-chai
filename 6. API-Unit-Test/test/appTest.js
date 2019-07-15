const app = require("../app");
const chai = require("chai");

const assert = chai.assert;

describe("API Unit Test", function() {
  it("tests if API call does not return an empty value", function(done) {
    app.apiCall(function(error, response, body) {
      let bodyObj = JSON.parse(body);
      assert.isNotEmpty(bodyObj);
      assert.isNotNull(bodyObj);
      done();
    });
  });
  it("tests if API call returns an array with multiple elements", function(done) {
    app.apiCall(function(error, response, body) {
      let bodyObj = JSON.parse(body);
      assert.isArray(bodyObj);
      assert.isAbove(bodyObj.length, 1); // checks that the length of bodyObj is above 1.
      done();
    });
  });
});
