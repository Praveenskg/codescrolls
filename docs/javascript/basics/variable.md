---
sidebar_position: 1
title: JavaScript Variables - var, let, const
description:
  Learn JavaScript variables with var, let, and const. Understand scope,
  hoisting, and best practices with practical examples for modern JavaScript
  development.
keywords:
  [
    javascript variables,
    var let const,
    javascript variable declaration,
    variable scope,
    hoisting javascript,
    js variables tutorial,
    const vs let,
    modern javascript variables,
  ]
tags:
  - JavaScript
  - Variables
  - Basics
---

# Variables in JavaScript

Variables are **containers for storing data values** in JavaScript. Think of
them as labeled boxes where you can store information and retrieve it later.

In modern JavaScript, you can declare variables using three keywords: `var`,
`let`, and `const`.

---

## 📌 Quick Comparison

| Feature           | `var`                 | `let`                   | `const`                    |
| ----------------- | --------------------- | ----------------------- | -------------------------- |
| **Scope**         | Function-scoped       | Block-scoped            | Block-scoped               |
| **Reassignment**  | ✅ Allowed            | ✅ Allowed              | ❌ Not allowed             |
| **Redeclaration** | ✅ Allowed            | ❌ Not allowed          | ❌ Not allowed             |
| **Hoisting**      | Yes (initialized)     | Yes (not initialized)   | Yes (not initialized)      |
| **Usage**         | ❌ Avoid in modern JS | ✅ Use for changing val | ✅ Use for constant values |
| **Introduced**    | ES5 (1995)            | ES6 (2015)              | ES6 (2015)                 |

---

## 1️⃣ var (Legacy - Avoid)

The `var` keyword is the **old way** of declaring variables. It has some quirks
that can lead to bugs.

### Basic Syntax

```js
var name = 'John';
var age = 30;
var isStudent = true;

console.log(name); // John
console.log(age); // 30
```

### Problems with `var`

#### ❌ Function Scope (Not Block Scope)

```js
function testVar() {
  if (true) {
    var message = 'Hello';
  }
  console.log(message); // ✅ Works - "Hello"
  // var ignores block scope!
}

testVar();
```

#### ❌ Can Be Redeclared

```js
var user = 'Alice';
var user = 'Bob'; // No error!
console.log(user); // Bob (confusing!)
```

#### ❌ Hoisting Issues

```js
console.log(score); // undefined (not an error!)
var score = 100;
// Variable is hoisted but initialized as undefined
```

### When to Use `var`

> 🚫 **Never use `var` in modern JavaScript.** Use `let` or `const` instead.

---

## 2️⃣ let (Modern Way)

The `let` keyword is the **modern way** to declare variables that can change.

### Basic Syntax

```js
let city = 'New York';
let temperature = 25;
let isRaining = false;

console.log(city); // New York
```

### Reassignment Allowed

```js
let count = 0;
count = 1; // ✅ Works
count = count + 1; // ✅ Works
console.log(count); // 2
```

### Block Scope

```js
function testLet() {
  if (true) {
    let message = 'Hello';
    console.log(message); // ✅ Works - "Hello"
  }
  console.log(message); // ❌ Error: message is not defined
}
```

### No Redeclaration

```js
let username = 'Alice';
let username = 'Bob'; // ❌ Error: Identifier 'username' has already been declared
```

### Real-World Example

```js live
function updateScore() {
  let score = 0; // Score can change

  score = score + 10; // Player scores
  console.log(`Score: ${score}`); // 10

  score += 20; // Player scores more
  console.log(`Score: ${score}`); // 30

  score *= 2; // Bonus multiplier
  console.log(`Final Score: ${score}`); // 60
}

updateScore();
```

---

## 3️⃣ const (Constant Values)

The `const` keyword declares **constant values** that cannot be reassigned.

### Basic Syntax

```js
const PI = 3.14159;
const APP_NAME = 'MyApp';
const MAX_USERS = 100;

console.log(PI); // 3.14159
```

### Cannot Reassign

```js
const birthYear = 1990;
birthYear = 1991; // ❌ Error: Assignment to constant variable
```

### Must Initialize

```js
const email; // ❌ Error: Missing initializer in const declaration
const email = 'test@example.com'; // ✅ Correct
```

### Objects and Arrays with const

**Important:** `const` prevents reassignment, but **doesn't make objects
immutable**.

```js live
// You CAN modify object properties
const user = {
  name: 'Alice',
  age: 25,
};

user.age = 26; // ✅ Works - modifying property
user.email = 'alice@example.com'; // ✅ Works - adding property
console.log(user);

// user = {}; // ❌ Error - cannot reassign
```

```js live
// You CAN modify arrays
const colors = ['red', 'blue'];

colors.push('green'); // ✅ Works
colors[0] = 'yellow'; // ✅ Works
console.log(colors); // ['yellow', 'blue', 'green']

// colors = []; // ❌ Error - cannot reassign
```

---

## 🎯 Best Practices

### 1. Use `const` by Default

```js
const API_URL = 'https://api.example.com';
const MAX_RETRIES = 3;
const user = { name: 'John', role: 'admin' };
```

### 2. Use `let` When Value Changes

```js
let counter = 0;
let isLoading = false;
let userInput = '';
```

### 3. Never Use `var`

```js
// ❌ Bad
var name = 'John';

// ✅ Good
const name = 'John';
```

### 4. Use Descriptive Names

```js
// ❌ Bad
const x = 25;
const d = new Date();

// ✅ Good
const userAge = 25;
const currentDate = new Date();
```

### 5. Use UPPER_CASE for Constants

```js
const API_KEY = 'abc123xyz';
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const DEFAULT_TIMEOUT = 3000;
```

---

## 💡 Common Pitfalls

### Pitfall 1: Forgetting to Declare

```js
// ❌ Bad - creates global variable!
score = 100;

// ✅ Good
let score = 100;
```

### Pitfall 2: Using `var` in Loops

```js
// ❌ Problem with var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Logs: 3, 3, 3 (all reference same i)

// ✅ Solution with let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Logs: 0, 1, 2 (each has own i)
```

### Pitfall 3: Reassigning `const`

```js
const MAX_USERS = 100;
MAX_USERS = 200; // ❌ Error!

// If you need to change it, use let:
let maxUsers = 100;
maxUsers = 200; // ✅ Works
```

---

## 🧪 Practice Exercises

### Exercise 1: Variable Declaration

```js
// Declare variables for a user profile
// Use const for: name, email
// Use let for: age, isOnline

// Your code here:
```

<details>
<summary>Solution</summary>

```js
const name = 'John Doe';
const email = 'john@example.com';
let age = 25;
let isOnline = true;

// Later in code:
age = 26; // ✅ Can update
isOnline = false; // ✅ Can update
```

</details>

### Exercise 2: Fix the Code

```js
// Fix this code to use modern JavaScript
var userName = 'Alice';
var userAge = 25;
userName = 'Bob';
```

<details>
<summary>Solution</summary>

```js
let userName = 'Alice'; // Use let - can change
const userAge = 25; // Use const - won't change
userName = 'Bob'; // ✅ Works
```

</details>

---

## 📚 Real-World Examples

### Example 1: Shopping Cart

```js live
function shoppingCart() {
  const TAX_RATE = 0.08; // Constant - never changes
  let total = 0; // Changes as items added

  // Add items
  total += 29.99; // Item 1
  total += 15.5; // Item 2
  total += 42.0; // Item 3

  // Calculate with tax
  const finalTotal = total * (1 + TAX_RATE);

  console.log(`Subtotal: $${total.toFixed(2)}`);
  console.log(`Tax (8%): $${(total * TAX_RATE).toFixed(2)}`);
  console.log(`Final Total: $${finalTotal.toFixed(2)}`);
}

shoppingCart();
```

### Example 2: User Authentication

```js
function authenticateUser(username, password) {
  const MIN_PASSWORD_LENGTH = 8; // Constant requirement
  let isValid = false; // Will change based on validation
  const errors = []; // Collects errors

  // Validate
  if (username.length < 3) {
    errors.push('Username too short');
  }

  if (password.length < MIN_PASSWORD_LENGTH) {
    errors.push(`Password must be at least ${MIN_PASSWORD_LENGTH} characters`);
  }

  isValid = errors.length === 0;

  return { isValid, errors };
}

console.log(authenticateUser('jo', '12345')); // Invalid
console.log(authenticateUser('john_doe', 'securePass123')); // Valid
```

---

## 🔗 What's Next?

Now that you understand variables, let's learn about different **data types**
you can store in them!

👉 [Next: Data Types »](./datatypes.md)

---

## 📖 Additional Resources

- [MDN: var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [MDN: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [JavaScript.info: Variables](https://javascript.info/variables)
