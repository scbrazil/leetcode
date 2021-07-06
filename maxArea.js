/*

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Examples:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

Input: height = [4,3,2,1,4]
Output: 16

Input: height = [1,2,1]
Output: 2


This challenge is solved by reducing the size of the array while determining the available space between the points. The available area is limited by the smaller of any two numbers. Calculating this is completed by multiplying the smaller number by the space between the two current points. If it is larger than the previously determined larger area, the respective variable should be updated.

*/

let maxArea = height => {
  // track largest area
  let largest = 0,
  // track left side beginning with first index
      left = 0,
  // track right side beginning with last index
      right = height.length - 1;


  while (left < right) {
    // Determine which side is smaller. This number multiplied by the space between the two points determines the area.
    let smaller = Math.min(height[left], height[right]);
    // Find the area by multiplying the space between the two points and the smaller of the two.
    let area = (right - left) * smaller;

    // If the current area is larger than the largest found, assign the tracker to the current larger area.
    if (area > largest) largest = area;

    // Reduce the size of the array according to which side is smaller. If the left side is smaller, the array should be reduced from the left. Otherwise, reduce the size from the right.
    if (height[left] < height[right]) left++
    else right--;
  }

  // Return the largest container area found.
  return largest
};