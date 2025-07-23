---
id: interfaces
title: Interfaces
description: Understand how interfaces work in TypeScript to define object shapes, enforce structure, and enable code reusability and type safety.
keywords:
  - typescript
  - interfaces
  - object structure
  - type safety
  - optional properties
  - readonly
  - extend interface
image: /img/meta/ts-interfaces.png
tags: [typescript, interfaces, basics]
---

# TypeScript Interfaces

An `interface` defines the **shape of an object**. It is used to describe the structure of data, including properties and method signatures.

## Basic Interface

```ts
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: 'Alice',
  age: 30,
};
```

## Optional Properties

Use `?` to define optional properties.

```ts
interface User {
  username: string;
  email?: string;
}
```

## Readonly Properties

Use `readonly` to make properties immutable.

```ts
interface Car {
  readonly brand: string;
  model: string;
}
```

## Methods in Interface

```ts
interface Greeter {
  name: string;
  greet(): string;
}

const greeter: Greeter = {
  name: 'Bob',
  greet() {
    return `Hello, ${this.name}`;
  },
};
```

## Interface Extension (Inheritance)

```ts
interface Animal {
  species: string;
}

interface Dog extends Animal {
  breed: string;
}

const pet: Dog = {
  species: 'Canine',
  breed: 'Labrador',
};
```

## Interface vs Type Alias

- `interface` can be extended multiple times (declaration merging).

- `type` is more flexible (can define unions, intersections, etc).

Use `interface` when modeling objects or classes, and `type` for more complex or functional types.
