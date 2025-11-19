---
id: css-selectors
title: CSS Selectors - Complete Guide
description:
  Master CSS selectors including element, class, ID, attribute, pseudo-class,
  and combinators. Learn how to target HTML elements with precision and
  efficiency.
keywords:
  [
    css selectors,
    element selector,
    class selector,
    id selector,
    attribute selector,
    pseudo-class,
    css combinators,
    css specificity,
  ]
tags: [CSS, Selectors, Basics]
sidebar_position: 1
---

# 🎯 CSS Selectors

CSS selectors are **patterns** used to select and style HTML elements. Mastering
selectors is fundamental to writing efficient and maintainable CSS.

## 📖 What are Selectors?

Selectors tell the browser which HTML elements to style. They form the first
part of a CSS rule.

```css
/* Selector { Property: Value; } */
h1 {
  color: blue;
}
```

## 1️⃣ Universal Selector (\*)

Selects **all elements** on the page.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Use Cases:**

- Reset default browser styles
- Apply global box-sizing
- Set baseline styles

**⚠️ Warning**: Overuse can impact performance on large pages.

---

## 2️⃣ Element Selector

Selects all elements of a **specific type**.

```css
/* Selects all <p> elements */
p {
  line-height: 1.6;
  color: #333;
}

/* Selects all <h1> elements */
h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

/* Selects all <a> elements */
a {
  text-decoration: none;
  color: #0066cc;
}
```

**Common Elements:**

- `body`, `header`, `nav`, `main`, `footer`
- `h1`-`h6`, `p`, `span`, `div`
- `ul`, `ol`, `li`
- `a`, `button`, `input`

---

## 3️⃣ Class Selector (.)

Selects elements with a **specific class** attribute.

```css
/* Selects elements with class="button" */
.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
}

/* Multiple elements can share the same class */
.text-center {
  text-align: center;
}

.mt-1 {
  margin-top: 1rem;
}
```

**HTML:**

```html
<button class="button">Click Me</button>
<a href="#" class="button">Link Button</a>
<p class="text-center mt-1">Centered text</p>
```

**Best Practices:**

- Use descriptive, lowercase names
- Separate words with hyphens (kebab-case)
- Reusable across multiple elements
- Most common selector in modern CSS

---

## 4️⃣ ID Selector (#)

Selects a **single element** with a specific ID.

```css
/* Selects element with id="header" */
#header {
  background-color: #f8f9fa;
  padding: 20px;
}

#navigation {
  position: sticky;
  top: 0;
}
```

**HTML:**

```html
<header id="header">
  <nav id="navigation">...</nav>
</header>
```

**⚠️ Important:**

- IDs must be **unique** per page
- Higher specificity than classes
- Use sparingly (prefer classes)
- Good for JavaScript targeting

---

## 5️⃣ Attribute Selectors

Select elements based on **attribute values**.

### Basic Attribute Selectors

```css
/* Has attribute */
input[required] {
  border: 2px solid red;
}

/* Exact match */
input[type='email'] {
  border-color: blue;
}

/* Contains word */
a[href*='google'] {
  color: #4285f4;
}

/* Starts with */
a[href^="https://"]
{
  padding-left: 20px;
  background: url('secure-icon.svg') no-repeat left center;
}

/* Ends with */
a[href$='.pdf'] {
  color: red;
}
a[href$='.zip'] {
  color: orange;
}
```

**HTML:**

```html
<input type="text" required />
<input type="email" />
<a href="https://google.com">Google</a>
<a href="document.pdf">Download PDF</a>
```

---

## 6️⃣ Grouping Selectors

Apply the **same styles** to multiple selectors.

```css
/* Without grouping (repetitive) */
h1 {
  color: #333;
  font-weight: bold;
}
h2 {
  color: #333;
  font-weight: bold;
}
h3 {
  color: #333;
  font-weight: bold;
}

/* With grouping (efficient) */
h1,
h2,
h3 {
  color: #333;
  font-weight: bold;
}

/* More examples */
button,
input[type='submit'],
.btn {
  cursor: pointer;
  border: none;
  padding: 10px 20px;
}
```

---

## 7️⃣ Combinators

### Descendant Combinator (space)

Selects elements **inside** another element (at any level).

```css
/* Selects all <p> inside <article> */
article p {
  line-height: 1.8;
}

/* Selects all <a> inside <nav> */
nav a {
  text-decoration: none;
  padding: 10px;
}

/* Can nest multiple levels */
header nav ul li a {
  color: white;
}
```

### Child Combinator (>)

Selects **direct children** only.

```css
/* Selects only direct <li> children of <ul> */
ul > li {
  list-style-type: disc;
}

/* Difference from descendant */
div p {
  color: blue;
} /* All <p> inside <div> */
div > p {
  color: red;
} /* Only direct <p> children */
```

**HTML:**

```html
<div>
  <p>Direct child (red)</p>
  <section>
    <p>Not direct child (blue)</p>
  </section>
</div>
```

### Adjacent Sibling Combinator (+)

Selects the **immediately following** sibling.

```css
/* Selects <p> immediately after <h2> */
h2 + p {
  font-size: 1.2rem;
  color: #666;
}

/* Add margin to paragraphs after headings */
h1 + p,
h2 + p,
h3 + p {
  margin-top: 0.5rem;
}
```

### General Sibling Combinator (~)

Selects **all following** siblings.

```css
/* Selects all <p> after <h2> */
h2 ~ p {
  color: #555;
}
```

---

## 8️⃣ Pseudo-Classes

Select elements in a **specific state**.

### Interactive States

```css
/* Link states */
a:link {
  color: blue;
}
a:visited {
  color: purple;
}
a:hover {
  color: red;
  text-decoration: underline;
}
a:active {
  color: darkred;
}

/* Button states */
button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

button:active {
  transform: scale(0.95);
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Input states */
input:focus {
  outline: 2px solid #007bff;
  border-color: #007bff;
}

input:disabled {
  background-color: #e9ecef;
}
```

### Structural Pseudo-Classes

```css
/* First and last */
li:first-child {
  border-top: 2px solid #ddd;
}

li:last-child {
  border-bottom: 2px solid #ddd;
}

/* Nth child */
tr:nth-child(odd) {
  background-color: #f9f9f9;
}

tr:nth-child(even) {
  background-color: #ffffff;
}

/* Every 3rd element */
.item:nth-child(3n) {
  margin-right: 0;
}

/* First 3 elements */
.card:nth-child(-n + 3) {
  background-color: #ffeb3b;
}
```

### Form Pseudo-Classes

```css
/* Valid and invalid */
input:valid {
  border-color: green;
}

input:invalid {
  border-color: red;
}

/* Required and optional */
input:required {
  border-left: 3px solid red;
}

input:optional {
  border-left: 3px solid green;
}

/* Checked state */
input[type='checkbox']:checked {
  accent-color: #007bff;
}
```

### Other Useful Pseudo-Classes

```css
/* Empty elements */
p:empty {
  display: none;
}

/* Not selector */
button:not(.primary) {
  background-color: #6c757d;
}

/* Target (from URL hash) */
:target {
  background-color: #ffff00;
  animation: highlight 2s;
}
```

---

## 9️⃣ Pseudo-Elements

Select **parts of elements**.

```css
/* First letter */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
  float: left;
  margin-right: 5px;
}

/* First line */
p::first-line {
  font-weight: bold;
  color: #333;
}

/* Before and after */
.quote::before {
  content: '"';
  font-size: 3em;
  color: #ccc;
}

.quote::after {
  content: '"';
  font-size: 3em;
  color: #ccc;
}

/* Add icons */
.external-link::after {
  content: ' ↗';
  font-size: 0.8em;
}

/* Selection color */
::selection {
  background-color: #007bff;
  color: white;
}
```

---

## 🎯 CSS Specificity

When multiple rules target the same element, **specificity** determines which
wins.

### Specificity Hierarchy (Highest to Lowest)

1. **Inline styles**: `style="color: red"` (1,0,0,0)
2. **IDs**: `#header` (0,1,0,0)
3. **Classes, Attributes, Pseudo-classes**: `.button`, `[type="text"]`, `:hover`
   (0,0,1,0)
4. **Elements, Pseudo-elements**: `p`, `::before` (0,0,0,1)

### Calculating Specificity

```css
/* (0,0,0,1) - Element */
p {
  color: blue;
}

/* (0,0,1,0) - Class */
.text {
  color: red;
}

/* (0,1,0,0) - ID */
#main {
  color: green;
}

/* (0,0,1,1) - Class + Element */
p.text {
  color: orange;
}

/* (0,1,1,1) - ID + Class + Element */
#main .text p {
  color: purple;
}
```

### Winner Examples

```css
/* Which color wins? */
p {
  color: blue;
} /* (0,0,0,1) */
.paragraph {
  color: red;
} /* (0,0,1,0) - WINS */

/* Which color wins? */
.text {
  color: green;
} /* (0,0,1,0) */
#content .text {
  color: orange;
} /* (0,1,1,0) - WINS */
```

---

## ✅ Best Practices

1. **Prefer Classes Over IDs**
   - More reusable and flexible
   - Lower specificity makes overriding easier

2. **Use Descriptive Names**
   - `.btn-primary` instead of `.blue-button`
   - `.card-header` instead of `.top-part`

3. **Keep Specificity Low**
   - Avoid deep nesting
   - Easier to maintain and override

4. **Use Combinators Wisely**
   - Descendant selectors are powerful but can be slow
   - Child combinators are more specific and faster

5. **Group Common Styles**
   - Reduces repetition
   - Easier to maintain

---

## ⚠️ Common Pitfalls

### ❌ Over-Specific Selectors

```css
/* Bad: Too specific */
div#content article.post div.content p.text {
  color: blue;
}

/* Good: Simplified */
.post-text {
  color: blue;
}
```

### ❌ Using IDs for Styling

```css
/* Bad: Hard to override */
#button {
  background-color: blue;
}

/* Good: Use classes */
.button {
  background-color: blue;
}
```

### ❌ !important Overuse

```css
/* Bad: Avoid unless absolutely necessary */
.text {
  color: red !important;
}

/* Good: Fix specificity instead */
.container .text {
  color: red;
}
```

---

## 🎯 Practical Example

```css
/* Real-world navigation styling */
.nav {
  background-color: #333;
  padding: 1rem;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
}

.nav a:hover {
  background-color: #555;
  border-radius: 4px;
}

.nav a.active {
  background-color: #007bff;
  border-radius: 4px;
}
```

**HTML:**

```html
<nav class="nav">
  <ul>
    <li><a href="/" class="active">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

---

## 🚀 What's Next?

Now that you understand selectors, learn about the **Box Model**:

👉 [Next: Box Model →](./box-model.md)

---

## 🆕 Modern Selectors

### :has() Parent Selector

The `:has()` pseudo-class selects parent elements based on their children.

```css
/* Select card that contains an image */
.card:has(img) {
  border: 2px solid blue;
}

/* Select form that has invalid input */
form:has(input:invalid) {
  border-color: red;
}

/* Select list item that has a link */
li:has(a) {
  font-weight: bold;
}

/* Select article that has h2 */
article:has(h2) {
  padding: 2rem;
}

/* Complex: Select parent with multiple conditions */
.card:has(img:hover) {
  transform: scale(1.05);
}

/* Select nav that has active link */
nav:has(a.active) {
  background-color: #f0f0f0;
}

/* Select container without specific child */
.container:not(:has(.error)) {
  border-color: green;
}
```

**Browser Support**: Chrome 105+, Firefox 121+, Safari 15.4+

### CSS Nesting

Native CSS nesting allows cleaner, more maintainable stylesheets.

```css
/* Basic nesting */
.card {
  padding: 1rem;
  background: white;

  /* Nested selector */
  .title {
    font-size: 1.5rem;
    color: #333;
  }

  .content {
    margin-top: 1rem;
  }

  /* Pseudo-classes */
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  /* Media queries */
  @media (max-width: 768px) {
    padding: 0.5rem;
  }
}

/* Complex nesting */
.button {
  padding: 0.5rem 1rem;

  &.primary {
    background-color: blue;
    color: white;
  }

  &.secondary {
    background-color: gray;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon {
    margin-right: 0.5rem;
  }
}

/* Nesting with combinators */
.nav {
  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
```

**Browser Support**: Chrome 112+, Firefox 117+, Safari 16.5+

**Note**: The `&` symbol represents the parent selector.

---

## 📚 Quick Reference

```css
/* Universal */
* {
}

/* Element */
p {
}

/* Class */
.class-name {
}

/* ID */
#id-name {
}

/* Attribute */
[attribute] {
}
[attribute='value'] {
}

/* Combinators */
div p {
} /* Descendant */
div > p {
} /* Child */
h2 + p {
} /* Adjacent sibling */
h2 ~ p {
} /* General sibling */

/* Pseudo-classes */
:hover, :focus, :active
:first-child, :last-child
:nth-child(n)
:has()         /* Parent selector */

/* Pseudo-elements */
::before, ::after
::first-letter, ::first-line

/* Nesting */
.parent {
  .child {
  }
  &:hover {
  }
}
```

Master these selectors and you'll have precise control over your CSS! 🎯
