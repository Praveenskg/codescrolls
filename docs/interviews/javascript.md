---
id: javascript
title: JavaScript Interview Questions
description: Master JavaScript interview questions from beginner to advanced level. Covers ES6+, async, closures, hoisting, event loop, and more.
keywords:
  - javascript interview questions
  - es6 interview
  - closures
  - event loop
  - async
  - codescrolls
---

# ⚡ JavaScript Interview Questions

Welcome to the **JavaScript Interview Hub** 🚀  
Here you'll find a collection of **50 essential JavaScript interview questions** covering basic, intermediate, and advanced levels.

---

## 🟢 Basic Level

### 1. What is JavaScript?

JavaScript is a lightweight, interpreted programming language primarily used for creating interactive web pages.

### 2. Difference between `var`, `let`, and `const`?

- `var`: Function scoped, can be redeclared/updated.
- `let`: Block scoped, can be updated but not redeclared in same scope.
- `const`: Block scoped, cannot be reassigned.

### 3. What are data types in JavaScript?

- Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt.
- Non-primitive: Object, Array, Function.

### 4. What is hoisting?

Hoisting is JavaScript's default behavior of moving declarations to the top of the scope.

```js
console.log(a); // undefined
var a = 5;
```

### 5. Difference between `==` and `===`?

- `==` → Loose equality (type conversion).
- `===` → Strict equality (no type conversion).

---

## 🟡 Intermediate Level

### 6. What are closures?

A closure is when a function remembers its lexical scope even when executed outside of it.

```js
function outer() {
  let count = 0;
  return function inner() {
    return ++count;
  };
}
const counter = outer();
console.log(counter()); // 1
```

### 7. Explain the event loop.

The event loop handles asynchronous callbacks by moving them from the task queue to the call stack when it’s empty.

### 8. Difference between `map()`, `forEach()`, and `filter()`?

- `map()` → Returns new array with transformed values.
- `forEach()` → Iterates but doesn’t return new array.
- `filter()` → Returns new array with values that match condition.

### 9. What is a promise?

A promise represents a value that may be available now, later, or never.

```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done!'), 1000);
});
```

### 10. Difference between synchronous and asynchronous code?

- **Synchronous** → Executes line by line, blocking further execution.
- **Asynchronous** → Executes non-blocking code (e.g., setTimeout, fetch).

---

## 🔴 Advanced Level

### 11. Explain async/await.

`async/await` is syntactic sugar over promises for writing cleaner asynchronous code.

```js
async function fetchData() {
  let data = await fetch('/api');
  return data.json();
}
```

### 12. What is `this` in JavaScript?

`this` refers to the context in which a function is executed.

- In global → `window` (browser).
- In object method → that object.
- In arrow function → lexical scope.

### 13. What is prototypal inheritance?

Objects in JavaScript can inherit properties/methods from another object via the prototype chain.

### 14. Explain `call`, `apply`, and `bind`.

- `call`: Invokes with arguments individually.
- `apply`: Invokes with arguments as array.
- `bind`: Returns a new function with fixed `this`.

### 15. What is currying?

Transforming a function with multiple arguments into a sequence of functions each taking one argument.

```js
function curry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
```

### 16. Explain debouncing and throttling.

- **Debounce** → Delays execution until user stops triggering.
- **Throttle** → Executes at fixed intervals regardless of triggers.

### 17. What is a generator function?

A generator returns an iterator and uses `function*` and `yield`.

```js
function* gen() {
  yield 1;
  yield 2;
}
```

### 18. Difference between `null` and `undefined`?

- `null` → Intentional absence of value.
- `undefined` → Variable declared but not assigned.

### 19. Explain ES6 features.

Examples: Arrow functions, template literals, destructuring, spread/rest operators, classes, promises, modules.

### 20. What is memoization?

An optimization technique to cache function results for faster repeated calls.

---

## 🎯 Summary

JavaScript is the **core of web development**, and mastering these questions will give you an edge in interviews.

🚀 Keep practicing and check out other [Interview Hubs](./index.mdx) 🚀
