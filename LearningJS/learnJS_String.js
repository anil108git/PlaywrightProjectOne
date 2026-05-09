
///////////////////////////////////// STRING PROBLEMS /////////////////////////////////////

// Remove duplicates letters from a string
function removeDuplicates(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}
console.log(removeDuplicates('hello world')); // Output: 'helo wrd'

// Check if a string is a palindrome
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
console.log(isPalindrome('A man, a plan, a canal, Panama')); // Output: true
console.log(isPalindrome('Hello')); // Output: false

// Count the number of vowels in a string
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels('Hello World')); // Output: 3
console.log(countVowels('JavaScript')); // Output: 3

// Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Convert a string to title case
function titleCase1(str) {
  const aa = str.toUpperCase();
  console.log(aa);
}

titleCase1('Hello world!');

// Find the longest word in a string
function longestword(srt) {
  let words = srt.split(' ');
  let longest = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  console.log('Longest world is:' + longest);
}
longestword('Check if a string contains only unique characters')


// Remove all whitespace from a string
function removeWhiteSpace() {
  let str = 'fd t t e f ye q d he';
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      newStr += str[i];
    }
  }
  console.log(newStr);
}
removeWhiteSpace()

// Check if a string is a valid email address
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email)) {
    console.log('Valid email');
  } else {
    console.log('Invalid email');
  }
}

isValidEmail('anil@gmail.com');

// Check if a string is a valid palindrome ignoring spaces and punctuation
function validPalindromeMethod1() {
  let str = 'A man, a plan, a canal: Panama';
  str = str.toLowerCase();
  let ignoreString = "!&:;, '.?";
  let strCont = '';
  let strReverse = '';
  // Forward string
  for (let i = 0; i < str.length; i++) {
    if (!ignoreString.includes(str[i])) {
      strCont += str[i];
    }
  }
  // Reverse string
  for (let j = str.length - 1; j >= 0; j--) {
    if (!ignoreString.includes(str[j])) {
      strReverse += str[j];
    }
  }
  console.log(strCont === strReverse ? "Valid palindrome" : "Invalid palindrome");
}
validPalindromeMethod1();

function validPalindromeMethod2() {
  console.log('...Regex.../[^a-z0-9]/g emove everything except:letters numbers.......');
  let str = 'A man, a plan, a canal: Panama';
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reveredStr = cleanedStr.split('').reverse().join('');
  console.log(cleanedStr === reveredStr ? "Valid palindrome" : "Invalid palindrome")
}
validPalindromeMethod2()

// Check if a string is a valid URL
function isValidURL(str) {
  try {
    new URL(str);
    console.log('Valid URL');
  } catch (error) {
    console.log('Invalid URL');
  }
}
isValidURL('https://www.google.com');


// Generate a random password of a given length
function generatePassword(length = 12) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

console.log(generatePassword(16)); // Generates a 16-character password


// Find the number of occurrences of a specific character in a string
function numberOfoccurrences(str) {
  let maxCount = 0;
  let maxChar = '';
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      maxChar = str[i];
    }
  }
  console.log('Count and char of the given string: ' + maxCount + ' : ' + maxChar);
}
numberOfoccurrences('numberOfoccurrences');

// Check if a string is a valid JSON
function isValidJSON(str) {
  try {
    JSON.parse(str);
    console.log('Valid JSON');
  } catch (error) {
    console.log('Invalid JSON');
  }
}
isValidJSON('{"name":"Anil","age":30}');

// Find the longest substring without repeating characters
function largestSubString() {
  const str = 'characters';
  let result = '';
  let current = '';
  for (const char of str) {
    if (current.includes(char)) {
      current = current.slice(current.indexOf(char) + 1);
    }
    current += char;
    if (current.length > result.length) {
      result = current;
    }
  }
  console.log('Longest substring:', result);
  console.log('Length:', result.length);
}
largestSubString()


// Find the longest word in a sentence

// Check if a string is a valid password (at least 8 characters, including uppercase, lowercase, and a number)
// Find the longest substring that is a palindrome in a string
// Check if a string is a valid MAC address
// Find the longest common subsequence between two strings
// Generate a random alphanumeric string of a given length
// Check if a string is a valid UUID
// Find the longest substring that contains at most two distinct characters in a string
// Generate a random binary string of a given length
// Check if a string is a valid postal code (ZIP code)
// Find the longest substring that contains at most three distinct characters in a string
