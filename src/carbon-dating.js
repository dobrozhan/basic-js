const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity === '') {
    return false;
  } else {
    let sampleActivityNum = parseFloat(sampleActivity);

    if (sampleActivity === NaN || sampleActivity < 0) {
    return false;
    }

    let k = MODERN_ACTIVITY/sampleActivityNum;
    let n = Math.log(k);
    let t = 0.693/HALF_LIFE_PERIOD;
    let time = n/t;
    let result = Math.ceil(time);

    if ( result < 0 || result == Infinity || isNaN(result) ) {
      return false;
    } else {
      return result;
    }
  }
};