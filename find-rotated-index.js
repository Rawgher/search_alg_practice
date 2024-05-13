function findRotatedIndex(array, target) {
    var pivot = findPivot(array)
    if (pivot > 0 && target >= array[0] && target <= array[pivot - 1]) {
      return binarySearch(array, target, 0, pivot - 1);
    } else {
      return binarySearch(array, target, pivot, array.length - 1);
    }
  }
  
  function binarySearch(array, target, start, end) {
    if (array.length === 0) return -1;
    if (target < array[start] || target > array[end]) return -1;
  
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (array[mid] === target) {
        return mid;
      } else if (target < array[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
  }
  
  function findPivot(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    var start = 0
    var end = arr.length - 1;
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      if (arr[mid] > arr[mid + 1]) return mid + 1
      else if (arr[start] <= arr[mid]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }
  
  module.exports = findRotatedIndex