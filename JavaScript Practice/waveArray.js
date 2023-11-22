// Given a sorted array arr[] of distinct integers. Sort the array into a wave-like array(In Place).
// In other words, arrange the elements into a sequence such that arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....

// If there are multiple solutions, find the lexicographically smallest one.

// Note:The given array is sorted in ascending order, and you don't need to return anything to make changes in the original array itself.

// Example 1:

// Input:
// n = 5
// arr[] = {1,2,3,4,5}
// Output: 2 1 4 3 5
// Explanation: Array elements after 
// sorting it in wave form are 
// 2 1 4 3 5.
// arr: input array
// n: size of array
//Function to sort the array into a wave-like array.

function convertToWave(n, arr) {
  let i = 0;
  while (i < n - 1) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    i = i + 2;
  }
  return arr;
}
