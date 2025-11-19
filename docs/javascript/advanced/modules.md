---
sidebar_position: 4
title: JavaScript Modules (ES6) - Complete Guide
description:
  Master JavaScript ES6 modules with import/export, named exports, default
  exports, dynamic imports, and module patterns. Learn modern JavaScript module
  system.
keywords:
  [
    javascript modules,
    es6 modules,
    import export,
    named exports,
    default export,
    dynamic import,
    module pattern,
    javascript imports,
  ]
tags:
  - JavaScript
  - Modules
  - ES6
  - Advanced
---

# JavaScript Modules

Modules let you **split code into separate files** and organize your
application. They enable better code reusability, maintainability, and
encapsulation!

---

## 🎯 Why Modules?

### Before Modules

```html
<!-- ❌ Old way - script tags -->
<script src="utils.js"></script>
<script src="helpers.js"></script>
<script src="main.js"></script>
<!-- Global namespace pollution, dependency hell -->
```

### With Modules

```html
<!-- ✅ Modern way -->
<script type="module" src="main.js"></script>
<!-- Clean, organized, explicit dependencies -->
```

---

## 📦 Export

### Named Exports

```js
// math.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export class Calculator {
  multiply(a, b) {
    return a * b;
  }
}
```

### Export List

```js
// utils.js
const name = 'MyApp';
const version = '1.0.0';

function log(message) {
  console.log(`[${name}] ${message}`);
}

function error(message) {
  console.error(`[${name}] ERROR: ${message}`);
}

// Export at bottom
export { name, version, log, error };
```

### Renaming Exports

```js
// helpers.js
function validateEmail(email) {
  return email.includes('@');
}

function validatePhone(phone) {
  return /^\d{10}$/.test(phone);
}

// Rename on export
export { validateEmail as checkEmail, validatePhone as checkPhone };
```

---

## 📥 Import

### Named Imports

```js
// main.js
import { PI, add, subtract } from './math.js';

console.log(PI); // 3.14159
console.log(add(5, 3)); // 8
console.log(subtract(10, 4)); // 6
```

### Import All

```js
// main.js
import * as MathUtils from './math.js';

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(5, 3)); // 8
```

### Renaming Imports

```js
// main.js
import { add as sum, subtract as diff } from './math.js';

console.log(sum(5, 3)); // 8
console.log(diff(10, 4)); // 6
```

---

## 🎁 Default Exports

Only one default export per module.

### Default Export

```js
// User.js
export default class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}!`;
  }
}
```

### Importing Default

```js
// main.js
import User from './User.js';

const user = new User('Alice');
console.log(user.greet());
```

### Default with Named Exports

```js
// api.js
export default function fetchData(url) {
  return fetch(url).then(r => r.json());
}

export function post(url, data) {
  return fetch(url, { method: 'POST', body: JSON.stringify(data) });
}

export const BASE_URL = 'https://api.example.com';
```

```js
// main.js
import fetchData, { post, BASE_URL } from './api.js';

fetchData(`${BASE_URL}/users`).then(console.log);
```

---

## 🔄 Re-exporting

Aggregate exports from multiple modules.

### Basic Re-export

```js
// validators/index.js
export { validateEmail, validatePhone } from './email.js';
export { validatePassword } from './password.js';
export { validateAge } from './age.js';
```

### Re-export All

```js
// utils/index.js
export * from './strings.js';
export * from './numbers.js';
export * from './arrays.js';
```

### Re-export with Rename

```js
// components/index.js
export { Button as Btn } from './Button.js';
export { Input as TextField } from './Input.js';
export { default as Card } from './Card.js';
```

---

## ⚡ Dynamic Imports

Load modules on demand (code splitting).

### Basic Dynamic Import

```js
// Lazy load module
async function loadModule() {
  const module = await import('./heavy-module.js');
  module.doSomething();
}

// Or with .then()
import('./module.js').then(module => {
  module.init();
});
```

### Conditional Loading

```js
async function loadFeature(featureName) {
  if (featureName === 'chart') {
    const { createChart } = await import('./chart.js');
    return createChart();
  } else if (featureName === 'map') {
    const { createMap } = await import('./map.js');
    return createMap();
  }
}

// Usage
document.getElementById('loadChart').addEventListener('click', async () => {
  const chart = await loadFeature('chart');
  chart.render();
});
```

### Route-based Loading

```js
async function router(path) {
  let page;

  switch (path) {
    case '/home':
      page = await import('./pages/Home.js');
      break;
    case '/about':
      page = await import('./pages/About.js');
      break;
    case '/contact':
      page = await import('./pages/Contact.js');
      break;
    default:
      page = await import('./pages/NotFound.js');
  }

  page.default.render();
}

// Usage
router(window.location.pathname);
```

---

## 📚 Practical Examples

### Example 1: Utility Module

```js
// utils/logger.js
const levels = {
  INFO: 'INFO',
  WARN: 'WARN',
  ERROR: 'ERROR',
};

function log(level, message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`);
}

export function info(message) {
  log(levels.INFO, message);
}

export function warn(message) {
  log(levels.WARN, message);
}

export function error(message) {
  log(levels.ERROR, message);
}

export { levels };
```

```js
// main.js
import { info, warn, error } from './utils/logger.js';

info('Application started');
warn('This is a warning');
error('An error occurred');
```

### Example 2: API Service

```js
// services/api.js
const BASE_URL = 'https://api.example.com';

async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export const api = {
  get(endpoint) {
    return request(endpoint);
  },

  post(endpoint, data) {
    return request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  put(endpoint, data) {
    return request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },

  delete(endpoint) {
    return request(endpoint, {
      method: 'DELETE',
    });
  },
};
```

```js
// main.js
import { api } from './services/api.js';

// Get users
const users = await api.get('/users');

// Create user
const newUser = await api.post('/users', {
  name: 'Alice',
  email: 'alice@example.com',
});

// Update user
await api.put(`/users/${newUser.id}`, {
  name: 'Alice Smith',
});

// Delete user
await api.delete(`/users/${newUser.id}`);
```

### Example 3: Store Pattern

```js
// store/userStore.js
let currentUser = null;
const listeners = [];

export function setUser(user) {
  currentUser = user;
  notifyListeners();
}

export function getUser() {
  return currentUser;
}

export function clearUser() {
  currentUser = null;
  notifyListeners();
}

export function subscribe(listener) {
  listeners.push(listener);
  return () => {
    const index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  };
}

function notifyListeners() {
  listeners.forEach(listener => listener(currentUser));
}
```

```js
// main.js
import { setUser, getUser, subscribe } from './store/userStore.js';

// Subscribe to changes
const unsubscribe = subscribe(user => {
  console.log('User changed:', user);
});

// Update user
setUser({ id: 1, name: 'Alice' });

// Get current user
console.log('Current user:', getUser());

// Cleanup
unsubscribe();
```

### Example 4: Config Module

```js
// config/index.js
const development = {
  apiUrl: 'http://localhost:3000',
  debug: true,
  logLevel: 'verbose',
};

const production = {
  apiUrl: 'https://api.production.com',
  debug: false,
  logLevel: 'error',
};

const config = process.env.NODE_ENV === 'production' ? production : development;

export default config;

export const { apiUrl, debug, logLevel } = config;
```

```js
// main.js
import config, { apiUrl, debug } from './config/index.js';

console.log('API URL:', apiUrl);
console.log('Debug mode:', debug);
console.log('Full config:', config);
```

---

## 🎯 Best Practices

### 1. One Module, One Responsibility

```js
// ✅ Good - focused modules
// auth.js - only auth logic
// api.js - only API calls
// utils.js - only utilities

// ❌ Bad - everything in one file
// app.js - 1000 lines of mixed code
```

### 2. Use Named Exports for Utilities

```js
// ✅ Good - clear what's exported
export function formatDate() {
  /* ... */
}
export function parseDate() {
  /* ... */
}

// ❌ Bad - unclear default
export default {
  formatDate() {
    /* ... */
  },
  parseDate() {
    /* ... */
  },
};
```

### 3. Use Default Export for Main Class/Function

```js
// ✅ Good
// User.js
export default class User {
  /* ... */
}

// ❌ Bad
// User.js
export class User {
  /* ... */
}
```

### 4. Create Index Files for Aggregation

```js
// components/index.js
export { Button } from './Button.js';
export { Input } from './Input.js';
export { Card } from './Card.js';

// Usage
import { Button, Input, Card } from './components/index.js';
```

---

## 💡 Module Patterns

### Singleton Pattern

```js
// database.js
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.connection = null;
    Database.instance = this;
  }

  connect() {
    this.connection = 'connected';
  }
}

export default new Database(); // Single instance
```

### Factory Pattern

```js
// userFactory.js
export function createUser(type, data) {
  switch (type) {
    case 'admin':
      return new Admin(data);
    case 'member':
      return new Member(data);
    default:
      return new Guest(data);
  }
}
```

---

## 🔗 What's Next?

Learn about Error Handling!

👉 [Next: Error Handling »](./error-handling.md)

---

## 📖 Additional Resources

- [MDN: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [JavaScript.info: Modules](https://javascript.info/modules-intro)
- [ES6 Modules](https://exploringjs.com/es6/ch_modules.html)
