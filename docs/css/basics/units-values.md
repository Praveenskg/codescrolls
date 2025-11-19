---
id: css-units-values
title: CSS Units & Values - Complete Guide
description:
  Master CSS units including px, em, rem, %, vh, vw, and more. Learn when to use
  absolute vs relative units for responsive, accessible designs.
keywords:
  [
    css units,
    px,
    em,
    rem,
    percentage,
    viewport units,
    vh,
    vw,
    absolute units,
    relative units,
    css measurements,
  ]
tags: [CSS, Units, Values, Measurements, Basics]
sidebar_position: 5
---

# 📏 CSS Units & Values

Understanding CSS units is crucial for creating responsive, accessible websites.
Learn when to use pixels, ems, rems, percentages, and viewport units.

## 📊 Unit Categories

### Absolute Units (Fixed Size)

- `px` - Pixels
- `pt` - Points
- `cm` - Centimeters
- `mm` - Millimeters
- `in` - Inches

### Relative Units (Flexible Size)

- `em` - Relative to parent font-size
- `rem` - Relative to root font-size
- `%` - Percentage of parent
- `vw` - Viewport width
- `vh` - Viewport height
- `vmin` - Smaller of vw or vh
- `vmax` - Larger of vw or vh
- `ch` - Width of "0" character
- `ex` - Height of "x" character

---

## 🎯 Absolute Units

### Pixels (px)

Most common absolute unit. 1px = 1/96th of an inch on screen.

```css
.element {
  width: 300px;
  height: 200px;
  font-size: 16px;
  border: 1px solid black;
}
```

**When to Use:**

- Borders (1px, 2px)
- Small, precise measurements
- Pixel-perfect designs
- Media queries

**Avoid For:**

- Font sizes (use rem instead)
- Large layouts (use % or vw/vh)

---

## 🔄 Relative Units

### EM

Relative to the **parent element's** font-size.

```css
.parent {
  font-size: 16px;
}

.child {
  font-size: 2em; /* 32px (16px × 2) */
  padding: 1em; /* 32px (inherits 32px font-size) */
  margin: 0.5em; /* 16px (half of 32px) */
}
```

**Compounding Effect:**

```css
.level1 {
  font-size: 1.2em; /* If parent is 16px = 19.2px */
}

.level1 .level2 {
  font-size: 1.2em; /* 23.04px (19.2px × 1.2) */
}

.level1 .level2 .level3 {
  font-size: 1.2em; /* 27.65px (23.04px × 1.2) */
}
/* This compounds quickly! */
```

**Best For:**

- Spacing relative to font-size
- Components with internal consistency
- Button padding

### REM (Root EM)

Relative to the **root element's** (html) font-size.

```css
html {
  font-size: 16px; /* 1rem = 16px */
}

.element {
  font-size: 1.5rem; /* 24px */
  padding: 2rem; /* 32px */
  margin: 1rem; /* 16px */
}

/* No compounding - always relative to root */
```

**Why REM is Better:**

```css
/* HTML root */
html {
  font-size: 16px;
}

/* All consistent to root */
h1 {
  font-size: 2.5rem;
} /* Always 40px */
h2 {
  font-size: 2rem;
} /* Always 32px */
p {
  font-size: 1rem;
} /* Always 16px */
.small {
  font-size: 0.875rem;
} /* Always 14px */

/* No compounding issues! */
```

**Best Practices:**

```css
/* Set root size */
html {
  font-size: 16px; /* Base size */
}

/* Use rem for most things */
body {
  font-size: 1rem;
  line-height: 1.6;
}

h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.75rem;
}

.container {
  padding: 2rem;
  margin: 1rem;
}
```

### Percentage (%)

Relative to the **parent element's** dimension.

```css
/* Width percentage */
.parent {
  width: 1000px;
}

.child {
  width: 50%; /* 500px (50% of 1000px) */
}

/* Font-size percentage */
.parent {
  font-size: 16px;
}

.child {
  font-size: 150%; /* 24px (150% of 16px) */
}

/* Padding/Margin percentage (relative to parent WIDTH) */
.parent {
  width: 400px;
}

.child {
  padding: 10%; /* 40px (10% of 400px width) */
  margin: 5%; /* 20px (5% of 400px width) */
}
```

**Responsive Layouts:**

```css
.container {
  width: 100%; /* Full width */
  max-width: 1200px;
  margin: 0 auto;
}

.sidebar {
  width: 25%; /* Quarter width */
}

.main {
  width: 75%; /* Three quarters */
}
```

---

## 📺 Viewport Units

### VW (Viewport Width)

1vw = 1% of viewport width.

```css
.full-width {
  width: 100vw; /* Full viewport width */
}

.half-width {
  width: 50vw; /* Half viewport width */
}

/* Responsive font sizes */
h1 {
  font-size: 5vw; /* Scales with viewport */
}
```

### VH (Viewport Height)

1vh = 1% of viewport height.

```css
.hero {
  height: 100vh; /* Full viewport height */
}

.section {
  min-height: 50vh; /* At least half viewport height */
}
```

### VMIN & VMAX

```css
/* vmin: smaller of vw or vh */
.square {
  width: 50vmin;
  height: 50vmin;
}

/* vmax: larger of vw or vh */
.element {
  font-size: 5vmax;
}
```

**Responsive Typography:**

```css
/* Fluid typography */
h1 {
  font-size: calc(2rem + 2vw);
}

/* Constrained fluid typography */
h1 {
  font-size: clamp(2rem, 2rem + 2vw, 4rem);
}
```

**Full-Screen Sections:**

```css
.hero {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

---

## 📝 Character Units

### CH (Character Width)

Width of the "0" character in the current font.

```css
/* Optimal line length (45-75 characters) */
p {
  max-width: 65ch;
}

/* Input field sizing */
input[type='text'] {
  width: 30ch;
}
```

### EX (x-height)

Height of the lowercase "x" in the current font.

```css
.element {
  padding-top: 1ex;
}
```

---

## 🧮 Calc() Function

Perform calculations with mixed units.

```css
/* Mix different units */
.element {
  width: calc(100% - 80px);
  height: calc(100vh - 60px);
  font-size: calc(1rem + 0.5vw);
}

/* Responsive spacing */
.container {
  padding: calc(1rem + 2vw);
}

/* Centered with calc */
.element {
  width: 200px;
  margin-left: calc(50% - 100px);
}
```

**Complex Calculations:**

```css
.element {
  /* Sidebar + gap + content */
  width: calc(100% - 300px - 2rem);

  /* Full height minus header and footer */
  min-height: calc(100vh - 80px - 60px);

  /* Fluid typography with constraints */
  font-size: calc(1rem + ((1vw - 0.32rem) * 0.5));
}
```

---

## 🎨 Min(), Max(), Clamp()

### min()

Returns the **smallest** value.

```css
.element {
  /* Width: 500px or 100%, whichever is smaller */
  width: min(500px, 100%);

  /* Responsive padding */
  padding: min(3rem, 5%);
}
```

### max()

Returns the **largest** value.

```css
.element {
  /* Width: At least 300px */
  width: max(300px, 50%);

  /* Minimum font size */
  font-size: max(16px, 1rem);
}
```

### clamp()

Constrains a value between **min** and **max**.

```css
/* clamp(min, preferred, max) */
.element {
  /* Font size: 16px to 32px, scales with viewport */
  font-size: clamp(1rem, 2vw + 1rem, 2rem);

  /* Width: 300px to 1200px, scales with viewport */
  width: clamp(300px, 80%, 1200px);

  /* Padding: 1rem to 4rem */
  padding: clamp(1rem, 5%, 4rem);
}
```

**Fluid Typography:**

```css
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}

h2 {
  font-size: clamp(1.5rem, 3vw, 3rem);
}

p {
  font-size: clamp(1rem, 2vw, 1.25rem);
}
```

---

## 🎯 Practical Examples

### Example 1: Responsive Container

```css
.container {
  /* Responsive width */
  width: min(90%, 1200px);

  /* Fluid padding */
  padding: clamp(1rem, 5%, 3rem);

  /* Center horizontally */
  margin: 0 auto;
}
```

### Example 2: Fluid Typography System

```css
:root {
  font-size: 16px;
}

h1 {
  font-size: clamp(2rem, 2rem + 2vw, 4rem);
  line-height: 1.2;
}

h2 {
  font-size: clamp(1.5rem, 1.5rem + 1.5vw, 3rem);
}

p {
  font-size: clamp(1rem, 1rem + 0.5vw, 1.25rem);
  line-height: 1.6;
  max-width: 65ch;
}
```

### Example 3: Card Component

```css
.card {
  /* Responsive width */
  width: clamp(300px, 100%, 400px);

  /* Spacing with rem */
  padding: 1.5rem;
  margin: 1rem;

  /* Border with px */
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
  line-height: 1.6;
}
```

### Example 4: Full-Screen Hero

```css
.hero {
  /* Full viewport */
  width: 100vw;
  height: 100vh;

  /* Responsive padding */
  padding: clamp(2rem, 5vh, 5rem);

  /* Center content */
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-title {
  /* Fluid font size */
  font-size: clamp(2rem, 5vw, 6rem);
}
```

---

## ✅ Best Practices

### 1. Use REM for Most Sizing

```css
/* Good: Scalable and predictable */
h1 {
  font-size: 2.5rem;
}
.container {
  padding: 2rem;
}
```

### 2. Use PX for Small Details

```css
/* Good: Precise control */
border: 1px solid #ddd;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
```

### 3. Use % for Layouts

```css
/* Good: Flexible layouts */
.sidebar {
  width: 25%;
}
.content {
  width: 75%;
}
```

### 4. Use VW/VH for Full-Screen Elements

```css
/* Good: Viewport-based */
.hero {
  height: 100vh;
}
.full-width {
  width: 100vw;
}
```

### 5. Use CH for Text Containers

```css
/* Good: Optimal reading width */
p {
  max-width: 65ch;
}
```

### 6. Use Clamp() for Fluid Sizing

```css
/* Good: Responsive with limits */
font-size: clamp(1rem, 2vw, 1.5rem);
width: clamp(300px, 90%, 1200px);
```

---

## ⚠️ Common Pitfalls

### ❌ Using EM for Everything

```css
/* Bad: Compounds quickly */
.level1 {
  font-size: 1.2em;
}
.level2 {
  font-size: 1.2em;
} /* Gets too big! */

/* Good: Use REM */
.level1 {
  font-size: 1.2rem;
}
.level2 {
  font-size: 1.2rem;
}
```

### ❌ Using PX for Fonts

```css
/* Bad: Not accessible */
p {
  font-size: 16px;
}

/* Good: Respects user preferences */
p {
  font-size: 1rem;
}
```

### ❌ Viewport Units Without Limits

```css
/* Bad: Can become too large */
h1 {
  font-size: 10vw;
}

/* Good: Constrained */
h1 {
  font-size: clamp(2rem, 10vw, 4rem);
}
```

---

## 🎓 Quick Reference

```css
/* Absolute Units */
px    /* Pixels (most common) */
pt    /* Points (print) */
cm, mm, in  /* Physical units */

/* Relative to Font Size */
em    /* Parent font-size */
rem   /* Root font-size (recommended) */
%     /* Parent value */

/* Viewport Units */
vw    /* 1% of viewport width */
vh    /* 1% of viewport height */
vmin  /* Smaller of vw/vh */
vmax  /* Larger of vw/vh */

/* Character Units */
ch    /* Width of "0" */
ex    /* Height of "x" */

/* Functions */
calc()   /* Calculations */
min()    /* Smallest value */
max()    /* Largest value */
clamp()  /* Constrained value */
```

---

## 🚀 What's Next?

Now that you understand units and values, learn about **Display & Visibility**:

👉 [Next: Display & Visibility →](./display-visibility.md)

Master CSS units for responsive, accessible designs! 📏
