---
id: type-guards
title: Type Guards
description: Learn how Type Guards help in narrowing types and ensuring type safety during runtime checks in TypeScript.
keywords:
  - typescript
  - type guards
  - narrowing
  - typeof
  - instanceof
  - custom type guards
  - type safety
image: /img/meta/ts-type-guards.png
tags: [typescript, type guards, narrowing, safety]
---

# Type Guards in TypeScript

Type guards allow you to narrow down the type of a variable within a conditional block.  
They’re especially useful when dealing with union types (`|`) or `unknown`.

---

## 1. `typeof` Type Guard

Use this for primitive types like `string`, `number`, `boolean`, etc.

```ts
function logValue(value: string | number) {
  if (typeof value === 'string') {
    console.log('Uppercased:', value.toUpperCase());
  } else {
    console.log('Fixed number:', value.toFixed(2));
  }
}
```

---

## 2. `in` Operator Type Guard

Used to check if a property exists on an object.

```ts
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function makeSound(pet: Dog | Cat) {
  if ('bark' in pet) {
    pet.bark();
  } else {
    pet.meow();
  }
}
```

---

## 3. `instanceof` Type Guard

Use with classes or constructors.

```ts
class Car {
  drive() {
    console.log('Driving car');
  }
}

class Bike {
  ride() {
    console.log('Riding bike');
  }
}

function useVehicle(v: Car | Bike) {
  if (v instanceof Car) {
    v.drive();
  } else {
    v.ride();
  }
}
```

---

## 4. Custom Type Guard Functions

Define your own type guard using return type `param is Type`.

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}
```

---

## Bonus: Type Guards with `unknown`

You must use type guards to access properties of an `unknown` type.

```ts
function handle(value: unknown) {
  if (typeof value === 'string') {
    console.log("It's a string:", value.toUpperCase());
  } else {
    console.log('Unknown value');
  }
}
```

---

## Summary

| Type Guard   | Use Case                                   |
| ------------ | ------------------------------------------ |
| `typeof`     | Primitive types (`string`, `number`, etc.) |
| `in`         | Check if a property exists in object       |
| `instanceof` | Class-based checks                         |
| Custom Guard | Complex union types                        |
