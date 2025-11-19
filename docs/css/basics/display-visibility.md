---
id: css-display-visibility
title: CSS Display & Visibility - Complete Guide
description:
  Master CSS display property including block, inline, inline-block, flex, grid,
  none. Learn visibility, opacity, and how elements render on the page.
keywords:
  [
    css display,
    display block,
    display inline,
    display flex,
    display grid,
    visibility hidden,
    display none,
    css layout,
    inline-block,
  ]
tags: [CSS, Display, Visibility, Layout, Basics]
sidebar_position: 6
---

# 👁️ CSS Display & Visibility

The `display` property is one of the most important CSS properties, controlling
how elements are rendered and how they interact with other elements.

## 📦 Display Property

### display: block

Elements take the **full width** available and **start on a new line**.

```css
.block {
  display: block;
}
```

**Characteristics:**

- Takes full width by default
- Starts on a new line
- Can set width and height
- Respects all margins and paddings

**Default Block Elements:**

- `<div>`, `<p>`, `<h1>`-`<h6>`
- `<ul>`, `<ol>`, `<li>`
- `<section>`, `<article>`, `<header>`, `<footer>`
- `<form>`, `<table>`

**Examples:**

```css
.card {
  display: block;
  width: 300px;
  padding: 1rem;
  margin: 1rem 0;
  background-color: white;
}

/* Force inline element to behave as block */
span {
  display: block;
  width: 200px;
  padding: 10px;
}
```

### display: inline

Elements **flow with text** and only take the space they need.

```css
.inline {
  display: inline;
}
```

**Characteristics:**

- Only takes necessary width
- Doesn't start on a new line
- **Cannot** set width/height
- Only horizontal margin/padding

**Default Inline Elements:**

- `<span>`, `<a>`, `<strong>`, `<em>`
- `<img>`, `<button>`, `<input>`
- `<code>`, `<label>`

**Examples:**

```css
/* Highlight within text */
.highlight {
  display: inline;
  background-color: yellow;
  padding: 0 0.2em; /* Only horizontal works properly */
}

/* Links in paragraph */
a {
  display: inline;
  color: blue;
}
```

### display: inline-block

**Best of both worlds**: flows like inline but behaves like block.

```css
.inline-block {
  display: inline-block;
}
```

**Characteristics:**

- Flows with text (doesn't break line)
- **Can** set width/height
- Respects all margins and paddings
- Creates horizontal layouts

**Practical Examples:**

```css
/* Navigation items */
.nav-item {
  display: inline-block;
  padding: 10px 20px;
  margin: 0 5px;
  background-color: #007bff;
  color: white;
}

/* Card grid without flexbox */
.card {
  display: inline-block;
  width: 300px;
  height: 400px;
  margin: 1rem;
  vertical-align: top;
}

/* Button sizing */
.button {
  display: inline-block;
  min-width: 120px;
  padding: 12px 24px;
  text-align: center;
}
```

### display: none

Element is **completely removed** from the document flow.

```css
.hidden {
  display: none;
}
```

**Characteristics:**

- Not visible
- Takes no space
- Not accessible to screen readers
- Can be toggled with JavaScript

**Use Cases:**

```css
/* Hide on mobile */
@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
}

/* Toggle visibility */
.modal {
  display: none;
}

.modal.active {
  display: block;
}

/* Hide but keep accessible */
/* Use .sr-only instead for screen readers */
```

### display: flex

Creates a **flexible container** for layout.

```css
.flex-container {
  display: flex;
}
```

**Quick Example:**

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.card-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
```

**Note**: Full guide in [Flexbox →](../intermediate/flexbox.md)

### display: grid

Creates a **grid container** for layout.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

**Quick Example:**

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
```

**Note**: Full guide in [CSS Grid →](../intermediate/grid.md)

---

## 👻 Visibility Property

### visibility: visible (default)

Element is **visible** (normal display).

```css
.element {
  visibility: visible;
}
```

### visibility: hidden

Element is **invisible** but still **takes up space**.

```css
.hidden {
  visibility: hidden;
}
```

**vs display: none:**

```css
/* Takes space but invisible */
.placeholder {
  visibility: hidden;
}

/* Completely removed, no space */
.removed {
  display: none;
}
```

### visibility: collapse

For **table rows/columns** only.

```css
tr {
  visibility: collapse;
}
```

---

## 🔍 Display vs Visibility vs Opacity

### Comparison

```css
/* 1. Display: none - Removed from flow */
.display-none {
  display: none;
  /* - Not visible */
  /* - Takes no space */
  /* - Not accessible */
}

/* 2. Visibility: hidden - Hidden but present */
.visibility-hidden {
  visibility: hidden;
  /* - Not visible */
  /* - Takes up space */
  /* - Not accessible */
}

/* 3. Opacity: 0 - Transparent but present */
.opacity-zero {
  opacity: 0;
  /* - Not visible */
  /* - Takes up space */
  /* - Still accessible/clickable */
}
```

### When to Use Each

```css
/* Hide completely (modals, dropdowns) */
.modal {
  display: none;
}

/* Preserve layout (placeholders) */
.placeholder {
  visibility: hidden;
}

/* Fade effects (transitions) */
.fade {
  opacity: 0;
  transition: opacity 0.3s;
}

.fade.show {
  opacity: 1;
}
```

---

## 🎭 Opacity

Controls **transparency** from 0 (invisible) to 1 (opaque).

```css
.element {
  opacity: 1; /* Fully visible (default) */
  opacity: 0.5; /* 50% transparent */
  opacity: 0; /* Invisible */
}
```

**Practical Examples:**

```css
/* Image overlay */
.image-overlay {
  opacity: 0.8;
  background-color: black;
}

/* Disabled state */
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Hover effect */
.card {
  opacity: 1;
  transition: opacity 0.3s;
}

.card:hover {
  opacity: 0.9;
}

/* Loading state */
.loading {
  opacity: 0.6;
  pointer-events: none;
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

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  display: inline-block;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: opacity 0.3s;
}

.nav-link:hover {
  opacity: 0.8;
}
```

### Example 2: Card Grid

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
}

.card-image {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  flex: 1;
}
```

### Example 3: Modal with Overlay

```css
/* Hidden by default */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

/* Show modal */
.modal.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  z-index: 1001;
}
```

### Example 4: Responsive Display

```css
/* Desktop: horizontal */
.menu {
  display: flex;
  gap: 1rem;
}

/* Mobile: vertical */
@media (max-width: 768px) {
  .menu {
    display: block;
  }

  .menu-item {
    display: block;
    padding: 1rem;
    border-bottom: 1px solid #eee;
  }
}

/* Hide on mobile */
.desktop-only {
  display: block;
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
}

/* Show only on mobile */
.mobile-only {
  display: none;
}

@media (max-width: 768px) {
  .mobile-only {
    display: block;
  }
}
```

### Example 5: Loading States

```css
/* Content visible */
.content {
  opacity: 1;
  transition: opacity 0.3s;
}

/* Loading state */
.content.loading {
  opacity: 0.5;
  pointer-events: none; /* Disable interactions */
}

/* Skeleton loader */
.skeleton {
  display: block;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Hide when loaded */
.skeleton.loaded {
  display: none;
}
```

---

## ✅ Best Practices

### 1. Use Semantic Display Values

```css
/* Good: Matches purpose */
nav {
  display: flex;
}
.card-grid {
  display: grid;
}
p {
  display: block;
}
```

### 2. Prefer display: none for Hiding

```css
/* Good: Completely hidden */
.hidden {
  display: none;
}

/* Unless you need to preserve space */
.placeholder {
  visibility: hidden;
}
```

### 3. Use Opacity for Transitions

```css
/* Good: Smooth transitions */
.element {
  opacity: 1;
  transition: opacity 0.3s;
}

.element.hidden {
  opacity: 0;
}
```

### 4. Responsive Display Changes

```css
/* Mobile first */
.element {
  display: block;
}

/* Desktop */
@media (min-width: 768px) {
  .element {
    display: flex;
  }
}
```

---

## ⚠️ Common Pitfalls

### ❌ Using visibility for Modals

```css
/* Bad: Still takes space */
.modal {
  visibility: hidden;
}

/* Good: Removed from flow */
.modal {
  display: none;
}
```

### ❌ Forgetting inline-block Gaps

```css
/* Bad: Unwanted gaps */
.item {
  display: inline-block;
}
/* HTML whitespace creates gaps */

/* Good: Use flexbox or remove HTML spaces */
.container {
  display: flex;
  gap: 1rem;
}
```

### ❌ Using opacity for Hiding

```css
/* Bad: Still clickable! */
.button {
  opacity: 0;
}

/* Good: Also disable pointer events */
.button {
  opacity: 0;
  pointer-events: none;
}

/* Better: Use display: none */
.button {
  display: none;
}
```

---

## 🎓 Quick Reference

```css
/* Display Values */
display: block; /* Full width, new line */
display: inline; /* Flow with text */
display: inline-block; /* Inline with dimensions */
display: none; /* Hidden, no space */
display: flex; /* Flexible layout */
display: grid; /* Grid layout */

/* Visibility */
visibility: visible; /* Visible (default) */
visibility: hidden; /* Hidden, takes space */
visibility: collapse; /* Table rows/cols */

/* Opacity */
opacity: 0; /* Invisible */
opacity: 0.5; /* Semi-transparent */
opacity: 1; /* Opaque (default) */

/* Comparison */
display: none; /* Removed, no space, not accessible */
visibility: hidden; /* Hidden, takes space, not accessible */
opacity: 0; /* Hidden, takes space, still accessible */
```

---

## 🚀 What's Next?

Congratulations! You've completed the CSS Basics. Now move to **Intermediate
CSS**:

👉 [Next: Flexbox →](../intermediate/flexbox.md)

Or return to the [CSS Overview →](../index.md)

Master display and visibility for complete control over your layouts! 👁️
