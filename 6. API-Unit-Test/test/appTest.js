const app = require("../app");
const chai = require("chai");
const assert = chai.assert;

describe("apiCall()", function () {
  let apiResponse;

  before(async function () {
    this.timeout(5000);
    apiResponse = await app.apiCall();
  });

  it("should return a non-empty response", () => {
    assert.isNotEmpty(apiResponse, "API response should not be empty");
    assert.isNotNull(apiResponse, "API response should not be null");
  });

  it("should return an array with multiple elements", () => {
    assert.isArray(apiResponse, "API response should be an array");
    assert.isAbove(
      apiResponse.length,
      1,
      "Array should contain multiple elements"
    );
  });

  it("should return todo objects with the correct structure", () => {
    const firstTodo = apiResponse[0];
    assert.property(firstTodo, "id", "Todo should have an id");
    assert.property(firstTodo, "title", "Todo should have a title");
    assert.property(
      firstTodo,
      "completed",
      "Todo should have a completed status"
    );
  });
});
