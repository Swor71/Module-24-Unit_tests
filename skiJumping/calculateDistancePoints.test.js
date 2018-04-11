const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('distance', () => {
        it('should return results for the jump', () => {
            const actual = calculateDistancePoints(99.5, 'normal', 98);

            const expected = 63;

            assert.equal(actual, expected);
        });
        it('should return results for the jump', () => {
            const actual = calculateDistancePoints(91.5, 'normal', 98);

            const expected = 47;

            assert.equal(actual, expected);
        });
    });
});