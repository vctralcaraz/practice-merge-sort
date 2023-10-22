// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if(arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Divide the array in half
  let half = Math.ceil(arr.length / 2);
  let left = arr.slice(0, half);
  let right = arr.slice(half);

  // Recursively sort the left half
  let one = mergeSort(left);

  // Recursively sort the right half
  let two = mergeSort(right);

  // Merge the halves together and return
  return merge(one, two);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let newArr = [];

  // Point to the first value of each array
  let aPointer = 0;
  let bPointer = 0;

  // While there are still values in each array...
  while(aPointer + bPointer < arrA.length + arrB.length) {
    // Compare the first values of each array
    let left = arrA[aPointer];
    let right = arrB[bPointer];

    if(left < right || bPointer === arrB.length) {
      // Add the smaller value to the return array
      newArr.push(left);

      // Move the pointer to the next value in that array
      aPointer++;

    } else {
      // Add the smaller value to the return array
      newArr.push(right);

      // Move the pointer to the next value in that array
      bPointer++;

    }
  }

  // Return the return array
  return newArr;
}

module.exports = [merge, mergeSort];

