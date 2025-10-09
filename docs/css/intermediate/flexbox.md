---
id: css-flexbox
title: CSS Flexbox - Complete Guide
description: Master CSS Flexbox for one-dimensional layouts. Learn flex containers, flex items, alignment, ordering, and build responsive layouts with ease.
keywords:
  [
    css flexbox,
    flex container,
    flex items,
    justify-content,
    align-items,
    flex-direction,
    flex-wrap,
    css layout,
    responsive design,
  ]
tags: [CSS, Flexbox, Layout, Intermediate]
sidebar_position: 1
---

# 📦 CSS Flexbox

Flexbox (Flexible Box Layout) is a powerful **one-dimensional** layout system for arranging items in rows or columns. It makes creating responsive layouts incredibly easy.

## 📖 What is Flexbox?

Flexbox layouts consist of:

- **Flex Container** - The parent element
- **Flex Items** - The child elements

```css
.container {
  display: flex; /* Creates flex container */
}
```

```html
<div class="container">
  <!-- Flex Container -->
  <div>Item 1</div>
  <!-- Flex Item -->
  <div>Item 2</div>
  <!-- Flex Item -->
  <div>Item 3</div>
  <!-- Flex Item -->
</div>
```

---

## 🎯 Flex Container Properties

###

display: flex

Defines a flex container.

```css
.container {
  display: flex; /* Block-level flex container */
  display: inline-flex; /* Inline-level flex container */
}
```

### flex-direction

Defines the **main axis** direction.

```css
.container {
  flex-direction: row; /* Default: left to right */
  flex-direction: row-reverse; /* Right to left */
  flex-direction: column; /* Top to bottom */
  flex-direction: column-reverse; /* Bottom to top */
}
```

**Examples:**

```css
/* Horizontal nav */
.nav {
  display: flex;
  flex-direction: row;
}

/* Vertical sidebar */
.sidebar {
  display: flex;
  flex-direction: column;
}

/* Reverse order */
.footer {
  display: flex;
  flex-direction: row-reverse;
}
```

### flex-wrap

Controls whether items wrap to new lines.

```css
.container {
  flex-wrap: nowrap; /* Default: single line */
  flex-wrap: wrap; /* Multi-line, wrap down */
  flex-wrap: wrap-reverse; /* Multi-line, wrap up */
}
```

**Examples:**

```css
/* Responsive card grid */
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  flex: 1 1 300px; /* Grow, shrink, base 300px */
}
```

### flex-flow (Shorthand)

Combines `flex-direction` and `flex-wrap`.

```css
.container {
  flex-flow: row wrap;
  /* Same as */
  flex-direction: row;
  flex-wrap: wrap;
}
```

### justify-content

Aligns items along the **main axis**.

```css
.container {
  justify-content: flex-start; /* Default: start */
  justify-content: flex-end; /* End */
  justify-content: center; /* Center */
  justify-content: space-between; /* Equal space between */
  justify-content: space-around; /* Equal space around */
  justify-content: space-evenly; /* Equal space everywhere */
}
```

**Visual Examples:**

```css
/* Center navigation */
.nav {
  display: flex;
  justify-content: center;
}

/* Space between header items */
.header {
  display: flex;
  justify-content: space-between;
}

/* Evenly spaced buttons */
.button-group {
  display: flex;
  justify-content: space-evenly;
}
```

### align-items

Aligns items along the **cross axis**.

```css
.container {
  align-items: stretch; /* Default: fill container */
  align-items: flex-start; /* Top */
  align-items: flex-end; /* Bottom */
  align-items: center; /* Middle */
  align-items: baseline; /* Text baseline */
}
```

**Examples:**

```css
/* Vertically centered nav */
.nav {
  display: flex;
  align-items: center;
  height: 60px;
}

/* Baseline-aligned text */
.text-row {
  display: flex;
  align-items: baseline;
}
```

### align-content

Aligns **multiple lines** along the cross axis (only works with flex-wrap).

```css
.container {
  flex-wrap: wrap;
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
  align-content: stretch; /* Default */
}
```

### gap

Space between flex items (modern browsers).

```css
.container {
  display: flex;
  gap: 1rem; /* All directions */
  gap: 1rem 2rem; /* row-gap column-gap */
  row-gap: 1rem; /* Vertical gap */
  column-gap: 2rem; /* Horizontal gap */
}
```

**Examples:**

```css
/* Card grid with spacing */
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

/* Navigation with spacing */
.nav {
  display: flex;
  gap: 1rem;
}
```

---

## 🎨 Flex Item Properties

### flex-grow

How much an item **grows** relative to others.

```css
.item {
  flex-grow: 0; /* Default: don't grow */
  flex-grow: 1; /* Grow equally */
  flex-grow: 2; /* Grow twice as much */
}
```

**Examples:**

```css
/* Equal columns */
.col {
  flex-grow: 1;
}

/* Sidebar layout */
.sidebar {
  flex-grow: 0;
  width: 250px;
}

.main {
  flex-grow: 1; /* Takes remaining space */
}
```

### flex-shrink

How much an item **shrinks** relative to others.

```css
.item {
  flex-shrink: 1; /* Default: can shrink */
  flex-shrink: 0; /* Don't shrink */
  flex-shrink: 2; /* Shrink twice as much */
}
```

**Examples:**

```css
/* Prevent logo from shrinking */
.logo {
  flex-shrink: 0;
}

/* Allow content to shrink */
.content {
  flex-shrink: 1;
}
```

### flex-basis

**Initial size** of a flex item before growing/shrinking.

```css
.item {
  flex-basis: auto; /* Default: content size */
  flex-basis: 0; /* Start from zero */
  flex-basis: 200px; /* Fixed initial size */
  flex-basis: 50%; /* Percentage */
}
```

**Examples:**

```css
/* Card with base width */
.card {
  flex-basis: 300px;
  flex-grow: 1;
}

/* Equal-width columns */
.col {
  flex-basis: 0;
  flex-grow: 1;
}
```

### flex (Shorthand)

Combines `flex-grow`, `flex-shrink`, and `flex-basis`.

```css
.item {
  flex: 1; /* flex: 1 1 0% */
  flex: 0 1 auto; /* Default */
  flex: 1 0 200px; /* Grow, don't shrink, 200px base */
}
```

**Common Patterns:**

```css
/* Equal flex items */
.item {
  flex: 1;
}

/* Fixed width, no grow/shrink */
.sidebar {
  flex: 0 0 250px;
}

/* Responsive cards */
.card {
  flex: 1 1 300px; /* Min 300px, can grow */
}
```

### align-self

Override `align-items` for a single item.

```css
.item {
  align-self: auto; /* Default: inherit from container */
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: baseline;
  align-self: stretch;
}
```

**Examples:**

```css
/* Most items centered, one at bottom */
.container {
  display: flex;
  align-items: center;
}

.special-item {
  align-self: flex-end;
}
```

### order

Controls the **visual order** of flex items.

```css
.item {
  order: 0; /* Default */
  order: 1; /* After default */
  order: -1; /* Before default */
}
```

**Examples:**

```css
/* Reorder on mobile */
.logo {
  order: 1;
}

.menu {
  order: 2;
}

.search {
  order: 3;
}

@media (max-width: 768px) {
  .menu {
    order: 3; /* Move menu last */
  }

  .search {
    order: 2; /* Move search second */
  }
}
```

---

## 🎯 Practical Examples

### Example 1: Navigation Bar

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
}

.nav-logo {
  flex-shrink: 0;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  color: white;
  text-decoration: none;
}
```

### Example 2: Card Layout

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.card {
  flex: 1 1 300px; /* Responsive cards */
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.card-title {
  margin-bottom: 0.5rem;
}

.card-description {
  flex: 1;
  margin-bottom: 1rem;
}

.card-button {
  align-self: flex-start;
}
```

### Example 3: Sidebar Layout

```css
.page {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  flex: 0 0 250px;
  background-color: #f5f5f5;
  padding: 2rem;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

/* Responsive: Stack on mobile */
@media (max-width: 768px) {
  .page {
    flex-direction: column;
  }

  .sidebar {
    flex: 0 0 auto;
  }
}
```

### Example 4: Centered Content

```css
/* Perfect centering */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}

/* Center modal */
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
```

### Example 5: Holy Grail Layout

```css
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  flex: 0 0 auto;
  padding: 1rem;
  background-color: #333;
  color: white;
}

.content {
  flex: 1;
  display: flex;
}

.sidebar-left {
  flex: 0 0 200px;
  background-color: #f5f5f5;
}

.main {
  flex: 1;
  padding: 2rem;
}

.sidebar-right {
  flex: 0 0 200px;
  background-color: #f5f5f5;
}

.footer {
  flex: 0 0 auto;
  padding: 1rem;
  background-color: #333;
  color: white;
  text-align: center;
}
```

### Example 6: Responsive Form

```css
.form-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-field {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.form-field label {
  margin-bottom: 0.5rem;
}

.form-field input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Stack on mobile */
@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }
}
```

---

## ✅ Best Practices

### 1. Use Flexbox for One-Dimensional Layouts

```css
/* Good: Row or column */
.nav {
  display: flex;
}
.sidebar {
  display: flex;
  flex-direction: column;
}

/* Consider Grid for two-dimensional */
.gallery {
  display: grid;
}
```

### 2. Use gap Instead of Margins

```css
/* Old way: margins */
.item {
  margin-right: 1rem;
}
.item:last-child {
  margin-right: 0;
}

/* Better: gap */
.container {
  display: flex;
  gap: 1rem;
}
```

### 3. Use flex Shorthand

```css
/* Verbose */
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}

/* Better */
.item {
  flex: 1;
}
```

### 4. Mobile-First Flexbox

```css
/* Mobile: stack */
.container {
  display: flex;
  flex-direction: column;
}

/* Desktop: row */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}
```

---

## ⚠️ Common Pitfalls

### ❌ Forgetting flex-wrap

```css
/* Bad: Items may shrink too much */
.container {
  display: flex;
}

/* Good: Allow wrapping */
.container {
  display: flex;
  flex-wrap: wrap;
}
```

### ❌ Not Setting flex-basis

```css
/* Bad: Items may not size as expected */
.item {
  flex: 1;
}

/* Good: Explicit sizing */
.item {
  flex: 1 1 300px;
}
```

### ❌ Mixing Flex with Float

```css
/* Bad: Don't mix */
.item {
  display: flex;
  float: left; /* Doesn't work with flex! */
}
```

---

## 🎓 Quick Reference

```css
/* Container Properties */
display: flex;
flex-direction: row | column | row-reverse | column-reverse;
flex-wrap: nowrap | wrap | wrap-reverse;
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
align-items: stretch | flex-start | flex-end | center | baseline;
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
gap: 1rem;

/* Item Properties */
flex-grow: 0;
flex-shrink: 1;
flex-basis: auto;
flex: 1 1 0%; /* Shorthand */
align-self: auto | flex-start | flex-end | center | baseline | stretch;
order: 0;
```

---

## 🚀 What's Next?

Now that you understand Flexbox, learn about **CSS Grid** for two-dimensional layouts:

👉 [Next: CSS Grid →](./grid.md)

Master Flexbox for powerful one-dimensional layouts! 📦
