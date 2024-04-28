# 📦emptiness-check

A lightweight npm package for checking if input is empty, including handling null, undefined, empty string, empty array, and empty object.

## 🚀Installation

You can install `emptiness-check` using npm:

```bash
npm install emptiness-check
```

## ✨Usage

After installation, you can import the package into your JavaScript files and use it to check input values. Here are some examples:

```bash
const emptinessCheck = require('emptiness-check');
// Check if input is empty
console.log(emptinessCheck(null));          // true
console.log(emptinessCheck(undefined));     // true
console.log(emptinessCheck(''));            // true
console.log(emptinessCheck([]));            // true
console.log(emptinessCheck({}));            // true
console.log(emptinessCheck('Hello'));       // false
console.log(emptinessCheck([1, 2, 3]));     // false
console.log(emptinessCheck({ key: 'value' }));  // false
```

## 🤝Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
