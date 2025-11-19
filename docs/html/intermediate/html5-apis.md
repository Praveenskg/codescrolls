---
id: html5-apis
title: HTML5 APIs - Complete Guide
description:
  Master HTML5 APIs including Geolocation, Web Storage, Notifications, File API,
  and modern browser capabilities.
keywords:
  [
    html5 apis,
    geolocation api,
    web storage,
    local storage,
    session storage,
    notifications api,
    file api,
    drag and drop,
    clipboard api,
    vibration api,
  ]
tags: [HTML, HTML5, APIs, Browser, Geolocation, Storage, Notifications]
sidebar_position: 6
---

# 🌐 HTML5 APIs

HTML5 introduces powerful JavaScript APIs that extend browser capabilities
beyond traditional web pages. These APIs enable modern web applications with
native-like features.

## 📖 What are HTML5 APIs?

HTML5 APIs provide JavaScript interfaces to access device capabilities, store
data locally, handle user interactions, and more. They work alongside HTML5
markup to create rich web experiences.

---

## 🗺️ Geolocation API

Access the user's geographical location.

### Basic Geolocation

```javascript
// Check if geolocation is supported
if ('geolocation' in navigator) {
  // Get current position
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude, accuracy } = position.coords;
      console.log(`Location: ${latitude}, ${longitude}`);
      console.log(`Accuracy: ${accuracy} meters`);
    },
    error => {
      console.error('Error getting location:', error.message);
    },
  );
} else {
  console.log('Geolocation not supported');
}
```

### Advanced Geolocation Options

```javascript
const options = {
  enableHighAccuracy: true, // Use GPS if available (more accurate but slower)
  timeout: 10000, // Maximum time to wait (10 seconds)
  maximumAge: 300000, // Accept cached position up to 5 minutes old
};

navigator.geolocation.getCurrentPosition(
  position => {
    const { latitude, longitude, altitude, heading, speed } = position.coords;

    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
    console.log(`Altitude: ${altitude || 'Not available'}`);
    console.log(`Heading: ${heading || 'Not available'}`);
    console.log(`Speed: ${speed || 'Not available'}`);
  },
  error => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.error('User denied location access');
        break;
      case error.POSITION_UNAVAILABLE:
        console.error('Location unavailable');
        break;
      case error.TIMEOUT:
        console.error('Location request timed out');
        break;
    }
  },
  options,
);
```

### Continuous Location Tracking

```javascript
let watchId;

function startTracking() {
  if ('geolocation' in navigator) {
    watchId = navigator.geolocation.watchPosition(
      position => {
        const { latitude, longitude, speed } = position.coords;
        updateMap(latitude, longitude);
        updateSpeed(speed);
      },
      error => console.error('Tracking error:', error),
      { enableHighAccuracy: true },
    );
  }
}

function stopTracking() {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  }
}
```

### Practical Example: Weather App

```html
<div id="weather-app">
  <button onclick="getWeather()">Get Local Weather</button>
  <div id="weather-info"></div>
  <div id="location-info"></div>
</div>

<script>
  async function getWeather() {
    const weatherInfo = document.getElementById('weather-info');
    const locationInfo = document.getElementById('location-info');

    try {
      // Get location
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;

      locationInfo.textContent = `Location: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;

      // Fetch weather (using a weather API)
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=${latitude},${longitude}`,
      );
      const data = await response.json();

      weatherInfo.innerHTML = `
      <h3>${data.location.name}, ${data.location.country}</h3>
      <p>Temperature: ${data.current.temp_c}°C</p>
      <p>Condition: ${data.current.condition.text}</p>
      <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
    `;
    } catch (error) {
      weatherInfo.textContent = `Error: ${error.message}`;
    }
  }

  function getCurrentPosition() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
</script>
```

---

## 💾 Web Storage API

Store data locally in the browser with Local Storage and Session Storage.

### Local Storage vs Session Storage

| Feature           | Local Storage               | Session Storage         |
| ----------------- | --------------------------- | ----------------------- |
| **Persistence**   | Survives browser restart    | Cleared when tab closes |
| **Scope**         | All tabs/windows of origin  | Current tab only        |
| **Storage Limit** | ~5-10MB                     | ~5-10MB                 |
| **Use Case**      | User preferences, app state | Temporary data, forms   |

### Basic Storage Operations

```javascript
// Local Storage
localStorage.setItem('username', 'john_doe');
localStorage.setItem('theme', 'dark');

const username = localStorage.getItem('username');
const theme = localStorage.getItem('theme');

console.log(`${username}'s theme: ${theme}`);

// Remove specific item
localStorage.removeItem('theme');

// Clear all data
localStorage.clear();

// Check if key exists
if (localStorage.getItem('userSettings')) {
  loadUserSettings();
}
```

### Storing Complex Data

```javascript
// Store objects as JSON
const user = {
  id: 123,
  name: 'John Doe',
  email: 'john@example.com',
  preferences: {
    theme: 'dark',
    notifications: true,
    language: 'en',
  },
};

// Store
localStorage.setItem('user', JSON.stringify(user));

// Retrieve
const storedUser = JSON.parse(localStorage.getItem('user'));

// Update specific property
storedUser.preferences.theme = 'light';
localStorage.setItem('user', JSON.stringify(storedUser));
```

### Storage Event Listener

```javascript
// Listen for storage changes (works across tabs)
window.addEventListener('storage', event => {
  console.log('Storage changed:');
  console.log('Key:', event.key);
  console.log('Old value:', event.oldValue);
  console.log('New value:', event.newValue);
  console.log(
    'Storage area:',
    event.storageArea === localStorage ? 'Local' : 'Session',
  );
});

// Example: Update UI when settings change in another tab
window.addEventListener('storage', event => {
  if (event.key === 'theme') {
    updateTheme(event.newValue);
  }
});
```

### Practical Example: Todo App with Persistence

```html
<div id="todo-app">
  <h2>My Todos</h2>
  <input type="text" id="todo-input" placeholder="Add a new todo..." />
  <button onclick="addTodo()">Add Todo</button>
  <ul id="todo-list"></ul>
</div>

<script>
  const TODO_KEY = 'my-todos';

  function loadTodos() {
    const todos = JSON.parse(localStorage.getItem(TODO_KEY) || '[]');
    const todoList = document.getElementById('todo-list');

    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
      <span>${todo.text}</span>
      <button onclick="toggleTodo(${index})">${todo.completed ? '✅' : '⬜'}</button>
      <button onclick="deleteTodo(${index})">❌</button>
    `;
      if (todo.completed) {
        li.classList.add('completed');
      }
      todoList.appendChild(li);
    });
  }

  function addTodo() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();

    if (text) {
      const todos = JSON.parse(localStorage.getItem(TODO_KEY) || '[]');
      todos.push({ text, completed: false });
      localStorage.setItem(TODO_KEY, JSON.stringify(todos));
      input.value = '';
      loadTodos();
    }
  }

  function toggleTodo(index) {
    const todos = JSON.parse(localStorage.getItem(TODO_KEY) || '[]');
    todos[index].completed = !todos[index].completed;
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
    loadTodos();
  }

  function deleteTodo(index) {
    const todos = JSON.parse(localStorage.getItem(TODO_KEY) || '[]');
    todos.splice(index, 1);
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
    loadTodos();
  }

  // Load todos on page load
  loadTodos();
</script>
```

---

## 🔔 Notifications API

Show native browser notifications.

### Request Permission and Show Notification

```javascript
// Check if notifications are supported
if ('Notification' in window) {
  // Request permission
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      console.log('Notification permission granted');

      // Create a notification
      const notification = new Notification('Hello!', {
        body: 'This is a test notification',
        icon: '/icon.png',
        badge: '/badge.png',
        tag: 'test-notification', // Prevents duplicates
        requireInteraction: false, // Auto-close
        silent: false, // Play sound
      });

      // Handle click
      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      // Auto-close after 3 seconds
      setTimeout(() => notification.close(), 3000);
    } else if (permission === 'denied') {
      console.log('Notification permission denied');
    }
  });
} else {
  console.log('Notifications not supported');
}
```

### Advanced Notification Options

```javascript
function showAdvancedNotification() {
  const options = {
    body: 'You have a new message from John Doe',
    icon: '/user-avatar.jpg',
    badge: '/app-icon.png',
    image: '/message-preview.png', // Large image
    tag: 'message-john-doe', // Group related notifications
    requireInteraction: true, // Stay until user interacts
    silent: false,
    timestamp: Date.now(),
    data: { userId: 123, messageId: 456 }, // Custom data

    // Action buttons (limited browser support)
    actions: [
      { action: 'reply', title: 'Reply', icon: '/reply-icon.png' },
      { action: 'view', title: 'View Message', icon: '/view-icon.png' },
    ],
  };

  const notification = new Notification('New Message', options);

  // Handle action clicks
  notification.onclick = event => {
    if (event.action === 'reply') {
      openReplyWindow(notification.data);
    } else if (event.action === 'view') {
      openMessage(notification.data);
    } else {
      // Default click behavior
      focusMessageWindow(notification.data);
    }
  };
}
```

### Notification Manager Example

```javascript
class NotificationManager {
  constructor() {
    this.permission = null;
  }

  async requestPermission() {
    if (!('Notification' in window)) {
      throw new Error('Notifications not supported');
    }

    this.permission = await Notification.requestPermission();
    return this.permission;
  }

  show(title, options = {}) {
    if (this.permission !== 'granted') {
      throw new Error('Notification permission not granted');
    }

    const notification = new Notification(title, {
      icon: '/app-icon.png',
      timestamp: Date.now(),
      ...options,
    });

    return notification;
  }

  // Predefined notification types
  showSuccess(message) {
    return this.show('Success', {
      body: message,
      icon: '/success-icon.png',
      tag: 'success',
    });
  }

  showError(message) {
    return this.show('Error', {
      body: message,
      icon: '/error-icon.png',
      tag: 'error',
      requireInteraction: true,
    });
  }

  showReminder(title, body, delay = 5000) {
    setTimeout(() => {
      this.show(title, {
        body,
        icon: '/reminder-icon.png',
        tag: 'reminder',
      });
    }, delay);
  }
}

// Usage
const notifications = new NotificationManager();

document.getElementById('request-permission').onclick = async () => {
  try {
    await notifications.requestPermission();
    notifications.showSuccess('Notifications enabled!');
  } catch (error) {
    console.error('Failed to enable notifications:', error);
  }
};

document.getElementById('test-notification').onclick = () => {
  notifications.show('Test Notification', {
    body: 'This is a test notification',
    icon: '/test-icon.png',
  });
};
```

---

## 📁 File API

Handle file uploads and manipulation.

### Basic File Input

```html
<input type="file" id="file-input" accept="image/*" multiple />
<div id="file-info"></div>

<script>
  document.getElementById('file-input').addEventListener('change', event => {
    const files = event.target.files;
    const fileInfo = document.getElementById('file-info');

    if (files.length === 0) return;

    fileInfo.innerHTML = '<h3>Selected Files:</h3>';

    Array.from(files).forEach((file, index) => {
      const info = document.createElement('div');
      info.innerHTML = `
      <strong>File ${index + 1}:</strong><br>
      Name: ${file.name}<br>
      Size: ${formatFileSize(file.size)}<br>
      Type: ${file.type || 'Unknown'}<br>
      Last Modified: ${new Date(file.lastModified).toLocaleString()}
    `;
      fileInfo.appendChild(info);
    });
  });

  function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
</script>
```

### File Reader API

```javascript
function readFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);

    // Read as text
    reader.readAsText(file);

    // Or read as data URL (for images)
    // reader.readAsDataURL(file);

    // Or read as array buffer (for binary data)
    // reader.readAsArrayBuffer(file);
  });
}

// Usage
async function handleFileSelect(event) {
  const file = event.target.files[0];

  try {
    if (file.type.startsWith('text/')) {
      const content = await readFile(file);
      console.log('File content:', content);
    } else if (file.type.startsWith('image/')) {
      const dataUrl = await readFileAsDataURL(file);
      displayImage(dataUrl);
    }
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
```

### Drag and Drop API

```html
<div id="drop-zone">
  <p>Drag and drop files here or click to select</p>
  <input type="file" id="file-input" multiple style="display: none;" />
</div>
<div id="file-list"></div>

<style>
  #drop-zone {
    border: 2px dashed #ccc;
    padding: 50px;
    text-align: center;
    cursor: pointer;
    transition: border-color 0.3s;
  }

  #drop-zone.dragover {
    border-color: #007bff;
    background-color: #f8f9ff;
  }
</style>

<script>
  const dropZone = document.getElementById('drop-zone');
  const fileInput = document.getElementById('file-input');
  const fileList = document.getElementById('file-list');

  // Click to open file dialog
  dropZone.addEventListener('click', () => {
    fileInput.click();
  });

  // Handle file input change
  fileInput.addEventListener('change', event => {
    handleFiles(event.target.files);
  });

  // Drag and drop events
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  ['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
  });

  function highlight() {
    dropZone.classList.add('dragover');
  }

  function unhighlight() {
    dropZone.classList.remove('dragover');
  }

  dropZone.addEventListener('drop', handleDrop, false);

  function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files);
  }

  function handleFiles(files) {
    fileList.innerHTML = '';

    Array.from(files).forEach(file => {
      const item = document.createElement('div');
      item.innerHTML = `
      <strong>${file.name}</strong> (${formatFileSize(file.size)})
      <span id="progress-${file.name.replace(/\./g, '-')}"></span>
    `;
      fileList.appendChild(item);

      // Simulate upload progress
      simulateUpload(file);
    });
  }

  function simulateUpload(file) {
    const progressSpan = document.getElementById(
      `progress-${file.name.replace(/\./g, '-')}`,
    );
    let progress = 0;

    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
      }
      progressSpan.textContent = ` - ${Math.round(progress)}%`;
    }, 200);
  }

  function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
</script>
```

---

## 📋 Other HTML5 APIs

### Clipboard API

```javascript
// Copy text to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (error) {
    console.error('Failed to copy:', error);
    // Fallback for older browsers
    fallbackCopyTextToClipboard(text);
  }
}

// Read text from clipboard
async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    console.log('Pasted text:', text);
    return text;
  } catch (error) {
    console.error('Failed to paste:', error);
  }
}

// Copy complex data
async function copyImage(imageBlob) {
  try {
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/png': imageBlob }),
    ]);
    console.log('Image copied to clipboard');
  } catch (error) {
    console.error('Failed to copy image:', error);
  }
}

// Usage
document.getElementById('copy-btn').addEventListener('click', () => {
  copyToClipboard('Hello, World!');
});

document.getElementById('paste-btn').addEventListener('click', async () => {
  const text = await pasteFromClipboard();
  document.getElementById('output').textContent = text;
});
```

### Vibration API

```javascript
// Simple vibration
navigator.vibrate(200); // Vibrate for 200ms

// Pattern vibration
navigator.vibrate([100, 50, 100, 50, 200]); // Vibrate, pause, vibrate, pause, vibrate

// Stop vibration
navigator.vibrate(0);

// Check support
if ('vibrate' in navigator) {
  // Vibration supported
} else {
  // Fallback behavior
}

// Usage in notifications
function showNotificationWithVibration() {
  // Show notification
  new Notification('Important Message!', {
    body: 'You have a new message',
    icon: '/notification-icon.png',
  });

  // Vibrate pattern: buzz-buzz-pause-buzz
  navigator.vibrate([200, 100, 200, 100, 500]);
}

// Form submission feedback
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();

  // Submit form logic here

  // Success feedback
  navigator.vibrate([50, 50, 50]); // Quick triple buzz
});
```

### Battery Status API

```javascript
// Get battery information
if ('getBattery' in navigator) {
  navigator.getBattery().then(battery => {
    console.log('Battery level:', battery.level * 100 + '%');
    console.log('Charging:', battery.charging);
    console.log('Charging time:', battery.chargingTime);
    console.log('Discharging time:', battery.dischargingTime);

    // Listen for changes
    battery.addEventListener('levelchange', () => {
      updateBatteryDisplay(battery.level);
    });

    battery.addEventListener('chargingchange', () => {
      updateChargingStatus(battery.charging);
    });
  });
} else {
  console.log('Battery Status API not supported');
}

function updateBatteryDisplay(level) {
  const percentage = Math.round(level * 100);
  document.getElementById('battery-level').textContent = `${percentage}%`;

  // Change color based on level
  const batteryBar = document.getElementById('battery-bar');
  if (percentage < 20) {
    batteryBar.style.backgroundColor = '#dc3545'; // Red
  } else if (percentage < 50) {
    batteryBar.style.backgroundColor = '#ffc107'; // Yellow
  } else {
    batteryBar.style.backgroundColor = '#28a745'; // Green
  }
}

function updateChargingStatus(charging) {
  const status = document.getElementById('charging-status');
  status.textContent = charging ? 'Charging' : 'Not Charging';
  status.style.color = charging ? '#28a745' : '#6c757d';
}
```

---

## 🎯 Best Practices

### ✅ DO:

```javascript
// Check API support before using
if ('geolocation' in navigator) {
  // Use geolocation
} else {
  // Provide fallback
}

// Handle errors gracefully
navigator.geolocation.getCurrentPosition(
  position => {
    // Success handler
  },
  error => {
    console.error('Geolocation error:', error.message);
    // Show user-friendly message
  },
);

// Request permissions when needed
Notification.requestPermission().then(permission => {
  if (permission === 'granted') {
    // Show notification
  }
});

// Validate file types and sizes
function validateFile(file) {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!allowedTypes.includes(file.type)) {
    throw new Error('Invalid file type');
  }

  if (file.size > maxSize) {
    throw new Error('File too large');
  }
}
```

### ❌ DON'T:

```javascript
// Don't assume API availability
navigator.geolocation.getCurrentPosition(); // May not work

// Don't ignore permission denials
Notification.requestPermission(); // Handle the promise

// Don't store sensitive data in localStorage
localStorage.setItem('password', userPassword); // Security risk

// Don't block the UI with synchronous operations
// Avoid using synchronous FileReader methods in production
```

---

## 🚀 What's Next?

Now that you understand HTML5 APIs, learn about **Canvas** for graphics:

👉 [Next: Canvas API →](./canvas.md)

Or return to the [HTML Overview →](../index.md)

Master HTML5 APIs for modern web applications! 🌐
