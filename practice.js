"use strict";
// Consider a staircase of size n=4:
//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// staircase has the following parameter(s):
// n: an integer
// Input Format
// A single integer, n, denoting the size of the staircase.

// Constraints
// 0 < n <= 100.

// Output Format
// Print a staircase of size n using # symbols and spaces.
// Note: The last line must have 0 spaces in it.

// Sample Input: 6
// Sample Output:
//      #
//     ##
//    ###
//   ####
//  #####
// ######
//
//Explanation: The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of n=6.

// My code:
function staircase(n) {
  let staircasePrint = "";
  for (let i = 1; i <= n; i++) {
    staircasePrint = (" ").repeat(n - i) + ("#").repeat(i);
    console.log(staircasePrint);
  }
}
staircase(6);
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
//Tallest Birthday Candles
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// For example, arr = [1, 3, 5, 7, 9]. Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24. We would print:
// 16 24
// Function Description
// Complete the miniMaxSum function in the editor below. It should print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.
// miniMaxSum has the following parameter(s):
// arr: an array of 5 integers

// Input Format
// A single line of five space-separated integers.

// Constraints:
// 1 <= arr[i] <= 10^9

// Output Format
// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input:
// 1 2 3 4 5

// Sample Output:
// 10 14

// Explanation:
// Our initial numbers are 1, 2, 3, 4, and 5. We can calculate the following sums using four of the five integers:
// If we sum everything except 1, our sum is 2 + 3 + 4 + 5 = 14.
// If we sum everything except 2, our sum is 1 + 3 + 4 + 5 = 13.
// If we sum everything except 3, our sum is 1 + 2 + 4 + 5 = 12.
// If we sum everything except 4, our sum is 1 + 2 + 3 + 5 = 11.
// If we sum everything except 5, our sum is 1 + 2 + 3 + 4 = 10.

// My code:
function miniMaxSum(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  let minSum = sortArr.slice(0, 4).reduce((a, b) => a + b, 0);
  let maxSum = sortArr.slice(1, 5).reduce((a, b) => a + b, 0);

  console.log(minSum + ' ' + maxSum);
}
miniMaxSum();
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
//Time Conversion
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// Function Description:
// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):
// s: a string representing time in 12 hour format

// Input Format:
// A single string s containing a time in 12-hour clock format (i.e.: hh:mm:ss:AM or hh:mm:ss:PM), where 01<=hh<=12 and 00<=mm,ss<=59.

// Constraints:
// All input times are valid

// Output Format:
// Convert and print the given time in 24-hour format, where 00<=hh<=23.

// Sample Input:
// 07:05:45PM

// Sample Output:
// 19:05:45

//My code:
function timeConversion(s) {
  if (s[8] === 'P') {
    let updatedHour = (Number(s.substring(0, 2))) + 12;
    if (updatedHour >= 24) {
      s = s.substring(0, 8);
    } else {
      s = String(updatedHour) + s.substring(2, 8);
    }
  } else {
    if (Number(s.substring(0, 2)) === 12) {
      s = '00' + s.substring(2, 8);
    } else {
      s = s.substring(0, 8);
    }
  }
  return s;
}