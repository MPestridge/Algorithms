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
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from 0 to 100.
// Any grade less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's grade according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
// If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
// For example,  grade = 84 will be rounded to 85 but grade = 29 will not be rounded because the rounding would result in a number that is less than 40.

// Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

// Function Description:
// Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.
// gradingStudents has the following parameter(s):
// grades: an array of integers representing grades before rounding

// Input Format:
// The first line contains a single integer, n, the number of students.
// Each line i of the n subsequent lines contains a single integer, grades[i], denoting student i's grade.

// Constraints:
// 1 <= n <= 60
//0 <= grades[i] <= 100

// Output Format:
// For each , print the rounded grade on a new line.

// Sample Input:
// 4
// 73
// 67
// 38
// 33

// Sample Output:
// 75
// 67
// 40
// 33

function gradingStudents(grades) {
  let outputArr = [];
  for (let i = 0; i < grades.length; i++) {
    (grades[i] < 38) || ((grades[i] + 5) - (Math.ceil(grades[i] / 5) * 5) < 3) ? outputArr.push(grades[i]): outputArr.push((Math.round(grades[i] / 5) * 5));
  }
  return outpurArr;
}
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
// Apples and Oranges
// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below, the red region denotes his house, where s is the start point, and t is the endpoint. The apple tree is to the left of his house, and the orange tree is to its right. You can assume the trees are located on a single point, where the apple tree is at point a, and the orange tree is at point b.

// When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right.

// Given the value of d for m apples and n oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s, t])?

// For example, Sam's house is between s=7 and t=10. The apple tree is located at a=4 and the orange at b=12. There are m=3 apples and n=3 oranges. Apples are thrown apples=[2, 3, -4] units distance from a, and oranges=[3, -2, -4] units distance. Adding each apple distance to the position of the tree, they land at [4+2, 4+3, 4+-4] = [6, 7, 0]. Oranges land at [12+3, 12+-2, 12+-4] = [15, 10, 8]. One apple and two oranges land in the inclusive range 7 through 10 so we print:
// 1
// 2

// Function Description:
// Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

// countApplesAndOranges has the following parameter(s):
// s: integer, starting point of Sam's house location.
// t: integer, ending location of Sam's house location.
// a: integer, location of the Apple tree.
// b: integer, location of the Orange tree.
// apples: integer array, distances at which each apple falls from the tree.
// oranges: integer array, distances at which each orange falls from the tree.

// Input Format:
// The first line contains two space-separated integers denoting the respective values of s and t.
// The second line contains two space-separated integers denoting the respective values of a and b.
// The third line contains two space-separated integers denoting the respective values of m and n.
// The fourth line contains m space-separated integers denoting the respective distances that each apple falls from point a.
// The fifth line contains n space-separated integers denoting the respective distances that each orange falls from point b.

// Constraints:
// 1<=s, t, a, b, m, n <=10^5
// -10^5 <= d <= 10^5
// a < s < t < b

// Output Format:
// Print two integers on two different lines:
// The first integer: the number of apples that fall on Sam's house.
// The second integer: the number of oranges that fall on Sam's house.

// Sample Input:
// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6

// Sample Output:
// 1
// 1

// Explanation:
// The first apple falls at position 5 - 2 = 3.
// The second apple falls at position 5 + 2 = 7.
// The third apple falls at position 5 + 1 = 6.
// The first orange falls at position 15 + 5 = 20.
// The second orange falls at position 15 - 6 = 9.
// Only one fruit (the second apple) falls within the region between 7 and 11, so we print 1 as our first line of output.
// Only the second orange falls within the region between 7 and 11, so we print 1 as our second line of output.

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  console.log(apples.filter(apple => apple + a >= s && apple + a <= t).length);
  console.log(oranges.filter(orange => orange + b >= s && orange + b <= t).length);
};
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
// 2D Array - DS
// Given a 6x6 2D Array, arr:

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0

// We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:
// a b c
//   d
// e f g

// There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

// For example, given the 2D array:
// -9 -9 -9  1 1 1
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0

// We calculate the following 16 hourglass values:
// -63, -34, -9, 12,
// -10, 0, 28, 23,
// -27, -11, -2, 10,
// 9, 17, 25, 18

// Our highest hourglass value is 28 from the hourglass:
// 0 4 3
//   1
// 8 6 6

// Function Description:
// Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

// hourglassSum has the following parameter(s):
// arr: an array of integers

// Input Format:
// Each of the 6 lines of inputs arr[i] contains 6 space-separated integers arr[i][j].

// Constraints:
// -9 <= arr[i][j] <= 9
// 0 <= i,j <= 5

// Output Format:
// Print the largest (maximum) hourglass sum found in arr.

// Sample Input:
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0

// Sample Output:
// 19

// Explanation:
// arr contains the following hourglasses:
// 1 1 1  1 1 0  1 0 0  0 0 0
//   1      0      0      0
// 1 1 1  1 1 0  1 0 0  0 0 0

// 0 1 0  1 0 0  0 0 0  0 0 0
//   1      1      0      0
// 0 0 2  0 2 4  2 4 4  4 4 0

// 1 1 1  1 1 0  1 0 0  0 0 0
//   0      2      4      4
// 0 0 0  0 0 2  0 2 0  2 0 0

// 0 0 2  0 2 4  2 4 4  4 4 0
//   0      0      2      0
// 0 0 1  0 1 2  1 2 4  2 4 0

// The hourglass with the maximum sum (19) is:
// 2 4 4
//   2
// 1 2 4

function hourglassSum(arr) {
  let sumsArr = [];
  let i = 0;
  let j = 0;
  let maxSum = 0;
  while (sumsArr.length < 16) {
    if (i < 4) {
      sumsArr.push(arr[j][i] + arr[j][i + 1] + arr[j][i + 2] + arr[j + 1][i + 1] + arr[j + 2][i] + arr[j + 2][i + 1] + arr[j + 2][i + 2]);
      i++;
    } else {
      i = 0;
      j++;
    };
  }
  maxSum = sumsArr.reduce(function(a, b) {
    return Math.max(a, b);
  });
  return maxSum;
}
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -
