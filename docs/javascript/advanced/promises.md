---
sidebar_position: 1
title: JavaScript Promises - Complete Guide
description: Master JavaScript Promises for asynchronous programming. Learn Promise creation, chaining, error handling, Promise.all, Promise.race, and practical async patterns.
keywords:
  [
    javascript promises,
    async javascript,
    promise chaining,
    promise all,
    promise race,
    error handling promises,
    asynchronous javascript,
    then catch finally,
  ]
tags:
  - JavaScript
  - Promises
  - Async
  - Advanced
---

# JavaScript Promises

Promises represent the **eventual completion or failure** of an asynchronous operation. They're the foundation of modern async JavaScript!

---

## 🎯 Why Promises?

### The Callback Hell Problem

```js
// ❌ Callback hell (pyramid of doom)
getData(function (a) {
  getMoreData(a, function (b) {
    getMoreData(b, function (c) {
      getMoreData(c, function (d) {
        // Finally have result!
      });
    });
  });
});

// ✅ Promises - much cleaner!
getData()
  .then((a) => getMoreData(a))
  .then((b) => getMoreData(b))
  .then((c) => getMoreData(c))
  .then((d) => {
    // Result!
  });
```

---

## 📦 Creating Promises

### Basic Promise

```js live
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve('Operation successful!');
  } else {
    reject('Operation failed!');
  }
});

myPromise.then((result) => console.log(result)).catch((error) => console.error(error));
```

### Async Operation Example

```js live
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    // Simulate API call with setTimeout
    setTimeout(() => {
      if (userId > 0) {
        resolve({
          id: userId,
          name: 'Alice',
          email: 'alice@example.com',
        });
      } else {
        reject(new Error('Invalid user ID'));
      }
    }, 1000);
  });
}

fetchUserData(1)
  .then((user) => console.log('User:', user))
  .catch((error) => console.error('Error:', error.message));
```

---

## 🔗 Promise Chaining

Chain multiple async operations.

### Sequential Operations

```js live
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Step 1 complete'), 500);
  });
}

function step2(prevResult) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(prevResult + ' → Step 2 complete'), 500);
  });
}

function step3(prevResult) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(prevResult + ' → Step 3 complete'), 500);
  });
}

step1()
  .then((result1) => {
    console.log(result1);
    return step2(result1);
  })
  .then((result2) => {
    console.log(result2);
    return step3(result2);
  })
  .then((result3) => {
    console.log('Final:', result3);
  });
```

### Returning Values

```js live
Promise.resolve(5)
  .then((num) => num * 2) // 10
  .then((num) => num + 3) // 13
  .then((num) => {
    console.log('Result:', num); // 13
    return num;
  });
```

---

## ⚠️ Error Handling

### .catch() Method

```js live
function riskyOperation() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    setTimeout(() => {
      if (random > 0.5) {
        resolve('Success!');
      } else {
        reject(new Error('Operation failed'));
      }
    }, 500);
  });
}

riskyOperation()
  .then((result) => console.log(result))
  .catch((error) => console.error('Caught:', error.message));
```

### .finally() Method

```js live
let isLoading = true;

fetchData()
  .then((data) => {
    console.log('Data:', data);
    // Process data
  })
  .catch((error) => {
    console.error('Error:', error);
    // Handle error
  })
  .finally(() => {
    isLoading = false;
    console.log('Loading complete');
    // Always runs (cleanup)
  });
```

### Error Propagation

```js live
Promise.resolve('start')
  .then((value) => {
    console.log(value);
    throw new Error('Something went wrong!');
  })
  .then((value) => {
    // This won't run
    console.log('This will not execute');
  })
  .catch((error) => {
    console.error('Caught error:', error.message);
    return 'recovered'; // Recover from error
  })
  .then((value) => {
    console.log('Recovered:', value); // This runs!
  });
```

---

## 🎯 Promise Static Methods

### Promise.all()

Wait for all promises to resolve (or any to reject).

```js live
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(() => resolve(42), 100));
const promise3 = Promise.resolve('foo');

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log('All resolved:', results);
    // [3, 42, 'foo']
  })
  .catch((error) => {
    console.error('One failed:', error);
  });

// If any fails, all fails
const failingPromises = [Promise.resolve(1), Promise.reject('Error!'), Promise.resolve(3)];

Promise.all(failingPromises)
  .then((results) => console.log(results))
  .catch((error) => console.error('Failed:', error)); // 'Failed: Error!'
```

### Promise.allSettled()

Wait for all promises to settle (resolve or reject).

```js live
const promises = [
  Promise.resolve('Success 1'),
  Promise.reject('Error!'),
  Promise.resolve('Success 2'),
];

Promise.allSettled(promises).then((results) => {
  console.log('All settled:', results);
  // [
  //   { status: 'fulfilled', value: 'Success 1' },
  //   { status: 'rejected', reason: 'Error!' },
  //   { status: 'fulfilled', value: 'Success 2' }
  // ]

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`Promise ${index} succeeded:`, result.value);
    } else {
      console.log(`Promise ${index} failed:`, result.reason);
    }
  });
});
```

### Promise.race()

Return first promise to settle.

```js live
const slow = new Promise((resolve) => setTimeout(() => resolve('Slow'), 2000));
const fast = new Promise((resolve) => setTimeout(() => resolve('Fast'), 500));

Promise.race([slow, fast]).then((result) => {
  console.log('Winner:', result); // 'Fast'
});

// Timeout pattern
function fetchWithTimeout(url, timeout) {
  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), timeout),
  );
  const fetchPromise = fetch(url);

  return Promise.race([fetchPromise, timeoutPromise]);
}
```

### Promise.any()

Return first promise to resolve (ignore rejections).

```js live
const promises = [
  Promise.reject('Error 1'),
  new Promise((resolve) => setTimeout(() => resolve('Success!'), 500)),
  Promise.reject('Error 2'),
];

Promise.any(promises)
  .then((result) => {
    console.log('First success:', result); // 'Success!'
  })
  .catch((error) => {
    console.error('All failed:', error);
  });
```

---

## 📚 Practical Examples

### Example 1: API Request

```js live
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve({ id, name: `User ${id}` });
      } else {
        reject(new Error('ID required'));
      }
    }, 500);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Post 1', userId },
        { id: 2, title: 'Post 2', userId },
      ]);
    }, 500);
  });
}

// Chain API calls
fetchUser(123)
  .then((user) => {
    console.log('User:', user);
    return fetchPosts(user.id);
  })
  .then((posts) => {
    console.log('Posts:', posts);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
```

### Example 2: Parallel Requests

```js live
function fetchUserData() {
  const userPromise = fetch('/api/user').then((r) => r.json());
  const postsPromise = fetch('/api/posts').then((r) => r.json());
  const commentsPromise = fetch('/api/comments').then((r) => r.json());

  return Promise.all([userPromise, postsPromise, commentsPromise]).then(
    ([user, posts, comments]) => ({
      user,
      posts,
      comments,
    }),
  );
}

// Usage
fetchUserData()
  .then((data) => {
    console.log('All data loaded:', data);
  })
  .catch((error) => {
    console.error('Failed to load data:', error);
  });
```

### Example 3: Retry Pattern

```js live
function fetchWithRetry(url, retries = 3) {
  return fetch(url).catch((error) => {
    if (retries > 0) {
      console.log(`Retrying... (${retries} attempts left)`);
      return fetchWithRetry(url, retries - 1);
    }
    throw error;
  });
}

// Usage
fetchWithRetry('/api/data', 3)
  .then((response) => response.json())
  .then((data) => console.log('Data:', data))
  .catch((error) => console.error('All retries failed:', error));
```

### Example 4: Promise Queue

```js live
class PromiseQueue {
  constructor() {
    this.queue = [];
    this.running = false;
  }

  add(promiseFunc) {
    return new Promise((resolve, reject) => {
      this.queue.push({ promiseFunc, resolve, reject });
      this.run();
    });
  }

  async run() {
    if (this.running || this.queue.length === 0) return;

    this.running = true;
    const { promiseFunc, resolve, reject } = this.queue.shift();

    try {
      const result = await promiseFunc();
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.running = false;
      this.run(); // Process next
    }
  }
}

// Usage
const queue = new PromiseQueue();

queue.add(() => fetchData(1)).then(console.log);
queue.add(() => fetchData(2)).then(console.log);
queue.add(() => fetchData(3)).then(console.log);
```

---

## 🎯 Best Practices

### 1. Always Handle Errors

```js
// ✅ Good
promise.then(handleSuccess).catch(handleError);

// ❌ Bad - unhandled rejection
promise.then(handleSuccess);
```

### 2. Return Promises in Chains

```js
// ✅ Good
promise
  .then((data) => processData(data)) // Returns promise
  .then((result) => saveResult(result));

// ❌ Bad - breaks chain
promise.then((data) => {
  processData(data); // Promise not returned
});
```

### 3. Use Promise.all for Parallel Operations

```js
// ✅ Good - parallel (faster)
Promise.all([fetch1(), fetch2(), fetch3()]);

// ❌ Bad - sequential (slower)
fetch1()
  .then(() => fetch2())
  .then(() => fetch3());
```

---

## 💡 Common Pitfalls

### Pitfall 1: Forgetting to Return

```js
// ❌ Wrong
getData()
  .then((data) => {
    processData(data); // Not returned!
  })
  .then((result) => {
    console.log(result); // undefined
  });

// ✅ Correct
getData()
  .then((data) => processData(data)) // Returned
  .then((result) => {
    console.log(result); // Has value
  });
```

### Pitfall 2: Nested Promises

```js
// ❌ Wrong - nesting
getData().then((data) => {
  getMoreData(data).then((moreData) => {
    // ...
  });
});

// ✅ Correct - chaining
getData()
  .then((data) => getMoreData(data))
  .then((moreData) => {
    // ...
  });
```

---

## 🔗 What's Next?

Learn modern async/await syntax!

👉 [Next: Async/Await »](./async-await.md)

---

## 📖 Additional Resources

- [MDN: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript.info: Promises](https://javascript.info/promise-basics)
- [Promises/A+ Specification](https://promisesaplus.com/)
