
///////////////////////////////////// NUMBER PROBLEMS /////////////////////////////////////
// Check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));

// Find the largest number in an array
function findLargest(arr) {
  if (arr.length === 0) return null;
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(findLargest([3, 5, 7, 2, 8])); // Output: 8
console.log(findLargest([])); // Output: null


// Merge two sorted arrays into one sorted array
function margearray() {
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  // Merges and sorts numerically
  const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  console.log(merged);
}
margearray()

// Generate Fibonacci sequence up to a certain number


// Sort an array of numbers in ascending order
// Find the factorial of a number
// Calculate the power of a number using recursion
// Find the greatest common divisor (GCD) of two numbers
// Check if a number is a perfect square
// Find the least common multiple (LCM) of two numbers
// Calculate the sum of all numbers in an array
// Find the second largest number in an array
// Calculate the average of an array of numbers
// Check if a number is a power of two
// Calculate the difference between two dates in days
// Check if a number is a perfect number
// Generate a random integer between two values (inclusive)
// Check if a string is a valid IP address
// Calculate the sum of digits in a number
// Check if a string is a valid credit card number using the Luhn algorithm
// Calculate the median of an array of numbers
// Calculate the sum of all even numbers in an array
// Check if a number is a power of three
// Generate a random hexadecimal color code
// Check if a string is a valid ISBN-10 or ISBN-13 number
// Calculate the sum of all odd numbers in an array
// Calculate the product of all numbers in an array
// Check if a number is a power of four
// Calculate the sum of all prime numbers up to a certain number
// Check if a string is a valid time in 24-hour format (HH:MM)
// Calculate the sum of all numbers in a nested array
// Find the longest common prefix among an array of strings using divide and conquer
// Check if a number is a power of five
// Calculate the sum of all numbers in an array using recursion
// Check if a string is a valid date in the format YYYY-MM-DD
// Calculate the sum of all numbers in a 2D array


