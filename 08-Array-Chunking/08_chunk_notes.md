# Array Chunking
### My Logic
1. Create an empty array to hold chunks.
2. Loop through the original array, slice the chunk and push it to the empty array. The key here is the step size, instead of incrementing i by 1 like we usually do, we should increment i by the second parameter "size".

keep in mind array.slice(start,end) does not include end index.

