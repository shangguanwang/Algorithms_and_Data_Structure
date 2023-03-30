# Anagrams

### My logic
1. First we need to clean up both strings by removing punctuations or spaces using regular expression, also need to lowercase both.

2. Then we sort both strings in the alphabetical order. Because sort method only works on array, we need to first split the string into array, sort them, and join the array back to string.

3. Compare the final sorted strings

---
### Notes
* \w matches word characters (a-zA-Z0-9_), so we can do 
    ```
    {word.replace(/[^\w]/g, "")}
    ```
* Another way is to build an object and map the      string into character:count. It's good practice to build a helper function so you don't need to write the for loop twice. 
  Then we need to compare the two objects. To do that, for each key in objA, we want to check if its value equal to the value of the same key in objB. We also want to ensure the two object has the same lengths.