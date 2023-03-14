// let result = 1

function smallestProduct() {
  let number = 20;  //initial number ot be tested
  let solutionFound = false;    //variable used to run/exit the while loop
  while (!solutionFound) {  //runs while solutionFound is false
    let isSmallestProduct = true;   //used later to change solutionFound and exit loop
    for (i = 2; i <= 20; i++) {
      if (number % i !== 0) {
        isSmallestProduct = false;  //if any modulo fails it uses this to skip to line 16
      }
    }
    if (isSmallestProduct) {    //this line will only be seen if the modulo functions all pass
      solutionFound = true; //this will trigger the while loop to exit
    } else {
      number += 20; //adds 20 to tested number and returns to start
    }
  }
  return number;
}
console.log(smallestProduct())
