# Runtime Complexity
How much more processing power/time is required to run your algorithm if we double the inputs?

Runtime complexity is also called Big 'O' Notation.
 - O(n) = linear
 - O(1) = constant
 - O(n^2) = quadratic
 
For example, in the String Reverse problem, we need to run through every character, so it's 'N', or linear runtime.

If we are iterating through both row and columns, it would take N^2, or quadratic runtime.

**Space complexity**: how much memory is required by doubling the problem set?

### Determining runtime
- Constant Time = 1: No matter how many inputs we are working with, the algorithm will always take the same amount of time.
- Logarithmic Time = log(n): If we double the number of inputs, it doesn't double the amount of work. Always assume that searching operations are log(n).
- Linear Time = n: if you are iterate through a collection of data like length, you probably have 'n'.
- Quasilinear Time = n * log(n): Always assume that sorting operations are n * log(n).
- Quadratic Time = n ^ 2: every element has to be compared to every other element. 'The handshake problem': a new additional person has to shake hands with every other person. 
- Exponential Time = 2 ^ n: if you add a single element to a collection, the processing power required doubles. We want to avoid these.

### Identifying Runtime Complexity
1. Iterating with a simple for loop through a single collection? O(n)
2. Iterating through half a collection? Still O(n), there are no constants in runtime, always drop out those constants in runtime calculation.
3. Iterating through two different collections with separate for loops? O(n+m)
4. Two nested for loops iterating over the same collection? O(n^2), huge red flag
5. Two nested for lopps iterating over different collections? O(n*m)
6. Sorting? O(n*log(n))
7. Searching a sorted array? O(log(n))