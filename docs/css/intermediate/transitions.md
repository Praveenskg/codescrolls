---
id: css-transitions
title: CSS Transitions - Complete Guide
description: Master CSS transitions for smooth property changes. Learn transition-property, duration, timing functions, delays, and create beautiful hover effects and UI interactions.
keywords:
  [
    css transitions,
    transition property,
    transition duration,
    ease-in-out,
    css hover effects,
    smooth animations,
    timing functions,
  ]
tags: [CSS, Transitions, Animations, Intermediate]
sidebar_position: 5
---

# ⚡ CSS Transitions

CSS transitions enable smooth changes between property values, creating polished user interfaces and delightful interactions.

## 🎯 Transition Properties

### transition-property

Which properties to transition.

```css
.element {
  transition-property: all; /* All animatable properties */
  transition-property: background-color;
  transition-property: transform;
  transition-property: width, height; /* Multiple */
}
```

### transition-duration

How long the transition takes.

```css
.element {
  transition-duration: 0.3s; /* 300 milliseconds */
  transition-duration: 300ms; /* Same */
  transition-duration: 1s; /* 1 second */
}
```

### transition-timing-function

Speed curve of the transition.

```css
.element {
  transition-timing-function: ease; /* Default: slow-fast-slow */
  transition-timing-function: linear; /* Constant speed */
  transition-timing-function: ease-in; /* Slow start */
  transition-timing-function: ease-out; /* Slow end */
  transition-timing-function: ease-in-out; /* Slow start & end */

  /* Cubic bezier (custom) */
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### transition-delay

Wait before starting.

```css
.element {
  transition-delay: 0s; /* No delay (default) */
  transition-delay: 0.2s; /* 200ms delay */
  transition-delay: 500ms; /* 500ms delay */
}
```

### transition (Shorthand)

```css
/* property | duration | timing-function | delay */
.element {
  transition: all 0.3s ease 0s;

  /* Simpler */
  transition: all 0.3s;

  /* Multiple transitions */
  transition:
    background-color 0.3s ease,
    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s linear;
}
```

---

## 🎨 Common Transitions

### Hover Effects

```css
/* Button hover */
.button {
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}

/* Scale on hover */
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

/* Shadow on hover */
.box {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.box:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
```

### Fade Effects

```css
.fade {
  opacity: 0;
  transition: opacity 0.5s ease;
}

.fade.show {
  opacity: 1;
}
```

### Slide Effects

```css
.slide {
  transform: translateX(-100%);
  transition: transform 0.4s ease-out;
}

.slide.show {
  transform: translateX(0);
}
```

---

## 🎯 Practical Examples

### Example 1: Navigation Link

```css
.nav-link {
  color: #333;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #007bff;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #007bff;
}

.nav-link:hover::after {
  width: 100%;
}
```

### Example 2: Image Zoom

```css
.image-container {
  overflow: hidden;
}

.image-container img {
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}
```

### Example 3: Accordion

```css
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
}

.accordion.active .accordion-content {
  max-height: 500px;
}
```

### Example 4: Toggle Switch

```css
.toggle {
  width: 50px;
  height: 26px;
  background-color: #ccc;
  border-radius: 13px;
  position: relative;
  transition: background-color 0.3s ease;
}

.toggle-circle {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: transform 0.3s ease;
}

.toggle.active {
  background-color: #007bff;
}

.toggle.active .toggle-circle {
  transform: translateX(24px);
}
```

---

## ✅ Best Practices

1. **Keep transitions short**

   ```css
   transition: all 0.2s-0.3s; /* Sweet spot */
   ```

2. **Use ease or ease-out**

   ```css
   transition: all 0.3s ease-out;
   ```

3. **Transition specific properties**

   ```css
   /* Better performance */
   transition:
     transform 0.3s,
     opacity 0.3s;
   /* Avoid */
   transition: all 0.3s;
   ```

4. **Consider prefers-reduced-motion**
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       transition: none !important;
     }
   }
   ```

---

## 🚀 What's Next?

Now learn about **Animations**:

👉 [Next: Animations →](./animations.md)

Master transitions for smooth interactions! ⚡
