const app = require("../app");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised).should();

describe("shoppingPromiseResolve()", () => {
  it("should fulfill the promise", () => {
    return app.shoppingPromiseResolve().should.be.fulfilled;
  });

  it("should resolve with the correct thank you message", () => {
    return app
      .shoppingPromiseResolve()
      .should.eventually.equal("Thanks a lot for the help!");
  });
});

describe("shoppingPromiseReject()", () => {
  it("should reject the promise", () => {
    return app.shoppingPromiseReject().should.be.rejected;
  });

  it("should not fulfill the promise", () => {
    return app.shoppingPromiseReject().should.not.be.fulfilled;
  });

  it("should reject with an error instance", () => {
    return app.shoppingPromiseReject().should.be.rejectedWith(Error);
  });
});
