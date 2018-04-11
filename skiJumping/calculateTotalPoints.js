const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);

    function round(number, precision) {
        var shift = function (number, precision, reverseShift) {
            if (reverseShift) {
                precision = -precision;
            }
            numArray = ("" + number).split("e");
            return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
        };
        return shift(Math.round(shift(number, precision, false)), precision, true);
    }

    return round((distancePoints + stylePoints + windFactor + gateFactor), 1);
}

module.exports = calculateTotalPoints;