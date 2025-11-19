---
id: arrays-tuples
title: Arrays & Tuples
description:
  Learn how to work with arrays and tuples in TypeScript, including readonly
  arrays, tuple types, rest elements, and key differences.
keywords:
  - typescript arrays
  - typescript tuples
  - array types
  - tuple types
  - readonly array
  - optional tuple
  - rest elements
  - typescript basics
image: /img/meta/ts-arrays-tuples.png
tags: [typescript, arrays, tuples, data structures]
---

# Arrays & Tuples in TypeScript

## Arrays

Arrays in TypeScript can be defined in two ways:

### 1. Using `type[]` syntax:

```ts
const numbers: number[] = [1, 2, 3];
const names: string[] = ['Alice', 'Bob'];
```

## 2. Using `Array<type>` generic syntax:

```ts
const flags: Array<boolean> = [true, false, true];
```

Arrays can be readonly too:

```ts
const readonlyNums: readonly number[] = [1, 2, 3];
// readonlyNums[0] = 10; // Error
```

# Tuples

Tuples are fixed-length arrays where the type of each element is known and can
differ.

```ts
let tuple: [string, number];
tuple = ['hello', 42]; //
```

## Named Tuple Elements (for readability):

```ts
type UserTuple = [name: string, age: number];
const user: UserTuple = ['Ravi', 25];
```

## Tuple with Optional Elements:

```ts
let optionalTuple: [string, number?];
optionalTuple = ['hello'];
```

## Tuple with Rest Elements:

```ts
type StringNumberBooleans = [string, number, ...boolean[]];
const data: StringNumberBooleans = ['a', 1, true, false, true];
```

# Array vs Tuple

| Feature       | Array                     | Tuple                                |
| ------------- | ------------------------- | ------------------------------------ |
| Length        | Variable                  | Fixed (can have optional/rest)       |
| Element Types | All elements of same type | Elements can have different types    |
| Use Case      | Lists of data             | Structured data with known positions |
