const assert = require('assert'); // Node Assertion library

describe('Name Unit Test', function () {
    let actualValue = 'Peter';

    it('tests if actual value of string is equal to the expected value', function () {
        let expectedValue = 'Peter';
        //assert(actualValue === expectedValue);
        assert.strictEqual(actualValue, expectedValue);
    });
    it('tests if actual value of string is not equal to the expected value', function () {
        let expectedValue = 'peter';
        assert(actualValue !== expectedValue);
        //assert.notStrictEqual(actualValue, expectedValue);
    });
    it('tests if actual value is truthy', function () {
        assert(actualValue);
        //assert.ok(actualValue);
    });
});
