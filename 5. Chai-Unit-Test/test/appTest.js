const app = require('../app');
const chai = require('chai');

const expect = chai.expect;
const assert = chai.assert;

describe('Object Creator Test Suite', function () {
    describe('BDD style-tests which expect a certain behavior from test subject', function () {
        it('tests that this should be a valid testObject', function () {
            expect(app.objectCreator()).to.be.an('object').and.is.ok;

            expect(app.objectCreator()).to.have.property('sub')
                .that.is.an('object').and.is.ok;

            expect(app.objectCreator().sub).to.have.property('name')
                .that.is.a('string').and.to.equal('test nested object');

            expect(app.objectCreator()).to.have.property('numbers')
                .that.deep.equals([5, 4, 3, 2, 1]);

            expect(app.objectCreator()).to.have.property('hasNumbers', true);
        });

    });

    describe('TDD style-tests which expect a certain behavior from test subject', function () {
        it('tests that this should be a valid testObject', function () {
            assert.isOk(app.objectCreator());

            assert.isObject(app.objectCreator());

            assert.propertyVal(app.objectCreator(), 'name', 'test object');

            assert.property(app.objectCreator(), 'sub');

            assert.propertyVal(app.objectCreator().sub, 'name', 'test nested object');

            assert.property(app.objectCreator(), 'sub');

            assert.deepEqual(app.objectCreator().numbers, [5, 4, 3, 2, 1]);

            assert.typeOf(app.objectCreator().hasNumbers, 'boolean');

            assert.isTrue(app.objectCreator().hasNumbers);
        });
    });
});
