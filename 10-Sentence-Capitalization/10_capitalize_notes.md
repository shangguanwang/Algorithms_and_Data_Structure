# Sentence Capitalization
### My Logic
1. We can first split the sentence into word by space. 
2. Then, for each item of the array, capitalize the 1st letter, and add the remaining characters untouched
3. Turn the array back to string using join

---
### Notes
for the string.slice() method, if you don't include the 2nd argument, the rest of the string will be automatically included.
``` "there".slice(1) \\will return "here" ```

An alternative solution is to create an empty string with just the first letter of the string capitalized. Iterate through each character, and find if the index prior to it is a space. If there is, we want to capitalize the current character and append it to the string, otherwise just append the character as it is.