const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints' , () => {
    describe('notes', () => {
        it('should return value without max and min note', () => {
            const actual = calculateStylePoints([16, 20, 18, 17, 16]);

            const expected = 51;

            assert.equal(actual, expected);
        });

        it('should return 0 seconds if no value is passed', () => {
            const actual = calculateStylePoints();

            const expected = null;

            assert.equal(actual, expected);
        });

        it('should return value without max and min note, inc halfs', () => {
            const actual = calculateStylePoints([16, 17, 16.5, 16, 18]);

            const expected = 49.5;

            assert.equal(actual, expected);
        });

        it('should return value without max and min note, same values', () => {
            const actual = calculateStylePoints([16, 16, 16, 16, 16]);

            const expected = 48;

            assert.equal(actual, expected);
        });
    });
});