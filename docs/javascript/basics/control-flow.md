---
sidebar_position: 4
---

# Control Flow

Control flow determines the order in which code is executed in a program. JavaScript executes code from top to bottom, but control flow statements let you alter this flow based on conditions.

---

## 🔸 if Statement

```js
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
}
```

---

## 🔸 if...else Statement

```js
let isRaining = true;

if (isRaining) {
  console.log("Take an umbrella!");
} else {
  console.log("Enjoy the sunshine!");
}
```

---

## 🔸 if...else if...else Ladder

```js
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else {
  console.log("Grade: C or below");
}
```

---

## 🔸 Ternary Operator

A shorthand for simple `if...else`.

```js
let access = age >= 18 ? "Granted" : "Denied";
console.log(access); // "Granted"
```

---

## 🔸 switch Statement

Used when you need to match a variable against many values.

```js
let fruit = "banana";

switch (fruit) {
  case "apple":
    console.log("Apples are red.");
    break;
  case "banana":
    console.log("Bananas are yellow.");
    break;
  case "orange":
    console.log("Oranges are orange.");
    break;
  default:
    console.log("Unknown fruit.");
}
```

---

## 🔸 Best Practices

- Use `===` for strict equality checks.
- Use `switch` for multiple discrete values.
- Always include a `default` in `switch`.
- Use ternary for simple expressions only.

---

## ✅ Summary

| Statement       | Purpose                                      |
|----------------|----------------------------------------------|
| `if`, `else`    | Execute code based on conditions             |
| `else if`       | Check multiple conditions                    |
| `switch`        | Handle multiple exact values cleanly         |
| `?:` (ternary)  | Short-hand for simple if...else              |

---

## 🧠 Tip

Avoid deeply nested `if` blocks for better readability. Prefer early returns or `switch` where applicable.