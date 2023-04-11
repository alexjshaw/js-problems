// # Digit Count

// Given a number, count the number of digits.
// For example:

// ```text
// 318 = 3
// 92563 = 5
// 4666 = 4
// 314890 = 6
// ```

function digitCount(num) {
    return num.toString().length;
}

console.log(digitCount(92563))