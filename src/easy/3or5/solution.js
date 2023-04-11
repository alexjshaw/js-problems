// # Multiples of 3 or 5

// If you list all the natural numbers below 10 that are multiples of 3 or 5, you'll get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

let sumTotal = 0

function threeOrFive(number) {
    for (i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sumTotal += i
        }
    }
    console.log(sumTotal)
}

threeOrFive(1000)