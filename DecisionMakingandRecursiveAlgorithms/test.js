// Import functions
const { fibonacci, isPalindrome } = require('./recursion');
const { isLeapYear, getClothingAdvice } = require('./decisionMaking');

// Test Decision Making Functions
console.log("\nTesting Leap Year Checker:");
console.log("2000:", isLeapYear(2000)); // true
console.log("2100:", isLeapYear(2100)); // false
console.log("2024:", isLeapYear(2024)); // true

console.log("\nTesting Weather Clothing Adviser:");
console.log("5°C, Raining:", getClothingAdvice(5, true));
console.log("25°C, Not Raining:", getClothingAdvice(25, false));
console.log("-2°C, Raining:", getClothingAdvice(-2, true));

// Test Recursive Functions
console.log("\nTesting Fibonacci:");
console.log("fibonacci(0):", fibonacci(0)); // 0
console.log("fibonacci(5):", fibonacci(5)); // 5
console.log("fibonacci(8):", fibonacci(8)); // 21

console.log("\nTesting Palindrome Checker:");
console.log("'A man, a plan, a canal: Panama':", isPalindrome("A man, a plan, a canal: Panama")); // true
console.log("'race a car':", isPalindrome("race a car")); // false
console.log("'Was it a car or a cat I saw?':", isPalindrome("Was it a car or a cat I saw?")); // true 