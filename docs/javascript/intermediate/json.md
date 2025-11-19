---
sidebar_position: 7
title: JavaScript JSON - Complete Guide
description:
  Master JSON (JavaScript Object Notation) for data exchange. Learn JSON.parse,
  JSON.stringify, error handling, and practical data manipulation techniques.
keywords:
  [
    javascript json,
    json parse,
    json stringify,
    json methods,
    json data,
    parse json,
    stringify json,
    json javascript,
  ]
tags:
  - JavaScript
  - JSON
  - Data
  - Intermediate
---

# JSON (JavaScript Object Notation)

**JSON** is a lightweight data interchange format. It's easy for humans to read
and write, and easy for machines to parse and generate!

---

## 🎯 What is JSON?

JSON is a **text format** for storing and transporting data.

### JSON Syntax Rules

```json
{
  "name": "Alice",
  "age": 25,
  "isStudent": false,
  "courses": ["JavaScript", "React", "Node.js"],
  "address": {
    "city": "NYC",
    "zipCode": "10001"
  },
  "graduationDate": null
}
```

**Rules:**

- Data in **name/value pairs**
- Data separated by **commas**
- Curly braces hold **objects**
- Square brackets hold **arrays**
- Keys must be **strings** (double quotes)
- Values can be: string, number, object, array, boolean, null

---

## 📥 JSON.parse()

Convert JSON string to JavaScript object.

### Basic Parsing

```js
const jsonString = '{"name":"Alice","age":25}';
const obj = JSON.parse(jsonString);

console.log(obj.name); // 'Alice'
console.log(obj.age); // 25
console.log(typeof obj); // 'object'
```

### Parsing Arrays

```js
const jsonArray = '[1, 2, 3, 4, 5]';
const arr = JSON.parse(jsonArray);

console.log(arr); // [1, 2, 3, 4, 5]
console.log(arr[0]); // 1
```

### With Reviver Function

```js
const jsonString = '{"date":"2024-01-01T00:00:00.000Z","amount":100}';

const obj = JSON.parse(jsonString, (key, value) => {
  // Convert date strings to Date objects
  if (key === 'date') {
    return new Date(value);
  }
  return value;
});

console.log(obj.date instanceof Date); // true
console.log(obj.date.getFullYear()); // 2024
```

---

## 📤 JSON.stringify()

Convert JavaScript object to JSON string.

### Basic Stringification

```js
const obj = {
  name: 'Alice',
  age: 25,
  isStudent: false,
};

const jsonString = JSON.stringify(obj);
console.log(jsonString);
// '{"name":"Alice","age":25,"isStudent":false}'
```

### Pretty Print

```js
const obj = {
  name: 'Alice',
  age: 25,
  courses: ['JavaScript', 'React'],
};

// With indentation
const jsonString = JSON.stringify(obj, null, 2);
console.log(jsonString);
/*
{
  "name": "Alice",
  "age": 25,
  "courses": [
    "JavaScript",
    "React"
  ]
}
*/
```

### With Replacer Function

```js
const user = {
  name: 'Alice',
  password: 'secret123',
  email: 'alice@example.com',
  age: 25,
};

// Remove password from output
const jsonString = JSON.stringify(user, (key, value) => {
  if (key === 'password') {
    return undefined; // Exclude this property
  }
  return value;
});

console.log(jsonString);
// '{"name":"Alice","email":"alice@example.com","age":25}'
```

### With Replacer Array

```js
const user = {
  name: 'Alice',
  password: 'secret123',
  email: 'alice@example.com',
  age: 25,
};

// Only include specified properties
const jsonString = JSON.stringify(user, ['name', 'email']);
console.log(jsonString);
// '{"name":"Alice","email":"alice@example.com"}'
```

---

## ⚠️ Error Handling

### Parsing Errors

```js
function safeJSONParse(jsonString, fallback = null) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Failed to parse JSON:', error.message);
    return fallback;
  }
}

// Valid JSON
const obj1 = safeJSONParse('{"name":"Alice"}');
console.log(obj1); // { name: 'Alice' }

// Invalid JSON
const obj2 = safeJSONParse('{invalid json}', {});
console.log(obj2); // {}
```

### Stringify Errors

```js
const obj = {};
obj.circular = obj; // Circular reference

try {
  JSON.stringify(obj);
} catch (error) {
  console.error('Cannot stringify:', error.message);
  // Cannot stringify: Converting circular structure to JSON
}
```

---

## 🔄 Deep Clone

Use JSON for deep cloning simple objects.

```js
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = {
  name: 'Alice',
  scores: [90, 85, 95],
  address: {
    city: 'NYC',
  },
};

const cloned = deepClone(original);

// Modify clone
cloned.name = 'Bob';
cloned.scores.push(100);
cloned.address.city = 'LA';

console.log(original.name); // 'Alice' (unchanged)
console.log(original.scores); // [90, 85, 95] (unchanged)
console.log(original.address.city); // 'NYC' (unchanged)
```

**⚠️ Limitations:**

- Functions are lost
- Dates become strings
- undefined becomes null
- Symbol keys are lost
- Cannot handle circular references

---

## 📚 Practical Examples

### Example 1: Local Storage

```js
// Save to localStorage
function saveUser(user) {
  const jsonString = JSON.stringify(user);
  localStorage.setItem('user', jsonString);
}

// Load from localStorage
function loadUser() {
  const jsonString = localStorage.getItem('user');
  if (jsonString) {
    return JSON.parse(jsonString);
  }
  return null;
}

// Usage
saveUser({
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
});

const user = loadUser();
console.log(user); // { id: 1, name: 'Alice', email: 'alice@example.com' }
```

### Example 2: API Response Handling

```js
async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonString = await response.text(); // Get as text

    console.log('Raw JSON:', jsonString);

    const users = JSON.parse(jsonString); // Parse manually
    return users;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

// Or simpler with .json()
async function fetchUsersSimple() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json(); // Parses automatically
}
```

### Example 3: Configuration File

```js
class Config {
  constructor() {
    this.settings = this.load();
  }

  load() {
    const jsonString = localStorage.getItem('config');
    if (jsonString) {
      return JSON.parse(jsonString);
    }

    // Default settings
    return {
      theme: 'light',
      language: 'en',
      notifications: true,
    };
  }

  save() {
    const jsonString = JSON.stringify(this.settings, null, 2);
    localStorage.setItem('config', jsonString);
  }

  get(key) {
    return this.settings[key];
  }

  set(key, value) {
    this.settings[key] = value;
    this.save();
  }
}

// Usage
const config = new Config();
console.log(config.get('theme')); // 'light'
config.set('theme', 'dark');
```

### Example 4: Export/Import Data

```js
class DataManager {
  exportData(data, filename) {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'data.json';
    link.click();

    URL.revokeObjectURL(url);
  }

  importData(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = e => {
        try {
          const data = JSON.parse(e.target.result);
          resolve(data);
        } catch (error) {
          reject(new Error('Invalid JSON file'));
        }
      };

      reader.onerror = () => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  }
}

// Usage
const manager = new DataManager();

// Export
const data = { users: [{ name: 'Alice' }, { name: 'Bob' }] };
manager.exportData(data, 'users.json');

// Import
document.querySelector('#fileInput').addEventListener('change', async e => {
  const file = e.target.files[0];
  try {
    const importedData = await manager.importData(file);
    console.log('Imported:', importedData);
  } catch (error) {
    console.error('Import failed:', error);
  }
});
```

### Example 5: Form to JSON

```js
function formToJSON(form) {
  const formData = new FormData(form);
  const obj = {};

  for (const [key, value] of formData.entries()) {
    // Handle multiple values (checkboxes, multi-select)
    if (obj[key]) {
      if (!Array.isArray(obj[key])) {
        obj[key] = [obj[key]];
      }
      obj[key].push(value);
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

// Usage
document.querySelector('#myForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = formToJSON(e.target);
  const jsonString = JSON.stringify(data, null, 2);
  console.log(jsonString);

  // Send to API
  fetch('/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: jsonString,
  });
});
```

### Example 6: JSON Schema Validation

```js
function validateUser(user) {
  const schema = {
    name: { type: 'string', required: true },
    email: { type: 'string', required: true, pattern: /@/ },
    age: { type: 'number', required: false, min: 0, max: 150 },
  };

  const errors = [];

  for (const [key, rules] of Object.entries(schema)) {
    const value = user[key];

    if (rules.required && value === undefined) {
      errors.push(`${key} is required`);
      continue;
    }

    if (value !== undefined) {
      if (rules.type && typeof value !== rules.type) {
        errors.push(`${key} must be a ${rules.type}`);
      }

      if (rules.pattern && !rules.pattern.test(value)) {
        errors.push(`${key} format is invalid`);
      }

      if (rules.min !== undefined && value < rules.min) {
        errors.push(`${key} must be >= ${rules.min}`);
      }

      if (rules.max !== undefined && value > rules.max) {
        errors.push(`${key} must be <= ${rules.max}`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// Usage
const user = { name: 'Alice', email: 'alice@example.com', age: 25 };
const result = validateUser(user);
console.log(result); // { valid: true, errors: [] }
```

---

## 🎯 Best Practices

### 1. Always Handle Parse Errors

```js
// ✅ Good
try {
  const data = JSON.parse(jsonString);
} catch (error) {
  console.error('Parse error:', error);
}

// ❌ Bad - can crash app
const data = JSON.parse(jsonString);
```

### 2. Validate Data After Parsing

```js
// ✅ Good
const data = JSON.parse(jsonString);
if (data && typeof data.name === 'string') {
  // Use data
}
```

### 3. Use Proper Content-Type

```js
// ✅ Good
fetch('/api/data', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

---

## 🔗 What's Next?

Learn about browser storage with Local Storage!

👉 [Next: Local Storage »](./local-storage.md)

---

## 📖 Additional Resources

- [MDN: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [JSON.org](https://www.json.org/)
- [JSONLint](https://jsonlint.com/) - Validate JSON
