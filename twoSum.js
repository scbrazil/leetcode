/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

  Input: nums = [3,2,4], target = 6
  Output: [1,2]

Example 3:

  Input: nums = [3,3], target = 6
  Output: [0,1]

*/

/*
  Approaches:

  1. Using a storage object, traverse array twice (one inner loop), adding elements to match target.

  2. Store elements in object as 'value: index'. Subtract each new element from target. Look for the difference in the storage object. If it is present, those two values equal the target. Return the indices of those elements.

    Ex. Target is 9. Object contains 7. Current element is 2.

        9 - 2 === 7
        Object.hasOwnProperty(7) === true
        Return indices of 2 and 7.
*/

const twoSum = (nums, target) => {
  // track and store numbers with assigned values of indices
  let numsFound = {};

  // traverse integer array
  for (let i = 0; i < nums.length; i++) {
    // Determine the difference between the target and current element value.
    let difference = target - nums[i];

    // If the integer storage object already contains the difference between the target and the current element value, then we have found two values that add up to the target value.
    if (numsFound.hasOwnProperty(difference)) {
      // Return the indices of the two values. Remember that the storage object contains value: index properties for accurate, efficient reference.
      return [numsFound[difference], i];
    } else {
      // Assign the current element value to the tracking object with its index as its value. When two correct values are found, the property lookup will provide the index needed for return.
      numsFound[nums[i]] = i;
    }
  }

  // Edge case: If no two values add up to the target, return an empty array.
  return [];
};