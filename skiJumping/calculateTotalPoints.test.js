const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('Ski Flying Hill', () => {
        it('should return total points including wind and bar', () => {
            const actual = calculateTotalPoints(227.5, 'skiFlying', 200, [18, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);

            const expected = 208.3;

            assert.equal(actual, expected);
        });
        it('should return total points including wind and bar', () => {
            const actual = calculateTotalPoints(226, 'skiFlying', 200, [18.5, 18.5, 18.5, 18, 18.5], 8.7, -8.9);

            const expected = 206.5;

            assert.equal(actual, expected);
        });
        it('should return total points including wind and bar', () => {
            const actual = calculateTotalPoints(208.5, 'skiFlying', 200, [17.5, 17.5, 17.5, 17, 17], 0, -2.7);

            const expected = 179.5;

            assert.equal(actual, expected);
        });    
    });    
    describe('Normal Hill', () => {
        it('should return total points including wind and bar', () => {
            const actual = calculateTotalPoints(111, 'normal', 98, [19, 19.5, 19, 19, 19], -14.4, 3.2);

            const expected = 131.8;

            assert.equal(actual, expected);
        });
        it('should return total points including wind and bar', () => {
            const actual = calculateTotalPoints(106.5, 'normal', 98, [18.5, 18.5, 18.5, 19, 19], -13.5, 6.4);

            const expected = 125.9;

            assert.equal(actual, expected);
        });
        it('should return total points including wind and bar', () => {
            const actual = calculateTotalPoints(88, 'normal', 98, [16.5, 16, 16.5, 16.5, 16], -3.4, 6.4);

            const expected = 92;

            assert.equal(actual, expected);
        });
    })       
    
});