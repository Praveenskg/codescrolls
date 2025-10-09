---
sidebar_position: 5
title: JavaScript APIs & Fetch - Complete Guide
description: Master the Fetch API for making HTTP requests. Learn GET, POST, PUT, DELETE, error handling, headers, and async data fetching in JavaScript.
keywords:
  [
    javascript fetch,
    fetch api,
    http requests,
    rest api javascript,
    async fetch,
    api calls,
    javascript ajax,
    fetch post,
  ]
tags:
  - JavaScript
  - Fetch API
  - HTTP
  - Intermediate
---

# APIs & Fetch

The **Fetch API** provides a modern way to make HTTP requests. Learn to fetch data, handle responses, and build connected applications!

---

## 🎯 What is Fetch?

Fetch is a **promise-based** API for making network requests. It replaces the old `XMLHttpRequest`.

```js
// Simple GET request
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

---

## 📥 GET Requests

### Basic GET

```js
async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users = await response.json();
    console.log('Users:', users);
    return users;
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
}

getUsers();
```

### With Query Parameters

```js
async function searchPosts(query, limit = 10) {
  const params = new URLSearchParams({
    q: query,
    _limit: limit,
  });

  const url = `https://api.example.com/posts?${params}`;

  const response = await fetch(url);
  const posts = await response.json();
  return posts;
}

// Usage
searchPosts('javascript', 5);
```

---

## 📤 POST Requests

### Creating Data

```js
async function createUser(userData) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const newUser = await response.json();
    console.log('Created user:', newUser);
    return newUser;
  } catch (error) {
    console.error('Failed to create user:', error);
    throw error;
  }
}

// Usage
createUser({
  name: 'Alice',
  email: 'alice@example.com',
  role: 'admin',
});
```

### Form Data

```js
async function uploadFile(file) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('description', 'My upload');

  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData, // Don't set Content-Type! Browser sets it automatically
  });

  return await response.json();
}

// Usage
const fileInput = document.querySelector('#fileInput');
fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  uploadFile(file);
});
```

---

## ✏️ PUT & PATCH Requests

### Update (PUT - Replace entire resource)

```js
async function updateUser(userId, userData) {
  const response = await fetch(`https://api.example.com/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  return await response.json();
}

// Usage - replaces entire user
updateUser(1, {
  name: 'Alice Updated',
  email: 'alice.updated@example.com',
});
```

### Partial Update (PATCH - Update specific fields)

```js
async function patchUser(userId, updates) {
  const response = await fetch(`https://api.example.com/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates),
  });

  return await response.json();
}

// Usage - only updates email
patchUser(1, {
  email: 'newemail@example.com',
});
```

---

## 🗑️ DELETE Requests

```js
async function deleteUser(userId) {
  try {
    const response = await fetch(`https://api.example.com/users/${userId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete user: ${response.status}`);
    }

    console.log('User deleted successfully');
    return true;
  } catch (error) {
    console.error('Delete failed:', error);
    return false;
  }
}

// Usage
deleteUser(1);
```

---

## 🎫 Headers

### Setting Headers

```js
fetch('/api/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN_HERE',
    'X-Custom-Header': 'value',
  },
});
```

### Reading Response Headers

```js
async function checkHeaders() {
  const response = await fetch('/api/data');

  // Get specific header
  console.log('Content-Type:', response.headers.get('content-type'));

  // Iterate all headers
  for (const [key, value] of response.headers) {
    console.log(`${key}: ${value}`);
  }
}
```

---

## ⚠️ Error Handling

### Comprehensive Error Handling

```js
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);

    // Check if response is OK (status 200-299)
    if (!response.ok) {
      // Handle different status codes
      switch (response.status) {
        case 400:
          throw new Error('Bad Request');
        case 401:
          throw new Error('Unauthorized - Please login');
        case 404:
          throw new Error('Resource not found');
        case 500:
          throw new Error('Server error');
        default:
          throw new Error(`HTTP error! status: ${response.status}`);
      }
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    // Network error or other exception
    if (error.name === 'TypeError') {
      console.error('Network error:', error);
      return { success: false, error: 'Network connection failed' };
    }

    console.error('Fetch error:', error);
    return { success: false, error: error.message };
  }
}

// Usage
const result = await fetchWithErrorHandling('/api/data');
if (result.success) {
  console.log('Data:', result.data);
} else {
  console.error('Error:', result.error);
}
```

---

## ⏱️ Timeouts & Abort

### Timeout with AbortController

```js
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return await response.json();
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timeout');
    }
    throw error;
  }
}

// Usage
fetchWithTimeout('/api/data', 3000)
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));
```

### Manual Abort

```js
const controller = new AbortController();

// Start request
fetch('/api/data', {
  signal: controller.signal,
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === 'AbortError') {
      console.log('Request was aborted');
    }
  });

// Cancel request (e.g., when user navigates away)
document.querySelector('#cancelBtn').addEventListener('click', () => {
  controller.abort();
});
```

---

## 📚 Practical Examples

### Example 1: Complete CRUD API Client

```js
class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.token = null;
  }

  setToken(token) {
    this.token = token;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // GET
  async get(endpoint) {
    return this.request(endpoint);
  }

  // POST
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // PUT
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // PATCH
  async patch(endpoint, data) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  // DELETE
  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  }
}

// Usage
const api = new ApiClient('https://api.example.com');
api.setToken('your-auth-token');

// Get users
const users = await api.get('/users');

// Create user
const newUser = await api.post('/users', {
  name: 'Alice',
  email: 'alice@example.com',
});

// Update user
await api.put(`/users/${newUser.id}`, {
  name: 'Alice Updated',
});

// Delete user
await api.delete(`/users/${newUser.id}`);
```

### Example 2: Data Loading with UI

```js
async function loadPosts() {
  const container = document.querySelector('#posts');
  const loader = document.querySelector('#loader');
  const errorDiv = document.querySelector('#error');

  try {
    // Show loader
    loader.style.display = 'block';
    errorDiv.style.display = 'none';

    // Fetch data
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

    if (!response.ok) {
      throw new Error('Failed to load posts');
    }

    const posts = await response.json();

    // Clear container
    container.innerHTML = '';

    // Render posts
    posts.forEach((post) => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      container.appendChild(article);
    });
  } catch (error) {
    errorDiv.textContent = error.message;
    errorDiv.style.display = 'block';
  } finally {
    loader.style.display = 'none';
  }
}

// Load on page load
window.addEventListener('DOMContentLoaded', loadPosts);
```

### Example 3: Search with Debounce

```js
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

async function searchUsers(query) {
  if (!query) {
    displayResults([]);
    return;
  }

  try {
    const response = await fetch(
      `https://api.example.com/users?search=${encodeURIComponent(query)}`,
    );
    const users = await response.json();
    displayResults(users);
  } catch (error) {
    console.error('Search failed:', error);
    displayResults([]);
  }
}

function displayResults(users) {
  const results = document.querySelector('#results');
  results.innerHTML = users.map((user) => `<div class="user">${user.name}</div>`).join('');
}

// Setup search input
const searchInput = document.querySelector('#search');
const debouncedSearch = debounce(searchUsers, 300);

searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
```

### Example 4: Parallel Requests

```js
async function loadDashboardData() {
  try {
    // Fetch multiple endpoints in parallel
    const [users, posts, stats] = await Promise.all([
      fetch('/api/users').then((r) => r.json()),
      fetch('/api/posts').then((r) => r.json()),
      fetch('/api/stats').then((r) => r.json()),
    ]);

    return {
      users,
      posts,
      stats,
    };
  } catch (error) {
    console.error('Failed to load dashboard:', error);
    throw error;
  }
}

// Usage
loadDashboardData().then((data) => {
  console.log('Dashboard data:', data);
  renderDashboard(data);
});
```

### Example 5: Infinite Scroll

```js
class InfiniteScroll {
  constructor() {
    this.page = 1;
    this.loading = false;
    this.hasMore = true;
    this.container = document.querySelector('#posts');

    this.setupScrollListener();
    this.loadMore();
  }

  setupScrollListener() {
    window.addEventListener('scroll', () => {
      if (this.loading || !this.hasMore) return;

      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      // Load more when 200px from bottom
      if (scrollTop + clientHeight >= scrollHeight - 200) {
        this.loadMore();
      }
    });
  }

  async loadMore() {
    this.loading = true;

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=10`,
      );

      const posts = await response.json();

      if (posts.length === 0) {
        this.hasMore = false;
        return;
      }

      this.renderPosts(posts);
      this.page++;
    } catch (error) {
      console.error('Failed to load posts:', error);
    } finally {
      this.loading = false;
    }
  }

  renderPosts(posts) {
    posts.forEach((post) => {
      const article = document.createElement('article');
      article.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      this.container.appendChild(article);
    });
  }
}

// Initialize
new InfiniteScroll();
```

---

## 🎯 Best Practices

### 1. Always Handle Errors

```js
// ✅ Good
fetch('/api/data')
  .then((response) => {
    if (!response.ok) throw new Error('Failed');
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

### 2. Use Async/Await

```js
// ✅ More readable
async function getData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

### 3. Set Appropriate Timeouts

```js
// ✅ Don't let requests hang forever
const controller = new AbortController();
setTimeout(() => controller.abort(), 10000);

fetch(url, { signal: controller.signal });
```

### 4. Cache When Appropriate

```js
// ✅ Cache GET requests
const cache = new Map();

async function fetchWithCache(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }

  const response = await fetch(url);
  const data = await response.json();
  cache.set(url, data);
  return data;
}
```

---

## 🔗 What's Next?

Learn about Regular Expressions for text processing!

👉 [Next: Regular Expressions »](./regex.md)

---

## 📖 Additional Resources

- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [JavaScript.info: Fetch](https://javascript.info/fetch)
