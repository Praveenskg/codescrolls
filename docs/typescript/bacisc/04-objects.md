---
id: objects
title: Objects
description: Learn how to define object types, use inline and reusable type annotations, and handle optional and nested properties in TypeScript.
keywords:
  - typescript objects
  - object types
  - type aliases
  - optional properties
  - nested objects
  - ts object examples
  - object typing
image: /img/meta/ts-objects.png
tags: [typescript, objects, type aliases, basics]
---

# Objects in TypeScript

In TypeScript, objects are more strictly typed than in JavaScript. You can define the shape of an object using inline types, type aliases, or interfaces.

---

## 1. Inline Object Type

```ts
const user: { name: string; age: number } = {
  name: 'Alice',
  age: 25,
};
```

- You define the object structure right where you declare it.

- Great for quick usage, but not reusable.

---

## 2. Type Alias for Objects

```ts
type User = {
  name: string;
  age: number;
  isAdmin?: boolean; // Optional property
};

const admin: User = {
  name: 'Bob',
  age: 30,
  isAdmin: true,
};
```

Reusable

Optional properties with `?`

---

## 3. Readonly Properties

```ts
type Point = {
  readonly x: number;
  readonly y: number;
};

const p1: Point = { x: 10, y: 20 };
// p1.x = 5; ❌ Error: Cannot assign to 'x' because it is a read-only property
```

---

## 4. Index Signatures

Useful when you don't know all the property names in advance.

```ts
type StringMap = {
  [key: string]: string;
};

const translations: StringMap = {
  welcome: 'Welcome',
  goodbye: 'Goodbye',
};
```

---

## 5. Nested Objects

```ts
type Product = {
  id: number;
  title: string;
  price: number;
  metadata: {
    category: string;
    tags: string[];
  };
};

const book: Product = {
  id: 1,
  title: 'TS Guide',
  price: 299,
  metadata: {
    category: 'Education',
    tags: ['typescript', 'programming'],
  },
};
```

---

## 6. Object as Function Parameter

```ts
function printUser(user: { name: string; age: number }) {
  console.log(`${user.name} is ${user.age} years old.`);
}
```

---

## Best Practices

- Use `type` or `interface` for clarity and reusability.

- Use `readonly` when you want to prevent mutation.

- Use `?` for optional fields.

- Use index signatures for flexible keys, but carefully (can lead to less strict typing).
