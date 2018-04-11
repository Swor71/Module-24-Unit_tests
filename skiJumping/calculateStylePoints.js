const calculateStylePoints = (styleNotes) => {
  if (styleNotes) {
    const max = styleNotes.reduce(function (a, b) {
      return Math.max(a, b);
    });

    const min = styleNotes.reduce(function (a, b) {
      return Math.min(a, b);
    });

    const sum = (acc, curVal) => acc + curVal

    return styleNotes.reduce(sum) - max - min;
  }
  return null
};

module.exports = calculateStylePoints;