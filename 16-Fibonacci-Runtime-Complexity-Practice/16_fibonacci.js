// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// My attempt:
function fib(n) {
    let fibarr = [0,1]
    for (let i=2;i<=n;i++){
        fibarr[i] = fibarr[i-1]+fibarr[i-2]
    }
    return fibarr[n]
}

// Alternative solution: Recursion
function fib(n){
    //base case to end the recursion
    if (n<2){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

// Memoization:
function memoize(fn){
    const cache = {};
    return function(...args){
        //if we have called the function with the args, just return the value
        if (cache[args]){
            return cache[args]
        }
        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

const fib = memoize(fib)
fib(5)