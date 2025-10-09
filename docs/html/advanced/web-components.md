---
id: web-components
title: Web Components - Reusable Custom HTML Elements
description: Master Web Components with Custom Elements, Shadow DOM, and HTML Templates for building reusable, encapsulated UI components.
keywords:
  [
    web components,
    custom elements,
    shadow dom,
    html templates,
    reusable components,
    web standards,
    component library,
  ]
tags: [HTML, WebComponents, CustomElements, ShadowDOM, Templates]
sidebar_position: 11
---

# 🧩 Web Components

Web Components are a set of web platform APIs that allow you to create reusable custom HTML elements with encapsulated functionality and styling.

## 📖 What are Web Components?

Web Components consist of three main technologies:

- **Custom Elements**: Define new HTML elements
- **Shadow DOM**: Encapsulated DOM and styles
- **HTML Templates**: Reusable markup templates

---

## 🏗️ Custom Elements

### Basic Custom Element

```html
<!-- Define a custom element -->
<script>
  class HelloWorld extends HTMLElement {
    connectedCallback() {
      this.innerHTML = '<h1>Hello, World!</h1>';
    }
  }

  // Register the custom element
  customElements.define('hello-world', HelloWorld);
</script>

<!-- Use the custom element -->
<hello-world></hello-world>
```

### Lifecycle Methods

```javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    console.log('Element created');
  }

  // Called when element is added to DOM
  connectedCallback() {
    console.log('Element connected to DOM');
    this.render();
  }

  // Called when element is removed from DOM
  disconnectedCallback() {
    console.log('Element disconnected from DOM');
    // Cleanup event listeners, timers, etc.
  }

  // Called when element is moved to new document
  adoptedCallback() {
    console.log('Element adopted');
  }

  // Called when observed attributes change
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);
    this.render();
  }

  // Define which attributes to observe
  static get observedAttributes() {
    return ['message', 'color'];
  }

  render() {
    const message = this.getAttribute('message') || 'Hello';
    const color = this.getAttribute('color') || 'black';

    this.innerHTML = `<h1 style="color: ${color};">${message}</h1>`;
  }
}

customElements.define('my-element', MyElement);
```

### Using Custom Elements

```html
<!-- Basic usage -->
<my-element></my-element>

<!-- With attributes -->
<my-element message="Welcome!" color="blue"></my-element>

<!-- Dynamic updates -->
<script>
  const element = document.querySelector('my-element');
  element.setAttribute('message', 'Updated message');
  element.setAttribute('color', 'red');
</script>
```

---

## 🌑 Shadow DOM

### Basic Shadow DOM

```javascript
class ShadowElement extends HTMLElement {
  constructor() {
    super();

    // Create shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Add content to shadow DOM
    shadow.innerHTML = `
      <style>
        .message {
          color: blue;
          font-size: 20px;
          border: 2px solid blue;
          padding: 10px;
        }
      </style>

      <div class="message">
        This is inside Shadow DOM!
      </div>
    `;
  }
}

customElements.define('shadow-element', ShadowElement);
```

### Shadow DOM Modes

```javascript
class OpenShadow extends HTMLElement {
  constructor() {
    super();
    // 'open' mode: shadowRoot accessible via element.shadowRoot
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = '<p>Open Shadow DOM</p>';
  }
}

class ClosedShadow extends HTMLElement {
  constructor() {
    super();
    // 'closed' mode: shadowRoot not accessible
    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.innerHTML = '<p>Closed Shadow DOM</p>';
  }
}

customElements.define('open-shadow', OpenShadow);
customElements.define('closed-shadow', ClosedShadow);

// Usage
const openEl = document.querySelector('open-shadow');
console.log(openEl.shadowRoot); // ShadowRoot object

const closedEl = document.querySelector('closed-shadow');
console.log(closedEl.shadowRoot); // null
```

### Styling Shadow DOM

```html
<style>
  /* Styles outside shadow DOM don't affect inside */
  .outside {
    color: red;
  }
</style>

<div class="outside">
  <shadow-styled></shadow-styled>
</div>

<script>
  class ShadowStyled extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          /* Styles inside shadow DOM only affect elements inside */
          .inside {
            color: blue;
            font-size: 24px;
          }

          /* :host styles the custom element itself */
          :host {
            display: block;
            border: 2px solid black;
            padding: 10px;
          }

          /* :host() with selector */
          :host(.highlighted) {
            border-color: red;
          }

          /* Style elements when custom element has certain state */
          :host(:hover) {
            background-color: lightgray;
          }
        </style>

        <div class="inside">
          Styled content inside Shadow DOM
        </div>
      `;
    }
  }

  customElements.define('shadow-styled', ShadowStyled);
</script>

<!-- Usage with class -->
<shadow-styled class="highlighted"></shadow-styled>
```

---

## 📝 HTML Templates

### Basic Template

```html
<template id="my-template">
  <style>
    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      margin: 8px;
      max-width: 300px;
    }

    .card-title {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .card-content {
      color: #666;
    }
  </style>

  <div class="card">
    <div class="card-title"></div>
    <div class="card-content"></div>
  </div>
</template>

<script>
  class CardElement extends HTMLElement {
    constructor() {
      super();

      // Get template
      const template = document.getElementById('my-template');
      const templateContent = template.content.cloneNode(true);

      // Populate template
      const title = this.getAttribute('title');
      const content = this.getAttribute('content');

      templateContent.querySelector('.card-title').textContent = title;
      templateContent.querySelector('.card-content').textContent = content;

      // Attach to shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.appendChild(templateContent);
    }
  }

  customElements.define('my-card', CardElement);
</script>

<!-- Usage -->
<my-card title="Hello World" content="This is a reusable card component"></my-card>
```

### Template with Slots

```html
<template id="advanced-template">
  <style>
    .container {
      border: 2px solid #007bff;
      border-radius: 8px;
      padding: 16px;
      margin: 8px 0;
    }

    .header {
      background-color: #007bff;
      color: white;
      padding: 8px;
      margin: -16px -16px 16px -16px;
    }

    ::slotted(.highlight) {
      background-color: yellow;
    }
  </style>

  <div class="container">
    <div class="header">
      <slot name="header">Default Header</slot>
    </div>

    <div class="content">
      <slot name="content">Default content</slot>
    </div>

    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  class AdvancedCard extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById('advanced-template');
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.appendChild(template.content.cloneNode(true));
    }
  }

  customElements.define('advanced-card', AdvancedCard);
</script>

<!-- Usage with slots -->
<advanced-card>
  <h2 slot="header">Custom Header</h2>
  <p slot="content">This content goes in the content slot.</p>
  <p slot="content" class="highlight">This is highlighted content.</p>
  <small slot="footer">Footer content</small>
</advanced-card>
```

---

## 🎯 Complete Web Component Example

### User Profile Card Component

```html
<template id="profile-template">
  <style>
    :host {
      display: block;
      font-family: Arial, sans-serif;
      max-width: 300px;
      margin: 10px;
    }

    .profile-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .profile-header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      text-align: center;
    }

    .profile-avatar {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 3px solid white;
      margin: 0 auto 10px;
      display: block;
    }

    .profile-name {
      margin: 0;
      font-size: 24px;
      font-weight: bold;
    }

    .profile-title {
      margin: 5px 0 0 0;
      opacity: 0.9;
      font-size: 14px;
    }

    .profile-body {
      padding: 20px;
    }

    .profile-info {
      margin-bottom: 15px;
    }

    .info-label {
      font-weight: bold;
      color: #666;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .info-value {
      margin-top: 2px;
      color: #333;
    }

    .profile-actions {
      padding: 0 20px 20px 20px;
      display: flex;
      gap: 10px;
    }

    .btn {
      flex: 1;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 0.5px;
    }

    .btn-primary {
      background-color: #007bff;
      color: white;
    }

    .btn-primary:hover {
      background-color: #0056b3;
    }

    .btn-secondary {
      background-color: #6c757d;
      color: white;
    }

    .btn-secondary:hover {
      background-color: #545b62;
    }

    :host(.dark) .profile-card {
      background-color: #2d3748;
      color: white;
    }

    :host(.dark) .info-label {
      color: #a0aec0;
    }

    :host(.dark) .info-value {
      color: #e2e8f0;
    }
  </style>

  <div class="profile-card">
    <div class="profile-header">
      <img class="profile-avatar" src="" alt="Profile picture" />
      <h3 class="profile-name"></h3>
      <p class="profile-title"></p>
    </div>

    <div class="profile-body">
      <div class="profile-info">
        <div class="info-label">Email</div>
        <div class="info-value email"></div>
      </div>

      <div class="profile-info">
        <div class="info-label">Phone</div>
        <div class="info-value phone"></div>
      </div>

      <div class="profile-info">
        <div class="info-label">Location</div>
        <div class="info-value location"></div>
      </div>

      <div class="profile-info">
        <div class="info-label">Bio</div>
        <div class="info-value bio"></div>
      </div>
    </div>

    <div class="profile-actions">
      <button class="btn btn-primary">Message</button>
      <button class="btn btn-secondary">Follow</button>
    </div>
  </div>
</template>

<script>
  class ProfileCard extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById('profile-template');
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.appendChild(template.content.cloneNode(true));

      // Bind methods
      this.handleMessage = this.handleMessage.bind(this);
      this.handleFollow = this.handleFollow.bind(this);
    }

    connectedCallback() {
      this.render();
      this.attachEventListeners();
    }

    disconnectedCallback() {
      this.removeEventListeners();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.render();
      }
    }

    static get observedAttributes() {
      return ['name', 'title', 'avatar', 'email', 'phone', 'location', 'bio'];
    }

    render() {
      const shadow = this.shadowRoot;

      // Update profile info
      shadow.querySelector('.profile-name').textContent =
        this.getAttribute('name') || 'Unknown User';
      shadow.querySelector('.profile-title').textContent = this.getAttribute('title') || 'No Title';
      shadow.querySelector('.profile-avatar').src =
        this.getAttribute('avatar') || '/default-avatar.png';
      shadow.querySelector('.email').textContent =
        this.getAttribute('email') || 'No email provided';
      shadow.querySelector('.phone').textContent =
        this.getAttribute('phone') || 'No phone provided';
      shadow.querySelector('.location').textContent =
        this.getAttribute('location') || 'No location provided';
      shadow.querySelector('.bio').textContent = this.getAttribute('bio') || 'No bio provided';
    }

    attachEventListeners() {
      const shadow = this.shadowRoot;
      shadow.querySelector('.btn-primary').addEventListener('click', this.handleMessage);
      shadow.querySelector('.btn-secondary').addEventListener('click', this.handleFollow);
    }

    removeEventListeners() {
      const shadow = this.shadowRoot;
      shadow.querySelector('.btn-primary').removeEventListener('click', this.handleMessage);
      shadow.querySelector('.btn-secondary').removeEventListener('click', this.handleFollow);
    }

    handleMessage() {
      const name = this.getAttribute('name');
      alert(`Messaging ${name}...`);
    }

    handleFollow() {
      const name = this.getAttribute('name');
      alert(`Following ${name}...`);
    }
  }

  customElements.define('profile-card', ProfileCard);
</script>

<!-- Usage examples -->
<profile-card
  name="John Doe"
  title="Senior Developer"
  avatar="/avatars/john.jpg"
  email="john@example.com"
  phone="+1 (555) 123-4567"
  location="San Francisco, CA"
  bio="Passionate developer with 5+ years of experience in web technologies."
>
</profile-card>

<profile-card
  name="Jane Smith"
  title="UI/UX Designer"
  avatar="/avatars/jane.jpg"
  email="jane@example.com"
  location="New York, NY"
  class="dark"
>
</profile-card>
```

---

## 🔧 Advanced Web Components

### Component with Properties and Events

```javascript
class CounterElement extends HTMLElement {
  constructor() {
    super();

    this.count = 0;

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          display: inline-block;
          font-family: Arial, sans-serif;
        }

        .counter {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        button {
          padding: 5px 10px;
          border: none;
          background: #007bff;
          color: white;
          border-radius: 3px;
          cursor: pointer;
        }

        button:hover {
          background: #0056b3;
        }

        .count {
          font-size: 18px;
          font-weight: bold;
          min-width: 30px;
          text-align: center;
        }
      </style>

      <div class="counter">
        <button class="decrement">-</button>
        <span class="count">0</span>
        <button class="increment">+</button>
      </div>
    `;

    this.decrementBtn = shadow.querySelector('.decrement');
    this.incrementBtn = shadow.querySelector('.increment');
    this.countDisplay = shadow.querySelector('.count');
  }

  connectedCallback() {
    this.decrementBtn.addEventListener('click', () => this.decrement());
    this.incrementBtn.addEventListener('click', () => this.increment());
  }

  disconnectedCallback() {
    this.decrementBtn.removeEventListener('click', () => this.decrement());
    this.incrementBtn.removeEventListener('click', () => this.increment());
  }

  increment() {
    this.count++;
    this.updateDisplay();
    this.dispatchEvent(
      new CustomEvent('count-changed', {
        detail: { count: this.count, action: 'increment' },
      }),
    );
  }

  decrement() {
    this.count--;
    this.updateDisplay();
    this.dispatchEvent(
      new CustomEvent('count-changed', {
        detail: { count: this.count, action: 'decrement' },
      }),
    );
  }

  updateDisplay() {
    this.countDisplay.textContent = this.count;
  }

  // Getter/setter for count property
  get value() {
    return this.count;
  }

  set value(newValue) {
    this.count = parseInt(newValue) || 0;
    this.updateDisplay();
  }
}

customElements.define('counter-element', CounterElement);

// Usage
const counter = document.querySelector('counter-element');
counter.addEventListener('count-changed', (event) => {
  console.log('Count changed:', event.detail);
});

// Set initial value
counter.value = 5;
```

### Component Composition

```javascript
// Base component
class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  // Utility methods
  $(selector) {
    return this.shadowRoot.querySelector(selector);
  }

  $$(selector) {
    return this.shadowRoot.querySelectorAll(selector);
  }

  emit(eventName, detail = {}) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
        bubbles: true,
        composed: true,
      }),
    );
  }
}

// Modal component
class ModalElement extends BaseComponent {
  constructor() {
    super();

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          z-index: 1000;
        }

        :host(.open) {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal {
          background: white;
          border-radius: 8px;
          padding: 20px;
          max-width: 500px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .modal-title {
          margin: 0;
          font-size: 24px;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          padding: 0;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-body {
          margin-bottom: 20px;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        button {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
        }

        .btn-primary {
          background: #007bff;
          color: white;
        }

        .btn-secondary {
          background: #6c757d;
          color: white;
        }
      </style>

      <div class="modal">
        <div class="modal-header">
          <h2 class="modal-title"><slot name="title">Modal Title</slot></h2>
          <button class="close-btn" aria-label="Close modal">×</button>
        </div>

        <div class="modal-body">
          <slot name="body">Modal content</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="btn btn-secondary" data-action="cancel">Cancel</button>
            <button class="btn btn-primary" data-action="confirm">OK</button>
          </slot>
        </div>
      </div>
    `;

    this.closeBtn = this.$('.close-btn');
  }

  connectedCallback() {
    this.closeBtn.addEventListener('click', () => this.close());
    this.shadowRoot.addEventListener('click', (e) => {
      if (e.target.dataset.action === 'cancel') this.close();
      if (e.target.dataset.action === 'confirm') this.confirm();
    });
  }

  open() {
    this.classList.add('open');
    this.emit('modal-opened');
  }

  close() {
    this.classList.remove('open');
    this.emit('modal-closed');
  }

  confirm() {
    this.close();
    this.emit('modal-confirmed');
  }
}

customElements.define('modal-element', ModalElement);

// Usage
const modal = document.querySelector('modal-element');

document.getElementById('open-modal').addEventListener('click', () => {
  modal.open();
});

modal.addEventListener('modal-confirmed', () => {
  console.log('User confirmed!');
});
```

---

## 🔄 Component Lifecycle and Best Practices

### Lifecycle Best Practices

```javascript
class LifecycleExample extends HTMLElement {
  constructor() {
    super();
    console.log('1. Constructor called');

    // Always call super() first
    // Initialize state here
    this._data = null;
    this._isConnected = false;
  }

  static get observedAttributes() {
    // Return array of attributes to observe
    return ['data-src', 'disabled'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('2. Attribute changed:', name, oldValue, '->', newValue);

    // React to attribute changes
    if (name === 'data-src' && oldValue !== newValue) {
      this.loadData(newValue);
    }
  }

  connectedCallback() {
    console.log('3. Connected to DOM');
    this._isConnected = true;

    // Safe to access DOM here
    // Set up event listeners
    // Initialize component state

    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.render();
    }

    this.setupEventListeners();
  }

  disconnectedCallback() {
    console.log('4. Disconnected from DOM');
    this._isConnected = false;

    // Clean up
    this.removeEventListeners();
    this.cancelPendingOperations();
  }

  adoptedCallback() {
    console.log('5. Adopted into new document');
    // Component moved to different document
  }

  // Private methods
  setupEventListeners() {
    // Add event listeners
  }

  removeEventListeners() {
    // Remove event listeners
  }

  cancelPendingOperations() {
    // Cancel timers, fetch requests, etc.
  }

  async loadData(src) {
    if (!src || !this._isConnected) return;

    try {
      const response = await fetch(src);
      this._data = await response.json();
      this.render();
    } catch (error) {
      console.error('Failed to load data:', error);
      this.handleError(error);
    }
  }

  render() {
    if (!this.shadowRoot) return;

    // Render component based on current state
    this.shadowRoot.innerHTML = `
      <style>
        /* Component styles */
      </style>
      <div class="content">
        ${this._data ? this.renderData() : 'Loading...'}
      </div>
    `;
  }

  renderData() {
    return `<p>Data loaded: ${JSON.stringify(this._data)}</p>`;
  }

  handleError(error) {
    this.shadowRoot.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}

customElements.define('lifecycle-example', LifecycleExample);
```

### Component Design Patterns

```javascript
// Factory pattern for creating components
class ComponentFactory {
  static create(elementName, options = {}) {
    const element = document.createElement(elementName);

    Object.keys(options).forEach((key) => {
      if (key === 'children') {
        options.children.forEach((child) => element.appendChild(child));
      } else {
        element.setAttribute(key, options[key]);
      }
    });

    return element;
  }
}

// Usage
const button = ComponentFactory.create('custom-button', {
  variant: 'primary',
  size: 'large',
  children: [document.createTextNode('Click me')],
});

// Mixin pattern for shared functionality
const EventEmitterMixin = {
  emit(eventName, detail = {}) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
        bubbles: true,
        composed: true,
      }),
    );
  },

  on(eventName, handler) {
    this.addEventListener(eventName, handler);
    return () => this.removeEventListener(eventName, handler);
  },
};

// Apply mixin
Object.assign(MyElement.prototype, EventEmitterMixin);

// Decorator pattern for extending functionality
function withLogging(BaseClass) {
  return class extends BaseClass {
    connectedCallback() {
      console.log(`${this.tagName} connected`);
      super.connectedCallback();
    }

    disconnectedCallback() {
      console.log(`${this.tagName} disconnected`);
      super.disconnectedCallback();
    }
  };
}

// Usage
class LoggedButton extends withLogging(HTMLButtonElement) {
  // Button functionality
}

customElements.define('logged-button', LoggedButton, { extends: 'button' });
```

---

## 🎯 Best Practices

### ✅ DO:

```javascript
// Use descriptive names
customElements.define('user-profile-card', UserProfileCard);

// Always use Shadow DOM for encapsulation
class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
}

// Define observed attributes
static get observedAttributes() {
  return ['value', 'disabled', 'placeholder'];
}

// Clean up event listeners
disconnectedCallback() {
  this.button.removeEventListener('click', this.handleClick);
}

// Use slots for flexible content
<my-component>
  <h3 slot="title">Title</h3>
  <p slot="content">Content</p>
</my-component>

// Dispatch custom events
this.dispatchEvent(new CustomEvent('value-changed', {
  detail: { value: this.value },
  bubbles: true
}));
```

### ❌ DON'T:

```javascript
// Don't use generic names
customElements.define('component', MyComponent); // Too vague

// Don't pollute global scope
window.myGlobalVariable = 'value'; // Inside component

// Don't forget to call super()
class MyComponent extends HTMLElement {
  constructor() {
    // super(); // Missing!
  }
}

// Don't modify prototype after registration
customElements.define('my-element', MyElement);
// MyElement.prototype.newMethod = () => {}; // Too late!

// Don't use document.querySelector inside component
// this.shadowRoot.querySelector() instead
```

---

## 🚀 What's Next?

Now that you understand Web Components, learn about **Shadow DOM** in detail:

👉 [Next: Shadow DOM →](./shadow-dom.md)

Or return to the [HTML Overview →](../index.md)

Master Web Components for reusable UI elements! 🧩
