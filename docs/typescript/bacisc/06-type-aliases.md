---
id: type-aliases
title: Type Aliases
description: Learn how to define and use type aliases in TypeScript to create custom, reusable type definitions and simplify complex types.
keywords:
  - typescript
  - type alias
  - custom types
  - union types
  - advanced types
  - reusable types
  - typescript basics
image: /img/meta/ts-type-alias.png
tags: [typescript, type alias, basics]
---

# Type Aliases in TypeScript

A **type alias** allows you to create a new name for a type. It's like defining a custom label for complex or repeated types.

## Syntax

```ts
type AliasName = Type;
```

## Basic Example

```ts
type Username = string;

const user1: Username = 'john_doe';
```

## Union Type Alias

```ts
type Status = 'success' | 'error' | 'loading';

function showStatus(status: Status) {
  console.log(status);
}
```

## Object Type Alias

```ts
type User = {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
};

const user: User = {
  name: 'Alice',
  age: 25,
};
```

## Nested Type Aliases

```ts
type Address = {
  city: string;
  pin: number;
};

type Employee = {
  name: string;
  address: Address;
};
```

## Function Type Alias

```ts
type AddFn = (a: number, b: number) => number;

const add: AddFn = (x, y) => x + y;
```

## Differences from Interface

- Use `type` for primitives, unions, tuples, or when extending multiple types.

- Use `interface` for object structures that you plan to extend/implement.
