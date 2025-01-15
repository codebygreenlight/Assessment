// String Manipulation Functions:

// 1. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

//2. Count the number of characters in a string
function countCharacters(str) {
    return str.length;
}

//3. Capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}



// Array Functions:

// 1. Find maximum value in array
function findMax(arr) {
    if (arr.length === 0) return null;
    return Math.max(...arr);
}

function findMin(arr) {
    if (arr.length === 0) return null;
    return Math.min(...arr);
}

// 2. Calculate sum of array elements
function sumArray(arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((sum, num) => sum + num, 0);
}

// 3. Filter array elements based on condition
function filterArray(arr, condition) {
    return arr.filter(condition);
}


// Mathematical Functions:

// 1. Calculate factorial of a number
function factorial(n) {
    if (n < 0) return null;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// 2. Check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 3. Generate Fibonacci sequence
function fibonacci(terms) {
    if (terms <= 0) return [];
    if (terms === 1) return [0];
    
    const sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
    }
    return sequence;
}




