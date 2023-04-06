# Queue from Two Stack
### Notes:
The key here is the output of stackA will be the input of Stack B.
Don't forget to put every item back to Stack A after remove or peek operations.

0. Initialize two stacks in the constructor.
1. Add Method: push the record to stack A.

2. Remove method: 
    - for every record in Stack A, we want to pop it and push to stack B. Note that we need to peek Stack A to check if there are any remaining records left.
    - After stack A is empty, we want to store the last item that got added into B to a variable, but don't return it yet.
    - Put everything in B back to A again, until there is nothing left in B.
    - Now we are ready to return the item we stored

3. Peek method:
    - Put everything in A to B.
    - Peek the last item that got added into B.
    - Put everything back to A.
    - return the item we peeked.

