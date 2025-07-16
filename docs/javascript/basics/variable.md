---
sidebar_position: 1
---
# Variables

Variables are used to store data values in JavaScript. You can declare a variable using `var`, `let`, or `const`.

---

## 🔸 var (Old way)

```js
var name = "Praveen";
console.log(name); // Praveen
```

- Function-scoped  
- Can be redeclared and updated  
- Hoisted (initialized with `undefined`)  

> ❌ Avoid using `var` in modern JavaScript.

---

## 🔸 let (Modern way)

```js
let age = 25;
age = 26; // ✅ Reassignment allowed
```

- Block-scoped  
- Cannot be redeclared in the same scope  
- Hoisted but not initialized

---

## 🔸 const (Constant)

```js
const PI = 3.1415;
```

- Block-scoped  
- Cannot be reassigned or redeclared  
- Must be initialized during declaration

```js
const user = { name: "Praveen" };
user.name = "Singh"; // You can mutate properties of objects
```

---

## 🧠 Hoisting

```js
console.log(a); // undefined
var a = 10;
```

But:

```js
console.log(b); // ❌ ReferenceError
let b = 20;
```

---

## ✅ Best Practices

- Use `const` by default.  
- Use `let` only when you need to reassign.  
- Avoid `var`.

---

> ℹ️ JavaScript variables are dynamically typed, meaning you don't need to declare a type explicitly.