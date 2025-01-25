// 1. Fibonacci Sequence
function fibonacci(n) {
    // Base cases
    if (n < 0) return "Please enter a non-negative number";
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 2. Palindrome Checker
function isPalindrome(str) {
    // Clean the string: remove spaces, punctuation, and convert to lowercase
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Base cases
    if (str.length <= 1) return true;
    
    // Recursive case
    if (str[0] !== str[str.length - 1]) return false;
    
    // Recursive call with the rest of the string
    return isPalindrome(str.slice(1, -1));
}

// Export functions for testing
module.exports = {
    fibonacci,
    isPalindrome
}; 