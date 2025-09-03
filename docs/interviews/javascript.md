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
Here you'll find a collection of **50 essential JavaScript interview questions** covering basic, intermediate, and advanced levels with examples.

---

## 🟢 Basic Level

### 1. What is JavaScript?
JavaScript is a lightweight, interpreted programming language primarily used for creating interactive web pages.

```js
console.log("Hello, JavaScript!");
```

### 2. Difference between `var`, `let`, and `const`?
- `var`: Function scoped, can be redeclared/updated.
- `let`: Block scoped, can be updated but not redeclared in same scope.
- `const`: Block scoped, cannot be reassigned.

```js
var x = 1;
let y = 2;
const z = 3;
```

### 3. What are data types in JavaScript?
- Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt.  
- Non-primitive: Object, Array, Function.

```js
let str = "Hello";
let num = 42;
let arr = [1, 2, 3];
```

### 4. What is hoisting?
Hoisting is JavaScript's default behavior of moving declarations to the top of the scope.

```js
console.log(a); // undefined
var a = 5;
```

### 5. Difference between `==` and `===`?
- `==` → Loose equality (type conversion).  
- `===` → Strict equality (no type conversion).

```js
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

### 6. What are template literals?
Template literals allow embedding expressions in strings using backticks.

```js
let name = "John";
console.log(`Hello, ${name}!`);
```

### 7. What is the difference between `null` and `undefined`?
- `null`: Intentional absence of value.  
- `undefined`: Variable declared but not assigned.

```js
let a;
let b = null;
```

### 8. What are truthy and falsy values?
- Falsy: false, 0, "", null, undefined, NaN.  
- Truthy: Everything else.

```js
if ("hello") console.log("Truthy");
if (0) console.log("Falsy"); // Won't run
```

### 9. What is the difference between `for...of` and `for...in`?
- `for...of`: Iterates over values.  
- `for...in`: Iterates over keys.

```js
let arr = [10, 20];
for (let i in arr) console.log(i); // 0,1
for (let val of arr) console.log(val); // 10,20
```

### 10. What are arrow functions?
A shorter syntax for functions.

```js
const add = (a, b) => a + b;
```

---

## 🟡 Intermediate Level

### 11. What are closures?
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

### 12. Explain the event loop.
The event loop handles asynchronous callbacks by moving them from the task queue to the call stack when it’s empty.

### 13. Difference between `map()`, `forEach()`, and `filter()`?
- `map()`: Returns new array with transformed values.  
- `forEach()`: Iterates but doesn’t return.  
- `filter()`: Returns new array with values that match condition.

```js
let nums = [1, 2, 3];
console.log(nums.map(n => n * 2)); // [2,4,6]
console.log(nums.filter(n => n > 1)); // [2,3]
```

### 14. What is a promise?
A promise represents a value that may be available now, later, or never.

```js
const fetchData = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});
```

### 15. Difference between synchronous and asynchronous code?
- **Synchronous**: Executes line by line, blocking further execution.  
- **Asynchronous**: Executes non-blocking code.

### 16. Explain async/await.
`async/await` is syntactic sugar over promises for writing cleaner asynchronous code.

```js
async function fetchData() {
  let res = await fetch("/api");
  return res.json();
}
```

### 17. What is `this` in JavaScript?
`this` refers to the context in which a function is executed.

```js
const obj = {
  name: "JS",
  greet() {
    console.log(this.name);
  }
};
obj.greet();
```

### 18. What is prototypal inheritance?
Objects inherit properties/methods from another object via the prototype chain.

### 19. Explain `call`, `apply`, and `bind`.
- `call`: Invokes with arguments individually.  
- `apply`: Invokes with arguments as array.  
- `bind`: Returns new function with fixed `this`.

```js
function greet(msg) {
  console.log(msg + " " + this.name);
}
const user = { name: "John" };
greet.call(user, "Hello");
```

### 20. What is currying?
Transforming a function with multiple arguments into a sequence of functions each taking one argument.

```js
function curry(a) {
  return b => c => a + b + c;
}
```

### 21. Explain debouncing.
Debounce delays execution until user stops triggering.

```js
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
```

### 22. Explain throttling.
Throttle executes at fixed intervals regardless of triggers.

### 23. What are modules in JavaScript?
Modules let you split code into separate files.

```js
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from "./math.js";
```

### 24. What are higher-order functions?
Functions that take or return other functions.

```js
function hof(fn) {
  return fn(5);
}
```

### 25. What are generators?
Functions that yield multiple values using `function*`.

```js
function* gen() {
  yield 1;
  yield 2;
}
```

---

## 🔴 Advanced Level

### 26. What is memoization?
An optimization technique to cache results of expensive function calls.

```js
function memoize(fn) {
  const cache = {};
  return function(n) {
    if (cache[n]) return cache[n];
    return cache[n] = fn(n);
  };
}
```

### 27. What is the difference between deep and shallow copy?
- Shallow copy: Copies reference.  
- Deep copy: Copies values recursively.

```js
let obj = { a: { b: 2 } };
let shallow = { ...obj };
let deep = JSON.parse(JSON.stringify(obj));
```

### 28. What is event delegation?
Using a parent to handle events for its children.

```js
document.getElementById("list").addEventListener("click", e => {
  if (e.target.tagName === "LI") console.log("Clicked", e.target.innerText);
});
```

### 29. What is the difference between `localStorage`, `sessionStorage`, and `cookies`?
- `localStorage`: Persistent until cleared.  
- `sessionStorage`: Cleared on tab close.  
- `cookies`: Sent with HTTP requests.

### 30. What is the difference between function declaration and expression?
- Declaration is hoisted.  
- Expression is not.

```js
function dec() {}
const expr = function() {};
```

### 31. Explain ES6 classes.
Syntactic sugar over prototypes.

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

### 32. What is destructuring?
Unpacking values from arrays/objects.

```js
const {a, b} = {a: 1, b: 2};
```

### 33. What is the spread operator?
Expands values.

```js
let arr = [1,2,3];
console.log(...arr);
```

### 34. What is rest operator?
Collects values.

```js
function sum(...nums) {
  return nums.reduce((a,b)=>a+b,0);
}
```

### 35. What is optional chaining?
Safely access nested properties.

```js
let user = {};
console.log(user?.profile?.name);
```

### 36. What is nullish coalescing?
Returns right operand only if left is null/undefined.

```js
let val = null ?? "default";
```

### 37. What are WeakMap and WeakSet?
Collections that allow garbage collection of unused keys.

### 38. Difference between `Object.freeze()` and `Object.seal()`?
- Freeze: No add, delete, modify.  
- Seal: Modify allowed, no add/delete.

### 39. What is `Symbol`?
A unique and immutable primitive.

```js
let id = Symbol("id");
```

### 40. Explain `async` iterators.
Used with `for await...of` to consume async data.

```js
async function* gen() { yield "a"; yield "b"; }
```

### 41. Explain microtasks and macrotasks.
- Microtasks: Promises, process.nextTick.  
- Macrotasks: setTimeout, setInterval.

### 42. What is `BigInt`?
A way to represent integers beyond `Number.MAX_SAFE_INTEGER`.

```js
let big = 123456789012345678901234567890n;
```

### 43. Explain dynamic imports.
Lazy loading modules.

```js
import("./module.js").then(m => m.fn());
```

### 44. Explain Service Workers.
Scripts that run in the background for caching, push notifications.

### 45. What are WebSockets?
Protocol for full-duplex communication.

### 46. Explain IndexedDB.
Client-side database for storing structured data.

### 47. What are Web Workers?
Background threads for heavy computations.

### 48. Explain Shadow DOM.
Encapsulation of DOM and CSS for components.

### 49. What are Proxy objects?
Used to define custom behavior for fundamental operations.

```js
let obj = new Proxy({}, {
  get: (t,p) => p in t ? t[p] : "Not found"
});
```

### 50. Explain `Reflect` API.
Provides methods for object manipulation.

```js
Reflect.set(obj,"key","value");
```