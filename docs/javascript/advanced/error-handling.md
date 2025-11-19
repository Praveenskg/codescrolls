---
sidebar_position: 5
title: JavaScript Error Handling - Complete Guide
description:
  Master error handling in JavaScript with try/catch, custom errors, error
  boundaries, async error handling, and debugging techniques. Learn to build
  robust applications.
keywords:
  [
    javascript error handling,
    try catch javascript,
    custom errors,
    error types,
    throw error,
    finally block,
    async error handling,
    debugging javascript,
  ]
tags:
  - JavaScript
  - Error Handling
  - Debugging
  - Advanced
---

# JavaScript Error Handling

Proper error handling makes your applications **robust, user-friendly, and
maintainable**. Learn to handle errors gracefully!

---

## 🎯 Why Error Handling?

```js
// ❌ Without error handling - app crashes
function divide(a, b) {
  return a / b; // b = 0 causes issues
}

// ✅ With error handling - graceful failure
function divideSafe(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

try {
  const result = divideSafe(10, 0);
  console.log(result);
} catch (error) {
  console.error('Error:', error.message);
  // Show user-friendly message
}
```

---

## 🚨 Try/Catch/Finally

### Basic Try/Catch

```js live
try {
  // Code that might throw error
  const result = riskyOperation();
  console.log('Success:', result);
} catch (error) {
  // Handle error
  console.error('Error occurred:', error.message);
}
```

### With Finally

```js live
function loadData() {
  let isLoading = true;

  try {
    const data = fetchData();
    processData(data);
    return data;
  } catch (error) {
    console.error('Failed to load:', error);
    return null;
  } finally {
    // Always runs (cleanup)
    isLoading = false;
    console.log('Cleanup complete');
  }
}
```

### Nested Try/Catch

```js live
try {
  const user = fetchUser();

  try {
    const posts = fetchPosts(user.id);
    displayPosts(posts);
  } catch (error) {
    console.error('Failed to load posts:', error);
    displayEmptyState();
  }
} catch (error) {
  console.error('Failed to load user:', error);
  redirectToLogin();
}
```

---

## 💥 Throwing Errors

### throw Statement

```js live
function validateAge(age) {
  if (typeof age !== 'number') {
    throw new TypeError('Age must be a number');
  }

  if (age < 0) {
    throw new RangeError('Age cannot be negative');
  }

  if (age < 18) {
    throw new Error('Must be 18 or older');
  }

  return true;
}

try {
  validateAge(15);
} catch (error) {
  console.error(error.name + ':', error.message);
}
```

### Rethrowing Errors

```js live
function processData(data) {
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error('Parse error:', error);
    throw error; // Re-throw for caller to handle
  }
}

try {
  const result = processData('invalid json');
} catch (error) {
  console.error('Failed to process:', error.message);
}
```

---

## 🎭 Error Types

### Built-in Error Types

```js live
// Error - generic error
throw new Error('Something went wrong');

// TypeError - wrong type
throw new TypeError('Expected string, got number');

// RangeError - value out of range
throw new RangeError('Index out of bounds');

// ReferenceError - invalid reference
throw new ReferenceError('Variable not defined');

// SyntaxError - syntax error
throw new SyntaxError('Invalid syntax');

// URIError - URI handling error
throw new URIError('Malformed URI');
```

### Custom Error Classes

```js live
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthError';
  }
}

// Usage
function validateEmail(email) {
  if (!email.includes('@')) {
    throw new ValidationError('Invalid email format', 'email');
  }
  return true;
}

try {
  validateEmail('invalid');
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Validation failed for ${error.field}: ${error.message}`);
  }
}
```

---

## 🔍 Error Detection Patterns

### Type Checking

```js live
function processValue(value) {
  if (typeof value !== 'string') {
    throw new TypeError(`Expected string, got ${typeof value}`);
  }

  if (value.length === 0) {
    throw new Error('Value cannot be empty');
  }

  return value.toUpperCase();
}

try {
  console.log(processValue('hello')); // HELLO
  console.log(processValue(123)); // Error
} catch (error) {
  console.error(error.message);
}
```

### Null/Undefined Checks

```js live
function getUserName(user) {
  if (user === null || user === undefined) {
    throw new Error('User is required');
  }

  if (!user.name) {
    throw new Error('User name is required');
  }

  return user.name;
}

try {
  console.log(getUserName({ name: 'Alice' })); // Alice
  console.log(getUserName(null)); // Error
} catch (error) {
  console.error(error.message);
}
```

---

## ⚡ Async Error Handling

### Async/Await

```js live
async function fetchUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error; // Re-throw if needed
  }
}

// Usage
async function loadUser() {
  try {
    const user = await fetchUser(123);
    console.log('User loaded:', user);
  } catch (error) {
    showErrorMessage('Failed to load user');
  }
}
```

### Promise .catch()

```js live
fetchUser(123)
  .then(user => {
    console.log('User:', user);
    return fetchPosts(user.id);
  })
  .then(posts => {
    console.log('Posts:', posts);
  })
  .catch(error => {
    // Catches all errors in chain
    console.error('Error in chain:', error);
  })
  .finally(() => {
    console.log('Cleanup');
  });
```

### Promise.allSettled

```js live
async function fetchAllData() {
  const results = await Promise.allSettled([
    fetchUser(1),
    fetchUser(2),
    fetchUser(3), // May fail
  ]);

  const successful = results
    .filter(r => r.status === 'fulfilled')
    .map(r => r.value);

  const failed = results
    .filter(r => r.status === 'rejected')
    .map(r => r.reason);

  console.log('Successful:', successful.length);
  console.log('Failed:', failed.length);

  return successful;
}
```

---

## 📚 Practical Examples

### Example 1: Form Validation

```js live
class FormValidator {
  static validate(data, rules) {
    const errors = {};

    for (const [field, fieldRules] of Object.entries(rules)) {
      const value = data[field];

      if (fieldRules.required && !value) {
        errors[field] = `${field} is required`;
        continue;
      }

      if (fieldRules.minLength && value.length < fieldRules.minLength) {
        errors[field] =
          `${field} must be at least ${fieldRules.minLength} characters`;
      }

      if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
        errors[field] = fieldRules.message || `${field} is invalid`;
      }
    }

    if (Object.keys(errors).length > 0) {
      throw new ValidationError('Validation failed', errors);
    }

    return true;
  }
}

class ValidationError extends Error {
  constructor(message, errors) {
    super(message);
    this.name = 'ValidationError';
    this.errors = errors;
  }
}

// Usage
try {
  FormValidator.validate(
    { email: 'invalid', password: '123' },
    {
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email format',
      },
      password: {
        required: true,
        minLength: 8,
      },
    },
  );
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Validation errors:', error.errors);
  }
}
```

### Example 2: API Error Handler

```js live
class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

async function apiRequest(endpoint, options = {}) {
  try {
    const response = await fetch(endpoint, options);

    // Handle different status codes
    if (response.status === 401) {
      throw new ApiError('Unauthorized', 401);
    }

    if (response.status === 404) {
      throw new ApiError('Resource not found', 404);
    }

    if (response.status >= 500) {
      throw new ApiError('Server error', response.status);
    }

    if (!response.ok) {
      const error = await response.json();
      throw new ApiError(error.message, response.status, error);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    // Network error
    throw new ApiError('Network error', 0, error);
  }
}

// Usage with error handling
async function loadData() {
  try {
    const data = await apiRequest('/api/data');
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      switch (error.status) {
        case 401:
          redirectToLogin();
          break;
        case 404:
          show404Page();
          break;
        case 0:
          showNetworkError();
          break;
        default:
          showGenericError();
      }
    }
    throw error;
  }
}
```

### Example 3: Retry Pattern with Backoff

```js live
async function fetchWithRetry(
  url,
  options = {},
  maxRetries = 3,
  backoff = 1000,
) {
  let lastError;

  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return await response.json();
      }

      // Don't retry on client errors (4xx)
      if (response.status >= 400 && response.status < 500) {
        throw new Error(`Client error: ${response.status}`);
      }

      throw new Error(`HTTP error: ${response.status}`);
    } catch (error) {
      lastError = error;
      console.log(`Attempt ${i + 1} failed: ${error.message}`);

      if (i < maxRetries - 1) {
        const delay = backoff * Math.pow(2, i); // Exponential backoff
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  throw new Error(`Failed after ${maxRetries} attempts: ${lastError.message}`);
}

// Usage
fetchWithRetry('/api/data')
  .then(data => console.log('Success:', data))
  .catch(error => console.error('Failed:', error.message));
```

### Example 4: Global Error Handler

```js live
class ErrorHandler {
  static handlers = [];

  static register(handler) {
    this.handlers.push(handler);
  }

  static handle(error, context = {}) {
    console.error('Error occurred:', error);

    // Log to service
    this.logError(error, context);

    // Run custom handlers
    this.handlers.forEach(handler => {
      try {
        handler(error, context);
      } catch (handlerError) {
        console.error('Error in error handler:', handlerError);
      }
    });

    // Show user message
    this.showUserMessage(error);
  }

  static logError(error, context) {
    const logData = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context,
      userAgent: navigator.userAgent,
    };

    // Send to logging service
    console.log('Logging error:', logData);
  }

  static showUserMessage(error) {
    let message = 'An error occurred';

    if (error instanceof ValidationError) {
      message = 'Please check your input';
    } else if (error instanceof NetworkError) {
      message = 'Network connection failed';
    } else if (error instanceof AuthError) {
      message = 'Authentication required';
    }

    alert(message);
  }
}

// Register custom handler
ErrorHandler.register(error => {
  if (error instanceof NetworkError) {
    // Show offline indicator
    document.body.classList.add('offline');
  }
});

// Usage
try {
  await riskyOperation();
} catch (error) {
  ErrorHandler.handle(error, { action: 'riskyOperation' });
}

// Global handlers
window.addEventListener('error', event => {
  ErrorHandler.handle(event.error, { type: 'global' });
});

window.addEventListener('unhandledrejection', event => {
  ErrorHandler.handle(event.reason, { type: 'unhandledPromise' });
});
```

---

## 🎯 Best Practices

### 1. Always Provide Context

```js
// ✅ Good - descriptive message
throw new Error(`Failed to load user ${userId}: ${error.message}`);

// ❌ Bad - no context
throw new Error('Error');
```

### 2. Use Specific Error Types

```js
// ✅ Good
throw new ValidationError('Invalid email', 'email');

// ❌ Bad
throw new Error('Invalid email');
```

### 3. Don't Catch and Ignore

```js
// ✅ Good
catch (error) {
  console.error('Error:', error);
  // Handle appropriately
}

// ❌ Bad - silent failure
catch (error) {} // Empty!
```

### 4. Clean Up in Finally

```js
try {
  openConnection();
  doWork();
} catch (error) {
  handleError(error);
} finally {
  closeConnection(); // Always cleanup
}
```

---

## 🔗 What's Next?

Continue learning advanced JavaScript patterns!

👉 [Back to JavaScript Docs](../index.md)

---

## 📖 Additional Resources

- [MDN: Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [MDN: Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [JavaScript.info: Error Handling](https://javascript.info/try-catch)
