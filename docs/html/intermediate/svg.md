---
id: svg
title: SVG - Scalable Vector Graphics Complete Guide
description:
  Master SVG for scalable vector graphics, animations, and interactive
  visualizations. Learn SVG syntax, paths, gradients, and animations.
keywords:
  [
    svg,
    scalable vector graphics,
    svg animation,
    svg paths,
    vector graphics,
    svg tutorial,
    html svg,
    css svg,
  ]
tags: [HTML, SVG, Graphics, Animation, Vector, Scalable]
sidebar_position: 8
---

# 🔷 SVG - Scalable Vector Graphics

SVG (Scalable Vector Graphics) is an XML-based format for describing vector
graphics that scales perfectly at any size. Unlike raster images, SVG graphics
remain crisp and clear at any resolution.

## 📖 What is SVG?

SVG is a markup language for describing two-dimensional graphics using XML. It's
part of HTML5 and can be styled with CSS and animated with JavaScript.

```html
<!-- Inline SVG -->
<svg width="200" height="100" viewBox="0 0 200 100">
  <circle cx="50" cy="50" r="40" fill="blue" />
  <rect x="100" y="20" width="80" height="60" fill="red" />
</svg>

<!-- External SVG file -->
<img src="logo.svg" alt="Company Logo" />
<object data="diagram.svg" type="image/svg+xml"></object>
```

---

## 🏗️ SVG Document Structure

### Basic SVG Structure

```html
<svg
  width="400"
  height="300"
  viewBox="0 0 400 300"
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- SVG content goes here -->

  <!-- Metadata -->
  <defs>
    <!-- Definitions for gradients, patterns, etc. -->
  </defs>

  <!-- Graphics elements -->
  <circle cx="50" cy="50" r="40" fill="blue" />

  <!-- Text -->
  <text x="150" y="50" font-family="Arial" font-size="20" fill="black">
    Hello SVG
  </text>
</svg>
```

### ViewBox and Coordinate System

```html
<!-- Basic viewBox -->
<svg width="200" height="100" viewBox="0 0 200 100">
  <!-- Content scaled to fit -->
</svg>

<!-- Preserving aspect ratio -->
<svg
  width="200"
  height="100"
  viewBox="0 0 200 100"
  preserveAspectRatio="xMidYMid meet"
>
  <!-- Content centered and scaled -->
</svg>

<!-- Different aspect ratios -->
<svg width="200" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
  <!-- Content stretched to fit -->
</svg>
```

---

## 🎨 Basic Shapes

### Rectangle (`<rect>`)

```html
<svg width="400" height="200" viewBox="0 0 400 200">
  <!-- Basic rectangle -->
  <rect x="50" y="50" width="100" height="60" fill="blue" />

  <!-- Rounded corners -->
  <rect x="200" y="50" width="100" height="60" rx="10" ry="10" fill="red" />

  <!-- With stroke -->
  <rect
    x="50"
    y="150"
    width="100"
    height="30"
    fill="yellow"
    stroke="black"
    stroke-width="2"
  />

  <!-- Transparent fill -->
  <rect
    x="200"
    y="150"
    width="100"
    height="30"
    fill="rgba(0, 255, 0, 0.5)"
    stroke="green"
    stroke-width="3"
  />
</svg>
```

### Circle (`<circle>`)

```html
<svg width="300" height="200" viewBox="0 0 300 200">
  <!-- Basic circle -->
  <circle cx="75" cy="100" r="50" fill="orange" />

  <!-- Circle with stroke -->
  <circle cx="150" cy="100" r="40" fill="none" stroke="blue" stroke-width="3" />

  <!-- Semi-transparent circle -->
  <circle cx="225" cy="100" r="35" fill="rgba(255, 0, 0, 0.7)" stroke="red" />

  <!-- Multiple circles -->
  <circle cx="50" cy="50" r="20" fill="purple" />
  <circle cx="100" cy="50" r="15" fill="green" />
  <circle cx="140" cy="50" r="10" fill="yellow" />
</svg>
```

### Ellipse (`<ellipse>`)

```html
<svg width="400" height="200" viewBox="0 0 400 200">
  <!-- Basic ellipse -->
  <ellipse cx="100" cy="100" rx="80" ry="50" fill="lightblue" />

  <!-- Flattened ellipse -->
  <ellipse cx="250" cy="100" rx="60" ry="20" fill="lightgreen" />

  <!-- Vertical ellipse -->
  <ellipse cx="350" cy="100" rx="20" ry="60" fill="pink" />

  <!-- Ellipse with rotation -->
  <ellipse
    cx="100"
    cy="150"
    rx="40"
    ry="20"
    fill="orange"
    transform="rotate(30 100 150)"
  />
</svg>
```

### Line (`<line>`)

```html
<svg width="300" height="200" viewBox="0 0 300 200">
  <!-- Basic line -->
  <line x1="50" y1="50" x2="250" y2="50" stroke="black" stroke-width="2" />

  <!-- Dashed line -->
  <line
    x1="50"
    y1="80"
    x2="250"
    y2="80"
    stroke="blue"
    stroke-width="3"
    stroke-dasharray="5,5"
  />

  <!-- Line with rounded caps -->
  <line
    x1="50"
    y1="110"
    x2="250"
    y2="110"
    stroke="red"
    stroke-width="4"
    stroke-linecap="round"
  />

  <!-- Diagonal line -->
  <line x1="50" y1="140" x2="250" y2="180" stroke="green" stroke-width="2" />

  <!-- Arrowhead effect -->
  <defs>
    <marker
      id="arrowhead"
      markerWidth="10"
      markerHeight="7"
      refX="9"
      refY="3.5"
      orient="auto"
    >
      <polygon points="0 0, 10 3.5, 0 7" fill="red" />
    </marker>
  </defs>
  <line
    x1="50"
    y1="180"
    x2="250"
    y2="180"
    stroke="red"
    stroke-width="2"
    marker-end="url(#arrowhead)"
  />
</svg>
```

### Polyline (`<polyline>`)

```html
<svg width="400" height="200" viewBox="0 0 400 200">
  <!-- Basic polyline -->
  <polyline
    points="50,50 100,25 150,75 200,25 250,75 300,50"
    fill="none"
    stroke="blue"
    stroke-width="3"
  />

  <!-- Filled polyline -->
  <polyline
    points="50,100 75,125 100,100 125,125 150,100 175,125 200,100"
    fill="lightgreen"
    stroke="green"
    stroke-width="2"
  />

  <!-- Star shape -->
  <polyline
    points="250,50 265,75 290,75 275,90 280,115 250,100 220,115 225,90 210,75 235,75"
    fill="gold"
    stroke="orange"
    stroke-width="2"
  />
</svg>
```

### Polygon (`<polygon>`)

```html
<svg width="400" height="200" viewBox="0 0 400 200">
  <!-- Triangle -->
  <polygon points="50,150 100,50 150,150" fill="red" />

  <!-- Quadrilateral -->
  <polygon
    points="200,50 250,30 270,100 220,120"
    fill="blue"
    stroke="darkblue"
    stroke-width="2"
  />

  <!-- Hexagon -->
  <polygon
    points="320,75 350,100 350,130 320,155 290,130 290,100"
    fill="purple"
    stroke="indigo"
    stroke-width="3"
  />

  <!-- Star -->
  <polygon
    points="100,30 115,55 140,55 125,75 130,100 100,85 70,100 75,75 60,55 85,55"
    fill="yellow"
    stroke="orange"
    stroke-width="2"
  />
</svg>
```

---

## 🛤️ Paths (`<path>`)

The most powerful SVG element for creating complex shapes.

### Path Syntax

```html
<svg width="400" height="300" viewBox="0 0 400 300">
  <!-- Basic path commands:
       M = moveto (absolute)
       L = lineto (absolute)
       H = horizontal lineto
       V = vertical lineto
       Z = closepath
       m, l, h, v, z = relative versions -->

  <!-- Simple shape -->
  <path
    d="M 50 50 L 150 50 L 150 150 L 50 150 Z"
    fill="lightblue"
    stroke="blue"
    stroke-width="2"
  />

  <!-- Curved path -->
  <path
    d="M 200 50 Q 250 25 300 50 T 400 50"
    fill="none"
    stroke="red"
    stroke-width="3"
  />

  <!-- Complex path -->
  <path
    d="M 50 200
           L 100 180
           Q 150 160 200 180
           L 250 200
           Q 300 220 350 200
           L 350 250
           L 50 250 Z"
    fill="green"
    opacity="0.7"
    stroke="darkgreen"
    stroke-width="2"
  />
</svg>
```

### Path Commands Reference

| Command                             | Description     | Example                   |
| ----------------------------------- | --------------- | ------------------------- |
| `M x y`                             | Move to point   | `M 100 100`               |
| `L x y`                             | Line to point   | `L 200 100`               |
| `H x`                               | Horizontal line | `H 200`                   |
| `V y`                               | Vertical line   | `V 150`                   |
| `Q cx cy x y`                       | Quadratic curve | `Q 150 50 200 100`        |
| `C c1x c1y c2x c2y x y`             | Cubic curve     | `C 100 50 150 50 200 100` |
| `Z`                                 | Close path      | `Z`                       |
| `A rx ry angle large-arc sweep x y` | Arc             | `A 50 50 0 0 1 100 100`   |

### Practical Examples

```html
<svg width="400" height="200" viewBox="0 0 400 200">
  <!-- Heart shape -->
  <path
    d="M 150 100
           C 150 80 130 60 110 80
           C 90 60 70 80 70 100
           C 70 120 90 140 110 120
           C 130 140 150 120 150 100 Z"
    fill="red"
  />

  <!-- Speech bubble -->
  <path
    d="M 250 50
           L 350 50
           L 350 120
           L 290 120
           L 280 140
           L 270 120
           L 250 120 Z"
    fill="lightyellow"
    stroke="orange"
    stroke-width="2"
  />

  <!-- Cloud -->
  <path
    d="M 50 100
           Q 40 90 50 80
           Q 60 70 70 80
           Q 90 75 100 85
           Q 110 80 120 90
           Q 130 85 140 95
           Q 135 105 125 110
           Q 115 115 105 110
           Q 85 115 75 110
           Q 65 115 55 110
           Q 45 115 45 105 Z"
    fill="white"
    stroke="gray"
    stroke-width="2"
  />
</svg>
```

---

## 🎨 Colors and Gradients

### Fill and Stroke Properties

```html
<svg width="400" height="200" viewBox="0 0 400 200">
  <!-- Fill colors -->
  <circle cx="50" cy="50" r="30" fill="#ff0000" />
  <circle cx="120" cy="50" r="30" fill="rgb(0, 255, 0)" />
  <circle cx="190" cy="50" r="30" fill="hsl(240, 100%, 50%)" />

  <!-- Stroke properties -->
  <rect
    x="250"
    y="20"
    width="60"
    height="60"
    fill="none"
    stroke="#333"
    stroke-width="3"
  />

  <rect
    x="320"
    y="20"
    width="60"
    height="60"
    fill="yellow"
    stroke="red"
    stroke-width="2"
    stroke-dasharray="5,3"
    stroke-linecap="round"
  />
</svg>
```

### Linear Gradients

```html
<svg width="400" height="200" viewBox="0 0 400 200">
  <defs>
    <!-- Linear gradient -->
    <linearGradient id="linearGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:red;stop-opacity:1" />
      <stop offset="25%" style="stop-color:orange;stop-opacity:1" />
      <stop offset="50%" style="stop-color:yellow;stop-opacity:1" />
      <stop offset="75%" style="stop-color:green;stop-opacity:1" />
      <stop offset="100%" style="stop-color:blue;stop-opacity:1" />
    </linearGradient>

    <!-- Diagonal gradient -->
    <linearGradient id="diagonalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:purple;stop-opacity:1" />
      <stop offset="100%" style="stop-color:pink;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Apply gradients -->
  <rect x="20" y="20" width="150" height="80" fill="url(#linearGrad)" />
  <circle cx="300" cy="60" r="50" fill="url(#diagonalGrad)" />
</svg>
```

### Radial Gradients

```html
<svg width="400" height="200" viewBox="0 0 400 200">
  <defs>
    <!-- Basic radial gradient -->
    <radialGradient id="radialGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:white;stop-opacity:1" />
      <stop offset="100%" style="stop-color:blue;stop-opacity:1" />
    </radialGradient>

    <!-- Offset radial gradient -->
    <radialGradient id="offsetGrad" cx="30%" cy="30%" r="70%">
      <stop offset="0%" style="stop-color:yellow;stop-opacity:1" />
      <stop offset="50%" style="stop-color:orange;stop-opacity:1" />
      <stop offset="100%" style="stop-color:red;stop-opacity:1" />
    </radialGradient>
  </defs>

  <!-- Apply gradients -->
  <circle cx="80" cy="100" r="60" fill="url(#radialGrad)" />
  <ellipse cx="250" cy="100" rx="80" ry="50" fill="url(#offsetGrad)" />
</svg>
```

---

## 📝 Text in SVG

### Basic Text

```html
<svg width="400" height="150" viewBox="0 0 400 150">
  <!-- Basic text -->
  <text x="50" y="50" font-family="Arial" font-size="24" fill="black">
    Hello SVG
  </text>

  <!-- Styled text -->
  <text
    x="50"
    y="80"
    font-family="Georgia"
    font-size="18"
    fill="blue"
    font-weight="bold"
  >
    Styled Text
  </text>

  <!-- Rotated text -->
  <text
    x="200"
    y="100"
    font-size="16"
    fill="green"
    transform="rotate(30 200 100)"
  >
    Rotated Text
  </text>

  <!-- Text on path -->
  <defs>
    <path id="textPath" d="M 50 120 Q 200 80 350 120" />
  </defs>
  <text font-size="14" fill="purple">
    <textPath href="#textPath">Text following a curved path</textPath>
  </text>
</svg>
```

### Text with Tspan

```html
<svg width="400" height="200" viewBox="0 0 400 200">
  <!-- Multi-line text -->
  <text x="50" y="50" font-family="Arial" font-size="16" fill="black">
    <tspan x="50" dy="0">First line of text</tspan>
    <tspan x="50" dy="1.2em">Second line of text</tspan>
    <tspan x="50" dy="1.2em" fill="red">Third line in red</tspan>
  </text>

  <!-- Formatted text -->
  <text x="50" y="120" font-size="18">
    <tspan fill="blue">Blue text</tspan>
    <tspan fill="red" font-weight="bold">bold red text</tspan>
    <tspan fill="green" font-style="italic">and italic green</tspan>
  </text>
</svg>
```

---

## 🎬 SVG Animations

### CSS Animations

```html
<svg width="200" height="100" viewBox="0 0 200 100">
  <style>
    .animated-circle {
      animation: bounce 2s infinite;
    }

    @keyframes bounce {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    .pulsing-rect {
      animation: pulse 1.5s ease-in-out infinite alternate;
    }

    @keyframes pulse {
      from {
        opacity: 1;
        transform: scale(1);
      }
      to {
        opacity: 0.7;
        transform: scale(1.1);
      }
    }
  </style>

  <circle cx="50" cy="50" r="20" fill="blue" class="animated-circle" />
  <rect x="120" y="30" width="40" height="40" fill="red" class="pulsing-rect" />
</svg>
```

### SVG SMIL Animations

```html
<svg width="300" height="100" viewBox="0 0 300 100">
  <!-- Moving circle -->
  <circle cx="50" cy="50" r="15" fill="orange">
    <animateMotion
      dur="3s"
      repeatCount="indefinite"
      path="M 0 0 L 200 0 L 200 50 L 0 50 Z"
    />
  </circle>

  <!-- Scaling rectangle -->
  <rect x="50" y="60" width="20" height="20" fill="green">
    <animate
      attributeName="width"
      from="20"
      to="100"
      dur="2s"
      repeatCount="indefinite"
    />
    <animate
      attributeName="height"
      from="20"
      to="30"
      dur="2s"
      repeatCount="indefinite"
    />
  </rect>

  <!-- Color changing circle -->
  <circle cx="250" cy="50" r="20" fill="red">
    <animate
      attributeName="fill"
      values="red;yellow;green;blue;red"
      dur="4s"
      repeatCount="indefinite"
    />
  </circle>
</svg>
```

---

## 🎯 Interactive SVG

### Hover Effects

```html
<svg width="300" height="150" viewBox="0 0 300 150">
  <style>
    .interactive:hover {
      fill: orange;
      transform: scale(1.1);
      transition: all 0.3s ease;
    }

    .button:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  </style>

  <!-- Hoverable shapes -->
  <circle cx="75" cy="75" r="30" fill="blue" class="interactive" />
  <rect x="150" y="45" width="60" height="60" fill="red" class="interactive" />

  <!-- Clickable button -->
  <g class="button" onclick="alert('Button clicked!')">
    <rect x="240" y="50" width="40" height="30" fill="green" rx="5" />
    <text x="260" y="68" text-anchor="middle" font-size="12" fill="white">
      Go
    </text>
  </g>
</svg>
```

### JavaScript Interaction

```html
<svg id="interactive-svg" width="400" height="200" viewBox="0 0 400 200">
  <circle id="draggable-circle" cx="100" cy="100" r="30" fill="blue" />

  <rect id="color-rect" x="200" y="50" width="80" height="60" fill="red" />
  <text x="240" y="130" text-anchor="middle" id="color-text">Red</text>
</svg>

<script>
  const svg = document.getElementById('interactive-svg');
  const circle = document.getElementById('draggable-circle');
  const rect = document.getElementById('color-rect');
  const colorText = document.getElementById('color-text');

  let isDragging = false;
  let dragOffset = { x: 0, y: 0 };

  // Make circle draggable
  circle.addEventListener('mousedown', e => {
    isDragging = true;
    const rect = circle.getBoundingClientRect();
    dragOffset.x = e.clientX - rect.left - rect.width / 2;
    dragOffset.y = e.clientY - rect.top - rect.height / 2;
  });

  document.addEventListener('mousemove', e => {
    if (isDragging) {
      const svgRect = svg.getBoundingClientRect();
      const x = e.clientX - svgRect.left - dragOffset.x;
      const y = e.clientY - svgRect.top - dragOffset.y;

      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Change rectangle color on click
  const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
  let colorIndex = 0;

  rect.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    const newColor = colors[colorIndex];

    rect.setAttribute('fill', newColor);
    colorText.textContent =
      newColor.charAt(0).toUpperCase() + newColor.slice(1);
  });
</script>
```

---

## 🎨 Patterns and Filters

### Patterns

```html
<svg width="400" height="200" viewBox="0 0 400 200">
  <defs>
    <!-- Striped pattern -->
    <pattern id="stripes" patternUnits="userSpaceOnUse" width="20" height="20">
      <rect width="20" height="20" fill="white" />
      <rect width="10" height="20" fill="blue" />
    </pattern>

    <!-- Dot pattern -->
    <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
      <circle cx="10" cy="10" r="2" fill="red" />
    </pattern>
  </defs>

  <!-- Apply patterns -->
  <rect x="20" y="20" width="150" height="80" fill="url(#stripes)" />
  <circle cx="300" cy="60" r="50" fill="url(#dots)" />
</svg>
```

### SVG Filters

```html
<svg width="400" height="200" viewBox="0 0 400 200">
  <defs>
    <!-- Blur filter -->
    <filter id="blur">
      <feGaussianBlur stdDeviation="3" />
    </filter>

    <!-- Drop shadow -->
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow
        dx="4"
        dy="4"
        stdDeviation="3"
        flood-color="rgba(0,0,0,0.3)"
      />
    </filter>

    <!-- Glow effect -->
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- Apply filters -->
  <rect x="20" y="20" width="80" height="60" fill="blue" filter="url(#blur)" />
  <circle cx="150" cy="50" r="30" fill="red" filter="url(#shadow)" />
  <rect
    x="220"
    y="20"
    width="80"
    height="60"
    fill="green"
    filter="url(#glow)"
  />
</svg>
```

---

## 📊 Data Visualization Example

```html
<svg width="400" height="300" viewBox="0 0 400 300">
  <defs>
    <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#4CAF50;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#45a049;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Chart background -->
  <rect x="50" y="50" width="300" height="200" fill="#f9f9f9" stroke="#ddd" />

  <!-- Grid lines -->
  <g stroke="#ddd" stroke-width="1">
    <line x1="50" y1="70" x2="350" y2="70" />
    <line x1="50" y1="110" x2="350" y2="110" />
    <line x1="50" y1="150" x2="350" y2="150" />
    <line x1="50" y1="190" x2="350" y2="190" />
    <line x1="50" y1="230" x2="350" y2="230" />
  </g>

  <!-- Bars -->
  <rect x="80" y="180" width="30" height="60" fill="url(#barGradient)" />
  <rect x="130" y="140" width="30" height="100" fill="url(#barGradient)" />
  <rect x="180" y="100" width="30" height="140" fill="url(#barGradient)" />
  <rect x="230" y="160" width="30" height="80" fill="url(#barGradient)" />
  <rect x="280" y="120" width="30" height="120" fill="url(#barGradient)" />

  <!-- Labels -->
  <text x="95" y="260" text-anchor="middle" font-size="12">Jan</text>
  <text x="145" y="260" text-anchor="middle" font-size="12">Feb</text>
  <text x="195" y="260" text-anchor="middle" font-size="12">Mar</text>
  <text x="245" y="260" text-anchor="middle" font-size="12">Apr</text>
  <text x="295" y="260" text-anchor="middle" font-size="12">May</text>

  <!-- Title -->
  <text x="200" y="30" text-anchor="middle" font-size="18" font-weight="bold">
    Monthly Sales
  </text>
</svg>
```

---

## 🎯 Best Practices

### ✅ DO:

```html
<!-- Use semantic structure -->
<svg role="img" aria-labelledby="chart-title">
  <title id="chart-title">Sales Chart</title>
  <!-- Chart content -->
</svg>

<!-- Optimize for accessibility -->
<svg width="200" height="100" viewBox="0 0 200 100">
  <desc>A simple bar chart showing monthly sales</desc>
  <!-- Chart content -->
</svg>

<!-- Use CSS for styling -->
<style>
  .chart-bar {
    fill: #4caf50;
  }
  .chart-label {
    font-family: Arial;
    font-size: 12px;
  }
</style>

<!-- Minimize file size -->
<svg width="100" height="100" viewBox="0 0 100 100">
  <!-- Use relative units and optimize paths -->
</svg>
```

### ❌ DON'T:

```html
<!-- Don't use SVG for everything -->
<img src="photo.jpg" alt="Photo" />
<!-- Use <img> for raster images -->

<!-- Don't forget viewBox -->
<svg width="200" height="100">
  <!-- Missing viewBox! -->
  <circle cx="50" cy="50" r="40" />
</svg>

<!-- Don't use inline styles excessively -->
<circle style="fill: red; stroke: blue;" />
<!-- Use CSS classes -->

<!-- Don't forget accessibility -->
<svg>
  <!-- Missing title, desc, or aria attributes -->
  <circle cx="50" cy="50" r="40" />
</svg>
```

---

## 🚀 What's Next?

Now that you understand SVG, learn about **Multimedia** elements:

👉 [Next: Multimedia →](./multimedia.md)

Or return to the [HTML Overview →](../index.md)

Master SVG for scalable, interactive graphics! 🔷
