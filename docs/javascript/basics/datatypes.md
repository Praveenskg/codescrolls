---
sidebar_position: 2
---

# Data Types

JavaScript has **8 data types**, divided into two categories: **primitive** and **non-primitive (objects)**.

---

## 🔹 Primitive Data Types

| Type      | Example                | Description                   |
| --------- | ---------------------- | ----------------------------- |
| String    | `"Hello"`              | Textual data                  |
| Number    | `42`, `3.14`, `-1`     | Integer or floating point     |
| Boolean   | `true`, `false`        | Logical values                |
| Null      | `null`                 | Empty or unknown value        |
| Undefined | `undefined`            | Variable declared but not set |
| Symbol    | `Symbol('id')`         | Unique identifier (ES6)       |
| BigInt    | `1234567890123456789n` | Arbitrarily large integers    |

```js
let name = 'Praveen'; // String
let age = 26; // Number
let isDev = true; // Boolean
let nothing = null; // Null
let notAssigned; // Undefined
let id = Symbol('id'); // Symbol
let bigNum = 123456789n; // BigInt
```

---

## 🔸 Non-Primitive (Reference) Types

| Type     | Example            | Description            |
| -------- | ------------------ | ---------------------- |
| Object   | `{ key: "value" }` | Key-value pairs        |
| Array    | `[1, 2, 3]`        | Ordered list of values |
| Function | `function() {}`    | Block of reusable code |
| Date     | `new Date()`       | Date and time object   |

```js
const person = { name: 'Praveen', age: 26 };
const fruits = ['apple', 'banana', 'mango'];
function greet() {
  console.log('Hello!');
}
const now = new Date();
```

---

## 🧠 Typeof Operator

Use `typeof` to check the type of a variable:

```js
typeof 'Hello'; // "string"
typeof 123; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" ❗️ (legacy bug in JS)
typeof []; // "object"
typeof {}; // "object"
typeof function () {}; // "function"
```

---

> 💡 `null` returns `"object"` — this is a well-known bug in JavaScript.

---

## ✅ Best Practices

- Prefer `const` for constants and objects that won’t be reassigned.
- Know your primitives vs objects — it helps with performance and bug tracking.
