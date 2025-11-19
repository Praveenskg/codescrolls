---
sidebar_position: 2
title: JavaScript Arrays & Objects - Complete Guide
description:
  Master JavaScript arrays and objects with methods, destructuring, spread
  operator, and practical examples. Learn array methods like map, filter,
  reduce, and object manipulation techniques.
keywords:
  [
    javascript arrays,
    javascript objects,
    array methods,
    map filter reduce,
    object destructuring,
    spread operator,
    array manipulation,
    object methods,
  ]
tags:
  - JavaScript
  - Arrays
  - Objects
  - Intermediate
---

# JavaScript Arrays & Objects

Arrays and objects are the **core data structures** in JavaScript. Master them
to become an effective JavaScript developer!

---

## 📦 Arrays

Arrays store **ordered collections** of items.

### Creating Arrays

```js live
// Array literal (recommended)
const fruits = ['apple', 'banana', 'orange'];

// Array constructor
const numbers = new Array(1, 2, 3, 4, 5);

// Empty array
const empty = [];

// Mixed types (possible but not recommended)
const mixed = [1, 'text', true, { key: 'value' }, [1, 2]];

console.log(fruits); // ['apple', 'banana', 'orange']
console.log(numbers.length); // 5
```

### Accessing Elements

```js live
const colors = ['red', 'green', 'blue', 'yellow'];

console.log(colors[0]); // 'red' (first element)
console.log(colors[2]); // 'blue'
console.log(colors[colors.length - 1]); // 'yellow' (last element)
console.log(colors[10]); // undefined (doesn't exist)
```

---

## 🔧 Array Methods

### Adding/Removing Elements

```js live
const fruits = ['apple', 'banana'];

// Add to end
fruits.push('orange');
console.log(fruits); // ['apple', 'banana', 'orange']

// Remove from end
const last = fruits.pop();
console.log(last); // 'orange'
console.log(fruits); // ['apple', 'banana']

// Add to start
fruits.unshift('mango');
console.log(fruits); // ['mango', 'apple', 'banana']

// Remove from start
const first = fruits.shift();
console.log(first); // 'mango'
console.log(fruits); // ['apple', 'banana']
```

### Splice & Slice

```js live
const numbers = [1, 2, 3, 4, 5];

// slice (doesn't modify original)
const sliced = numbers.slice(1, 3);
console.log('Sliced:', sliced); // [2, 3]
console.log('Original:', numbers); // [1, 2, 3, 4, 5]

// splice (modifies original)
const removed = numbers.splice(2, 2, 10, 20);
console.log('Removed:', removed); // [3, 4]
console.log('Modified:', numbers); // [1, 2, 10, 20, 5]
```

### Map, Filter, Reduce

```js live
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled); // [2, 4, 6, 8, 10]

// filter - keep elements that match condition
const evens = numbers.filter(n => n % 2 === 0);
console.log('Evens:', evens); // [2, 4]

// reduce - combine into single value
const sum = numbers.reduce((total, n) => total + n, 0);
console.log('Sum:', sum); // 15

// Chain methods
const result = numbers
  .filter(n => n > 2) // [3, 4, 5]
  .map(n => n * 2) // [6, 8, 10]
  .reduce((sum, n) => sum + n, 0); // 24

console.log('Chained result:', result); // 24
```

### Find & FindIndex

```js live
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
];

// find - first matching element
const user = users.find(u => u.age > 28);
console.log('Found:', user); // { id: 2, name: 'Bob', age: 30 }

// findIndex - index of first match
const index = users.findIndex(u => u.name === 'Charlie');
console.log('Index:', index); // 2

// some - check if any match
const hasYoung = users.some(u => u.age < 30);
console.log('Has young:', hasYoung); // true

// every - check if all match
const allAdults = users.every(u => u.age >= 18);
console.log('All adults:', allAdults); // true
```

### Sort & Reverse

```js live
const numbers = [3, 1, 4, 1, 5, 9, 2];

// sort (modifies original!)
const sorted = numbers.sort((a, b) => a - b);
console.log('Sorted:', sorted); // [1, 1, 2, 3, 4, 5, 9]

// reverse
const reversed = numbers.reverse();
console.log('Reversed:', reversed); // [9, 5, 4, 3, 2, 1, 1]

// Sort objects
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 },
];

products.sort((a, b) => a.price - b.price);
console.log('By price:', products);
```

---

## 📋 Objects

Objects store **key-value pairs**.

### Creating Objects

```js live
// Object literal (recommended)
const person = {
  name: 'Alice',
  age: 25,
  city: 'NYC',
  isStudent: false,
};

// Object constructor
const user = new Object();
user.name = 'Bob';
user.age = 30;

// Using Object.create
const prototype = {
  greet() {
    return 'Hello';
  },
};
const obj = Object.create(prototype);

console.log(person);
console.log(obj.greet()); // 'Hello'
```

### Accessing Properties

```js live
const user = {
  name: 'Alice',
  age: 25,
  'favorite color': 'blue', // key with spaces
};

// Dot notation
console.log(user.name); // 'Alice'

// Bracket notation
console.log(user['age']); // 25
console.log(user['favorite color']); // 'blue'

// Dynamic access
const key = 'name';
console.log(user[key]); // 'Alice'
```

### Adding/Modifying/Deleting

```js live
const user = { name: 'Alice' };

// Add property
user.age = 25;
user['city'] = 'NYC';

// Modify property
user.name = 'Alice Smith';

// Delete property
delete user.city;

console.log(user); // { name: 'Alice Smith', age: 25 }
```

---

## 🔑 Object Methods

### Object.keys, values, entries

```js live
const product = {
  id: 1,
  name: 'Laptop',
  price: 1000,
  inStock: true,
};

// Get all keys
const keys = Object.keys(product);
console.log('Keys:', keys); // ['id', 'name', 'price', 'inStock']

// Get all values
const values = Object.values(product);
console.log('Values:', values); // [1, 'Laptop', 1000, true]

// Get key-value pairs
const entries = Object.entries(product);
console.log('Entries:', entries);
// [['id', 1], ['name', 'Laptop'], ...]

// Loop through entries
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

### Object.assign & Spread

```js live
const base = { a: 1, b: 2 };
const extra = { c: 3, d: 4 };

// Object.assign
const merged1 = Object.assign({}, base, extra);
console.log('Merged:', merged1); // { a: 1, b: 2, c: 3, d: 4 }

// Spread operator (recommended)
const merged2 = { ...base, ...extra };
console.log('Spread:', merged2); // { a: 1, b: 2, c: 3, d: 4 }

// Override properties
const overridden = { ...base, b: 10, e: 5 };
console.log('Override:', overridden); // { a: 1, b: 10, e: 5 }
```

---

## 🎯 Destructuring

### Array Destructuring

```js live
const colors = ['red', 'green', 'blue', 'yellow'];

// Basic destructuring
const [first, second] = colors;
console.log(first, second); // 'red' 'green'

// Skip elements
const [, , third] = colors;
console.log(third); // 'blue'

// Rest operator
const [primary, ...others] = colors;
console.log('Primary:', primary); // 'red'
console.log('Others:', others); // ['green', 'blue', 'yellow']

// Default values
const [a, b, c, d, e = 'default'] = colors;
console.log(e); // 'default'
```

### Object Destructuring

```js live
const user = {
  name: 'Alice',
  age: 25,
  city: 'NYC',
  country: 'USA',
};

// Basic destructuring
const { name, age } = user;
console.log(name, age); // 'Alice' 25

// Rename variables
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // 'Alice' 25

// Default values
const { name: n, email = 'no-email@example.com' } = user;
console.log(n, email); // 'Alice' 'no-email@example.com'

// Rest operator
const { name: nm, ...rest } = user;
console.log('Rest:', rest); // { age: 25, city: 'NYC', country: 'USA' }
```

### Nested Destructuring

```js live
const data = {
  user: {
    name: 'Alice',
    contact: {
      email: 'alice@example.com',
      phone: '123-456-7890',
    },
  },
  posts: [{ title: 'Post 1' }, { title: 'Post 2' }],
};

// Nested object destructuring
const {
  user: {
    name,
    contact: { email },
  },
} = data;
console.log(name, email); // 'Alice' 'alice@example.com'

// Nested array destructuring
const {
  posts: [firstPost],
} = data;
console.log(firstPost.title); // 'Post 1'
```

---

## 📚 Practical Examples

### Example 1: Shopping Cart

```js live
function createShoppingCart() {
  let items = [];

  return {
    addItem(product, quantity = 1) {
      const existing = items.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += quantity;
      } else {
        items.push({ ...product, quantity });
      }
      return this;
    },

    removeItem(productId) {
      items = items.filter(item => item.id !== productId);
      return this;
    },

    getTotal() {
      return items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },

    getItems() {
      return [...items]; // Return copy
    },
  };
}

const cart = createShoppingCart();
cart
  .addItem({ id: 1, name: 'Laptop', price: 1000 }, 1)
  .addItem({ id: 2, name: 'Mouse', price: 25 }, 2);

console.log('Total:', cart.getTotal()); // 1050
console.log('Items:', cart.getItems());
```

### Example 2: Data Processing

```js live
const students = [
  { name: 'Alice', score: 85, grade: 'B' },
  { name: 'Bob', score: 92, grade: 'A' },
  { name: 'Charlie', score: 78, grade: 'C' },
  { name: 'Diana', score: 95, grade: 'A' },
];

// Get all A students
const aStudents = students.filter(s => s.grade === 'A').map(s => s.name);
console.log('A Students:', aStudents); // ['Bob', 'Diana']

// Calculate average score
const avgScore =
  students.reduce((sum, s) => sum + s.score, 0) / students.length;
console.log('Average:', avgScore.toFixed(1)); // 87.5

// Group by grade
const byGrade = students.reduce((acc, student) => {
  const { grade } = student;
  acc[grade] = acc[grade] || [];
  acc[grade].push(student.name);
  return acc;
}, {});
console.log('By Grade:', byGrade);
// { B: ['Alice'], A: ['Bob', 'Diana'], C: ['Charlie'] }
```

### Example 3: Object Utilities

```js live
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function pick(obj, keys) {
  return keys.reduce((result, key) => {
    if (key in obj) result[key] = obj[key];
    return result;
  }, {});
}

const user = { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 };

const cloned = deepClone(user);
console.log('Cloned:', cloned);

const picked = pick(user, ['name', 'email']);
console.log('Picked:', picked); // { name: 'Alice', email: 'alice@example.com' }
```

---

## 🎯 Best Practices

### 1. Use Const for Arrays/Objects

```js
// ✅ Good - prevents reassignment
const users = [];
users.push({ name: 'Alice' }); // Works

// ❌ Can't do this
// users = []; // Error!
```

### 2. Avoid Mutating Arrays

```js
const numbers = [1, 2, 3];

// ❌ Bad - mutates original
numbers.sort();

// ✅ Good - creates new array
const sorted = [...numbers].sort();
```

### 3. Use Spread for Copying

```js
const original = { a: 1, b: 2 };

// ✅ Good - shallow copy
const copy = { ...original };

// ❌ Bad - same reference
const ref = original;
```

---

## 💡 Common Pitfalls

### Pitfall 1: Reference vs Value

```js live
// Arrays are reference types
const arr1 = [1, 2, 3];
const arr2 = arr1; // Same reference!

arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] - Changed!

// Solution: Copy array
const arr3 = [...arr1];
arr3.push(5);
console.log(arr1); // [1, 2, 3, 4] - Unchanged
```

### Pitfall 2: Mutating Methods

```js
// These mutate original:
// sort, reverse, push, pop, shift, unshift, splice

// These don't:
// slice, map, filter, concat, spread
```

### Pitfall 3: Array Length

```js live
const arr = [1, 2, 3];
arr[10] = 10;

console.log(arr.length); // 11
console.log(arr); // [1, 2, 3, empty × 7, 10]
```

---

## 🔗 What's Next?

Learn modern ES6+ features!

👉 [Next: ES6+ Features »](./es6-features.md)

---

## 📖 Additional Resources

- [MDN: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [JavaScript.info: Arrays](https://javascript.info/array)
- [JavaScript.info: Objects](https://javascript.info/object)
