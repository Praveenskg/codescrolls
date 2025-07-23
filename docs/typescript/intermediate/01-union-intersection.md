---
id: union-intersection
title: Union and Intersection Types
description: Master the use of union (|) and intersection (&) types in TypeScript to create flexible and composable type structures.
keywords:
  - typescript
  - union types
  - intersection types
  - type composition
  - type flexibility
  - advanced types
image: /img/meta/ts-union-intersection.png
tags: [typescript, union, intersection, types]
---

# Union & Intersection Types in TypeScript

## Union Types (`|`)

A union type allows a variable to be more than one type.

```ts
let value: string | number;

value = 'hello'; // correct
value = 123; // correct
value = true; //  Error
```

## With functions

```ts
function printId(id: string | number) {
  console.log('Your ID is:', id);
}
```

## Type Narrowing in Unions

You can narrow union types using `typeof`, `in`, or custom type guards.

```ts
function display(value: string | number) {
  if (typeof value === 'string') {
    console.log("It's a string:", value.toUpperCase());
  } else {
    console.log("It's a number:", value.toFixed(2));
  }
}
```

## Intersection Types (`&`)

Intersection types merge multiple types into one. The result must satisfy all the types

```ts
type Person = {
  name: string;
};

type Employee = {
  empId: number;
};

type Staff = Person & Employee;

const john: Staff = {
  name: 'John',
  empId: 101,
};
```

## Bonus: Union of Literal Types

```ts
type Direction = 'left' | 'right' | 'up' | 'down';

function move(dir: Direction) {
  console.log(`Moving ${dir}`);
}

move('up'); // ✅
move('down'); // ✅
move('north'); // ❌
```
