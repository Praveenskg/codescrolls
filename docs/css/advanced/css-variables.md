---
id: css-variables
title: CSS Variables (Custom Properties) - Complete Guide
description:
  Master CSS Variables for dynamic styling, theming, and maintainable code.
  Learn custom properties, var() function, scope, fallbacks, and build design
  systems.
keywords:
  [
    css variables,
    custom properties,
    css var,
    css theming,
    design tokens,
    dynamic css,
    css custom properties,
    css design system,
  ]
tags: [CSS, Variables, Custom Properties, Advanced]
sidebar_position: 1
---

# 🎨 CSS Variables (Custom Properties)

CSS Variables (Custom Properties) enable dynamic, reusable values in CSS.
Perfect for theming, design systems, and maintainable code.

## 🎯 Defining Variables

### Global Variables (:root)

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-size-base: 16px;
  --spacing-unit: 8px;
}
```

### Local Variables

```css
.card {
  --card-padding: 1.5rem;
  --card-radius: 8px;
  padding: var(--card-padding);
  border-radius: var(--card-radius);
}
```

---

## 🎨 Using Variables

### var() Function

```css
.button {
  background-color: var(--primary-color);
  color: var(--text-light);
  padding: var(--spacing-unit);
}
```

### With Fallbacks

```css
.element {
  color: var(--text-color, #333); /* Fallback to #333 */
  font-size: var(--font-size, 1rem);
}
```

---

## 🎯 Practical Examples

### Example 1: Color System

```css
:root {
  /* Primary colors */
  --primary-50: #e3f2fd;
  --primary-100: #bbdefb;
  --primary-500: #2196f3;
  --primary-900: #0d47a1;

  /* Semantic colors */
  --color-success: #28a745;
  --color-warning: #ffc107;
  --color-danger: #dc3545;
  --color-info: #17a2b8;
}

.button-primary {
  background-color: var(--primary-500);
}

.alert-success {
  background-color: var(--color-success);
}
```

### Example 2: Spacing System

```css
:root {
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
}

.card {
  padding: var(--space-lg);
  margin-bottom: var(--space-md);
}
```

### Example 3: Dark Mode

```css
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #212529;
  --text-secondary: #6c757d;
}

[data-theme='dark'] {
  --bg-primary: #1a1a1a;
  --bg-secondary: #2d2d2d;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}
```

### Example 4: Responsive Variables

```css
:root {
  --container-width: 90%;
  --font-size-h1: 2rem;
}

@media (min-width: 768px) {
  :root {
    --container-width: 750px;
    --font-size-h1: 3rem;
  }
}

.container {
  width: var(--container-width);
}

h1 {
  font-size: var(--font-size-h1);
}
```

---

## ✅ Best Practices

1. **Use semantic naming**

   ```css
   --color-primary: #007bff; /* Not --blue */
   --spacing-md: 1rem; /* Not --16px */
   ```

2. **Create a design system**

   ```css
   :root {
     /* Colors */
     --color-primary: #007bff;
     --color-secondary: #6c757d;

     /* Spacing */
     --space-xs: 0.25rem;
     --space-sm: 0.5rem;

     /* Typography */
     --font-size-base: 1rem;
     --font-weight-normal: 400;
   }
   ```

3. **Document your variables**
   ```css
   :root {
     /* Primary brand color - used for buttons, links */
     --color-primary: #007bff;
   }
   ```

---

## 🚀 What's Next?

Now learn about **CSS Preprocessors**:

👉 [Next: Preprocessors →](./preprocessors.md)

Master CSS Variables for maintainable, dynamic styles! 🎨
