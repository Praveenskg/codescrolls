---
sidebar_position: 6
title: JavaScript Closures - Complete Guide
description:
  Master JavaScript closures with practical examples. Learn lexical scoping,
  data privacy, factory functions, and common closure patterns in depth.
keywords:
  [
    javascript closures,
    closures javascript,
    lexical scope,
    closure examples,
    function closures,
    javascript scope,
    closure patterns,
  ]
tags:
  - JavaScript
  - Closures
  - Functions
  - Advanced
---

# JavaScript Closures

A **closure** is a function that has access to variables from its outer
(enclosing) scope, even after the outer function has finished executing.
Closures are one of JavaScript's most powerful features!

---

## 🎯 What is a Closure?

```js
function outer() {
  const message = 'Hello';

  function inner() {
    console.log(message); // Can access outer's variable
  }

  return inner;
}

const myFunction = outer();
myFunction(); // 'Hello' - closure in action!
```

**Key Point:** `inner()` "remembers" the `message` variable even though
`outer()` has finished execution.

---

## 📦 Lexical Scoping

Closures are based on **lexical scoping** - where a variable is defined
determines where it can be accessed.

```js
const global = 'I am global';

function outer() {
  const outerVar = 'I am outer';

  function middle() {
    const middleVar = 'I am middle';

    function inner() {
      const innerVar = 'I am inner';

      // Can access all outer scopes
      console.log(global); // ✅
      console.log(outerVar); // ✅
      console.log(middleVar); // ✅
      console.log(innerVar); // ✅
    }

    return inner;
  }

  return middle;
}

const middleFn = outer();
const innerFn = middleFn();
innerFn();
```

---

## 🔒 Data Privacy

Use closures to create private variables.

### Basic Privacy

```js
function createCounter() {
  let count = 0; // Private variable

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
console.log(counter.count); // undefined - private!
```

### Bank Account Example

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private
  const transactions = []; // Private

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        transactions.push({ type: 'deposit', amount, balance });
        return balance;
      }
      throw new Error('Amount must be positive');
    },

    withdraw(amount) {
      if (amount > balance) {
        throw new Error('Insufficient funds');
      }
      balance -= amount;
      transactions.push({ type: 'withdraw', amount, balance });
      return balance;
    },

    getBalance() {
      return balance;
    },

    getTransactions() {
      return [...transactions]; // Return copy
    },
  };
}

const account = createBankAccount(1000);
account.deposit(500); // 1500
account.withdraw(200); // 1300
console.log(account.getBalance()); // 1300
console.log(account.balance); // undefined - private!
```

---

## 🏭 Factory Functions

Create multiple instances with closures.

```js
function createPerson(name, age) {
  // Private variables
  let _name = name;
  let _age = age;

  return {
    // Public methods
    getName() {
      return _name;
    },
    getAge() {
      return _age;
    },
    setAge(newAge) {
      if (newAge > 0 && newAge < 150) {
        _age = newAge;
      }
    },
    greet() {
      return `Hi, I'm ${_name} and I'm ${_age} years old`;
    },
  };
}

const alice = createPerson('Alice', 25);
const bob = createPerson('Bob', 30);

console.log(alice.greet()); // Hi, I'm Alice and I'm 25 years old
console.log(bob.greet()); // Hi, I'm Bob and I'm 30 years old

// Each has its own private state
alice.setAge(26);
console.log(alice.getAge()); // 26
console.log(bob.getAge()); // 30 (unchanged)
```

---

## 🔄 Event Handlers

Closures are essential for event handling.

### Basic Event Handler

```js
function setupButton(buttonId, label) {
  const button = document.getElementById(buttonId);
  let clickCount = 0; // Closure variable

  button.addEventListener('click', function () {
    clickCount++;
    console.log(`${label} clicked ${clickCount} times`);
  });
}

setupButton('btn1', 'Button 1');
setupButton('btn2', 'Button 2');
// Each button maintains its own count
```

### Remove Event Listener

```js
function createClickHandler() {
  let count = 0;

  const handler = function () {
    count++;
    console.log(`Clicked ${count} times`);

    if (count >= 5) {
      button.removeEventListener('click', handler);
      console.log('Handler removed!');
    }
  };

  return handler;
}

const button = document.querySelector('#myButton');
button.addEventListener('click', createClickHandler());
```

---

## ⏱️ Timers

Closures work perfectly with setTimeout and setInterval.

### Basic Timer

```js
function countdown(seconds) {
  let remaining = seconds;

  const intervalId = setInterval(() => {
    console.log(remaining);
    remaining--;

    if (remaining < 0) {
      clearInterval(intervalId);
      console.log('Done!');
    }
  }, 1000);
}

countdown(5); // 5, 4, 3, 2, 1, 0, Done!
```

### Timer with Controls

```js
function createTimer() {
  let seconds = 0;
  let intervalId = null;

  return {
    start() {
      if (intervalId) return; // Already running

      intervalId = setInterval(() => {
        seconds++;
        console.log(`Elapsed: ${seconds}s`);
      }, 1000);
    },

    stop() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    },

    reset() {
      this.stop();
      seconds = 0;
    },

    getTime() {
      return seconds;
    },
  };
}

const timer = createTimer();
timer.start();
// ... later
timer.stop();
console.log(`Total time: ${timer.getTime()}s`);
```

---

## 📚 Practical Examples

### Example 1: Memoization

```js
function memoize(fn) {
  const cache = {}; // Closure variable

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      console.log('From cache');
      return cache[key];
    }

    console.log('Computing...');
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function expensiveCalculation(n) {
  // Simulate expensive operation
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += i;
  }
  return result;
}

const memoized = memoize(expensiveCalculation);
console.log(memoized(1000000)); // Computing... then result
console.log(memoized(1000000)); // From cache (instant!)
```

### Example 2: Partial Application

```js
function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

const multiplyBy2 = partial(multiply, 2);
console.log(multiplyBy2(3, 4)); // 2 * 3 * 4 = 24

const multiplyBy2And3 = partial(multiply, 2, 3);
console.log(multiplyBy2And3(4)); // 2 * 3 * 4 = 24
```

### Example 3: Once Function

```js
function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

const initializeApp = once(() => {
  console.log('Initializing app...');
  return 'App initialized';
});

console.log(initializeApp()); // 'Initializing app...' then 'App initialized'
console.log(initializeApp()); // 'App initialized' (doesn't log again)
console.log(initializeApp()); // 'App initialized'
```

### Example 4: Debounce

```js
function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Usage with search
const search = debounce(query => {
  console.log('Searching for:', query);
  // Make API call
}, 300);

// User types: only last call executes after 300ms pause
searchInput.addEventListener('input', e => search(e.target.value));
```

### Example 5: Module Pattern

```js
const userModule = (function () {
  // Private variables
  const users = [];
  let currentId = 1;

  // Private function
  function generateId() {
    return currentId++;
  }

  // Public API
  return {
    addUser(name, email) {
      const user = {
        id: generateId(),
        name,
        email,
        createdAt: new Date(),
      };
      users.push(user);
      return user;
    },

    getUser(id) {
      return users.find(u => u.id === id);
    },

    getAllUsers() {
      return [...users]; // Return copy
    },

    removeUser(id) {
      const index = users.findIndex(u => u.id === id);
      if (index !== -1) {
        return users.splice(index, 1)[0];
      }
      return null;
    },
  };
})();

// Usage
userModule.addUser('Alice', 'alice@example.com');
userModule.addUser('Bob', 'bob@example.com');
console.log(userModule.getAllUsers());
// Can't access users or generateId directly!
```

---

## ⚠️ Common Pitfalls

### Pitfall 1: Loop Closure Issue

```js
// ❌ Problem: All functions share same 'i'
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // 3, 3, 3 (not 0, 1, 2!)
  }, 1000);
}

// ✅ Solution 1: Use let (block scope)
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // 0, 1, 2 ✓
  }, 1000);
}

// ✅ Solution 2: IIFE
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j); // 0, 1, 2 ✓
    }, 1000);
  })(i);
}
```

### Pitfall 2: Memory Leaks

```js
// ❌ Problem: Closure keeps large object in memory
function createLeak() {
  const largeData = new Array(1000000).fill('data');

  return function () {
    console.log(largeData[0]); // Keeps entire array in memory!
  };
}

// ✅ Solution: Only keep what you need
function noLeak() {
  const largeData = new Array(1000000).fill('data');
  const firstItem = largeData[0]; // Extract what you need

  return function () {
    console.log(firstItem); // Only keeps one string
  };
}
```

---

## 🎯 Best Practices

### 1. Use Closures for Data Privacy

```js
// ✅ Good - private variables
function createUser(name) {
  let _name = name; // Private

  return {
    getName: () => _name,
    setName: newName => (_name = newName),
  };
}
```

### 2. Be Aware of Memory

```js
// ✅ Good - clean up when done
function createResource() {
  const resource = acquireResource();

  return {
    use: () => resource.use(),
    cleanup: () => {
      resource.release();
      // resource = null; // Help GC
    },
  };
}
```

### 3. Document Closure Behavior

```js
/**
 * Creates a rate-limited function
 * @param {Function} fn - Function to rate limit
 * @param {number} limit - Max calls per period
 * @param {number} period - Time period in ms
 * @returns {Function} Rate-limited function
 */
function rateLimit(fn, limit, period) {
  let calls = 0;

  setInterval(() => (calls = 0), period);

  return function (...args) {
    if (calls < limit) {
      calls++;
      return fn(...args);
    }
    console.warn('Rate limit exceeded');
  };
}
```

---

## 🔗 What's Next?

Continue exploring advanced JavaScript concepts!

👉 [Back to JavaScript Overview »](../index.md)

---

## 📖 Additional Resources

- [MDN: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [JavaScript.info: Closures](https://javascript.info/closure)
- [You Don't Know JS: Scope & Closures](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures)
