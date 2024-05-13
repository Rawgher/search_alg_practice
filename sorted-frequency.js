function sortedFrequency(arr, target) {
    let firstIdx = findFirst(arr, target);
  if (firstIdx == -1) return firstIdx;
  let lastIdx = findLast(arr, target);
  return lastIdx - firstIdx + 1;
}

function findFirst(arr, target, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    if ((mid === 0 || target > arr[mid - 1]) && arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      return findFirst(arr, target, mid + 1, high)
    } else {
      return findFirst(arr, target, low, mid - 1)
    }
  }
  return -1
}

function findLast(arr, target, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    if ((mid === arr.length - 1 || target < arr[mid + 1]) && arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      return findLast(arr, target, low, mid - 1)
    } else {
      return findLast(arr, target, mid + 1, high)
    }
  }
  return -1
    
}

module.exports = sortedFrequency