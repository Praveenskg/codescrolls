---
sidebar_position: 4
title: JavaScript DOM Manipulation - Complete Guide
description:
  Master DOM manipulation in JavaScript. Learn to select, create, modify, and
  remove elements. Handle events and build dynamic web applications.
keywords:
  [
    javascript dom,
    dom manipulation,
    queryselector,
    getelementbyid,
    createelement,
    addeventlistener,
    dom events,
    javascript html,
  ]
tags:
  - JavaScript
  - DOM
  - Browser API
  - Intermediate
---

# DOM Manipulation

The **Document Object Model (DOM)** is a programming interface for HTML
documents. Master DOM manipulation to create dynamic, interactive web
applications!

---

## 🎯 What is the DOM?

The DOM represents your HTML document as a tree of objects that JavaScript can
manipulate.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <div id="app">
      <h1>Hello World</h1>
      <p class="text">Welcome!</p>
    </div>
  </body>
</html>
```

```
Document
  └─ html
      ├─ head
      │   └─ title
      └─ body
          └─ div#app
              ├─ h1
              └─ p.text
```

---

## 🔍 Selecting Elements

### getElementById

```js
const app = document.getElementById('app');
console.log(app); // <div id="app">...</div>
```

### querySelector (Modern, Recommended)

```js
// Get first matching element
const heading = document.querySelector('h1');
const text = document.querySelector('.text');
const app = document.querySelector('#app');

// CSS selectors work!
const firstLink = document.querySelector('nav a');
const submitBtn = document.querySelector('button[type="submit"]');
```

### querySelectorAll

```js
// Get all matching elements (NodeList)
const allParagraphs = document.querySelectorAll('p');
const allLinks = document.querySelectorAll('a');

// Convert to array for array methods
const linksArray = Array.from(allLinks);
linksArray.forEach(link => {
  console.log(link.href);
});
```

### Other Selectors (Legacy)

```js
// Get by class name
const items = document.getElementsByClassName('item');

// Get by tag name
const divs = document.getElementsByTagName('div');

// Get by name attribute
const inputs = document.getElementsByName('email');
```

---

## ✏️ Modifying Content

### textContent vs innerText vs innerHTML

```js
const element = document.querySelector('#demo');

// textContent - gets/sets text content
element.textContent = 'Hello World';

// innerHTML - gets/sets HTML content
element.innerHTML = '<strong>Hello</strong> World';

// innerText - respects CSS styling
element.innerText = 'Visible Text Only';
```

### Practical Example

```js
// Update multiple elements
document.querySelectorAll('.price').forEach(el => {
  const price = parseFloat(el.textContent);
  el.textContent = `$${price.toFixed(2)}`;
});
```

---

## 🎨 Modifying Styles

### style Property

```js
const box = document.querySelector('.box');

// Set individual styles
box.style.color = 'red';
box.style.backgroundColor = 'lightblue';
box.style.fontSize = '20px';
box.style.padding = '10px';

// Read styles
console.log(box.style.color); // 'red'
```

### classList (Recommended)

```js
const element = document.querySelector('.item');

// Add class
element.classList.add('active');

// Remove class
element.classList.remove('hidden');

// Toggle class
element.classList.toggle('selected');

// Check if has class
if (element.classList.contains('active')) {
  console.log('Element is active');
}

// Add multiple classes
element.classList.add('highlight', 'featured', 'new');
```

### Practical Example - Theme Switcher

```js
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Save preference
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
```

---

## 🏗️ Creating Elements

### createElement

```js
// Create new element
const div = document.createElement('div');
div.textContent = 'New Element';
div.className = 'box';
div.id = 'myBox';

// Add to page
document.body.appendChild(div);
```

### Building Complex Structures

```js
function createCard(data) {
  // Create elements
  const card = document.createElement('div');
  const title = document.createElement('h3');
  const description = document.createElement('p');
  const button = document.createElement('button');

  // Set content
  card.className = 'card';
  title.textContent = data.title;
  description.textContent = data.description;
  button.textContent = 'Learn More';

  // Build structure
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(button);

  return card;
}

// Usage
const cardData = {
  title: 'JavaScript',
  description: 'Learn modern JavaScript',
};
const newCard = createCard(cardData);
document.querySelector('#container').appendChild(newCard);
```

### insertAdjacentHTML

```js
const container = document.querySelector('#container');

// Insert HTML at different positions
container.insertAdjacentHTML('beforebegin', '<div>Before container</div>');
container.insertAdjacentHTML('afterbegin', '<div>First child</div>');
container.insertAdjacentHTML('beforeend', '<div>Last child</div>');
container.insertAdjacentHTML('afterend', '<div>After container</div>');
```

---

## 🗑️ Removing Elements

### remove()

```js
const element = document.querySelector('#myElement');
element.remove(); // Remove from DOM
```

### removeChild()

```js
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
parent.removeChild(child);
```

### Clear All Children

```js
const container = document.querySelector('#container');

// Method 1: innerHTML (fast but loses event listeners)
container.innerHTML = '';

// Method 2: Remove children one by one (preserves memory)
while (container.firstChild) {
  container.removeChild(container.firstChild);
}

// Method 3: Modern approach
container.replaceChildren();
```

---

## 🎭 Attributes

### getAttribute / setAttribute

```js
const link = document.querySelector('a');

// Get attribute
const href = link.getAttribute('href');
const target = link.getAttribute('target');

// Set attribute
link.setAttribute('href', 'https://example.com');
link.setAttribute('target', '_blank');
link.setAttribute('rel', 'noopener');

// Remove attribute
link.removeAttribute('target');

// Check if has attribute
if (link.hasAttribute('href')) {
  console.log('Link has href');
}
```

### Data Attributes

```js
// HTML: <div data-user-id="123" data-role="admin"></div>
const element = document.querySelector('div');

// Access via dataset
console.log(element.dataset.userId); // '123'
console.log(element.dataset.role); // 'admin'

// Set data attribute
element.dataset.status = 'active';

// Result: <div data-user-id="123" data-role="admin" data-status="active">
```

---

## 🎪 Events

### addEventListener

```js
const button = document.querySelector('#myButton');

button.addEventListener('click', function (event) {
  console.log('Button clicked!');
  console.log('Event:', event);
});

// Arrow function
button.addEventListener('click', e => {
  console.log('Clicked at:', e.clientX, e.clientY);
});
```

### Common Events

```js
// Mouse events
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler);
element.addEventListener('mouseenter', handler);
element.addEventListener('mouseleave', handler);
element.addEventListener('mousemove', handler);

// Keyboard events
document.addEventListener('keydown', handler);
document.addEventListener('keyup', handler);
document.addEventListener('keypress', handler);

// Form events
input.addEventListener('input', handler); // Every change
input.addEventListener('change', handler); // After blur
form.addEventListener('submit', handler);

// Focus events
input.addEventListener('focus', handler);
input.addEventListener('blur', handler);

// Other events
window.addEventListener('load', handler);
window.addEventListener('resize', handler);
window.addEventListener('scroll', handler);
```

### Event Object

```js
button.addEventListener('click', event => {
  // Prevent default behavior
  event.preventDefault();

  // Stop propagation (bubbling)
  event.stopPropagation();

  // Get target element
  console.log(event.target);

  // Get current target (element with listener)
  console.log(event.currentTarget);

  // Mouse position
  console.log(event.clientX, event.clientY);

  // Keyboard key
  console.log(event.key);
});
```

### Remove Event Listener

```js
function handleClick() {
  console.log('Clicked!');
}

// Add listener
button.addEventListener('click', handleClick);

// Remove listener (must use same function reference)
button.removeEventListener('click', handleClick);
```

---

## 📚 Practical Examples

### Example 1: Todo List

```js
class TodoApp {
  constructor() {
    this.todos = [];
    this.input = document.querySelector('#todoInput');
    this.list = document.querySelector('#todoList');
    this.form = document.querySelector('#todoForm');

    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.addTodo();
    });
  }

  addTodo() {
    const text = this.input.value.trim();
    if (!text) return;

    const todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    this.todos.push(todo);
    this.renderTodo(todo);
    this.input.value = '';
  }

  renderTodo(todo) {
    const li = document.createElement('li');
    li.dataset.id = todo.id;
    li.className = todo.completed ? 'completed' : '';

    li.innerHTML = `
      <span class="todo-text">${todo.text}</span>
      <button class="complete-btn">✓</button>
      <button class="delete-btn">✕</button>
    `;

    // Complete button
    li.querySelector('.complete-btn').addEventListener('click', () => {
      todo.completed = !todo.completed;
      li.classList.toggle('completed');
    });

    // Delete button
    li.querySelector('.delete-btn').addEventListener('click', () => {
      this.todos = this.todos.filter(t => t.id !== todo.id);
      li.remove();
    });

    this.list.appendChild(li);
  }
}

// Initialize app
new TodoApp();
```

### Example 2: Dynamic Form

```js
function createDynamicForm() {
  const form = document.createElement('form');
  form.id = 'userForm';

  const fields = [
    { type: 'text', name: 'username', placeholder: 'Username', required: true },
    { type: 'email', name: 'email', placeholder: 'Email', required: true },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      required: true,
    },
  ];

  fields.forEach(field => {
    const input = document.createElement('input');
    input.type = field.type;
    input.name = field.name;
    input.placeholder = field.placeholder;
    input.required = field.required;
    form.appendChild(input);
  });

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.textContent = 'Submit';
  form.appendChild(submit);

  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form data:', data);
  });

  document.body.appendChild(form);
}
```

### Example 3: Image Gallery

```js
class ImageGallery {
  constructor(images) {
    this.images = images;
    this.currentIndex = 0;
    this.render();
  }

  render() {
    const gallery = document.createElement('div');
    gallery.className = 'gallery';

    // Main image
    const mainImg = document.createElement('img');
    mainImg.id = 'mainImage';
    mainImg.src = this.images[0];
    mainImg.alt = 'Gallery image';

    // Controls
    const controls = document.createElement('div');
    controls.className = 'controls';

    const prevBtn = document.createElement('button');
    prevBtn.textContent = '← Previous';
    prevBtn.addEventListener('click', () => this.prev());

    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next →';
    nextBtn.addEventListener('click', () => this.next());

    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);

    // Thumbnails
    const thumbnails = document.createElement('div');
    thumbnails.className = 'thumbnails';

    this.images.forEach((src, index) => {
      const thumb = document.createElement('img');
      thumb.src = src;
      thumb.className = index === 0 ? 'active' : '';
      thumb.addEventListener('click', () => this.goTo(index));
      thumbnails.appendChild(thumb);
    });

    gallery.appendChild(mainImg);
    gallery.appendChild(controls);
    gallery.appendChild(thumbnails);
    document.body.appendChild(gallery);
  }

  updateImage() {
    const mainImg = document.querySelector('#mainImage');
    mainImg.src = this.images[this.currentIndex];

    // Update active thumbnail
    document.querySelectorAll('.thumbnails img').forEach((thumb, index) => {
      thumb.classList.toggle('active', index === this.currentIndex);
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateImage();
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateImage();
  }

  goTo(index) {
    this.currentIndex = index;
    this.updateImage();
  }
}
```

---

## 🎯 Best Practices

### 1. Cache DOM Queries

```js
// ❌ Bad - queries DOM repeatedly
function updateItems() {
  document.querySelector('#total').textContent = getTotal();
  document.querySelector('#total').style.color = 'green';
  document.querySelector('#total').classList.add('updated');
}

// ✅ Good - query once
function updateItems() {
  const total = document.querySelector('#total');
  total.textContent = getTotal();
  total.style.color = 'green';
  total.classList.add('updated');
}
```

### 2. Use Event Delegation

```js
// ❌ Bad - listener on each item
items.forEach(item => {
  item.addEventListener('click', handleClick);
});

// ✅ Good - single listener on parent
container.addEventListener('click', e => {
  if (e.target.matches('.item')) {
    handleClick(e);
  }
});
```

### 3. Batch DOM Updates

```js
// ❌ Bad - multiple reflows
container.style.width = '100px';
container.style.height = '100px';
container.style.background = 'red';

// ✅ Good - single reflow
container.style.cssText = 'width: 100px; height: 100px; background: red;';

// Or use classes
container.className = 'styled-box';
```

---

## 🔗 What's Next?

Learn to work with APIs and fetch data!

👉 [Next: APIs & Fetch »](./apis-fetch.md)

---

## 📖 Additional Resources

- [MDN: Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN: Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [JavaScript.info: DOM](https://javascript.info/dom-nodes)
