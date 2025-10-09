---
sidebar_position: 2
title: JavaScript Data Types - Complete Guide with Examples
description: Master JavaScript data types including primitives (string, number, boolean, null, undefined, symbol, bigint) and objects. Learn with practical examples and type checking methods.
keywords:
  [
    javascript data types,
    js primitive types,
    javascript typeof,
    string number boolean,
    javascript objects,
    type coercion,
    javascript arrays,
    data types tutorial,
  ]
tags:
  - JavaScript
  - Data Types
  - Basics
---

# JavaScript Data Types

JavaScript has **8 data types** that can be divided into two categories:

1. **Primitive Types** - Immutable, stored by value
2. **Reference Types** - Mutable, stored by reference

---

## 📌 Quick Overview

| Type          | Category  | Example                  | Description                  |
| ------------- | --------- | ------------------------ | ---------------------------- |
| **String**    | Primitive | `"Hello"`, `'World'`     | Text data                    |
| **Number**    | Primitive | `42`, `3.14`, `-10`      | Numeric values               |
| **Boolean**   | Primitive | `true`, `false`          | Logical values               |
| **Null**      | Primitive | `null`                   | Intentional absence of value |
| **Undefined** | Primitive | `undefined`              | Variable not assigned        |
| **Symbol**    | Primitive | `Symbol('id')`           | Unique identifier (ES6)      |
| **BigInt**    | Primitive | `9007199254740991n`      | Large integers (ES2020)      |
| **Object**    | Reference | `{}`, `[]`, `new Date()` | Complex data structures      |

---

## 1️⃣ String

Strings represent **textual data** enclosed in quotes.

### Three Ways to Create Strings

```js
const singleQuote = 'Hello';
const doubleQuote = 'World';
const backticks = `Hello, World!`; // Template literal
```

### String Operations

```js live
const firstName = 'John';
const lastName = 'Doe';

// Concatenation
const fullName = firstName + ' ' + lastName;
console.log(fullName); // "John Doe"

// Template Literals (Modern)
const greeting = `Hello, ${firstName}!`;
console.log(greeting); // "Hello, John!"

// Multi-line String
const message = `
  Welcome to our website!
  We're glad you're here.
`;
console.log(message);
```

### Common String Methods

```js live
const text = 'JavaScript is Awesome';

console.log(text.length); // 21
console.log(text.toLowerCase()); // "javascript is awesome"
console.log(text.toUpperCase()); // "JAVASCRIPT IS AWESOME"
console.log(text.includes('Java')); // true
console.log(text.slice(0, 10)); // "JavaScript"
console.log(text.replace('Awesome', 'Amazing')); // "JavaScript is Amazing"
```

### Practical Example: Email Validation

```js live
function validateEmail(email) {
  const isValid = email.includes('@') && email.includes('.');
  const domain = email.split('@')[1];

  console.log(`Email: ${email}`);
  console.log(`Valid: ${isValid}`);
  console.log(`Domain: ${domain}`);

  return isValid;
}

validateEmail('user@example.com');
validateEmail('invalid-email');
```

---

## 2️⃣ Number

JavaScript has **only one number type** - it handles both integers and decimals.

### Number Types

```js
const integer = 42; // Integer
const decimal = 3.14159; // Float
const negative = -273.15; // Negative
const scientific = 2.998e8; // Scientific notation (299,800,000)
```

### Arithmetic Operations

```js live
const a = 10;
const b = 3;

console.log('Addition:', a + b); // 13
console.log('Subtraction:', a - b); // 7
console.log('Multiplication:', a * b); // 30
console.log('Division:', a / b); // 3.333...
console.log('Remainder:', a % b); // 1
console.log('Exponentiation:', a ** b); // 1000
```

### Special Number Values

```js live
console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number
console.log(typeof NaN); // number (Not a Number)

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log('text' * 2); // NaN
console.log(Math.sqrt(-1)); // NaN
```

### Number Methods

```js live
const price = 19.99999;

console.log(price.toFixed(2)); // "20.00" (string!)
console.log(price.toPrecision(4)); // "20.00"
console.log(Number.parseFloat('19.99px')); // 19.99
console.log(Number.parseInt('42px')); // 42
console.log(Number.isNaN(NaN)); // true
console.log(Number.isFinite(42)); // true
```

### Practical Example: Calculate Discount

```js live
function calculateDiscount(price, discountPercent) {
  const discount = price * (discountPercent / 100);
  const finalPrice = price - discount;
  const savings = discount;

  console.log(`Original Price: $${price.toFixed(2)}`);
  console.log(`Discount: ${discountPercent}%`);
  console.log(`You Save: $${savings.toFixed(2)}`);
  console.log(`Final Price: $${finalPrice.toFixed(2)}`);

  return finalPrice;
}

calculateDiscount(99.99, 25); // 25% off
```

---

## 3️⃣ Boolean

Booleans have only **two values**: `true` or `false`.

### Boolean Values

```js
const isLoggedIn = true;
const hasPermission = false;
const isActive = Boolean(1); // true
const isEmpty = Boolean(0); // false
```

### Comparison Operators

```js live
const age = 18;

console.log(age >= 18); // true
console.log(age < 18); // false
console.log(age === 18); // true (strict equality)
console.log(age == '18'); // true (loose equality)
console.log(age === '18'); // false (different types)
```

### Logical Operators

```js live
const isAdult = true;
const hasLicense = false;

console.log('AND (&&):', isAdult && hasLicense); // false
console.log('OR (||):', isAdult || hasLicense); // true
console.log('NOT (!):', !isAdult); // false
```

### Truthy and Falsy Values

```js live
// Falsy values (convert to false)
console.log('False:', Boolean(false)); // false
console.log('Zero:', Boolean(0)); // false
console.log('Empty string:', Boolean('')); // false
console.log('Null:', Boolean(null)); // false
console.log('Undefined:', Boolean(undefined)); // false
console.log('NaN:', Boolean(NaN)); // false

// Truthy values (convert to true)
console.log('True:', Boolean(true)); // true
console.log('Number:', Boolean(42)); // true
console.log('String:', Boolean('hello')); // true
console.log('Array:', Boolean([])); // true
console.log('Object:', Boolean({})); // true
```

### Practical Example: User Access Control

```js live
function checkAccess(user) {
  const isLoggedIn = user && user.isLoggedIn;
  const isPremium = user && user.isPremium;
  const isAdmin = user && user.role === 'admin';

  const hasAccess = isLoggedIn && (isPremium || isAdmin);

  console.log(`User: ${user?.name || 'Guest'}`);
  console.log(`Logged In: ${isLoggedIn}`);
  console.log(`Premium: ${isPremium}`);
  console.log(`Admin: ${isAdmin}`);
  console.log(`Has Access: ${hasAccess}`);

  return hasAccess;
}

checkAccess({ name: 'John', isLoggedIn: true, isPremium: true, role: 'user' });
checkAccess({ name: 'Jane', isLoggedIn: true, isPremium: false, role: 'user' });
```

---

## 4️⃣ Null and Undefined

Both represent "no value", but with different meanings.

### Null - Intentional Absence

```js
let selectedItem = null; // Explicitly set to "no value"
console.log(selectedItem); // null
console.log(typeof null); // "object" (historical bug!)
```

### Undefined - Not Yet Assigned

```js
let username; // Declared but not assigned
console.log(username); // undefined
console.log(typeof undefined); // "undefined"
```

### Difference Between Null and Undefined

```js live
let nothing = null; // Developer set this to null
let notSet; // JavaScript sets this to undefined

console.log('Null:', nothing); // null
console.log('Undefined:', notSet); // undefined

// Common usage
const user = {
  name: 'John',
  email: 'john@example.com',
  phone: null, // Known to be absent
};

console.log(user.name); // "John"
console.log(user.phone); // null (we know there's no phone)
console.log(user.address); // undefined (property doesn't exist)
```

---

## 5️⃣ Symbol (ES6)

Symbols create **unique identifiers**.

```js
const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1 === id2); // false (always unique!)
```

### Use Case: Object Keys

```js live
const user = {
  name: 'John',
  [Symbol('id')]: 123,
};

console.log(user.name); // "John"
console.log(Object.keys(user)); // ['name'] (Symbol is hidden!)
```

---

## 6️⃣ BigInt (ES2020)

For **very large integers** beyond `Number.MAX_SAFE_INTEGER`.

```js live
const maxSafeInt = Number.MAX_SAFE_INTEGER;
console.log('Max Safe Integer:', maxSafeInt); // 9007199254740991

// Normal number breaks down
console.log(maxSafeInt + 1); // 9007199254740992
console.log(maxSafeInt + 2); // 9007199254740992 (wrong!)

// BigInt works correctly
const bigInt = 9007199254740991n;
console.log(bigInt + 1n); // 9007199254740992n
console.log(bigInt + 2n); // 9007199254740993n (correct!)
```

---

## 7️⃣ Objects

Objects store **collections of data** and more complex entities.

### Object Literal

```js live
const person = {
  name: 'Alice',
  age: 30,
  isStudent: false,
  address: {
    city: 'New York',
    zip: '10001',
  },
  greet: function () {
    return `Hello, I'm ${this.name}`;
  },
};

console.log(person.name); // "Alice"
console.log(person.address.city); // "New York"
console.log(person.greet()); // "Hello, I'm Alice"
```

### Arrays (Special Objects)

```js live
const fruits = ['apple', 'banana', 'orange'];
const mixed = [1, 'text', true, null, { key: 'value' }];

console.log(fruits[0]); // "apple"
console.log(fruits.length); // 3
console.log(typeof fruits); // "object"
console.log(Array.isArray(fruits)); // true
```

### Functions (Special Objects)

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(typeof greet); // "function"
console.log(greet('World')); // "Hello, World!"
```

---

## 🔍 Type Checking

### The `typeof` Operator

```js live
console.log(typeof 'Hello'); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (bug!)
console.log(typeof Symbol('x')); // "symbol"
console.log(typeof 123n); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
```

### Better Type Checking

```js live
function getType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}

console.log(getType('hello')); // "string"
console.log(getType(42)); // "number"
console.log(getType(null)); // "null"
console.log(getType([])); // "array"
console.log(getType({})); // "object"
```

---

## 🔄 Type Conversion

### Implicit Conversion (Coercion)

```js live
console.log('5' + 3); // "53" (number to string)
console.log('5' - 3); // 2 (string to number)
console.log('5' * '2'); // 10 (both to numbers)
console.log(true + 1); // 2 (true becomes 1)
console.log(false + 1); // 1 (false becomes 0)
```

### Explicit Conversion

```js live
// To String
console.log(String(123)); // "123"
console.log((123).toString()); // "123"

// To Number
console.log(Number('123')); // 123
console.log(Number('abc')); // NaN
console.log(parseInt('123px')); // 123
console.log(parseFloat('3.14')); // 3.14

// To Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean('text')); // true
console.log(Boolean('')); // false
```

---

## 💡 Common Pitfalls

### Pitfall 1: == vs ===

```js live
console.log(5 == '5'); // true (loose equality)
console.log(5 === '5'); // false (strict equality)

// Always use === unless you have a reason
console.log(0 == false); // true (confusing!)
console.log(0 === false); // false (clear!)
```

### Pitfall 2: NaN Comparison

```js live
const result = 'text' * 2;
console.log(result); // NaN
console.log(result === NaN); // false (doesn't work!)
console.log(Number.isNaN(result)); // true (correct way!)
```

### Pitfall 3: typeof null

```js live
console.log(typeof null); // "object" (historical bug!)
console.log(null === null); // true (correct check)
```

---

## 🧪 Practice Exercises

### Exercise 1: Type Detection

```js
// Write a function that returns the type of any value
function detectType(value) {
  // Your code here
}

console.log(detectType(42)); // "number"
console.log(detectType('hello')); // "string"
console.log(detectType(null)); // "null"
console.log(detectType([])); // "array"
```

<details>
<summary>Solution</summary>

```js
function detectType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}
```

</details>

### Exercise 2: Type Conversion

```js
// Convert these to numbers and calculate the sum
const str1 = '10';
const str2 = '20';
const bool = true;

// Your code here (should result in 31)
```

<details>
<summary>Solution</summary>

```js
const sum = Number(str1) + Number(str2) + Number(bool);
console.log(sum); // 31
```

</details>

---

## 📚 Real-World Example: Form Validation

```js live
function validateForm(formData) {
  const errors = [];

  // Check name (string)
  if (typeof formData.name !== 'string' || formData.name.length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  // Check age (number)
  if (typeof formData.age !== 'number' || formData.age < 18) {
    errors.push('Must be 18 or older');
  }

  // Check agree (boolean)
  if (formData.agreed !== true) {
    errors.push('Must agree to terms');
  }

  const isValid = errors.length === 0;

  console.log('Form Data:', formData);
  console.log('Valid:', isValid);
  if (!isValid) {
    console.log('Errors:', errors);
  }

  return { isValid, errors };
}

// Test cases
validateForm({ name: 'Jo', age: 25, agreed: true });
validateForm({ name: 'John Doe', age: 30, agreed: true });
```

---

## 🔗 What's Next?

Now that you know data types, let's learn how to work with them using **operators**!

👉 [Next: Operators »](./operators.md)

---

## 📖 Additional Resources

- [MDN: JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [JavaScript.info: Data Types](https://javascript.info/types)
- [typeof Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
