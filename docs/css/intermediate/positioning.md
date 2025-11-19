---
id: css-positioning
title: CSS Positioning - Complete Guide
description:
  Master CSS positioning including static, relative, absolute, fixed, and
  sticky. Learn z-index, stacking context, and create overlays, modals, and
  sticky headers.
keywords:
  [
    css positioning,
    position relative,
    position absolute,
    position fixed,
    position sticky,
    z-index,
    stacking context,
    css layout,
  ]
tags: [CSS, Positioning, Layout, Intermediate]
sidebar_position: 3
---

# 📍 CSS Positioning

CSS positioning controls where elements appear on the page. Understanding
positioning is crucial for creating overlays, modals, tooltips, sticky headers,
and complex layouts.

## 🎯 Position Types

### static (Default)

Elements follow **normal document flow**.

```css
.element {
  position: static; /* Default - no positioning */
}
```

### relative

Positioned **relative to its normal position**.

```css
.element {
  position: relative;
  top: 20px; /* Move down 20px */
  left: 30px; /* Move right 30px */
}
```

**Use Cases:**

- Creating a positioning context for absolute children
- Slight adjustments to position
- Z-index control

### absolute

Positioned **relative to nearest positioned ancestor**.

```css
.parent {
  position: relative; /* Create positioning context */
}

.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

**Use Cases:**

- Tooltips
- Badges
- Dropdown menus
- Modal overlays

### fixed

Positioned **relative to viewport** (stays in place when scrolling).

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
```

**Use Cases:**

- Fixed headers/navbars
- Floating action buttons
- Cookie notices
- Chat widgets

### sticky

Toggles between **relative and fixed** based on scroll position.

```css
.header {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

**Use Cases:**

- Sticky headers
- Table headers
- Sidebar navigation
- Section headings

---

## 📏 Positioning Properties

### top, right, bottom, left

```css
.element {
  position: absolute;
  top: 10px; /* Distance from top */
  right: 20px; /* Distance from right */
  bottom: 30px; /* Distance from bottom */
  left: 40px; /* Distance from left */
}
```

### Centering with Absolute Position

```css
/* Method 1: transform */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Method 2: margin auto */
.centered {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 200px;
  margin: auto;
}
```

---

## 🎚️ Z-Index & Stacking

### z-index

Controls **stacking order** (only works on positioned elements).

```css
.element {
  position: relative;
  z-index: 10; /* Higher = on top */
}
```

**Stacking Levels:**

```css
.background {
  z-index: -1;
}
.content {
  z-index: 1;
}
.header {
  z-index: 100;
}
.modal-overlay {
  z-index: 1000;
}
.modal-content {
  z-index: 1001;
}
.tooltip {
  z-index: 9999;
}
```

---

## 🎯 Practical Examples

### Example 1: Fixed Header

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

body {
  padding-top: 60px; /* Prevent content from hiding under header */
}
```

### Example 2: Modal

```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  z-index: 1001;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}
```

### Example 3: Sticky Sidebar

```css
.container {
  display: flex;
  gap: 2rem;
}

.sidebar {
  position: sticky;
  top: 80px; /* Below fixed header */
  align-self: flex-start;
  width: 250px;
}

.content {
  flex: 1;
}
```

### Example 4: Card with Badge

```css
.card {
  position: relative;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.875rem;
}
```

### Example 5: Dropdown Menu

```css
.dropdown {
  position: relative;
}

.dropdown-button {
  padding: 0.5rem 1rem;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  min-width: 200px;
  z-index: 100;
}
```

---

## ✅ Best Practices

1. **Create positioning contexts**

   ```css
   .parent {
     position: relative; /* For absolute children */
   }
   ```

2. **Use sticky for scroll effects**

   ```css
   .header {
     position: sticky;
     top: 0;
   }
   ```

3. **Manage z-index systematically**

   ```css
   :root {
     --z-modal: 1000;
     --z-header: 100;
     --z-dropdown: 50;
   }
   ```

4. **Account for fixed elements**
   ```css
   body {
     padding-top: 60px; /* Height of fixed header */
   }
   ```

---

## 🚀 What's Next?

Now learn about **Responsive Design**:

👉 [Next: Responsive Design →](./responsive-design.md)

Master positioning for complete layout control! 📍
