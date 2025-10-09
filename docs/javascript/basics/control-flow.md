---
sidebar_position: 4
id: javascript-control-flow
title: JavaScript Control Flow - Complete Guide
description: Master JavaScript control flow with if/else, switch statements, ternary operators, and best practices. Learn to write clean conditional logic with practical examples.
keywords:
  [
    javascript control flow,
    if else javascript,
    switch statement,
    ternary operator,
    conditional statements,
    javascript conditionals,
    control structures,
  ]
tags:
  - JavaScript
  - Control Flow
  - Conditionals
  - Basics
---

# Control Flow

Control flow determines the **order in which code is executed**. Master these structures to build dynamic, responsive applications!

---

## 🎯 if Statement

Execute code only if a condition is true.

### Basic if

```js live
const age = 18;

if (age >= 18) {
  console.log('You are eligible to vote.');
}

// Condition is true, so the code runs
```

### Multiple Conditions

```js live
const score = 85;
const attendance = 90;

if (score >= 80 && attendance >= 85) {
  console.log('Excellent performance!');
}

// Both conditions are true
```

---

## 🔀 if...else Statement

Execute one block if true, another if false.

### Basic if...else

```js live
const isRaining = true;

if (isRaining) {
  console.log('Take an umbrella!');
} else {
  console.log('Enjoy the sunshine!');
}
```

### Practical Example

```js live
function checkLoginStatus(isLoggedIn) {
  if (isLoggedIn) {
    return 'Welcome back!';
  } else {
    return 'Please log in';
  }
}

console.log(checkLoginStatus(true)); // 'Welcome back!'
console.log(checkLoginStatus(false)); // 'Please log in'
```

---

## 📊 if...else if...else Ladder

Check multiple conditions in sequence.

### Basic Ladder

```js live
const score = 85;

if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C');
} else if (score >= 60) {
  console.log('Grade: D');
} else {
  console.log('Grade: F');
}

// Output: 'Grade: B'
```

### Practical Example - User Permissions

```js live
function checkPermission(role) {
  if (role === 'admin') {
    return {
      canRead: true,
      canWrite: true,
      canDelete: true,
    };
  } else if (role === 'editor') {
    return {
      canRead: true,
      canWrite: true,
      canDelete: false,
    };
  } else if (role === 'viewer') {
    return {
      canRead: true,
      canWrite: false,
      canDelete: false,
    };
  } else {
    return {
      canRead: false,
      canWrite: false,
      canDelete: false,
    };
  }
}

console.log(checkPermission('editor'));
// { canRead: true, canWrite: true, canDelete: false }
```

---

## 🎯 Ternary Operator

Shorthand for simple if...else.

### Basic Syntax

```js live
const age = 20;
const access = age >= 18 ? 'Granted' : 'Denied';
console.log(access); // 'Granted'

// Equivalent to:
let access2;
if (age >= 18) {
  access2 = 'Granted';
} else {
  access2 = 'Denied';
}
console.log(access2); // 'Granted'
```

### Nested Ternary

```js live
const score = 85;
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F';
console.log('Grade:', grade); // 'B'
```

### Practical Example

```js live
function getStatusIcon(status) {
  return status === 'success' ? '✅' : status === 'error' ? '❌' : '⚠️';
}

console.log(getStatusIcon('success')); // ✅
console.log(getStatusIcon('error')); // ❌
console.log(getStatusIcon('warning')); // ⚠️
```

---

## 🔀 switch Statement

Handle multiple discrete values cleanly.

### Basic switch

```js live
const fruit = 'banana';

switch (fruit) {
  case 'apple':
    console.log('Apples are red.');
    break;
  case 'banana':
    console.log('Bananas are yellow.');
    break;
  case 'orange':
    console.log('Oranges are orange.');
    break;
  default:
    console.log('Unknown fruit.');
}

// Output: 'Bananas are yellow.'
```

### Without break (Fall-through)

```js live
const day = 'Monday';

switch (day) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log('Weekday');
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend');
    break;
  default:
    console.log('Invalid day');
}

// Output: 'Weekday'
```

### With Return Values

```js live
function getDiscount(membershipLevel) {
  switch (membershipLevel) {
    case 'platinum':
      return 30;
    case 'gold':
      return 20;
    case 'silver':
      return 10;
    case 'bronze':
      return 5;
    default:
      return 0;
  }
}

console.log('Discount:', getDiscount('gold') + '%'); // 20%
```

### Practical Example - HTTP Status

```js live
function getStatusMessage(statusCode) {
  switch (statusCode) {
    case 200:
      return 'OK';
    case 201:
      return 'Created';
    case 400:
      return 'Bad Request';
    case 401:
      return 'Unauthorized';
    case 404:
      return 'Not Found';
    case 500:
      return 'Internal Server Error';
    default:
      return 'Unknown Status';
  }
}

console.log('200:', getStatusMessage(200)); // OK
console.log('404:', getStatusMessage(404)); // Not Found
console.log('500:', getStatusMessage(500)); // Internal Server Error
```

---

## 🔒 Guard Clauses

Exit early to avoid deep nesting.

### Without Guard Clauses

```js
// ❌ Deeply nested
function processUser(user) {
  if (user) {
    if (user.isActive) {
      if (user.hasPermission) {
        // Process user
        return 'Processing...';
      } else {
        return 'No permission';
      }
    } else {
      return 'User not active';
    }
  } else {
    return 'No user';
  }
}
```

### With Guard Clauses

```js live
// ✅ Clean and readable
function processUser(user) {
  if (!user) return 'No user';
  if (!user.isActive) return 'User not active';
  if (!user.hasPermission) return 'No permission';

  // Process user
  return 'Processing...';
}

// Test
console.log(processUser(null)); // 'No user'
console.log(processUser({ isActive: false })); // 'User not active'
console.log(processUser({ isActive: true, hasPermission: false })); // 'No permission'
console.log(processUser({ isActive: true, hasPermission: true })); // 'Processing...'
```

---

## 📚 Practical Examples

### Example 1: Form Validation

```js live
function validateForm(formData) {
  // Guard clauses for validation
  if (!formData.email) {
    return { valid: false, error: 'Email is required' };
  }

  if (!formData.email.includes('@')) {
    return { valid: false, error: 'Invalid email format' };
  }

  if (!formData.password) {
    return { valid: false, error: 'Password is required' };
  }

  if (formData.password.length < 8) {
    return { valid: false, error: 'Password must be at least 8 characters' };
  }

  // All validations passed
  return { valid: true };
}

// Test
console.log(validateForm({ email: 'test@example.com', password: 'password123' }));
// { valid: true }

console.log(validateForm({ email: 'invalid', password: 'pass' }));
// { valid: false, error: 'Invalid email format' }
```

### Example 2: Pricing Calculator

```js live
function calculatePrice(quantity, membershipLevel) {
  // Base price
  let basePrice = 100;
  let totalPrice = basePrice * quantity;

  // Apply discount based on membership
  let discount = 0;
  if (membershipLevel === 'platinum') {
    discount = 0.3; // 30%
  } else if (membershipLevel === 'gold') {
    discount = 0.2; // 20%
  } else if (membershipLevel === 'silver') {
    discount = 0.1; // 10%
  }

  totalPrice = totalPrice * (1 - discount);

  // Volume discount
  if (quantity >= 10) {
    totalPrice *= 0.95; // Extra 5% off
  }

  return {
    basePrice: basePrice * quantity,
    discount: discount * 100 + '%',
    finalPrice: totalPrice.toFixed(2),
  };
}

console.log(calculatePrice(5, 'gold'));
// { basePrice: 500, discount: '20%', finalPrice: '400.00' }

console.log(calculatePrice(15, 'platinum'));
// { basePrice: 1500, discount: '30%', finalPrice: '997.50' }
```

### Example 3: Day of Week Handler

```js live
function getDayInfo(day) {
  const dayLower = day.toLowerCase();

  switch (dayLower) {
    case 'monday':
      return { type: 'weekday', mood: '😔', message: 'Start of the week!' };
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
      return { type: 'weekday', mood: '😐', message: 'Keep going!' };
    case 'friday':
      return { type: 'weekday', mood: '😊', message: 'Almost weekend!' };
    case 'saturday':
    case 'sunday':
      return { type: 'weekend', mood: '🎉', message: 'Enjoy!' };
    default:
      return { type: 'unknown', mood: '❓', message: 'Invalid day' };
  }
}

console.log(getDayInfo('Friday'));
// { type: 'weekday', mood: '😊', message: 'Almost weekend!' }

console.log(getDayInfo('Saturday'));
// { type: 'weekend', mood: '🎉', message: 'Enjoy!' }
```

---

## 🎯 Best Practices

### 1. Use Strict Equality (===)

```js
// ✅ Good
if (status === 'active') {
  // ...
}

// ❌ Bad - type coercion
if (status == 'active') {
  // ...
}
```

### 2. Use Guard Clauses

```js
// ✅ Good - early return
function process(data) {
  if (!data) return null;
  if (!data.isValid) return null;

  // Process...
  return result;
}

// ❌ Bad - deep nesting
function process(data) {
  if (data) {
    if (data.isValid) {
      // Process...
      return result;
    }
  }
  return null;
}
```

### 3. Keep Ternary Simple

```js
// ✅ Good - simple condition
const message = isError ? 'Error' : 'Success';

// ❌ Bad - too complex
const value = a ? (b ? (c ? 'd' : 'e') : 'f') : 'g';
```

### 4. Always Include default in switch

```js
// ✅ Good
switch (value) {
  case 'a':
    // ...
    break;
  default:
    // Handle unexpected values
    break;
}
```

---

## 💡 Common Pitfalls

### Pitfall 1: Missing break in switch

```js live
const grade = 'B';

// ❌ Wrong - fall-through
switch (grade) {
  case 'A':
    console.log('Excellent');
  // Missing break!
  case 'B':
    console.log('Good');
  // Missing break!
  case 'C':
    console.log('Fair');
}

// Output: 'Good' AND 'Fair' (both execute!)

// ✅ Correct
switch (grade) {
  case 'A':
    console.log('Excellent');
    break;
  case 'B':
    console.log('Good');
    break;
  case 'C':
    console.log('Fair');
    break;
}

// Output: 'Good' (only this executes)
```

### Pitfall 2: Truthy vs True

```js live
const value = 'hello';

// Both execute because non-empty string is truthy
if (value) {
  console.log('Truthy'); // Executes
}

if (value === true) {
  console.log('Strictly true'); // Doesn't execute
}
```

### Pitfall 3: Assignment vs Comparison

```js live
let x = 5;

// ❌ Wrong - assigns instead of compares
if ((x = 10)) {
  // Always true
  console.log(x); // 10
}

// ✅ Correct - comparison
if (x === 10) {
  console.log(x);
}
```

---

## 🔗 What's Next?

Learn about loops to repeat code efficiently!

👉 [Next: Loops »](./loops.md)

---

## 📖 Additional Resources

- [MDN: Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [JavaScript.info: Conditionals](https://javascript.info/ifelse)
- [MDN: switch Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
