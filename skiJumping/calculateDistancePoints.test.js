const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('seconds', () => {
        it('should return seconds', () => {
            const actual = formatDate(23);

            const expected = '23s';

            assert.equal(actual, expected);
        });

        it('should return 0 seconds if no value is passed', () => {
            const actual = formatDate();

            const expected = '0s';

            assert.equal(actual, expected);
        });
    });
});