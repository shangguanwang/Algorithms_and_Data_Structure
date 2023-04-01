# Fibonacci

### My logic:
1. Create an array with the first 2 elements since those can't be generated.

2. Start a for loop at index 2. Use the prior 2 elements to get element at index i.

3. return the nth element.

Runtime complexity: for every increase in n, we need to calculate one additional number, and we only have one for loop, so it's linear runtime N.

### Alternative solution: Recursion
1. The base case is when n=0 or n=1, you want to return the number directly.

2. If we put it in a tree diagram, fib(6) will return 8*fib(1)

Runtime complexity = Exponential: when you call fib(5), fib function is called 15 times. Wehn you call fib(6), fib function is called 27 times. For each n+1, we are getting a dramatic increase in function calls. Exponential runtime is not ideal.

### Memoization
Any way we can improve the runtime of our recursive solution? fib(1) is called multiple times with the same arguments. **Memoization** (pronounciation: memowization): store the arguments of each function call along with the result. We won't run the function itself the next time it occurs, we will retrive the value from storage. So you don't need to run the branches under fib(4), you can get the fib(4) value.

You want to create a function memoizer, that takes function as input. If we have never called the function before, we will store the argument and the function result in a cache object. If we have called it before, we will return the value directly.