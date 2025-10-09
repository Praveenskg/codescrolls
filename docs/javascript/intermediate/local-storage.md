---
sidebar_position: 8
title: JavaScript Local Storage - Complete Guide
description: Master browser storage with localStorage and sessionStorage. Learn to store, retrieve, and manage data in the browser with practical examples.
keywords:
  [
    javascript localstorage,
    local storage,
    session storage,
    browser storage,
    web storage api,
    javascript storage,
    store data javascript,
  ]
tags:
  - JavaScript
  - Storage
  - Browser API
  - Intermediate
---

# Local Storage & Session Storage

**Web Storage API** provides mechanisms to store key-value pairs in the browser. Perfect for caching data, saving user preferences, and building offline-capable apps!

---

## 🎯 localStorage vs sessionStorage

### localStorage

- Data **persists** even after browser closes
- **Same origin** access (protocol + domain + port)
- ~5-10MB storage limit
- **No expiration**

### sessionStorage

- Data cleared when **tab closes**
- Separate for each **tab**
- Same storage limit as localStorage
- **Session-based**

---

## 📦 Basic Operations

### Set Item

```js
// localStorage
localStorage.setItem('username', 'Alice');
localStorage.setItem('theme', 'dark');

// sessionStorage
sessionStorage.setItem('tempData', 'value');
```

### Get Item

```js
const username = localStorage.getItem('username');
console.log(username); // 'Alice'

const theme = localStorage.getItem('theme');
console.log(theme); // 'dark'

// Returns null if key doesn't exist
const missing = localStorage.getItem('nonexistent');
console.log(missing); // null
```

### Remove Item

```js
localStorage.removeItem('username');
console.log(localStorage.getItem('username')); // null
```

### Clear All

```js
localStorage.clear(); // Remove all items
```

### Get Keys Count

```js
console.log(localStorage.length); // Number of items
```

### Iterate Keys

```js
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}
```

---

## 🗂️ Storing Complex Data

### Objects & Arrays

```js
// ❌ Wrong - stores "[object Object]"
const user = { name: 'Alice', age: 25 };
localStorage.setItem('user', user);

// ✅ Correct - use JSON
const user = { name: 'Alice', age: 25 };
localStorage.setItem('user', JSON.stringify(user));

// Retrieve
const storedUser = JSON.parse(localStorage.getItem('user'));
console.log(storedUser.name); // 'Alice'
```

### Arrays

```js
const todos = ['Buy milk', 'Walk dog', 'Code'];

// Save
localStorage.setItem('todos', JSON.stringify(todos));

// Load
const loadedTodos = JSON.parse(localStorage.getItem('todos'));
console.log(loadedTodos); // ['Buy milk', 'Walk dog', 'Code']
```

---

## 📚 Practical Examples

### Example 1: User Preferences

```js
class UserPreferences {
  constructor() {
    this.storageKey = 'userPrefs';
    this.defaults = {
      theme: 'light',
      fontSize: 16,
      language: 'en',
      notifications: true,
    };
  }

  load() {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      return { ...this.defaults, ...JSON.parse(stored) };
    }
    return this.defaults;
  }

  save(prefs) {
    localStorage.setItem(this.storageKey, JSON.stringify(prefs));
  }

  get(key) {
    const prefs = this.load();
    return prefs[key];
  }

  set(key, value) {
    const prefs = this.load();
    prefs[key] = value;
    this.save(prefs);
  }

  reset() {
    localStorage.removeItem(this.storageKey);
  }
}

// Usage
const prefs = new UserPreferences();
console.log(prefs.get('theme')); // 'light'
prefs.set('theme', 'dark');
console.log(prefs.get('theme')); // 'dark'
```

### Example 2: Shopping Cart

```js
class ShoppingCart {
  constructor() {
    this.storageKey = 'cart';
  }

  getItems() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  addItem(product) {
    const items = this.getItems();
    const existing = items.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      items.push({ ...product, quantity: 1 });
    }

    this.save(items);
    return items;
  }

  removeItem(productId) {
    const items = this.getItems();
    const filtered = items.filter((item) => item.id !== productId);
    this.save(filtered);
    return filtered;
  }

  updateQuantity(productId, quantity) {
    const items = this.getItems();
    const item = items.find((item) => item.id === productId);

    if (item) {
      if (quantity <= 0) {
        return this.removeItem(productId);
      }
      item.quantity = quantity;
      this.save(items);
    }

    return items;
  }

  getTotal() {
    const items = this.getItems();
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  clear() {
    localStorage.removeItem(this.storageKey);
  }

  save(items) {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }
}

// Usage
const cart = new ShoppingCart();
cart.addItem({ id: 1, name: 'Laptop', price: 999 });
cart.addItem({ id: 2, name: 'Mouse', price: 25 });
console.log('Total:', cart.getTotal()); // 1024
```

### Example 3: Form Auto-Save

```js
class FormAutoSave {
  constructor(formId, options = {}) {
    this.form = document.getElementById(formId);
    this.storageKey = `form_${formId}`;
    this.debounceDelay = options.debounceDelay || 300;

    this.setupAutoSave();
    this.loadSavedData();
  }

  setupAutoSave() {
    let timeoutId;

    this.form.addEventListener('input', () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        this.saveFormData();
      }, this.debounceDelay);
    });

    this.form.addEventListener('submit', () => {
      this.clearSavedData();
    });
  }

  saveFormData() {
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    console.log('Form auto-saved');
  }

  loadSavedData() {
    const saved = localStorage.getItem(this.storageKey);
    if (!saved) return;

    const data = JSON.parse(saved);

    for (const [name, value] of Object.entries(data)) {
      const input = this.form.elements[name];
      if (input) {
        if (input.type === 'checkbox') {
          input.checked = value === 'on';
        } else {
          input.value = value;
        }
      }
    }

    console.log('Form data restored');
  }

  clearSavedData() {
    localStorage.removeItem(this.storageKey);
  }
}

// Usage
new FormAutoSave('contactForm');
```

### Example 4: Cache with Expiration

```js
class CacheWithExpiration {
  set(key, value, ttl = 3600000) {
    // ttl in milliseconds (default 1 hour)
    const item = {
      value,
      expiry: Date.now() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  get(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;

    const item = JSON.parse(itemStr);

    // Check if expired
    if (Date.now() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }

    return item.value;
  }

  remove(key) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }

  // Clean up expired items
  cleanup() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      this.get(key); // Will remove if expired
    }
  }
}

// Usage
const cache = new CacheWithExpiration();

// Cache for 5 minutes
cache.set('apiData', { users: [] }, 5 * 60 * 1000);

// Later
const data = cache.get('apiData');
if (data) {
  console.log('Using cached data:', data);
} else {
  console.log('Cache expired or not found');
}
```

### Example 5: Recent Searches

```js
class RecentSearches {
  constructor(maxItems = 10) {
    this.storageKey = 'recentSearches';
    this.maxItems = maxItems;
  }

  add(searchTerm) {
    if (!searchTerm.trim()) return;

    const searches = this.getAll();

    // Remove if already exists
    const filtered = searches.filter((term) => term.toLowerCase() !== searchTerm.toLowerCase());

    // Add to beginning
    filtered.unshift(searchTerm);

    // Limit to maxItems
    const limited = filtered.slice(0, this.maxItems);

    localStorage.setItem(this.storageKey, JSON.stringify(limited));
  }

  getAll() {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }

  clear() {
    localStorage.removeItem(this.storageKey);
  }
}

// Usage
const searches = new RecentSearches(5);
searches.add('JavaScript');
searches.add('React');
searches.add('Node.js');
console.log(searches.getAll()); // ['Node.js', 'React', 'JavaScript']
```

---

## ⚠️ Error Handling

### Quota Exceeded

```js
function setItemSafely(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (error) {
    if (error.name === 'QuotaExceededError') {
      console.error('Storage quota exceeded!');
      // Handle: clear old data, show warning, etc.
    } else {
      console.error('Storage error:', error);
    }
    return false;
  }
}

// Usage
const success = setItemSafely('key', 'value');
if (!success) {
  alert('Unable to save data. Storage is full.');
}
```

### Private Browsing

```js
function isStorageAvailable() {
  try {
    const testKey = '__storage_test__';
    localStorage.setItem(testKey, 'test');
    localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
}

if (!isStorageAvailable()) {
  console.warn('localStorage is not available (private browsing?)');
  // Use alternative storage (memory, cookies, etc.)
}
```

---

## 🔔 Storage Events

Listen for changes in localStorage from other tabs/windows.

```js
window.addEventListener('storage', (event) => {
  console.log('Storage changed:');
  console.log('Key:', event.key);
  console.log('Old value:', event.oldValue);
  console.log('New value:', event.newValue);
  console.log('URL:', event.url);
  console.log('Storage area:', event.storageArea);
});

// Note: This event fires in OTHER tabs/windows, not the one making the change
```

### Sync Across Tabs

```js
class SyncedState {
  constructor(key, initialValue) {
    this.key = key;
    this.listeners = [];

    // Initialize
    if (localStorage.getItem(key) === null) {
      this.set(initialValue);
    }

    // Listen for changes from other tabs
    window.addEventListener('storage', (e) => {
      if (e.key === this.key) {
        const newValue = JSON.parse(e.newValue);
        this.notifyListeners(newValue);
      }
    });
  }

  get() {
    const stored = localStorage.getItem(this.key);
    return stored ? JSON.parse(stored) : null;
  }

  set(value) {
    localStorage.setItem(this.key, JSON.stringify(value));
    this.notifyListeners(value);
  }

  onChange(callback) {
    this.listeners.push(callback);
  }

  notifyListeners(value) {
    this.listeners.forEach((callback) => callback(value));
  }
}

// Usage
const theme = new SyncedState('theme', 'light');

theme.onChange((newTheme) => {
  console.log('Theme changed to:', newTheme);
  document.body.className = newTheme;
});

// Change theme - will update all tabs
document.querySelector('#themeToggle').addEventListener('click', () => {
  const current = theme.get();
  theme.set(current === 'light' ? 'dark' : 'light');
});
```

---

## 🎯 Best Practices

### 1. Always Use Try/Catch

```js
// ✅ Good
try {
  localStorage.setItem('key', 'value');
} catch (error) {
  console.error('Failed to save:', error);
}
```

### 2. Serialize Complex Data

```js
// ✅ Good
localStorage.setItem('user', JSON.stringify(user));

// ❌ Bad
localStorage.setItem('user', user);
```

### 3. Validate After Loading

```js
// ✅ Good
const stored = localStorage.getItem('config');
const config = stored ? JSON.parse(stored) : defaultConfig;

// Validate
if (!config.theme || !config.language) {
  config = defaultConfig;
}
```

### 4. Don't Store Sensitive Data

```js
// ❌ Bad - never store sensitive data
localStorage.setItem('password', userPassword);
localStorage.setItem('creditCard', cardNumber);
localStorage.setItem('apiKey', secretKey);

// ✅ Good - only store non-sensitive data
localStorage.setItem('theme', 'dark');
localStorage.setItem('language', 'en');
```

---

## 🔗 What's Next?

Dive into advanced JavaScript concepts!

👉 [Next: Closures (Advanced) »](../advanced/closures.md)

---

## 📖 Additional Resources

- [MDN: Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Can I Use: Web Storage](https://caniuse.com/namevalue-storage)
