module.exports = class DepthCalculator {

    calculateDepth(arr, depth = 1) {

        for (let i = 0; i < arr.length; i++) {

            if (Array.isArray(arr[i])) {
                arr = arr.flat();
                return this.calculateDepth(arr, ++depth);
            } 
            }

        return depth;
      }
};