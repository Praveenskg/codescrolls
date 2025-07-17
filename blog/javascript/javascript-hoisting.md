---
slug: javascript-hoisting
title: Understanding JavaScript Hoisting with Examples
authors: praveen
tags: [javascript, concepts, beginners]
description: A beginner-friendly explanation of JavaScript Hoisting with practical examples.
---

Have you ever wondered why some JavaScript variables and functions work even before they're declared? 🤔  
That's the magic of **Hoisting**!

In this blog post, we'll break down **JavaScript Hoisting** with simple examples, so you can finally understand what's happening behind the scenes.

## <!-- truncate -->

## 🚀 What is Hoisting?

Hoisting is JavaScript's default behavior of **moving declarations to the top** of the current scope (script or function).

In simple words:

> JavaScript **scans your code before executing** and **"hoists" variable and function declarations** to the top of their scope.

---

## 🧪 Example 1: Variable Hoisting

```js
console.log(x); // undefined
var x = 10;
```

### Why doesn’t it throw an error?

Because internally, JS treats it like:

```js
var x;
console.log(x); // undefined
x = 10;
```

Only the declaration (`var x`) is hoisted, not the assignment (`x = 10`).

---

## ❌ Block Scope Variables (`let` and `const`) are Not Hoisted the Same

```js
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 5;
```

> `let` and `const` are **hoisted** but stay in a **"Temporal Dead Zone (TDZ)"**, so accessing them before declaration throws an error.

---

## 🧠 Example 2: Function Hoisting

```js
greet(); // Hello there!

function greet() {
  console.log('Hello there!');
}
```

✅ Function **declarations** are fully hoisted — both name and body.

But beware ⛔:

```js
sayHi(); // TypeError: sayHi is not a function

var sayHi = function () {
  console.log('Hi!');
};
```

Only `var sayHi` is hoisted, not the function assigned to it.

---

## 📌 Summary

| Type                 | Hoisted?   | Usable Before Declaration? |
| -------------------- | ---------- | -------------------------- |
| `var`                | ✅ Yes     | ✅ Yes (but undefined)     |
| `let` / `const`      | ✅ Yes     | ❌ No (TDZ error)          |
| Function Declaration | ✅ Yes     | ✅ Yes                     |
| Function Expression  | ✅ Partial | ❌ No                      |

---

## 🎯 Final Thoughts

Understanding hoisting helps you avoid unexpected bugs and write cleaner code.

Next time your JS code behaves weirdly, ask yourself:

> "Is this a hoisting issue?"

Got questions? Drop them in the comments below! 🙌

---

Happy Coding! 💻
