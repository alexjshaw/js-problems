// EXERCISE:

// write a function that takes in an array and a target value. The function must return true if the array contains the target value or false if it does not.

// Input example: find([1,3,5,7,9,11,4], 4)
// Output: true

// Input example: find([1,3,5,7,9,11,4], 33)
// Output: false

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkNumberInArray(array, targetValue) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === targetValue) {
        return true;
      }
    }  
    return false;
  }

  console.log(checkNumberInArray(array, 4))