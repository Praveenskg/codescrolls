---
id: narrowing
title: Type Narrowing
description:
  Learn how TypeScript narrows down union types into more specific ones using
  various techniques.
sidebar_position: 4
keywords:
  - typescript narrowing
  - typeof
  - instanceof
  - in operator
  - discriminated union
---

# Narrowing in TypeScript

**Type Narrowing** means refining a value from a broader type (like a union) to
a more specific one at runtime.

When working with union types, TypeScript lets you write code that narrows the
possible type based on runtime checks.

---

## Why Narrowing?

Without narrowing, you'd get limited IntelliSense and would have to use type
assertions. Narrowing makes your code safer and smarter.

---

## Common Narrowing Techniques

| Technique           | Description                                 | Example Condition         |
| ------------------- | ------------------------------------------- | ------------------------- |
| `typeof` check      | For primitives                              | `typeof val === 'string'` |
| Truthiness check    | Checks if value is truthy                   | `if (val)`                |
| Equality check      | Compares two values                         | `if (a === b)`            |
| `in` operator       | Checks if a key exists in an object         | `'bark' in animal`        |
| Discriminated union | Using a common literal property like `kind` | `switch(obj.kind)`        |
| `instanceof` check  | For class instances                         | `user instanceof Admin`   |

---

## Common Narrowing Techniques

### 1. `typeof` Narrowing

```ts
function printValue(val: string | number) {
  if (typeof val === 'string') {
    console.log(val.toUpperCase()); // string methods allowed
  } else {
    console.log(val.toFixed(2)); // number methods allowed
  }
}
```

---

### 2. Truthiness Narrowing

```ts
function showMessage(msg?: string) {
  if (msg) {
    console.log(msg.toUpperCase());
  } else {
    console.log('No message');
  }
}
```

---

### 3. Equality Narrowing

```ts
function compare(a: string | number, b: string | boolean) {
  if (a === b) {
    console.log('Equal:', a);
  } else {
    console.log('Not equal');
  }
}
```

---

### 4. `in` Operator Narrowing

Used to check if a property exists in an object type.

```ts
type User = { name: string; email: string };
type Admin = { name: string; accessLevel: number };

function logUser(user: User | Admin) {
  if ('email' in user) {
    console.log('User email:', user.email);
  } else {
    console.log('Admin access level:', user.accessLevel);
  }
}
```

---

### 5. Discriminated Union + `switch`

A powerful narrowing technique using a common property.

```ts
type Square = { kind: 'square'; size: number };
type Circle = { kind: 'circle'; radius: number };

function area(shape: Square | Circle) {
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size;
    case 'circle':
      return Math.PI * shape.radius ** 2;
  }
}
```

---

### 6. `instanceof` Narrowing

Used for class instances.

```ts
class User {
  constructor(public name: string) {}
}

class Admin extends User {
  constructor(
    name: string,
    public role: string,
  ) {
    super(name);
  }
}

function greet(user: User | Admin) {
  if (user instanceof Admin) {
    console.log(`Hello Admin ${user.name} with role ${user.role}`);
  } else {
    console.log(`Hello ${user.name}`);
  }
}
```
