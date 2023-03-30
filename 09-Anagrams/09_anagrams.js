// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// My attempt
function anagrams(stringA, stringB) {
    let strA = stringA.toLowerCase().replace(/[^a-z]/g, "")
    let strB = stringB.toLowerCase().replace(/[^a-z]/g, "")

    strA = strA.split("").sort().join("")
    strB = strB.split("").sort().join("")

    return strA === strB
}

// Alternative Solution
function anagrams(stringA, stringB) {
    let objA = buildCharMap(stringA)
    let objB = buildCharMap(stringB)

    for (let char of Object.keys(objA)) {
        return objA[char] === objB[char] &&
            Object.keys(objA).length == Object.keys(objB).length ? true : false;
    }
}
//helper function to map the string into object
function buildCharMap(string) {
    let obj = {};
    for (let char of string.toLowerCase().replace(/[^\w]/g, "")) {
        obj[char] = obj[char] + 1 || 1;
        //   if(obj[char]){
        //       obj[char]+=1;
        //   }else{
        //       obj[char] = 1;
        //   }
    }
    return obj
}

console.log(anagrams('rail safety', 'fairy tales'))