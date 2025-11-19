---
id: html-elements
title: HTML Elements - Complete Reference Guide
description:
  Master all HTML elements with practical examples. Learn semantic elements,
  inline vs block elements, and best practices for structuring web content.
keywords:
  [
    html elements,
    html tags,
    semantic html,
    block elements,
    inline elements,
    html structure,
    html reference,
  ]
tags: [HTML, Elements, Tags, Semantic, Structure, Basics]
sidebar_position: 1
---

# 🏗️ HTML Elements

HTML elements are the building blocks of web pages. They define the structure
and content of your website using tags that tell browsers how to display
different types of content.

## 📖 What are HTML Elements?

HTML elements are represented by **tags** - opening tags `<tag>`, closing tags
`</tag>`, and sometimes self-closing tags `<tag />`.

```html
<!-- Opening and closing tags -->
<p>This is a paragraph element</p>

<!-- Self-closing tag -->
<img src="image.jpg" alt="Description" />

<!-- Element with attributes -->
<a href="https://example.com" target="_blank">Link text</a>
```

---

## 🎯 Document Structure Elements

### `<!DOCTYPE html>`

Declares the document type and version of HTML.

```html
<!DOCTYPE html>
<html lang="en">
  <!-- Your content here -->
</html>
```

### `<html>`

The root element that contains all other HTML elements.

```html
<html lang="en">
  <head>
    <!-- Document metadata -->
  </head>
  <body>
    <!-- Document content -->
  </body>
</html>
```

### `<head>`

Contains metadata about the document.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Website</title>
  <link rel="stylesheet" href="styles.css" />
  <script src="script.js" defer></script>
</head>
```

### Modern Script Loading

Enhanced script loading with modules and security.

```html
<!-- ES Modules (modern JavaScript) -->
<script type="module" src="/app.js"></script>

<!-- Fallback for older browsers -->
<script nomodule src="/app-legacy.js"></script>

<!-- Subresource Integrity (SRI) -->
<script
  src="https://cdn.example.com/library.js"
  integrity="sha384-abc123..."
  crossorigin="anonymous"
></script>

<!-- Defer vs Async -->
<script src="script.js" defer></script>
<!-- Executes after HTML parsing -->
<script src="analytics.js" async></script>
<!-- Executes immediately when loaded -->

<!-- Module with import map -->
<script type="importmap">
  {
    "imports": {
      "lodash": "https://cdn.example.com/lodash.js"
    }
  }
</script>
<script type="module">
  import _ from 'lodash';
  // Use lodash
</script>
```

### `<body>`

Contains all the visible content of the web page.

```html
<body>
  <header>Welcome to my site</header>
  <main>
    <h1>Main content</h1>
    <p>This is the primary content.</p>
  </main>
  <footer>Copyright 2025</footer>
</body>
```

---

## 📝 Text Content Elements

### Headings (`<h1>` to `<h6>`)

Define headings with different levels of importance.

```html
<h1>Main heading (most important)</h1>
<h2>Section heading</h2>
<h3>Subsection heading</h3>
<h4>Sub-subsection heading</h4>
<h5>Minor heading</h5>
<h6>Least important heading</h6>
```

### Paragraphs (`<p>`)

Define paragraphs of text.

```html
<p>This is a paragraph of text.</p>
<p>Another paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
```

### Line Breaks (`<br>`)

Creates a line break within text.

```html
<p>
  First line<br />
  Second line<br />
  Third line
</p>
```

### Horizontal Rule (`<hr>`)

Creates a thematic break between sections.

```html
<section>
  <h2>First Section</h2>
  <p>Content here</p>
</section>

<hr />

<section>
  <h2>Second Section</h2>
  <p>More content</p>
</section>
```

---

## 🎨 Text Formatting Elements

### Bold Text

```html
<!-- Strong importance -->
<strong>Important text</strong>

<!-- Alternative (less semantic) -->
<b>Bold text</b>
```

### Italic Text

```html
<!-- Emphasis -->
<em>Emphasized text</em>

<!-- Alternative (less semantic) -->
<i>Italic text</i>
```

### Underlined Text

```html
<u>Underlined text</u>
```

### Strikethrough Text

```html
<s>Strikethrough text</s> <del>Deleted text</del>
```

### Subscript and Superscript

```html
<p>The formula is H<sub>2</sub>O</p>
<p>The power is 2<sup>3</sup> = 8</p>
```

### Code Text

```html
<p>Use the <code>console.log()</code> function for debugging.</p>
<pre>
  <code>
    function hello() {
      console.log('Hello, World!');
    }
  </code>
</pre>
```

### Keyboard Input

```html
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>
```

### Sample Output

```html
<samp>Program output: Hello, World!</samp>
```

### Variables

```html
<p>The value of <var>x</var> is 42.</p>
```

---

## 🔗 Links and Navigation

### Hyperlinks (`<a>`)

Creates links to other pages or resources.

```html
<!-- External link -->
<a href="https://example.com">Visit Example</a>

<!-- Internal link -->
<a href="/about">About Us</a>

<!-- Email link -->
<a href="mailto:contact@example.com">Email Us</a>

<!-- Phone link -->
<a href="tel:+1234567890">Call Us</a>

<!-- Link with target -->
<a href="https://example.com" target="_blank" rel="noopener">Open in New Tab</a>

<!-- Download link -->
<a href="document.pdf" download>Download PDF</a>
```

### Navigation (`<nav>`)

Defines a section with navigation links.

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

---

## 📋 Lists

### Unordered Lists (`<ul>`)

Creates bullet-point lists.

```html
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>
```

### Ordered Lists (`<ol>`)

Creates numbered lists.

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

<!-- With custom start number -->
<ol start="10">
  <li>Tenth item</li>
  <li>Eleventh item</li>
</ol>

<!-- With custom numbering type -->
<ol type="A">
  <li>Item A</li>
  <li>Item B</li>
</ol>
```

### Description Lists (`<dl>`)

Creates lists of terms and descriptions.

```html
<dl>
  <dt>HTML</dt>
  <dd>
    HyperText Markup Language - the standard markup language for web pages
  </dd>

  <dt>CSS</dt>
  <dd>
    Cascading Style Sheets - used to describe the presentation of a document
  </dd>

  <dt>JavaScript</dt>
  <dd>A programming language that enables interactive web pages</dd>
</dl>
```

### Nested Lists

```html
<ul>
  <li>
    Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>
    Vegetables
    <ul>
      <li>Carrot</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>
```

---

## 🖼️ Images and Media

### Images (`<img>`)

Embeds images in the page.

```html
<!-- Basic image -->
<img src="image.jpg" alt="Description of image" />

<!-- Image with dimensions -->
<img src="logo.png" alt="Company Logo" width="200" height="100" />

<!-- Responsive image -->
<img
  src="photo.jpg"
  alt="Beautiful landscape"
  style="max-width: 100%; height: auto;"
/>

<!-- Image with fallback -->
<img src="primary.jpg" alt="Main image" onerror="this.src='fallback.jpg'" />
```

### Figures (`<figure>` and `<figcaption>`)

Groups media content with captions.

```html
<figure>
  <img src="diagram.jpg" alt="Process diagram" />
  <figcaption>The process flow from start to finish</figcaption>
</figure>
```

### Modern Image Attributes

Enhanced image loading and performance.

```html
<!-- Priority loading -->
<img src="hero.jpg" alt="Hero image" loading="eager" fetchpriority="high" />

<!-- Async decoding for better performance -->
<img src="photo.jpg" alt="Photo" decoding="async" />

<!-- Referrer policy -->
<img src="external.jpg" alt="External image" referrerpolicy="no-referrer" />

<!-- Combined modern attributes -->
<img
  src="image.jpg"
  alt="Description"
  loading="lazy"
  fetchpriority="low"
  decoding="async"
  referrerpolicy="strict-origin-when-cross-origin"
/>
```

---

## 📊 Block vs Inline Elements

### Block Elements

Occupy the full width available and start on a new line.

```html
<!-- Block elements -->
<div>Division container</div>
<p>Paragraph</p>
<h1>Heading</h1>
<ul>
  <li>List item</li>
</ul>
<table>
  Table
</table>
<section>Section</section>
<article>Article</article>
<header>Header</header>
<footer>Footer</footer>
```

### Inline Elements

Only take up as much width as necessary and don't force line breaks.

```html
<!-- Inline elements -->
<span>Inline text</span>
<a href="#">Link</a>
<strong>Bold text</strong>
<em>Italic text</em>
<img src="icon.png" alt="icon" />
<input type="text" />
<button>Button</button>
<code>Code snippet</code>
```

---

## 🏗️ Structural Elements

### Divisions (`<div>`)

Generic container for grouping content.

```html
<div class="container">
  <div class="header">Header content</div>
  <div class="content">Main content</div>
  <div class="footer">Footer content</div>
</div>
```

### Spans (`<span>`)

Generic inline container.

```html
<p>This is <span class="highlight">important</span> text.</p>
```

---

## 🎭 Modern Interactive Elements

### Dialog (`<dialog>`)

Native modal dialogs without JavaScript frameworks.

```html
<!-- Basic dialog -->
<dialog id="myDialog">
  <h2>Dialog Title</h2>
  <p>Dialog content goes here.</p>
  <form method="dialog">
    <button>Close</button>
  </form>
</dialog>

<button onclick="document.getElementById('myDialog').showModal()">
  Open Dialog
</button>

<!-- Modal dialog (blocks interaction) -->
<dialog id="modalDialog">
  <h2>Important Notice</h2>
  <p>This is a modal dialog that blocks page interaction.</p>
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="confirm">Confirm</button>
  </form>
</dialog>

<!-- Non-modal dialog -->
<dialog id="infoDialog">
  <h2>Information</h2>
  <p>This dialog doesn't block interaction.</p>
  <button onclick="document.getElementById('infoDialog').close()">Close</button>
</dialog>
```

**Dialog Methods:**

```javascript
// Show as modal (blocks interaction)
dialog.showModal();

// Show as non-modal
dialog.show();

// Close dialog
dialog.close();

// Close with return value
dialog.close('user-confirmed');
```

**Dialog Events:**

```javascript
dialog.addEventListener('close', () => {
  console.log('Dialog closed');
  console.log('Return value:', dialog.returnValue);
});

dialog.addEventListener('cancel', () => {
  console.log('Dialog cancelled (ESC key)');
});
```

### Search (`<search>`)

Semantic container for search functionality.

```html
<!-- Basic search -->
<search>
  <form role="search" action="/search" method="get">
    <label for="search-input">Search</label>
    <input type="search" id="search-input" name="q" />
    <button type="submit">Search</button>
  </form>
</search>

<!-- Search with results -->
<search>
  <form role="search">
    <input type="search" name="q" placeholder="Search..." />
    <button type="submit">🔍</button>
  </form>

  <section aria-label="Search results">
    <!-- Search results appear here -->
  </section>
</search>
```

### Template (`<template>`)

Client-side templating for reusable HTML content.

```html
<!-- Template definition -->
<template id="user-card">
  <div class="user-card">
    <h3 class="user-name"></h3>
    <p class="user-email"></p>
    <img class="user-avatar" src="" alt="" />
  </div>
</template>

<!-- Using template with JavaScript -->
<script>
  const template = document.getElementById('user-card');
  const clone = template.content.cloneNode(true);

  clone.querySelector('.user-name').textContent = 'John Doe';
  clone.querySelector('.user-email').textContent = 'john@example.com';
  clone.querySelector('.user-avatar').src = 'avatar.jpg';
  clone.querySelector('.user-avatar').alt = 'John Doe avatar';

  document.body.appendChild(clone);
</script>

<!-- Multiple template instances -->
<template id="list-item">
  <li class="item">
    <span class="item-title"></span>
    <button class="delete-btn">Delete</button>
  </li>
</template>

<script>
  function addItem(title) {
    const template = document.getElementById('list-item');
    const clone = template.content.cloneNode(true);
    clone.querySelector('.item-title').textContent = title;

    const list = document.querySelector('ul');
    list.appendChild(clone);
  }
</script>
```

---

## 📝 Form Elements

### Forms (`<form>`)

Container for form controls.

```html
<form action="/submit" method="post">
  <!-- Form controls go here -->
</form>
```

### Input Fields

```html
<!-- Text input -->
<input type="text" name="username" placeholder="Enter username" />

<!-- Password input -->
<input type="password" name="password" />

<!-- Email input -->
<input type="email" name="email" />

<!-- Number input -->
<input type="number" name="age" min="1" max="120" />

<!-- Date input -->
<input type="date" name="birthdate" />

<!-- Checkbox -->
<input type="checkbox" name="subscribe" id="subscribe" />
<label for="subscribe">Subscribe to newsletter</label>

<!-- Radio buttons -->
<input type="radio" name="gender" value="male" id="male" />
<label for="male">Male</label>

<input type="radio" name="gender" value="female" id="female" />
<label for="female">Female</label>
```

### Textarea

```html
<textarea name="message" rows="5" cols="30" placeholder="Enter your message">
  Default text
</textarea>
```

### Select Dropdown

```html
<select name="country">
  <option value="">Select a country</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</select>
```

### Buttons

```html
<!-- Submit button -->
<button type="submit">Submit Form</button>

<!-- Reset button -->
<button type="reset">Reset Form</button>

<!-- Regular button -->
<button type="button" onclick="alert('Clicked!')">Click Me</button>

<!-- Input button -->
<input type="submit" value="Submit" />
```

---

## 📋 Best Practices

### ✅ DO:

```html
<!-- Use semantic elements -->
<header>Site header</header>
<nav>Navigation menu</nav>
<main>Main content</main>
<section>Content sections</section>
<article>Articles</article>
<aside>Sidebars</aside>
<footer>Site footer</footer>

<!-- Always include alt text for images -->
<img src="photo.jpg" alt="A beautiful sunset over mountains" />

<!-- Use proper heading hierarchy -->
<h1>Main title</h1>
<h2>Section title</h2>
<h3>Subsection title</h3>

<!-- Use labels for form controls -->
<label for="email">Email address:</label>
<input type="email" id="email" name="email" />
```

### ❌ DON'T:

```html
<!-- Don't use inline styles (use CSS instead) -->
<p style="color: red; font-size: 20px;">Styled paragraph</p>

<!-- Don't skip heading levels -->
<h1>Title</h1>
<h3>Skip h2</h3>
<!-- Bad practice -->

<!-- Don't use div for everything -->
<div>Header content</div>
<!-- Use <header> instead -->
<div>Navigation</div>
<!-- Use <nav> instead -->

<!-- Don't forget closing tags -->
<p>Unclosed paragraph</p>
<div>
  Unclosed div

  <!-- Don't use presentational elements -->
  <b>Bold text</b>
  <!-- Use <strong> instead -->
  <i>Italic text</i>
  <!-- Use <em> instead -->
</div>
```

---

## 🎯 Complete HTML Document Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My HTML Page</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
      }
      .highlight {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Welcome to My Website</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="home">
        <h2>Home Section</h2>
        <p>
          This is the <span class="highlight">main content</span> of the page.
        </p>

        <article>
          <h3>Article Title</h3>
          <p>This is an article with some content.</p>
          <figure>
            <img src="diagram.jpg" alt="Process diagram" />
            <figcaption>A diagram showing the process</figcaption>
          </figure>
        </article>
      </section>

      <section id="about">
        <h2>About Section</h2>
        <p>Learn more about us:</p>
        <ul>
          <li>Our mission</li>
          <li>Our team</li>
          <li>Our values</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact Section</h2>
        <form action="/submit" method="post">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="5"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 My Website. All rights reserved.</p>
    </footer>
  </body>
</html>
```

---

## 🚀 What's Next?

Now that you understand HTML elements, learn about **HTML Attributes**:

👉 [Next: HTML Attributes →](./attributes.md)

Or return to the [HTML Overview →](../index.md)

Master HTML elements for well-structured web content! 🏗️
