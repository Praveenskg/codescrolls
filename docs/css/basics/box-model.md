---
id: css-box-model
title: CSS Box Model - Complete Guide
description:
  Master the CSS Box Model including content, padding, border, and margin. Learn
  box-sizing, collapsing margins, and how to control element dimensions
  effectively.
keywords:
  [
    css box model,
    padding,
    border,
    margin,
    box-sizing,
    content-box,
    border-box,
    css spacing,
    css layout,
  ]
tags: [CSS, Box Model, Layout, Basics]
sidebar_position: 2
---

# 📦 CSS Box Model

The **CSS Box Model** is fundamental to understanding layout and spacing in CSS.
Every HTML element is a rectangular box with content, padding, border, and
margin.

## 📖 What is the Box Model?

The box model describes the space an element occupies on a page:

```
┌─────────────────────────────────────┐
│           MARGIN (transparent)       │
│  ┌──────────────────────────────┐  │
│  │     BORDER                    │  │
│  │  ┌───────────────────────┐   │  │
│  │  │   PADDING              │   │  │
│  │  │  ┌─────────────────┐  │   │  │
│  │  │  │   CONTENT        │  │   │  │
│  │  │  │  (width x height)│  │   │  │
│  │  │  └─────────────────┘  │   │  │
│  │  └───────────────────────┘   │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
```

## 🔑 Four Main Components

### 1. **Content** - The actual content (text, images)

### 2. **Padding** - Space between content and border

### 3. **Border** - Line around the padding

### 4. **Margin** - Space outside the border

---

## 1️⃣ Content Area

The area where your content (text, images, etc.) is displayed.

```css
.box {
  width: 300px; /* Content width */
  height: 200px; /* Content height */
}
```

---

## 2️⃣ Padding

**Space inside** the element, between content and border.

### All Sides

```css
.box {
  padding: 20px; /* All sides: 20px */
}
```

### Individual Sides

```css
.box {
  padding-top: 10px;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-left: 15px;
}
```

### Shorthand Notation

```css
/* One value: all sides */
padding: 20px;

/* Two values: vertical | horizontal */
padding: 10px 20px; /* top/bottom: 10px, left/right: 20px */

/* Three values: top | horizontal | bottom */
padding: 10px 20px 15px;

/* Four values: top | right | bottom | left (clockwise) */
padding: 10px 15px 20px 25px;
```

### Practical Examples

```css
/* Card with comfortable spacing */
.card {
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
}

/* Button with horizontal padding */
.button {
  padding: 12px 24px; /* Vertical: 12px, Horizontal: 24px */
  background-color: #007bff;
  color: white;
  border: none;
}

/* Container with different spacing */
.container {
  padding-top: 2rem;
  padding-bottom: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
```

---

## 3️⃣ Border

A line around the padding and content.

### Border Properties

```css
.box {
  border-width: 2px; /* Thickness */
  border-style: solid; /* Style */
  border-color: #007bff; /* Color */
}

/* Shorthand */
.box {
  border: 2px solid #007bff;
}
```

### Border Styles

```css
.solid {
  border: 3px solid #000;
}
.dashed {
  border: 3px dashed #000;
}
.dotted {
  border: 3px dotted #000;
}
.double {
  border: 3px double #000;
}
.groove {
  border: 3px groove #000;
}
.ridge {
  border: 3px ridge #000;
}
.inset {
  border: 3px inset #000;
}
.outset {
  border: 3px outset #000;
}
.none {
  border: none;
}
```

### Individual Borders

```css
.box {
  border-top: 2px solid red;
  border-right: 3px dashed blue;
  border-bottom: 2px solid red;
  border-left: 3px dashed blue;
}

/* Bottom border only (common for underlines) */
.heading {
  border-bottom: 2px solid #333;
  padding-bottom: 0.5rem;
}
```

### Border Radius (Rounded Corners)

```css
/* All corners */
.box {
  border-radius: 10px;
}

/* Individual corners: top-left | top-right | bottom-right | bottom-left */
.box {
  border-radius: 10px 20px 30px 40px;
}

/* Elliptical corners */
.box {
  border-radius: 50px / 25px; /* horizontal / vertical */
}

/* Perfect circle */
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

/* Pill shape */
.pill {
  border-radius: 9999px; /* Very large value */
  padding: 10px 20px;
}
```

### Practical Examples

```css
/* Card with border */
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
}

/* Input field */
.input {
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 10px;
}

.input:focus {
  border-color: #007bff;
  outline: none;
}

/* Alert box */
.alert {
  border-left: 4px solid #ff0000;
  padding: 1rem;
  background-color: #fff5f5;
}
```

---

## 4️⃣ Margin

**Space outside** the element, between the border and other elements.

### All Sides

```css
.box {
  margin: 20px; /* All sides: 20px */
}
```

### Individual Sides

```css
.box {
  margin-top: 10px;
  margin-right: 15px;
  margin-bottom: 20px;
  margin-left: 15px;
}
```

### Shorthand (Same as Padding)

```css
margin: 20px; /* All sides */
margin: 10px 20px; /* vertical | horizontal */
margin: 10px 20px 30px; /* top | horizontal | bottom */
margin: 10px 20px 30px 40px; /* top | right | bottom | left */
```

### Centering with Auto Margin

```css
/* Center a block element horizontally */
.container {
  width: 800px;
  margin: 0 auto; /* top/bottom: 0, left/right: auto */
}

/* Center with explicit values */
.box {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
```

### Negative Margins

```css
/* Pull element up/left */
.overlap {
  margin-top: -20px; /* Moves up */
  margin-left: -10px; /* Moves left */
}

/* Creative overlapping */
.card-image {
  margin-bottom: -50px;
  position: relative;
  z-index: 1;
}
```

---

## 📏 Margin Collapse

When **vertical margins** of two elements touch, they **collapse** into a single
margin.

### How It Works

```css
/* Example 1: Adjacent siblings */
.heading {
  margin-bottom: 30px;
}

.paragraph {
  margin-top: 20px;
}

/* Resulting margin: 30px (not 50px!) */
/* The larger margin wins */
```

### Collapse Rules

1. **Only vertical margins collapse** (top/bottom)
2. **Horizontal margins never collapse** (left/right)
3. **The larger margin wins**
4. **Negative margins subtract from positive**

### Preventing Collapse

```css
/* Use padding instead */
.container {
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Add border or padding to parent */
.parent {
  border-top: 1px solid transparent;
}

/* Use flexbox or grid */
.container {
  display: flex;
  flex-direction: column;
  gap: 20px; /* No collapse with gap */
}
```

---

## 📦 Box-Sizing Property

Controls **how width and height are calculated**.

### content-box (Default)

Width/height applies to **content only**. Padding and border are **added**.

```css
.box {
  box-sizing: content-box; /* Default */
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}

/* Total width = 300 + 20 + 20 + 5 + 5 = 350px */
```

### border-box (Recommended)

Width/height includes **content + padding + border**.

```css
.box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}

/* Total width = 300px (includes padding and border!) */
```

### Universal Box-Sizing (Best Practice)

```css
/* Apply to all elements */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* This makes layout calculations much easier! */
```

### Why border-box is Better

```css
/* Without border-box: Hard to calculate */
.sidebar {
  width: 300px;
  padding: 20px;
  border: 2px solid #ddd;
}
/* Actual width: 344px (300 + 40 + 4) */

/* With border-box: Predictable */
.sidebar {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 2px solid #ddd;
}
/* Actual width: 300px (as expected!) */
```

---

## 🎯 Practical Examples

### Example 1: Card Component

```css
.card {
  /* Box model properties */
  width: 350px;
  padding: 1.5rem;
  margin: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;

  /* Use border-box for easier sizing */
  box-sizing: border-box;

  /* Visual properties */
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### Example 2: Button with Spacing

```css
.button {
  /* Content sizing */
  display: inline-block;

  /* Padding for touch target */
  padding: 12px 24px;

  /* Border and radius */
  border: 2px solid #007bff;
  border-radius: 4px;

  /* Margin for spacing */
  margin: 0.5rem;

  /* Box sizing */
  box-sizing: border-box;

  /* Visual */
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
```

### Example 3: Container Layout

```css
.container {
  /* Max width with auto margin centers */
  max-width: 1200px;
  margin: 0 auto;

  /* Padding for mobile spacing */
  padding: 0 1rem;

  /* Border-box for predictable width */
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}
```

---

## ✅ Best Practices

1. **Always Use border-box**

   ```css
   * {
     box-sizing: border-box;
   }
   ```

2. **Consistent Spacing**

   ```css
   /* Use a spacing scale */
   --space-xs: 0.25rem;
   --space-sm: 0.5rem;
   --space-md: 1rem;
   --space-lg: 1.5rem;
   --space-xl: 2rem;
   ```

3. **Use Padding for Internal Space**

   ```css
   /* Good: Padding inside */
   .card {
     padding: 1rem;
   }
   ```

4. **Use Margin for External Space**

   ```css
   /* Good: Margin outside */
   .card + .card {
     margin-top: 1rem;
   }
   ```

5. **Avoid Mixing Units**

   ```css
   /* Bad: Mixed units */
   padding: 10px 1rem 15px 1em;

   /* Good: Consistent units */
   padding: 0.625rem 1rem 0.9375rem 1rem;
   ```

---

## ⚠️ Common Pitfalls

### ❌ Forgetting border-box

```css
/* Bad: Width becomes unpredictable */
.box {
  width: 300px;
  padding: 20px; /* Total width: 340px! */
}

/* Good: Width is predictable */
.box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px; /* Total width: 300px */
}
```

### ❌ Negative Margins Without Purpose

```css
/* Bad: Creating layout issues */
.element {
  margin-top: -100px; /* Why? */
}

/* Good: Intentional overlap */
.feature-image {
  margin-top: -50px;
  position: relative;
  z-index: 2;
}
```

### ❌ Excessive Margins

```css
/* Bad: Too much spacing */
.element {
  margin: 100px;
}

/* Good: Reasonable spacing */
.element {
  margin: 2rem 0;
}
```

---

## 🔍 DevTools Inspection

Use browser DevTools to visualize the box model:

1. **Right-click** an element → **Inspect**
2. Look at the **Box Model diagram** in the Styles panel
3. See exact pixel values for margin, border, padding, content
4. **Hover over values** to highlight on page

**Color coding:**

- 🟦 **Blue** = Content
- 🟩 **Green** = Padding
- 🟨 **Yellow** = Border
- 🟧 **Orange** = Margin

---

## 🎓 Quick Reference

```css
/* Content */
width: 300px;
height: 200px;

/* Padding (inside) */
padding: 20px; /* All sides */
padding: 10px 20px; /* vertical | horizontal */
padding: 10px 20px 30px 40px; /* top | right | bottom | left */

/* Border */
border: 2px solid #000; /* width | style | color */
border-radius: 8px; /* Rounded corners */

/* Margin (outside) */
margin: 20px; /* All sides */
margin: 0 auto; /* Center horizontally */
margin: 10px 20px 30px 40px; /* top | right | bottom | left */

/* Box sizing */
box-sizing: content-box; /* Default */
box-sizing: border-box; /* Recommended */
```

---

## 🚀 What's Next?

Now that you understand the box model, learn about **Colors & Backgrounds**:

👉 [Next: Colors & Backgrounds →](./colors-backgrounds.md)

Master the box model and you'll have complete control over spacing and layout!
📦
