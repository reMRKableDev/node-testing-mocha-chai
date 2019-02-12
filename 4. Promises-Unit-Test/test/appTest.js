const app = require('../app');

// Assertion library Chai
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();


describe('Promise resolve Unit Test', function () {
    it('tests if Promise is fulfilled', function () {
        return app.shoppingPromiseResolve().should.be.fulfilled;
    });
    it('tests if the return value of Promise is resolve', function () {
        return app.shoppingPromiseResolve().should.eventually.equal('Thanks alot for the help!');

    });

});

describe('Promise reject Unit Test', function () {
    it('tests if Promise is fulfilled', function () {
        return app.shoppingPromiseReject().should.not.be.fulfilled;
    });
    it('tests if the return value of Promise is reject', function () {
        return app.shoppingPromiseReject().should.be.rejected;

    });

});
