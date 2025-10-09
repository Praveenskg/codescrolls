---
id: css-animations
title: CSS Animations - Complete Guide
description: Master CSS keyframe animations for complex, multi-step animations. Learn @keyframes, animation properties, timing, iteration, and create stunning visual effects.
keywords:
  [
    css animations,
    keyframes,
    animation-duration,
    animation-timing-function,
    animation-iteration-count,
    css effects,
    loading spinners,
  ]
tags: [CSS, Animations, Keyframes, Intermediate]
sidebar_position: 6
---

# 🎬 CSS Animations

CSS animations allow complex, multi-step animations using `@keyframes`. Create loading spinners, attention-grabbers, and delightful UI effects.

## 🎯 @keyframes

Define animation steps.

```css
@keyframes slidein {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

/* Or with percentages */
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
```

---

## 🎨 Animation Properties

### animation-name

```css
.element {
  animation-name: slidein;
}
```

### animation-duration

```css
.element {
  animation-duration: 2s;
  animation-duration: 500ms;
}
```

### animation-timing-function

```css
.element {
  animation-timing-function: ease;
  animation-timing-function: linear;
  animation-timing-function: ease-in;
  animation-timing-function: ease-out;
  animation-timing-function: ease-in-out;
}
```

### animation-delay

```css
.element {
  animation-delay: 1s;
}
```

### animation-iteration-count

```css
.element {
  animation-iteration-count: 1; /* Once (default) */
  animation-iteration-count: 3; /* 3 times */
  animation-iteration-count: infinite; /* Forever */
}
```

### animation-direction

```css
.element {
  animation-direction: normal; /* Default */
  animation-direction: reverse; /* Backwards */
  animation-direction: alternate; /* Forward then back */
  animation-direction: alternate-reverse; /* Back then forward */
}
```

### animation-fill-mode

```css
.element {
  animation-fill-mode: none; /* Default */
  animation-fill-mode: forwards; /* Stay at end */
  animation-fill-mode: backwards; /* Apply start before */
  animation-fill-mode: both; /* Both */
}
```

### animation (Shorthand)

```css
.element {
  animation: name duration timing-function delay iteration-count direction fill-mode;

  /* Example */
  animation: slidein 2s ease-in-out 0s infinite alternate both;

  /* Simpler */
  animation: slidein 2s infinite;
}
```

---

## 🎯 Practical Examples

### Example 1: Fade In

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1s ease-in;
}
```

### Example 2: Slide In

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideIn 0.5s ease-out;
}
```

### Example 3: Loading Spinner

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top-color: #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### Example 4: Pulse Effect

```css
@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

.pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

### Example 5: Bounce

```css
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.bounce {
  animation: bounce 2s infinite;
}
```

### Example 6: Shake

```css
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(10px);
  }
}

.shake {
  animation: shake 0.5s;
}
```

---

## ✅ Best Practices

1. **Use transform and opacity**
   - Better performance
   - Hardware accelerated

2. **Keep animations short**

   ```css
   animation-duration: 0.3s-1s;
   ```

3. **Consider reduced motion**
   ```css
   @media (prefers-reduced-motion: reduce) {
     * {
       animation: none !important;
     }
   }
   ```

---

## 🚀 What's Next?

Congratulations! You've completed CSS Intermediate. Now move to **Advanced CSS**:

👉 [Next: CSS Variables →](../advanced/css-variables.md)

Or return to the [CSS Overview →](../index.md)

Master animations for stunning visual effects! 🎬
