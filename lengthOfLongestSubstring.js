/*
Given a string s, find the length of the longest substring without repeating characters.

Examples:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Input: s = ""
Output: 0
*/

/*
  Approaches:

  1. Store characters and their indexes. Track the beginning of each new substring with an integer variable. Converting the string into an array, reduce the maximum substring size by comparing the current index against the continuously updated starting spot (left variable). Assign and update values and their indexes as it goes.

  2. Two loops (one inner) iterating through string, tracking characters as they appear. Upon repeat of character, break loop, compare current length with longest length found, and continue iteration to length of string.

*/

let lengthOfLongestSubstring = s => {
  // Storage object (a Map in this case) to track characters as they appear with their indices.
  let charsFound = new Map();

  // The 'left' variable tracks movement through the string. As characters repeat and subsequent substrings are examined, this variable allows us to return to the index proceeding the beginning of the previously examined substring.
  let left = 0;

  // Split the string into an array in order to use the reduce() method.
  // Reduce, including the accumulator (max), current value, and currrent index
  return s.split('').reduce((max, val, index) => {
    // Adjust the left/start. If the current element's storage value (index) is larger than the current left, we move one spot after that index. This keeps left up-to-date with traversal. Otherwise, it remains the same.
    left = charsFound.get(val) >= left ? charsFound.get(val) + 1 : left;

    // Set (or re-set) the value in the tracking object with the current index. When resetting, it adjusts to keep up with traversal through new substrings.
    charsFound.set(val, index);

    // Return the larger amount between (1) the current maximum (which starts at zero) and (2) the difference between the current index and current left, plus one. This second possibility measures the furthest traversed index and the beginning of the current substring (left).
    return Math.max(maximum, index - left + 1);
  }, 0);
}

// let lengthOfLongestSubstring = s => {
//   // Store longest found substring found.
//   let longestSubstr = 0;

//   // Iterate through string. The current index will initiate each new substring.
//   for (let i = 0; i < s.length; i++) {

//     // Store characters as they appear. A Set contains only one instance of each value. It will be used to evaluate whether any character repeats. Note that an alternate approach could use an object/Map to store both the value and its index to optimize iteration.
//     let charsFound = new Set();

//     // Iterate through string with an inner loop to determine substring length without repeating characters.
//     for (let j = i; j < s.length; j++) {
//       // If the set contains the current character, it is repeating.
//       if (charsFound.has(s[j])) {
//         // Upon repeat, the inner loop can end for length evaluation, and move on to the next possible substring.
//         break;
//       } else {
//         // if the Set does not contain the current character, iteration continues, increasing the size of the current substring. Add the current character to the Set for future repeat checks.
//         charsFound.add(s[j]);
//       }
//     }

//     // At the break or end of the inner loop iteration, compare the longest substring found against the length of the current substring. Assign the longest substring variable to the largest of the two. The length of the current substring can be determined by checking the size of the Set, as its size is the current number of non-repeating characters.
//     longestSubstr = Math.max(longestSubstr, charsFound.size);
//   }

//   // After the string is traversed, return the length of the longest substring.
//   return longestSubstr;
// };

