const calculateDistancePoints = (distance, hillSize, kPoint) => {

  let basePoints,
      result;

  switch ( hillSize ) {
    case 'normal':
      basePoints = 60;

      if (distance >= kPoint) {
        return result = (distance - kPoint) * 2 + basePoints;
      } else {
        return result = basePoints - ((kPoint - distance) * 2);
      }
      break;
    case 'large':
      basePoints = 60;

      if (distance >= kPoint) {
        return result = (distance - kPoint) * 1.8 + basePoints;
      } else {
        return result = basePoints - ((kPoint - distance) * 1.8);
      }
      break;
    case 'skiFlying':
      basePoints = 120;
      
      if (distance >= kPoint) {
        return result = (distance - kPoint) * 1.2 + basePoints;
      } else {
        return result = basePoints - ((kPoint - distance) * 1.2);
      }
      break;
    default:
      return null;
  }
};

module.exports = calculateDistancePoints;