


let numbers = [4,4,5,3,1,7,56,1,2,96,94]

let largestNumber = numbers[0]
let smallestNumber = numbers[0]

for (let i = 0 ; i < numbers.length ; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = numbers[i]
    } else if (numbers[i] < smallestNumber) {
      smallestNumber = numbers[i]
  }
}

const difference = largestNumber - smallestNumber

console.log(difference)
