---
id: css-responsive-design
title: CSS Responsive Design - Complete Guide
description:
  Master responsive design with media queries, mobile-first approach,
  breakpoints, viewport units, and create websites that work on all devices.
keywords:
  [
    responsive design,
    media queries,
    mobile first,
    css breakpoints,
    viewport meta tag,
    responsive images,
    fluid typography,
    responsive layout,
  ]
tags: [CSS, Responsive Design, Mobile, Intermediate]
sidebar_position: 4
---

# 📱 CSS Responsive Design

Responsive design ensures websites work perfectly on all devices - from phones
to tablets to desktops. Master media queries, breakpoints, and mobile-first
approach.

## 🎯 Core Concepts

### Viewport Meta Tag

**Required** in HTML `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Media Queries

Apply styles based on device characteristics.

```css
/* Basic syntax */
@media screen and (max-width: 768px) {
  /* Styles for screens ≤ 768px */
}

@media screen and (min-width: 769px) {
  /* Styles for screens ≥ 769px */
}
```

---

## 📏 Breakpoints

### Common Breakpoints

```css
/* Mobile First Approach */

/* Mobile (default) */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    width: 750px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    width: 960px;
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .container {
    width: 1200px;
  }
}
```

### Standard Breakpoints

```css
:root {
  --breakpoint-sm: 640px; /* Phone landscape */
  --breakpoint-md: 768px; /* Tablet */
  --breakpoint-lg: 1024px; /* Desktop */
  --breakpoint-xl: 1280px; /* Large desktop */
  --breakpoint-2xl: 1536px; /* Extra large */
}
```

---

## 📱 Mobile-First Approach

Start with mobile styles, enhance for larger screens.

```css
/* Base (Mobile) */
.card {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .card {
    width: 48%;
    display: inline-block;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .card {
    width: 32%;
  }
}
```

---

## 🎨 Responsive Layouts

### Flexbox Responsive

```css
.nav {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .nav {
    flex-direction: row;
    justify-content: space-between;
  }
}
```

### Grid Responsive

```css
.gallery {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: 1 column */
  gap: 1rem;
}

@media (min-width: 640px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr); /* 2 columns */
  }
}

@media (min-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(4, 1fr); /* 4 columns */
  }
}
```

### Auto-Responsive Grid

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}
/* No media queries needed! */
```

---

## 🖼️ Responsive Images

```css
/* Fluid images */
img {
  max-width: 100%;
  height: auto;
}

/* Responsive background */
.hero {
  background-image: url('mobile.jpg');
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .hero {
    background-image: url('desktop.jpg');
  }
}
```

### Picture Element

```html
<picture>
  <source media="(min-width: 1024px)" srcset="large.jpg" />
  <source media="(min-width: 768px)" srcset="medium.jpg" />
  <img src="small.jpg" alt="Responsive image" />
</picture>
```

---

## 📝 Responsive Typography

### Fluid Typography

```css
/* Method 1: clamp() */
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}

/* Method 2: calc() */
h1 {
  font-size: calc(2rem + 2vw);
}

/* Method 3: Media queries */
h1 {
  font-size: 2rem;
}

@media (min-width: 768px) {
  h1 {
    font-size: 3rem;
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 4rem;
  }
}
```

---

## 🎯 Practical Examples

### Example 1: Responsive Navigation

```css
/* Mobile: Hamburger menu */
.nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100vh;
  background-color: #333;
  transition: right 0.3s;
}

.nav.active {
  right: 0;
}

.hamburger {
  display: block;
}

/* Desktop: Horizontal menu */
@media (min-width: 768px) {
  .nav {
    position: static;
    flex-direction: row;
    width: auto;
    height: auto;
  }

  .hamburger {
    display: none;
  }
}
```

### Example 2: Responsive Card Grid

```css
.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
}

@media (min-width: 640px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
  }
}

@media (min-width: 1280px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Example 3: Responsive Container

```css
.container {
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
```

---

## ✅ Best Practices

1. **Mobile-First Always**

   ```css
   /* Mobile first */
   .element {
     /* mobile styles */
   }
   @media (min-width: 768px) {
     /* tablet */
   }
   @media (min-width: 1024px) {
     /* desktop */
   }
   ```

2. **Use Relative Units**

   ```css
   font-size: 1rem; /* Not px */
   padding: 2rem; /* Not px */
   width: 90%; /* Or fr, vw */
   ```

3. **Test on Real Devices**
   - Use browser DevTools
   - Test on actual phones/tablets
   - Check different orientations

4. **Touch-Friendly Targets**
   ```css
   .button {
     min-height: 44px; /* Minimum touch target */
     min-width: 44px;
   }
   ```

---

## 🚀 What's Next?

Now learn about **Transitions**:

👉 [Next: Transitions →](./transitions.md)

Master responsive design for all devices! 📱
