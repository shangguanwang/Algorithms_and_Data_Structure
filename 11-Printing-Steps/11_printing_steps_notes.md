# Printing Steps
### My Logic
1. iterate through n rows
2. For each row, use string.repeat() to create the string with # and space
--- 

### Alternative Solution - Recursion:
1. Identify a base case, where the recursion will stop. In this challenge, the base case is when (row ===n). 
2. Call the function inside the function, and change the arguments every run.
3. You can pass in additional parameters, remember to assign default value to it.