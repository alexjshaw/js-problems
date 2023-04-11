// # Factorial

// Find the product of all positive integers less than or equal to any given number. This is known as the _factorial_ (denoted by _!_):

// `5! = 5 x 4 x 3 x 2 x 1 = 120`

function factorial(num) {
    let total = 1
    for (let i = 1; i <= num; i++) {
        total *= i
    }
    return total
}

console.log(factorial(5))