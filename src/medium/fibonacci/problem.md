# Fibonacci

Computes the list of the first 100 Fibonacci numbers. The first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

# Plain English Solution

1) create an array of the first two numbers in the sequence [0,1]
2) using a for loop, sum the two numbers and add the result to the end of the array
3) sum the last two numbers in the new array and push to end
4) repeat until the array length is 100