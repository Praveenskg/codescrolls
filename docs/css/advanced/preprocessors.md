---
id: css-preprocessors
title: CSS Preprocessors - SASS/SCSS Guide
description: Learn CSS preprocessors including SASS/SCSS. Master variables, nesting, mixins, functions, and write more maintainable, DRY CSS code.
keywords:
  [
    css preprocessors,
    sass,
    scss,
    sass tutorial,
    css mixins,
    sass variables,
    nested css,
    sass functions,
    css compilation,
  ]
tags: [CSS, SASS, SCSS, Preprocessors, Advanced]
sidebar_position: 2
---

# 🎨 CSS Preprocessors (SASS/SCSS)

CSS preprocessors extend CSS with features like variables, nesting, mixins, and functions, making CSS more maintainable and powerful.

## 🎯 SASS vs SCSS

### SASS (Indented Syntax)

```sass
$primary-color: #007bff

.button
  background-color: $primary-color
  &:hover
    background-color: darken($primary-color, 10%)
```

### SCSS (CSS-like Syntax) - **Recommended**

```scss
$primary-color: #007bff;

.button {
  background-color: $primary-color;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}
```

---

## 📦 Variables

```scss
// Colors
$primary-color: #007bff;
$secondary-color: #6c757d;
$text-color: #333;

// Spacing
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;

// Usage
.button {
  color: $primary-color;
  padding: $spacing-md;
}
```

---

## 🪺 Nesting

```scss
.nav {
  background-color: #333;

  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        color: white;
        text-decoration: none;

        &:hover {
          color: #007bff;
        }
      }
    }
  }
}
```

---

## 🎨 Mixins

```scss
// Define mixin
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// With parameters
@mixin button($bg-color, $text-color) {
  background-color: $bg-color;
  color: $text-color;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
}

// Usage
.hero {
  @include flex-center;
}

.button-primary {
  @include button(#007bff, white);
}
```

---

## 🔧 Functions

```scss
// Built-in functions
$primary: #007bff;

.button {
  background-color: $primary;
  border-color: darken($primary, 10%);

  &:hover {
    background-color: lighten($primary, 10%);
  }
}

// Custom functions
@function calculate-rem($pixels) {
  @return ($pixels / 16) * 1rem;
}

.text {
  font-size: calculate-rem(18); // 1.125rem
}
```

---

## 📁 Partials & Import

```scss
// _variables.scss
$primary-color: #007bff;

// _mixins.scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// main.scss
@import 'variables';
@import 'mixins';

.button {
  background-color: $primary-color;
  @include flex-center;
}
```

---

## 🎯 Practical Example

```scss
// _variables.scss
$primary: #007bff;
$spacing: 1rem;
$radius: 8px;

// _mixins.scss
@mixin card($padding: $spacing) {
  background-color: white;
  border-radius: $radius;
  padding: $padding;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

// components.scss
.card {
  @include card;

  &-title {
    font-size: 1.5rem;
    margin-bottom: $spacing * 0.5;
  }

  &-body {
    color: #666;
  }

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
}
```

---

## ✅ Best Practices

1. **Organize files**

   ```
   styles/
   ├── _variables.scss
   ├── _mixins.scss
   ├── _base.scss
   ├── _components.scss
   └── main.scss
   ```

2. **Limit nesting depth**

   ```scss
   /* Max 3 levels */
   .nav {
     ul {
       li {
         /* Stop here */
       }
     }
   }
   ```

3. **Use variables consistently**
   ```scss
   $primary: #007bff;
   /* Use $primary everywhere, not #007bff */
   ```

---

## 🚀 What's Next?

Now learn about **CSS Architecture**:

👉 [Next: Architecture →](./architecture.md)

Master SASS for powerful, maintainable CSS! 🎨
