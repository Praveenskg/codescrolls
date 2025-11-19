---
sidebar_position: 1
title: JavaScript Functions - Complete Guide with Examples
description:
  Master JavaScript functions including function declarations, expressions,
  arrow functions, callbacks, higher-order functions, closures, and best
  practices with practical examples.
keywords:
  [
    javascript functions,
    arrow functions,
    function declaration,
    function expression,
    callback functions,
    higher order functions,
    closures javascript,
    function parameters,
    return statement,
  ]
tags:
  - JavaScript
  - Functions
  - Intermediate
---

# JavaScript Functions

Functions are **reusable blocks of code** that perform specific tasks. They are
the heart of JavaScript programming and allow you to write modular, maintainable
code.

---

## 📌 Why Functions Matter

- 🔄 **Reusability** - Write once, use many times
- 📦 **Modularity** - Break complex problems into smaller parts
- 🧹 **Maintainability** - Easier to update and debug
- 🎯 **Abstraction** - Hide implementation details
- ⚡ **Performance** - Execute code only when needed

---

## 1️⃣ Function Declaration

The traditional way to define a function.

### Syntax

```js
function functionName(parameters) {
  // code to execute
  return value;
}
```

### Basic Example

```js live
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // "Hello, Alice!"
console.log(greet('Bob')); // "Hello, Bob!"
```

### Function with Multiple Parameters

```js live
function calculateTotal(price, quantity, tax = 0.08) {
  const subtotal = price * quantity;
  const taxAmount = subtotal * tax;
  const total = subtotal + taxAmount;
  return total;
}

console.log(calculateTotal(10, 3)); // 32.4
console.log(calculateTotal(10, 3, 0.1)); // 33
```

### Hoisting

Function declarations are **hoisted** - you can call them before they're
defined!

```js live
// This works!
console.log(sayHello('World')); // "Hello, World!"

function sayHello(name) {
  return `Hello, ${name}!`;
}
```

---

## 2️⃣ Function Expression

Functions can be assigned to variables.

### Anonymous Function Expression

```js live
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(5, 3)); // 15
console.log(typeof multiply); // "function"
```

### Named Function Expression

```js live
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
```

### No Hoisting

```js
// ❌ Error: Cannot access before initialization
console.log(divide(10, 2));

const divide = function (a, b) {
  return a / b;
};
```

---

## 3️⃣ Arrow Functions (ES6)

Modern, concise syntax for writing functions.

### Basic Syntax

```js live
// Traditional function
const add1 = function (a, b) {
  return a + b;
};

// Arrow function
const add2 = (a, b) => {
  return a + b;
};

// Implicit return (one-liner)
const add3 = (a, b) => a + b;

console.log(add1(5, 3)); // 8
console.log(add2(5, 3)); // 8
console.log(add3(5, 3)); // 8
```

### Single Parameter

```js live
// Parentheses optional for single parameter
const square = x => x * x;
const cube = x => x ** 3;

console.log(square(5)); // 25
console.log(cube(3)); // 27
```

### No Parameters

```js live
// Parentheses required for no parameters
const getRandomNumber = () => Math.floor(Math.random() * 100);

console.log(getRandomNumber());
console.log(getRandomNumber());
```

### Returning Objects

```js live
// Need parentheses to return object literal
const createUser = (name, age) => ({
  name: name,
  age: age,
  createdAt: new Date().toISOString(),
});

console.log(createUser('Alice', 25));
```

---

## 4️⃣ Parameters and Arguments

### Default Parameters

```js live
function greetUser(name = 'Guest', greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

console.log(greetUser()); // "Hello, Guest!"
console.log(greetUser('Alice')); // "Hello, Alice!"
console.log(greetUser('Bob', 'Hi')); // "Hi, Bob!"
```

### Rest Parameters

```js live
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum()); // 0
```

### Destructuring Parameters

```js live
function displayUser({ name, age, city = 'Unknown' }) {
  console.log(`${name} is ${age} years old from ${city}`);
}

displayUser({ name: 'Alice', age: 25, city: 'NYC' });
displayUser({ name: 'Bob', age: 30 });
```

---

## 5️⃣ Return Statement

### Single Return

```js live
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
```

### Multiple Returns (Early Return)

```js live
function validateAge(age) {
  if (age < 0) {
    return 'Age cannot be negative';
  }
  if (age < 18) {
    return 'Minor';
  }
  if (age < 65) {
    return 'Adult';
  }
  return 'Senior';
}

console.log(validateAge(-5)); // "Age cannot be negative"
console.log(validateAge(15)); // "Minor"
console.log(validateAge(30)); // "Adult"
console.log(validateAge(70)); // "Senior"
```

### Returning Multiple Values

```js live
function getCoordinates() {
  return [40.7128, -74.006]; // Return array
}

const [latitude, longitude] = getCoordinates();
console.log(`Lat: ${latitude}, Lon: ${longitude}`);

// Or return object
function getUserInfo() {
  return {
    name: 'Alice',
    email: 'alice@example.com',
    age: 25,
  };
}

const { name, email } = getUserInfo();
console.log(`${name}: ${email}`);
```

---

## 6️⃣ Callback Functions

Functions passed as arguments to other functions.

### Basic Callback

```js live
function processUser(name, callback) {
  console.log(`Processing ${name}...`);
  callback(name);
}

function welcomeUser(name) {
  console.log(`Welcome, ${name}!`);
}

processUser('Alice', welcomeUser);
```

### Array Methods with Callbacks

```js live
const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled); // [2, 4, 6, 8, 10]

// filter
const evens = numbers.filter(n => n % 2 === 0);
console.log('Evens:', evens); // [2, 4]

// reduce
const sum = numbers.reduce((total, n) => total + n, 0);
console.log('Sum:', sum); // 15

// forEach
numbers.forEach(n => console.log(`Number: ${n}`));
```

---

## 7️⃣ Higher-Order Functions

Functions that take functions as arguments or return functions.

### Function Returning Function

```js live
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### Function Taking Function

```js live
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(applyOperation(5, 3, add)); // 8
console.log(applyOperation(5, 3, multiply)); // 15
```

---

## 8️⃣ Closures

Functions that remember their outer scope.

### Basic Closure

```js live
function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(counter.decrement()); // 1
```

### Practical Closure Example

```js live
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        return `Deposited $${amount}. New balance: $${balance}`;
      }
      return 'Invalid amount';
    },
    withdraw(amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        return `Withdrawn $${amount}. New balance: $${balance}`;
      }
      return 'Invalid or insufficient funds';
    },
    getBalance() {
      return `Current balance: $${balance}`;
    },
  };
}

const account = createBankAccount(100);
console.log(account.deposit(50)); // "Deposited $50. New balance: $150"
console.log(account.withdraw(30)); // "Withdrawn $30. New balance: $120"
console.log(account.getBalance()); // "Current balance: $120"
```

---

## 🎯 Best Practices

### 1. Use Descriptive Names

```js
// ❌ Bad
function calc(x, y) {
  return x + y;
}

// ✅ Good
function calculateTotal(price, quantity) {
  return price * quantity;
}
```

### 2. Keep Functions Small

```js
// ❌ Bad - Does too much
function processOrder(order) {
  // validate
  // calculate total
  // apply discount
  // charge credit card
  // send email
  // update inventory
  // etc...
}

// ✅ Good - Single responsibility
function validateOrder(order) {
  /* ... */
}
function calculateOrderTotal(order) {
  /* ... */
}
function chargePayment(order) {
  /* ... */
}
```

### 3. Use Default Parameters

```js
// ❌ Bad
function greet(name) {
  name = name || 'Guest';
  return `Hello, ${name}`;
}

// ✅ Good
function greet(name = 'Guest') {
  return `Hello, ${name}`;
}
```

### 4. Use Arrow Functions for Short Callbacks

```js
// ❌ Verbose
const numbers = [1, 2, 3];
const doubled = numbers.map(function (n) {
  return n * 2;
});

// ✅ Concise
const doubled2 = numbers.map(n => n * 2);
```

---

## 💡 Common Pitfalls

### Pitfall 1: Forgetting Return Statement

```js
function add(a, b) {
  a + b; // ❌ Missing return!
}

console.log(add(5, 3)); // undefined
```

### Pitfall 2: Arrow Function `this` Binding

```js
const user = {
  name: 'Alice',
  regularFunction: function () {
    console.log(this.name); // ✅ "Alice"
  },
  arrowFunction: () => {
    console.log(this.name); // ❌ undefined (no own `this`)
  },
};
```

### Pitfall 3: Modifying Parameters

```js
function addItem(array, item) {
  array.push(item); // ❌ Mutates original array
  return array;
}

// ✅ Better - Return new array
function addItem(array, item) {
  return [...array, item];
}
```

---

## 🧪 Practice Exercises

### Exercise 1: Temperature Converter

```js
// Create a function that converts Celsius to Fahrenheit
// Formula: F = (C × 9/5) + 32

// Your code here
```

<details>
<summary>Solution</summary>

```js
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit(100)); // 212
console.log(celsiusToFahrenheit(37)); // 98.6
```

</details>

### Exercise 2: Array Processor

```js
// Create a function that takes an array and a callback
// Apply the callback to each element
// Your code here
```

<details>
<summary>Solution</summary>

```js
function processArray(arr, callback) {
  return arr.map(callback);
}

const numbers = [1, 2, 3, 4, 5];
console.log(processArray(numbers, n => n * 2)); // [2, 4, 6, 8, 10]
console.log(processArray(numbers, n => n ** 2)); // [1, 4, 9, 16, 25]
```

</details>

---

## 📚 Real-World Examples

### Example 1: Form Validator

```js live
function createValidator() {
  return {
    isEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    isPhone(phone) {
      return /^\d{10}$/.test(phone.replace(/\D/g, ''));
    },
    isStrongPassword(password) {
      return (
        password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password)
      );
    },
  };
}

const validator = createValidator();
console.log(validator.isEmail('user@example.com')); // true
console.log(validator.isEmail('invalid-email')); // false
console.log(validator.isStrongPassword('Weak')); // false
console.log(validator.isStrongPassword('Strong123')); // true
```

### Example 2: Data Processor

```js live
function createDataProcessor(data) {
  return {
    filter(predicate) {
      return createDataProcessor(data.filter(predicate));
    },
    map(transform) {
      return createDataProcessor(data.map(transform));
    },
    reduce(reducer, initial) {
      return data.reduce(reducer, initial);
    },
    get value() {
      return data;
    },
  };
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = createDataProcessor(numbers)
  .filter(n => n % 2 === 0) // [2, 4, 6, 8, 10]
  .map(n => n * 2) // [4, 8, 12, 16, 20]
  .reduce((sum, n) => sum + n, 0); // 60

console.log('Result:', result);
```

---

## 🔗 What's Next?

Master arrays and their powerful methods!

👉 [Next: Arrays & Objects »](./arrays-objects.md)

---

## 📖 Additional Resources

- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [JavaScript.info: Functions](https://javascript.info/function-basics)
