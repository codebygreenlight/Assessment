// password-generator.js
const generator = require('generate-password');

const password = generator.generate({
  length: 10, // Length of the password
  numbers: true, // Include numbers
  symbols: true, // Include symbols
  lowercase: true, // Include lowercase letters
  uppercase: true, // Include uppercase letters
});

console.log('Generated Password:', password);
