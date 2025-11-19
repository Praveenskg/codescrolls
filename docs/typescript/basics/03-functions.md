---
id: functions
title: Functions
description:
  Learn how to define functions, type parameters and return values, use optional
  and default parameters, and master arrow functions in TypeScript.
keywords:
  - typescript functions
  - arrow functions
  - function parameters
  - return types
  - optional parameters
  - default parameters
  - type annotations in functions
  - ts function examples
image: /img/meta/ts-functions.png
tags: [typescript, functions, parameters, basics]
---

# Functions in TypeScript

Functions in TypeScript are similar to JavaScript but with **type annotations**
that make them safer and more predictable.

---

## 1. Function with Type Annotations

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

- `name: string` → input type

- `: string` after parentheses → return type

---

## 2. Optional Parameters

Use `?` to mark parameters as optional.

```ts
function log(message: string, user?: string): void {
  console.log(user ? `[${user}]: ${message}` : message);
}
```

---

## 3. Default Parameters

Assign default values directly in the parameter list.

```ts
function multiply(a: number, b: number = 2): number {
  return a * b;
}
```

---

## 4. Rest Parameters

Use `...` for an arbitrary number of arguments.

```ts
function sum(...nums: number[]): number {
  return nums.reduce((acc, val) => acc + val, 0);
}
```

---

## 5. Function Types

You can define function types using `type` aliases.

```ts
type MathOp = (x: number, y: number) => number;

const add: MathOp = (x, y) => x + y;
```

---

## 6. Arrow Functions

Type annotations also work with arrow functions.

```ts
const greetUser = (user: string): void => {
  console.log(`Welcome, ${user}`);
};
```

---

## 7. Return Type Inference

TypeScript can infer return types even without explicit annotation.

```ts
function square(n: number) {
  return n * n; // inferred as number
}
```

---

## 8. `never` Return Type

Functions that never return (e.g., always throw errors or loop forever) can use
the `never` type.

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

---

## Best Practices

- Always annotate parameter and return types unless obvious.

- Prefer arrow functions for short logic.

- Use void for functions that don’t return anything.

- Use `never` only for truly unreachable endpoints.
