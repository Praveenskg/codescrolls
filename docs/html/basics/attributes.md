---
id: html-attributes
title: HTML Attributes - Complete Guide
description: Master HTML attributes with practical examples. Learn global attributes, element-specific attributes, data attributes, and best practices.
keywords:
  [
    html attributes,
    html properties,
    global attributes,
    data attributes,
    aria attributes,
    html id,
    html class,
    html style,
  ]
tags: [HTML, Attributes, Properties, Global, Data, ARIA, Basics]
sidebar_position: 2
---

# 🏷️ HTML Attributes

HTML attributes provide additional information about HTML elements. They modify the behavior, appearance, or functionality of elements.

## 📖 What are HTML Attributes?

Attributes are **name-value pairs** that provide additional information about HTML elements.

```html
<!-- Basic attribute syntax -->
<element attribute="value">Content</element>

<!-- Multiple attributes -->
<img src="image.jpg" alt="Description" width="300" height="200" />

<!-- Boolean attributes -->
<input type="checkbox" checked disabled />
```

---

## 🌍 Global Attributes

Global attributes can be used on **any** HTML element.

### `id`

Provides a unique identifier for an element.

```html
<div id="header">Header content</div>
<h1 id="main-title">Main Title</h1>
<p id="intro">Introduction paragraph</p>
```

### `class`

Assigns CSS classes to elements.

```html
<div class="container">Content</div>
<p class="text-primary highlight">Important text</p>
<button class="btn btn-primary">Click me</button>
```

### `style`

Applies inline CSS styles.

```html
<p style="color: blue; font-size: 18px;">Styled text</p>
<div style="background-color: #f0f0f0; padding: 20px;">Styled div</div>
```

### `title`

Provides additional information about an element.

```html
<button title="Click to submit the form">Submit</button>
<img src="diagram.jpg" title="Process flow diagram" alt="Process diagram" />
<abbr title="HyperText Markup Language">HTML</abbr>
```

### `lang`

Specifies the language of the element's content.

```html
<html lang="en">
  <p lang="es">Hola mundo</p>
  <p lang="fr">Bonjour le monde</p>
</html>
```

### `dir`

Specifies the text direction.

```html
<p dir="ltr">Left-to-right text</p>
<p dir="rtl">نص من اليمين إلى اليسار</p>
<p dir="auto">Auto-detected direction</p>
```

### `tabindex`

Controls keyboard navigation order.

```html
<!-- Focusable -->
<button tabindex="1">First button</button>
<button tabindex="2">Second button</button>

<!-- Not focusable -->
<div tabindex="-1">Not keyboard accessible</div>
```

### `contenteditable`

Makes content editable by the user.

```html
<div contenteditable="true">
  <p>You can edit this text!</p>
</div>
```

### `spellcheck`

Enables spell checking.

```html
<textarea spellcheck="true">This text will be spell-checked</textarea>
<input type="text" spellcheck="false" />
```

### `hidden`

Hides the element from display.

```html
<div hidden>This content is hidden</div>
<div aria-hidden="true">Screen reader hidden</div>
```

### `data-*`

Custom data attributes for JavaScript access.

```html
<div data-user-id="123" data-role="admin">User info</div>
<button data-action="save" data-target="#form">Save</button>
```

---

## 🎯 Element-Specific Attributes

### Link Attributes (`<a>`)

```html
<!-- Basic link -->
<a href="https://example.com">Visit Example</a>

<!-- Open in new tab -->
<a href="https://example.com" target="_blank">Open in new tab</a>

<!-- Download link -->
<a href="document.pdf" download>Download PDF</a>

<!-- Email link -->
<a href="mailto:contact@example.com">Email us</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call us</a>

<!-- Relationship -->
<a href="/terms" rel="noopener">Terms of Service</a>

<!-- Link type -->
<a href="document.pdf" type="application/pdf">PDF Document</a>
```

### Image Attributes (`<img>`)

```html
<!-- Basic image -->
<img src="image.jpg" alt="Description" />

<!-- With dimensions -->
<img src="logo.png" alt="Logo" width="200" height="100" />

<!-- Loading behavior -->
<img src="photo.jpg" alt="Photo" loading="lazy" />

<!-- Responsive images -->
<img
  src="image.jpg"
  alt="Responsive image"
  srcset="image-small.jpg 480w, image-medium.jpg 768w, image-large.jpg 1024w"
  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
/>

<!-- Fallback -->
<img src="primary.jpg" alt="Image" onerror="this.src='fallback.jpg'" />
```

### Form Input Attributes

```html
<!-- Text input -->
<input type="text" name="username" placeholder="Enter username" maxlength="50" />

<!-- Email input -->
<input type="email" name="email" required autocomplete="email" />

<!-- Password -->
<input type="password" name="password" minlength="8" />

<!-- Number -->
<input type="number" name="age" min="1" max="120" step="1" />

<!-- Date -->
<input type="date" name="birthdate" />

<!-- Checkbox -->
<input type="checkbox" name="subscribe" checked />

<!-- Radio -->
<input type="radio" name="gender" value="male" checked />

<!-- File upload -->
<input type="file" name="avatar" accept="image/*" multiple />

<!-- Range slider -->
<input type="range" name="volume" min="0" max="100" value="50" />
```

### Meta Attributes (`<meta>`)

```html
<!-- Character encoding -->
<meta charset="UTF-8" />

<!-- Viewport for mobile -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- Page description -->
<meta name="description" content="Learn HTML, CSS, and JavaScript" />

<!-- Keywords -->
<meta name="keywords" content="html, css, javascript, web development" />

<!-- Author -->
<meta name="author" content="CodeScrolls" />

<!-- Robots -->
<meta name="robots" content="index, follow" />

<!-- Open Graph -->
<meta property="og:title" content="Learn Web Development" />
<meta property="og:description" content="Master HTML, CSS, and JavaScript" />
<meta property="og:image" content="/img/og-image.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Learn Web Development" />
```

### Table Attributes

```html
<table border="1" cellpadding="5" cellspacing="0">
  <caption>
    Employee Information
  </caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Position</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>Developer</td>
      <td>$75,000</td>
    </tr>
  </tbody>
</table>
```

### List Attributes

```html
<!-- Ordered list with custom start and type -->
<ol start="5" type="A">
  <li>First item</li>
  <li>Second item</li>
</ol>

<!-- Unordered list with custom bullet -->
<ul style="list-style-type: square;">
  <li>Square bullet</li>
  <li>Another item</li>
</ul>
```

---

## 🎨 CSS-Related Attributes

### Style Attribute

```html
<div style="color: blue; font-size: 18px; margin: 10px;">Styled content</div>
```

### Class Attribute

```html
<div class="container primary large">Multiple CSS classes</div>
```

### ID Attribute

```html
<div id="unique-element">Unique identifier</div>
```

---

## ♿ Accessibility Attributes (ARIA)

### Basic ARIA Attributes

```html
<!-- Label for screen readers -->
<button aria-label="Close dialog">×</button>

<!-- Describe expanded state -->
<button aria-expanded="false">Menu</button>

<!-- Hide from screen readers -->
<div aria-hidden="true">Decorative content</div>

<!-- Required field -->
<input type="email" aria-required="true" />

<!-- Live region for dynamic content -->
<div aria-live="polite" aria-atomic="true">Status messages appear here</div>
```

### ARIA Roles

```html
<!-- Navigation role -->
<nav role="navigation">
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<!-- Main content role -->
<main role="main">
  <h1>Page content</h1>
</main>

<!-- Banner role -->
<header role="banner">
  <h1>Site title</h1>
</header>
```

### ARIA Properties

```html
<!-- Button with description -->
<button aria-describedby="button-description">Save</button>
<div id="button-description">This will save your changes</div>

<!-- Form with error -->
<input type="email" aria-invalid="true" aria-describedby="email-error" />
<div id="email-error">Please enter a valid email address</div>

<!-- Progress bar -->
<div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75% complete</div>
```

---

## 📊 Data Attributes

Custom attributes for JavaScript data storage.

```html
<!-- Simple data attributes -->
<article data-article-id="123" data-category="tutorial">
  <h1>Article Title</h1>
</article>

<!-- Complex data -->
<div data-config='{"theme": "dark", "lang": "en"}'>Configuration</div>

<!-- Event handlers -->
<button data-action="save" data-target="#form">Save</button>

<!-- Analytics -->
<div data-track="impression" data-section="hero">Trackable content</div>
```

### Accessing Data Attributes in JavaScript

```javascript
// Get data attributes
const element = document.querySelector('[data-article-id]');
const articleId = element.dataset.articleId; // "123"
const category = element.dataset.category; // "tutorial"

// Set data attributes
element.dataset.status = 'published';

// Check if data attribute exists
if (element.hasAttribute('data-article-id')) {
  // Handle attribute
}
```

---

## 🎯 Event Attributes

### Mouse Events

```html
<button onclick="alert('Clicked!')">Click me</button>
<div onmouseover="this.style.background='yellow'" onmouseout="this.style.background='white'">
  Hover me
</div>
```

### Form Events

```html
<form onsubmit="return validateForm()">
  <input type="text" onfocus="showHelp()" onblur="hideHelp()" />
  <input type="text" oninput="liveValidate(this)" />
</form>
```

### Keyboard Events

```html
<input type="text" onkeydown="handleKey(event)" onkeyup="validateInput()" />
```

### Window Events

```html
<body onload="initPage()" onunload="cleanup()">
  Page content
</body>
```

---

## 🏷️ Custom Attributes

### Microdata Attributes

```html
<div itemscope itemtype="https://schema.org/Person">
  <span itemprop="name">John Doe</span>
  <span itemprop="jobTitle">Software Developer</span>
  <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
    <span itemprop="streetAddress">123 Main St</span>
    <span itemprop="addressLocality">Anytown</span>
    <span itemprop="addressRegion">CA</span>
  </div>
</div>
```

### Custom Data Attributes

```html
<!-- Application-specific data -->
<div data-widget-id="widget-123" data-widget-type="chart" data-chart-type="bar">Chart widget</div>

<!-- User preferences -->
<button data-theme="dark" data-language="en" data-font-size="large">Settings</button>
```

---

## 📋 Best Practices

### ✅ DO:

```html
<!-- Use semantic attributes -->
<img src="photo.jpg" alt="A person smiling at the camera" />
<button aria-label="Close menu" onclick="closeMenu()">×</button>

<!-- Use data attributes for JS data -->
<button data-action="delete" data-item-id="123">Delete</button>

<!-- Use proper ARIA attributes -->
<div role="tablist" aria-label="Project tabs">
  <button role="tab" aria-selected="true">Overview</button>
</div>

<!-- Use descriptive titles -->
<input type="text" title="Enter your full name as it appears on your ID" />

<!-- Use proper language attributes -->
<html lang="en">
  <p lang="es">Hola</p>
</html>
```

### ❌ DON'T:

```html
<!-- Don't use invalid attribute names -->
<div mycustomattribute="value">Invalid</div>

<!-- Don't use spaces in ID/class names -->
<div id="my element" class="my class">Spaces are bad</div>

<!-- Don't duplicate IDs -->
<div id="header">Header 1</div>
<div id="header">Header 2</div>
<!-- Bad! IDs must be unique -->

<!-- Don't use presentational attributes (use CSS) -->
<table border="1" bgcolor="red">
  <!-- Use CSS instead -->
</table>
```

---

## 🎯 Complete Example with Attributes

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Learn HTML attributes with examples" />
    <meta name="author" content="CodeScrolls" />
    <title>HTML Attributes Guide</title>
  </head>
  <body data-theme="light" data-language="en">
    <header role="banner">
      <h1 id="main-heading">HTML Attributes Guide</h1>
      <nav role="navigation" aria-label="Main navigation">
        <ul>
          <li><a href="#basics" aria-describedby="basics-desc">Basics</a></li>
          <li><a href="#advanced" aria-describedby="advanced-desc">Advanced</a></li>
        </ul>
      </nav>
    </header>

    <main role="main">
      <section id="basics" aria-labelledby="basics-heading">
        <h2 id="basics-heading">Basic Attributes</h2>
        <p id="basics-desc">Learn about fundamental HTML attributes.</p>

        <article data-article-id="123" data-category="tutorial">
          <h3>Global Attributes</h3>
          <p class="intro highlight" title="Important information">
            Global attributes work on any HTML element.
          </p>

          <img
            src="diagram.jpg"
            alt="HTML attribute diagram"
            width="400"
            height="300"
            loading="lazy"
            title="Visual representation of HTML attributes"
          />

          <button
            type="button"
            class="btn btn-primary"
            onclick="showModal()"
            aria-label="Open help modal"
            data-action="help"
            data-target="modal"
            tabindex="1"
          >
            Get Help
          </button>
        </article>
      </section>

      <section id="advanced" aria-labelledby="advanced-heading">
        <h2 id="advanced-heading">Advanced Attributes</h2>
        <p id="advanced-desc">Explore advanced HTML attributes and ARIA.</p>

        <form action="/submit" method="post" novalidate>
          <label for="email" class="required">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            aria-required="true"
            aria-describedby="email-help"
            placeholder="Enter your email"
            autocomplete="email"
            spellcheck="false"
          />
          <div id="email-help" class="help-text">We'll never share your email with anyone.</div>

          <button
            type="submit"
            disabled
            aria-disabled="true"
            title="Form is not ready for submission"
          >
            Submit
          </button>
        </form>
      </section>
    </main>

    <footer role="contentinfo">
      <p>&copy; 2025 CodeScrolls. All rights reserved.</p>
    </footer>
  </body>
</html>
```

---

## 🚀 What's Next?

Now that you understand HTML attributes, learn about **Semantic HTML**:

👉 [Next: Semantic HTML →](./semantic-html.md)

Or return to the [HTML Overview →](../index.md)

Master HTML attributes for enhanced web functionality! 🏷️
