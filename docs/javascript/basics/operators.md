---
sidebar_position: 3
id: javascript-operators
title: JavaScript Operators - Complete Guide
description: Master all JavaScript operators including arithmetic, comparison, logical, assignment, and modern operators with practical examples and best practices.
keywords:
  [
    javascript operators,
    arithmetic operators,
    comparison operators,
    logical operators,
    assignment operators,
    ternary operator,
    nullish coalescing,
    optional chaining,
  ]
tags:
  - JavaScript
  - Operators
  - Basics
---

# JavaScript Operators

JavaScript includes a wide range of **operators** used to perform operations on variables and values. Mastering operators is fundamental to writing effective JavaScript code!

---

## 🔢 Arithmetic Operators

Perform mathematical calculations.

### Basic Operations

```js live
const a = 10;
const b = 3;

console.log('Addition:', a + b); // 13
console.log('Subtraction:', a - b); // 7
console.log('Multiplication:', a * b); // 30
console.log('Division:', a / b); // 3.333...
console.log('Modulus (remainder):', a % b); // 1
console.log('Exponentiation:', a ** b); // 1000
```

### Increment and Decrement

```js live
let count = 5;

// Post-increment (returns then increments)
console.log('count++:', count++); // 5
console.log('After:', count); // 6

// Pre-increment (increments then returns)
console.log('++count:', ++count); // 7
console.log('After:', count); // 7

// Post-decrement
console.log('count--:', count--); // 7
console.log('After:', count); // 6

// Pre-decrement
console.log('--count:', --count); // 5
console.log('After:', count); // 5
```

### Practical Example

```js live
function calculateTotal(price, quantity, taxRate) {
  const subtotal = price * quantity;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return {
    subtotal,
    tax,
    total,
  };
}

const result = calculateTotal(25, 4, 0.1);
console.log('Subtotal: $' + result.subtotal); // $100
console.log('Tax: $' + result.tax); // $10
console.log('Total: $' + result.total); // $110
```

---

## ✏️ Assignment Operators

Assign values to variables.

### Basic Assignment

```js live
let x = 10;
console.log('x =', x); // 10

// Add and assign
x += 5; // Same as: x = x + 5
console.log('x += 5:', x); // 15

// Subtract and assign
x -= 3; // Same as: x = x - 3
console.log('x -= 3:', x); // 12

// Multiply and assign
x *= 2; // Same as: x = x * 2
console.log('x *= 2:', x); // 24

// Divide and assign
x /= 4; // Same as: x = x / 4
console.log('x /= 4:', x); // 6

// Modulus and assign
x %= 4; // Same as: x = x % 4
console.log('x %= 4:', x); // 2

// Exponentiation and assign
x **= 3; // Same as: x = x ** 3
console.log('x **= 3:', x); // 8
```

### Destructuring Assignment

```js live
// Array destructuring
const [first, second] = [1, 2, 3];
console.log('First:', first, 'Second:', second); // 1 2

// Object destructuring
const { name, age } = { name: 'Alice', age: 25, city: 'NYC' };
console.log('Name:', name, 'Age:', age); // Alice 25
```

---

## ⚖️ Comparison Operators

Compare two values and return a boolean.

### Equality Operators

```js live
// Loose equality (==) - performs type coercion
console.log(5 == 5); // true
console.log(5 == '5'); // true (string converted to number)
console.log(0 == false); // true
console.log(null == undefined); // true

// Strict equality (===) - no type coercion
console.log(5 === 5); // true
console.log(5 === '5'); // false (different types)
console.log(0 === false); // false
console.log(null === undefined); // false
```

### Inequality Operators

```js live
const a = 10;
const b = 5;
const c = '10';

console.log('a != b:', a != b); // true
console.log('a !== c:', a !== c); // true (different types)
console.log('a > b:', a > b); // true
console.log('a < b:', a < b); // false
console.log('a >= 10:', a >= 10); // true
console.log('b <= 5:', b <= 5); // true
```

### Practical Example

```js live
function checkAge(age) {
  if (age < 13) {
    return 'Child';
  } else if (age >= 13 && age < 18) {
    return 'Teenager';
  } else if (age >= 18 && age < 65) {
    return 'Adult';
  } else {
    return 'Senior';
  }
}

console.log(checkAge(10)); // Child
console.log(checkAge(16)); // Teenager
console.log(checkAge(30)); // Adult
console.log(checkAge(70)); // Senior
```

---

## 🔀 Logical Operators

Combine or invert boolean values.

### AND (&&)

Returns true only if both operands are true.

```js live
const isLoggedIn = true;
const isAdmin = true;
const isPremium = false;

console.log('isLoggedIn && isAdmin:', isLoggedIn && isAdmin); // true
console.log('isLoggedIn && isPremium:', isLoggedIn && isPremium); // false
console.log('isAdmin && isPremium:', isAdmin && isPremium); // false

// Short-circuit: if first is false, second isn't evaluated
let count = 0;
false && count++; // count++ not executed
console.log('Count:', count); // 0
```

### OR (||)

Returns true if at least one operand is true.

```js live
const hasEmail = false;
const hasPhone = true;
const hasAddress = false;

console.log('hasEmail || hasPhone:', hasEmail || hasPhone); // true
console.log('hasEmail || hasAddress:', hasEmail || hasAddress); // false
console.log('hasPhone || hasAddress:', hasPhone || hasAddress); // true

// Default value pattern (older style)
const username = '' || 'Guest';
console.log('Username:', username); // 'Guest'
```

### NOT (!)

Inverts the boolean value.

```js live
const isActive = true;
const isDisabled = false;

console.log('!isActive:', !isActive); // false
console.log('!isDisabled:', !isDisabled); // true
console.log('!!isActive:', !!isActive); // true (convert to boolean)

// Convert to boolean
console.log('!!"hello":', !!'hello'); // true
console.log('!!0:', !!0); // false
console.log('!!null:', !!null); // false
```

### Practical Example

```js live
function canAccessDashboard(user) {
  // Must be logged in AND (admin OR premium)
  return user.isLoggedIn && (user.isAdmin || user.isPremium);
}

const user1 = { isLoggedIn: true, isAdmin: true, isPremium: false };
const user2 = { isLoggedIn: true, isAdmin: false, isPremium: true };
const user3 = { isLoggedIn: false, isAdmin: true, isPremium: false };

console.log('User1 can access:', canAccessDashboard(user1)); // true
console.log('User2 can access:', canAccessDashboard(user2)); // true
console.log('User3 can access:', canAccessDashboard(user3)); // false
```

---

## 🎯 Ternary Operator

Shorthand for if-else statements.

### Basic Syntax

```js live
const age = 20;
const status = age >= 18 ? 'Adult' : 'Minor';
console.log('Status:', status); // 'Adult'

// Equivalent to:
let status2;
if (age >= 18) {
  status2 = 'Adult';
} else {
  status2 = 'Minor';
}
console.log('Status2:', status2); // 'Adult'
```

### Nested Ternary

```js live
const score = 85;
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F';
console.log('Grade:', grade); // 'B'
```

### Practical Example

```js live
function formatPrice(price, currency = 'USD') {
  const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
  return symbol + price.toFixed(2);
}

console.log(formatPrice(29.99, 'USD')); // $29.99
console.log(formatPrice(29.99, 'EUR')); // €29.99
console.log(formatPrice(29.99, 'GBP')); // £29.99
```

---

## 🆕 Nullish Coalescing (??)

Returns right operand when left is `null` or `undefined`.

### Basic Usage

```js live
let name = null;
let displayName = name ?? 'Guest';
console.log('Display name:', displayName); // 'Guest'

let age = 0;
let defaultAge = age ?? 18;
console.log('Age:', defaultAge); // 0 (not 18!)

// Compare with OR operator
let defaultAge2 = age || 18;
console.log('Age with ||:', defaultAge2); // 18 (0 is falsy)
```

### Difference from OR (||)

```js live
// Falsy values: false, 0, '', null, undefined, NaN

// With OR (||) - replaces ANY falsy value
console.log(0 || 10); // 10
console.log('' || 'default'); // 'default'
console.log(false || true); // true

// With Nullish Coalescing (??) - only null/undefined
console.log(0 ?? 10); // 0
console.log('' ?? 'default'); // ''
console.log(false ?? true); // false
console.log(null ?? 'default'); // 'default'
console.log(undefined ?? 'default'); // 'default'
```

### Practical Example

```js live
function createUser(options = {}) {
  return {
    name: options.name ?? 'Anonymous',
    age: options.age ?? 0, // 0 is valid age
    active: options.active ?? true,
    score: options.score ?? 0, // 0 is valid score
  };
}

console.log(createUser({ name: 'Alice', age: 0, score: 0 }));
// { name: 'Alice', age: 0, active: true, score: 0 }

console.log(createUser({}));
// { name: 'Anonymous', age: 0, active: true, score: 0 }
```

---

## ❓ Optional Chaining (?.)

Safely access nested properties without errors.

### Basic Usage

```js live
const user = {
  name: 'Alice',
  address: {
    city: 'NYC',
    street: '5th Ave',
  },
};

// Safe property access
console.log(user?.address?.city); // 'NYC'
console.log(user?.address?.zipCode); // undefined (no error!)
console.log(user?.contact?.email); // undefined (no error!)

// Without optional chaining (would error)
// console.log(user.contact.email); // TypeError: Cannot read property 'email' of undefined
```

### With Arrays

```js live
const users = [
  { name: 'Alice', posts: [{ title: 'Post 1' }] },
  { name: 'Bob' }, // No posts array
];

console.log(users[0]?.posts?.[0]?.title); // 'Post 1'
console.log(users[1]?.posts?.[0]?.title); // undefined (no error!)
console.log(users[2]?.name); // undefined (array out of bounds)
```

### With Functions

```js live
const api = {
  fetchUser: () => ({ name: 'Alice' }),
};

console.log(api.fetchUser?.()); // { name: 'Alice' }
console.log(api.deleteUser?.()); // undefined (method doesn't exist)
```

### Practical Example

```js live
function getUserEmail(user) {
  return user?.profile?.contact?.email ?? 'No email provided';
}

const user1 = {
  profile: {
    contact: {
      email: 'alice@example.com',
    },
  },
};

const user2 = { profile: {} };
const user3 = null;

console.log(getUserEmail(user1)); // 'alice@example.com'
console.log(getUserEmail(user2)); // 'No email provided'
console.log(getUserEmail(user3)); // 'No email provided'
```

---

## 🎯 Best Practices

### 1. Always Use Strict Equality (===)

```js
// ✅ Good - predictable
if (value === 5) {
  // Only true if value is number 5
}

// ❌ Bad - type coercion confusion
if (value == 5) {
  // True for 5, '5', etc.
}
```

### 2. Use ?? for Default Values

```js
// ✅ Good - 0 and '' are valid
const count = userInput ?? 0;
const name = userInput ?? '';

// ❌ Bad - 0 and '' are replaced
const count2 = userInput || 0;
const name2 = userInput || '';
```

### 3. Use Optional Chaining for Nested Access

```js
// ✅ Good - safe
const city = user?.address?.city;

// ❌ Bad - verbose and error-prone
const city2 = user && user.address && user.address.city;
```

### 4. Keep Ternary Simple

```js
// ✅ Good - simple and readable
const message = isError ? 'Error' : 'Success';

// ❌ Bad - too complex
const value = a ? (b ? (c ? 'd' : 'e') : 'f') : 'g';
```

---

## 💡 Common Pitfalls

### Pitfall 1: Type Coercion with ==

```js live
console.log(0 == false); // true (unexpected!)
console.log('' == false); // true (unexpected!)
console.log(null == undefined); // true (unexpected!)

// Solution: Use ===
console.log(0 === false); // false
console.log('' === false); // false
console.log(null === undefined); // false
```

### Pitfall 2: Increment/Decrement Confusion

```js live
let x = 5;
console.log(x++); // 5 (returns then increments)
console.log(x); // 6

let y = 5;
console.log(++y); // 6 (increments then returns)
console.log(y); // 6
```

### Pitfall 3: Logical OR for Defaults

```js live
function setCount(value) {
  // ❌ Problem: 0 is a valid count
  const count = value || 10;
  return count;
}

console.log(setCount(0)); // 10 (wrong!)
console.log(setCount(5)); // 5 (correct)

// ✅ Solution: Use ??
function setCountFixed(value) {
  const count = value ?? 10;
  return count;
}

console.log(setCountFixed(0)); // 0 (correct!)
console.log(setCountFixed(5)); // 5 (correct)
```

---

## 🔗 What's Next?

Learn how to control program flow!

👉 [Next: Control Flow »](./control-flow.md)

---

## 📖 Additional Resources

- [MDN: Expressions and Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [JavaScript.info: Operators](https://javascript.info/operators)
- [MDN: Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
