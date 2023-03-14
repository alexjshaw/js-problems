function fibonacci() {
    const fib = [1, 1];
    for (let i = 2 ; i < 100 ; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib
}

const fibonacci100 = fibonacci()
console.log(fibonacci100)