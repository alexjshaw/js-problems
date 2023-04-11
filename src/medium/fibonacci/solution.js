function fibonacci() {
    let fib = [1, 1];
    for (let i = 2 ; i < 10 ; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log("Fib:", fib)
}

fibonacci()

function newFibonacci() {
    let newFib = [1, 1];
    for (let i = 2; i < 10; i++) {
        let nextFib = newFib[i - 1] + newFib[i - 2];
        newFib.push(nextFib)
    }
    console.log("newFib:", newFib)
}

newFibonacci()