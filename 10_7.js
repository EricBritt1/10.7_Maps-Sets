/* Solution: https://lessons.springboard.com/Solution-785cba9d3554495f9787e49fcedd6c2f */

//Question: How to maps and sets work? 
/*
Maps: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

- A map is a list of key value pairs
- set Map.set() is a function

Sets: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

- Can't have duplicate values
- All unique values
- Set Object type


*/
// Quick Question #1
/* 
What does the following code return?
new Set([1,1,2,2,3,4])

My Answer:
Will return [1,2,3,4]


*/

//Quick Question #2
/*
What does the following code return?
[...new Set("referee")].join("")


My Answer:

"ref"

*/

//Quick Questions #3
/*
What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);


My Answer:

*/

// hasDuplicate Q4

/*
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false
*/

//My Function:
const arr1 = [2,3,4,3,2,2];

function hasDuplicate (array) {
   return array === new Set(array)
};

// vowelCount Q5

/*
Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
*/

//My Function:

let word = 'hello';
let vowels = 'aeiou'

function vowelCount (word) {
let map = new Map();
let wordSplit = word.split('');
wordSplit.forEach(function(letter) {
   let letterLowerCased = letter.toLowerCase()
   if(map.has(letterLowerCased)) {
      map.set(letterLowerCased, (map.get(letterLowerCased)) +1)
   }
   else if (vowels.includes(letterLowerCased)) {
      map.set(letterLowerCased, 1)
   }
});
return map
};

