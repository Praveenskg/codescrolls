---
sidebar_position: 3
title: ES6+ Modern JavaScript Features
description:
  Master ES6+ features including destructuring, spread/rest operators, template
  literals, modules, classes, and more. Learn modern JavaScript syntax with
  practical examples.
keywords:
  [
    es6 javascript,
    es6 features,
    template literals,
    destructuring,
    spread operator,
    rest parameters,
    arrow functions,
    let const,
    javascript modules,
  ]
tags:
  - JavaScript
  - ES6
  - Modern JavaScript
  - Intermediate
---

# ES6+ Modern JavaScript Features

ES6 (ECMAScript 2015) and beyond brought **revolutionary changes** to
JavaScript. These features make code more concise, readable, and powerful!

---

## 🎯 Template Literals

Create strings with embedded expressions and multi-line support.

### Basic Usage

```js live
const name = 'Alice';
const age = 25;

// Old way
const oldWay = 'My name is ' + name + ' and I am ' + age + ' years old.';

// ES6 way
const newWay = `My name is ${name} and I am ${age} years old.`;

console.log(newWay);
```

### Multi-line Strings

```js live
const html = `
  <div class="card">
    <h2>Welcome!</h2>
    <p>This is a multi-line string</p>
  </div>
`;

console.log(html);
```

### Expression Evaluation

```js live
const a = 10;
const b = 20;

console.log(`Sum: ${a + b}`); // Sum: 30
console.log(`Product: ${a * b}`); // Product: 200
console.log(`${a > b ? 'a is greater' : 'b is greater'}`); // b is greater
```

---

## 📦 Destructuring

Extract values from arrays and objects.

### Array Destructuring

```js live
const colors = ['red', 'green', 'blue'];

// Traditional
const first = colors[0];
const second = colors[1];

// ES6
const [r, g, b] = colors;
console.log(r, g, b); // red green blue

// Skip values
const [, , third] = colors;
console.log(third); // blue

// Default values
const [x, y, z, w = 'yellow'] = colors;
console.log(w); // yellow
```

### Object Destructuring

```js live
const user = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  age: 25,
};

// Extract properties
const { name, email } = user;
console.log(name, email); // Alice alice@example.com

// Rename variables
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // Alice 25

// Default values
const { city = 'NYC' } = user;
console.log(city); // NYC
```

---

## ✨ Spread Operator (...)

Expand arrays and objects.

### Array Spread

```js live
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr1];
console.log(copy); // [1, 2, 3]

// Add elements
const withMore = [0, ...arr1, 4];
console.log(withMore); // [0, 1, 2, 3, 4]

// Function arguments
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // 3
```

### Object Spread

```js live
const user = { name: 'Alice', age: 25 };
const address = { city: 'NYC', country: 'USA' };

// Merge objects
const profile = { ...user, ...address };
console.log(profile);
// { name: 'Alice', age: 25, city: 'NYC', country: 'USA' }

// Override properties
const updated = { ...user, age: 26 };
console.log(updated); // { name: 'Alice', age: 26 }

// Copy object
const clone = { ...user };
console.log(clone); // { name: 'Alice', age: 25 }
```

---

## 🔄 Rest Parameters

Collect remaining arguments into an array.

### Function Rest Parameters

```js live
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15

// Mix with normal parameters
function multiply(multiplier, ...numbers) {
  return numbers.map(n => n * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // [2, 4, 6]
```

### Array Rest

```js live
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

### Object Rest

```js live
const user = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  age: 25,
};

const { id, ...userWithoutId } = user;
console.log(userWithoutId);
// { name: 'Alice', email: 'alice@example.com', age: 25 }
```

---

## 🔑 Enhanced Object Literals

### Property Shorthand

```js live
const name = 'Alice';
const age = 25;

// Old way
const user1 = { name: name, age: age };

// ES6 shorthand
const user2 = { name, age };

console.log(user2); // { name: 'Alice', age: 25 }
```

### Method Shorthand

```js live
const calculator = {
  // Old way
  add: function (a, b) {
    return a + b;
  },

  // ES6 shorthand
  subtract(a, b) {
    return a - b;
  },

  multiply: (a, b) => a * b,
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(5, 3)); // 2
console.log(calculator.multiply(5, 3)); // 15
```

### Computed Property Names

```js live
const propName = 'score';
const propValue = 95;

const student = {
  name: 'Alice',
  [propName]: propValue, // Computed property
  [`${propName}Average`]: 90,
};

console.log(student);
// { name: 'Alice', score: 95, scoreAverage: 90 }
```

---

## 📋 Default Parameters

```js live
// Old way
function greet(name) {
  name = name || 'Guest';
  return `Hello, ${name}!`;
}

// ES6 way
function greetES6(name = 'Guest', greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

console.log(greetES6()); // Hello, Guest!
console.log(greetES6('Alice')); // Hello, Alice!
console.log(greetES6('Bob', 'Hi')); // Hi, Bob!

// With expressions
function createUser(name, timestamp = Date.now()) {
  return { name, createdAt: timestamp };
}

console.log(createUser('Alice'));
```

---

## 🎨 For...of Loop

Iterate over iterable objects.

### Array Iteration

```js live
const fruits = ['apple', 'banana', 'orange'];

// for...of (values)
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in (indexes) - not recommended for arrays
for (const index in fruits) {
  console.log(index); // '0', '1', '2' (strings!)
}

// with entries()
for (const [index, fruit] of fruits.entries()) {
  console.log(`${index}: ${fruit}`);
}
```

### String Iteration

```js live
const text = 'Hello';

for (const char of text) {
  console.log(char); // H, e, l, l, o
}
```

---

## 🔢 Exponentiation Operator (\*\*)

```js live
// Old way
console.log(Math.pow(2, 3)); // 8

// ES6 way
console.log(2 ** 3); // 8
console.log(5 ** 2); // 25

// Works with assignment
let x = 2;
x **= 3;
console.log(x); // 8
```

---

## ✅ Optional Chaining (?.)

Safely access nested properties.

```js live
const user = {
  name: 'Alice',
  address: {
    city: 'NYC',
  },
};

// Old way - prone to errors
// console.log(user.address.street.name); // Error!

// With checking
console.log(user.address && user.address.street && user.address.street.name);
// undefined

// ES2020 - Optional chaining
console.log(user?.address?.street?.name); // undefined (no error!)
console.log(user?.contact?.email); // undefined

// With arrays
const users = null;
console.log(users?.[0]?.name); // undefined

// With functions
const obj = {};
console.log(obj.method?.()); // undefined
```

---

## 🎯 Nullish Coalescing (??)

Return right side only if left is null/undefined.

```js live
// Old way with ||
const value1 = 0 || 'default';
console.log(value1); // 'default' (0 is falsy!)

// ES2020 - Nullish coalescing
const value2 = 0 ?? 'default';
console.log(value2); // 0 (only null/undefined trigger default)

const name = null ?? 'Guest';
console.log(name); // 'Guest'

const count = undefined ?? 10;
console.log(count); // 10

const result = '' ?? 'default';
console.log(result); // '' (empty string is not null/undefined)
```

---

## 📚 Practical Examples

### Example 1: Configuration Merging

```js live
function createConfig(customConfig = {}) {
  const defaultConfig = {
    theme: 'light',
    lang: 'en',
    notifications: true,
    maxRetries: 3,
  };

  return {
    ...defaultConfig,
    ...customConfig,
  };
}

const config1 = createConfig();
console.log('Default:', config1);

const config2 = createConfig({ theme: 'dark', maxRetries: 5 });
console.log('Custom:', config2);
```

### Example 2: Data Processing

```js live
const users = [
  { id: 1, name: 'Alice', score: 85, active: true },
  { id: 2, name: 'Bob', score: 92, active: false },
  { id: 3, name: 'Charlie', score: 78, active: true },
];

// Extract and transform
const activeUsers = users
  .filter(({ active }) => active)
  .map(({ name, score }) => ({
    name,
    score,
    grade: score >= 80 ? 'A' : 'B',
  }));

console.log('Active:', activeUsers);

// Spread to add properties
const enrichedUsers = users.map(user => ({
  ...user,
  displayName: `User: ${user.name}`,
}));

console.log('Enriched:', enrichedUsers);
```

### Example 3: API Response Handler

```js live
function handleResponse(response = {}) {
  const {
    data = [],
    meta: { page = 1, total = 0 } = {},
    error = null,
  } = response;

  if (error) {
    return { success: false, message: error };
  }

  return {
    success: true,
    results: data,
    pagination: { page, total },
  };
}

const response1 = {
  data: [{ id: 1 }, { id: 2 }],
  meta: { page: 2, total: 100 },
};

console.log(handleResponse(response1));
console.log(handleResponse({}));
console.log(handleResponse({ error: 'Not found' }));
```

---

## 🎯 Best Practices

### 1. Use Template Literals for Strings

```js
// ✅ Good
const message = `Hello, ${name}!`;

// ❌ Avoid
const message2 = 'Hello, ' + name + '!';
```

### 2. Use Destructuring

```js
// ✅ Good
const { name, email } = user;

// ❌ Verbose
const name = user.name;
const email = user.email;
```

### 3. Use Spread for Copying

```js
// ✅ Good - immutable
const newArray = [...oldArray, newItem];

// ❌ Bad - mutates
oldArray.push(newItem);
```

---

## 🔗 What's Next?

Learn asynchronous JavaScript with Promises!

👉 [Next: Promises (Advanced) »](../advanced/promises.md)

---

## 📖 Additional Resources

- [MDN: ES6 Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support)
- [ES6 Features](http://es6-features.org/)
- [JavaScript.info: Modern JavaScript](https://javascript.info/es-modern)
