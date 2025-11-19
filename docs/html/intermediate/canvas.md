---
id: canvas
title: HTML5 Canvas - Complete Graphics Guide
description:
  Master HTML5 Canvas API for 2D graphics, animations, games, and interactive
  visualizations with practical examples.
keywords:
  [
    html5 canvas,
    canvas api,
    2d graphics,
    canvas drawing,
    canvas animation,
    canvas games,
    javascript graphics,
    html canvas,
  ]
tags: [HTML, Canvas, Graphics, Animation, Games, JavaScript]
sidebar_position: 7
---

# 🎨 HTML5 Canvas

The HTML5 Canvas API provides a powerful way to draw graphics, create
animations, build games, and generate visual content dynamically using
JavaScript.

## 📖 What is Canvas?

Canvas is an HTML element that provides a drawable region in your web page. It's
like a blank canvas where you can draw shapes, text, images, and create
animations using JavaScript.

```html
<canvas id="myCanvas" width="800" height="600">
  Your browser doesn't support HTML5 Canvas.
</canvas>

<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Draw a red rectangle
  ctx.fillStyle = 'red';
  ctx.fillRect(50, 50, 200, 100);
</script>
```

---

## 🏗️ Canvas Setup

### Basic Canvas Element

```html
<!-- Canvas with explicit dimensions -->
<canvas
  id="gameCanvas"
  width="800"
  height="600"
  style="border: 1px solid #ccc;"
>
  Canvas not supported in your browser.
</canvas>

<!-- Responsive canvas -->
<canvas
  id="responsiveCanvas"
  style="width: 100%; max-width: 800px; height: auto;"
>
  Canvas not supported.
</canvas>
```

### Getting Canvas Context

```javascript
const canvas = document.getElementById('myCanvas');

// 2D rendering context (most common)
const ctx = canvas.getContext('2d');

// WebGL context for 3D graphics (advanced)
// const gl = canvas.getContext('webgl');

// Check if canvas is supported
if (!canvas.getContext) {
  console.error('Canvas not supported');
  return;
}
```

### Canvas Properties

```javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Canvas dimensions
console.log('Width:', canvas.width); // 800
console.log('Height:', canvas.height); // 600

// CSS dimensions (may differ from canvas dimensions)
console.log('CSS Width:', canvas.clientWidth);
console.log('CSS Height:', canvas.clientHeight);

// Device pixel ratio (for high DPI displays)
const dpr = window.devicePixelRatio || 1;

// Scale canvas for high DPI
canvas.width = canvas.clientWidth * dpr;
canvas.height = canvas.clientHeight * dpr;
ctx.scale(dpr, dpr);
```

---

## 🎨 Drawing Shapes

### Rectangles

```javascript
const ctx = canvas.getContext('2d');

// Filled rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100);

// Stroked rectangle (outline only)
ctx.strokeStyle = 'red';
ctx.lineWidth = 3;
ctx.strokeRect(50, 200, 200, 100);

// Clear rectangle (erase)
ctx.clearRect(75, 75, 50, 50);
```

### Paths

```javascript
const ctx = canvas.getContext('2d');

// Start a new path
ctx.beginPath();

// Move to starting point
ctx.moveTo(100, 100);

// Draw lines
ctx.lineTo(200, 100);
ctx.lineTo(200, 200);
ctx.lineTo(100, 200);

// Close the path (optional)
ctx.closePath();

// Stroke the path
ctx.strokeStyle = 'green';
ctx.lineWidth = 2;
ctx.stroke();

// Fill the path
ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
ctx.fill();
```

### Circles and Arcs

```javascript
const ctx = canvas.getContext('2d');

// Circle (arc with 2π radians)
ctx.beginPath();
ctx.arc(150, 150, 50, 0, 2 * Math.PI);
ctx.fillStyle = 'orange';
ctx.fill();

// Semi-circle
ctx.beginPath();
ctx.arc(300, 150, 50, 0, Math.PI);
ctx.fillStyle = 'purple';
ctx.fill();

// Arc (partial circle)
ctx.beginPath();
ctx.arc(450, 150, 50, Math.PI / 4, (3 * Math.PI) / 4);
ctx.strokeStyle = 'blue';
ctx.lineWidth = 3;
ctx.stroke();
```

### Complex Shapes

```javascript
const ctx = canvas.getContext('2d');

// Triangle
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(150, 50);
ctx.lineTo(200, 100);
ctx.closePath();
ctx.fillStyle = 'yellow';
ctx.fill();

// Star shape
function drawStar(x, y, radius, points = 5) {
  ctx.beginPath();
  const angle = (Math.PI * 2) / points;

  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? radius : radius * 0.5;
    const currentAngle = (i * angle) / 2;
    const px = x + Math.cos(currentAngle) * r;
    const py = y + Math.sin(currentAngle) * r;

    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }

  ctx.closePath();
  ctx.fillStyle = 'gold';
  ctx.fill();
}

drawStar(300, 200, 40);
```

---

## ✏️ Lines and Curves

### Basic Lines

```javascript
const ctx = canvas.getContext('2d');

// Simple line
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(250, 50);
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();

// Multiple segments
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(150, 100);
ctx.lineTo(150, 150);
ctx.lineTo(250, 150);
ctx.stroke();
```

### Line Styles

```javascript
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'red';
ctx.lineWidth = 5;

// Line caps
ctx.lineCap = 'butt'; // Default
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.stroke();

ctx.lineCap = 'round'; // Rounded ends
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.lineTo(150, 100);
ctx.stroke();

ctx.lineCap = 'square'; // Square ends
ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(150, 150);
ctx.stroke();

// Line joins
ctx.lineJoin = 'miter'; // Default
ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(250, 25);
ctx.lineTo(300, 50);
ctx.stroke();

ctx.lineJoin = 'round'; // Rounded corners
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(250, 75);
ctx.lineTo(300, 100);
ctx.stroke();

ctx.lineJoin = 'bevel'; // Beveled corners
ctx.beginPath();
ctx.moveTo(200, 150);
ctx.lineTo(250, 125);
ctx.lineTo(300, 150);
ctx.stroke();
```

### Bézier Curves

```javascript
const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'blue';
ctx.lineWidth = 2;

// Quadratic Bézier curve
ctx.beginPath();
ctx.moveTo(50, 200); // Start point
ctx.quadraticCurveTo(150, 100, 250, 200); // Control point, end point
ctx.stroke();

// Cubic Bézier curve
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(50, 300); // Start point
ctx.bezierCurveTo(100, 250, 200, 350, 250, 300); // Two control points, end point
ctx.stroke();
```

---

## 🎨 Colors and Styles

### Fill and Stroke Styles

```javascript
const ctx = canvas.getContext('2d');

// Color names
ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);

// Hex colors
ctx.fillStyle = '#00ff00';
ctx.fillRect(200, 50, 100, 100);

// RGB/RGBA
ctx.fillStyle = 'rgb(0, 0, 255)';
ctx.fillRect(50, 200, 100, 100);

ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
ctx.fillRect(200, 200, 100, 100);

// HSL
ctx.fillStyle = 'hsl(120, 100%, 50%)';
ctx.fillRect(50, 350, 100, 100);
```

### Gradients

```javascript
const ctx = canvas.getContext('2d');

// Linear gradient
const linearGradient = ctx.createLinearGradient(0, 0, 200, 0);
linearGradient.addColorStop(0, 'red');
linearGradient.addColorStop(0.5, 'yellow');
linearGradient.addColorStop(1, 'blue');

ctx.fillStyle = linearGradient;
ctx.fillRect(50, 50, 200, 100);

// Radial gradient
const radialGradient = ctx.createRadialGradient(300, 100, 0, 300, 100, 100);
radialGradient.addColorStop(0, 'white');
radialGradient.addColorStop(1, 'black');

ctx.fillStyle = radialGradient;
ctx.beginPath();
ctx.arc(300, 100, 100, 0, 2 * Math.PI);
ctx.fill();
```

### Patterns

```javascript
const ctx = canvas.getContext('2d');

// Create pattern from image
const img = new Image();
img.onload = function () {
  const pattern = ctx.createPattern(img, 'repeat');
  ctx.fillStyle = pattern;
  ctx.fillRect(50, 50, 200, 200);
};
img.src = 'pattern.png';

// Create pattern from canvas
const patternCanvas = document.createElement('canvas');
patternCanvas.width = 20;
patternCanvas.height = 20;
const patternCtx = patternCanvas.getContext('2d');

patternCtx.fillStyle = 'red';
patternCtx.fillRect(0, 0, 10, 10);
patternCtx.fillRect(10, 10, 10, 10);

const pattern = ctx.createPattern(patternCanvas, 'repeat');
ctx.fillStyle = pattern;
ctx.fillRect(300, 50, 100, 100);
```

---

## 📝 Text Rendering

### Basic Text

```javascript
const ctx = canvas.getContext('2d');

// Font properties
ctx.font = 'bold 24px Arial';
ctx.fillStyle = 'black';
ctx.textAlign = 'left';
ctx.textBaseline = 'top';

// Fill text
ctx.fillText('Hello Canvas!', 50, 50);

// Stroke text
ctx.strokeStyle = 'blue';
ctx.lineWidth = 1;
ctx.strokeText('Outlined Text', 50, 100);
```

### Text Properties

```javascript
const ctx = canvas.getContext('2d');

// Font family and size
ctx.font = 'italic 18px Georgia';

// Text alignment
ctx.textAlign = 'center'; // left, center, right
ctx.textBaseline = 'middle'; // top, middle, bottom, alphabetic

// Measure text
const text = 'Hello World';
const metrics = ctx.measureText(text);
console.log('Width:', metrics.width);

// Text with background
function drawTextWithBackground(text, x, y, padding = 10) {
  const metrics = ctx.measureText(text);
  const height = parseInt(ctx.font); // Approximate height

  // Draw background
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.fillRect(
    x - padding,
    y - height + padding,
    metrics.width + padding * 2,
    height + padding,
  );

  // Draw text
  ctx.fillStyle = 'black';
  ctx.fillText(text, x, y);
}

drawTextWithBackground('Hello World', 100, 150);
```

---

## 🖼️ Images and Media

### Drawing Images

```javascript
const ctx = canvas.getContext('2d');
const img = new Image();

// Load and draw image
img.onload = function () {
  // Draw full image
  ctx.drawImage(img, 50, 50);

  // Draw scaled image
  ctx.drawImage(img, 200, 50, 100, 100);

  // Draw cropped image
  ctx.drawImage(img, 10, 10, 50, 50, 350, 50, 100, 100);
};

img.src = 'image.jpg';

// Error handling
img.onerror = function () {
  ctx.fillStyle = 'red';
  ctx.font = '16px Arial';
  ctx.fillText('Error loading image', 50, 50);
};
```

### Image Data Manipulation

```javascript
const ctx = canvas.getContext('2d');
const img = new Image();

img.onload = function () {
  // Draw image
  ctx.drawImage(img, 0, 0);

  // Get image data
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data; // RGBA values

  // Manipulate pixels (invert colors)
  for (let i = 0; i < data.length; i += 4) {
    data[i] = 255 - data[i]; // Red
    data[i + 1] = 255 - data[i + 1]; // Green
    data[i + 2] = 255 - data[i + 2]; // Blue
    // data[i + 3] is alpha (transparency)
  }

  // Put modified data back
  ctx.putImageData(imageData, 0, 0);
};

img.src = 'photo.jpg';
```

### Video on Canvas

```html
<canvas id="videoCanvas" width="640" height="360"></canvas>
<video id="video" src="movie.mp4" controls style="display: none;"></video>
<button onclick="playVideo()">Play on Canvas</button>

<script>
  const canvas = document.getElementById('videoCanvas');
  const ctx = canvas.getContext('2d');
  const video = document.getElementById('video');
  let animationId;

  function playVideo() {
    video.play();

    function drawFrame() {
      if (!video.paused && !video.ended) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        animationId = requestAnimationFrame(drawFrame);
      }
    }

    drawFrame();
  }

  video.addEventListener('pause', () => {
    cancelAnimationFrame(animationId);
  });

  video.addEventListener('ended', () => {
    cancelAnimationFrame(animationId);
  });
</script>
```

---

## 🎮 Animation and Interaction

### Basic Animation

```javascript
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

let x = 0;
let direction = 1;

function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw moving rectangle
  ctx.fillStyle = 'blue';
  ctx.fillRect(x, 100, 50, 50);

  // Update position
  x += direction * 2;

  // Bounce off edges
  if (x <= 0 || x >= canvas.width - 50) {
    direction *= -1;
  }

  // Continue animation
  requestAnimationFrame(animate);
}

// Start animation
animate();
```

### Mouse Interaction

```javascript
const canvas = document.getElementById('interactiveCanvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('mousemove', event => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw circle at mouse position
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.fill();

  // Draw coordinates
  ctx.fillStyle = 'black';
  ctx.font = '16px Arial';
  ctx.fillText(`X: ${Math.round(x)}, Y: ${Math.round(y)}`, 10, 30);
});

canvas.addEventListener('click', event => {
  // Add permanent circle on click
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.fillStyle = 'green';
  ctx.fill();
});
```

### Touch Events (Mobile)

```javascript
const canvas = document.getElementById('touchCanvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener('touchstart', event => {
  event.preventDefault();
  const touch = event.touches[0];
  const rect = canvas.getBoundingClientRect();
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  // Draw touch point
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.fillStyle = 'orange';
  ctx.fill();
});

canvas.addEventListener('touchmove', event => {
  event.preventDefault();
  const touch = event.touches[0];
  const rect = canvas.getBoundingClientRect();
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;

  // Draw trail
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.fillStyle = 'rgba(255, 165, 0, 0.5)';
  ctx.fill();
});
```

---

## 🎮 Simple Game Example

```html
<canvas
  id="gameCanvas"
  width="400"
  height="300"
  style="border: 1px solid #ccc;"
></canvas>
<div>
  <p>Score: <span id="score">0</span></p>
  <button onclick="resetGame()">Reset Game</button>
</div>

<script>
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  const scoreElement = document.getElementById('score');

  // Game state
  let score = 0;
  let gameRunning = true;

  // Ball properties
  const ball = {
    x: canvas.width / 2,
    y: canvas.height - 30,
    radius: 10,
    dx: 2,
    dy: -2,
  };

  // Paddle properties
  const paddle = {
    width: 75,
    height: 10,
    x: (canvas.width - 75) / 2,
  };

  // Brick properties
  const brickRowCount = 3;
  const brickColumnCount = 5;
  const brickWidth = 75;
  const brickHeight = 20;
  const brickPadding = 10;
  const brickOffsetTop = 30;
  const brickOffsetLeft = 30;

  const bricks = [];
  for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }

  // Mouse controls
  canvas.addEventListener('mousemove', event => {
    const rect = canvas.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;

    if (relativeX > 0 && relativeX < canvas.width) {
      paddle.x = relativeX - paddle.width / 2;
    }
  });

  function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  }

  function drawPaddle() {
    ctx.beginPath();
    ctx.rect(
      paddle.x,
      canvas.height - paddle.height,
      paddle.width,
      paddle.height,
    );
    ctx.fillStyle = '#0095DD';
    ctx.fill();
    ctx.closePath();
  }

  function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        if (bricks[c][r].status === 1) {
          const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
          const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;

          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;

          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = '#0095DD';
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }

  function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        const brick = bricks[c][r];

        if (brick.status === 1) {
          if (
            ball.x > brick.x &&
            ball.x < brick.x + brickWidth &&
            ball.y > brick.y &&
            ball.y < brick.y + brickHeight
          ) {
            ball.dy = -ball.dy;
            brick.status = 0;
            score += 10;
            scoreElement.textContent = score;

            // Check win condition
            if (score === brickRowCount * brickColumnCount * 10) {
              alert('You win! Congratulations!');
              gameRunning = false;
            }
          }
        }
      }
    }
  }

  function draw() {
    if (!gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();

    // Ball movement
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Wall collisions
    if (
      ball.x + ball.dx > canvas.width - ball.radius ||
      ball.x + ball.dx < ball.radius
    ) {
      ball.dx = -ball.dx;
    }

    if (ball.y + ball.dy < ball.radius) {
      ball.dy = -ball.dy;
    } else if (ball.y + ball.dy > canvas.height - ball.radius) {
      // Paddle collision
      if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
        ball.dy = -ball.dy;
      } else {
        // Game over
        alert('Game Over! Your score: ' + score);
        gameRunning = false;
        return;
      }
    }

    requestAnimationFrame(draw);
  }

  function resetGame() {
    score = 0;
    scoreElement.textContent = score;
    gameRunning = true;

    // Reset ball
    ball.x = canvas.width / 2;
    ball.y = canvas.height - 30;
    ball.dx = 2;
    ball.dy = -2;

    // Reset paddle
    paddle.x = (canvas.width - paddle.width) / 2;

    // Reset bricks
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r].status = 1;
      }
    }

    draw();
  }

  // Start game
  draw();
</script>
```

---

## 🎯 Best Practices

### ✅ DO:

```javascript
// Check canvas support
if (!canvas.getContext) {
  console.error('Canvas not supported');
}

// Use requestAnimationFrame for smooth animations
function animate() {
  // Update and draw
  requestAnimationFrame(animate);
}

// Clear canvas properly
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Use save/restore for transformations
ctx.save();
// Apply transformations
ctx.translate(100, 100);
ctx.rotate(Math.PI / 4);
// Draw transformed content
ctx.restore();

// Handle high DPI displays
const dpr = window.devicePixelRatio || 1;
canvas.width = canvas.clientWidth * dpr;
canvas.height = canvas.clientHeight * dpr;
ctx.scale(dpr, dpr);
```

### ❌ DON'T:

```javascript
// Don't use setInterval for animations
setInterval(draw, 16); // Use requestAnimationFrame instead

// Don't forget to clear canvas
// ctx.clearRect(0, 0, canvas.width, canvas.height); // Missing!

// Don't draw outside the event loop
canvas.addEventListener('load', () => {
  // Draw immediately - may not work
});

// Don't use canvas for layout (use CSS instead)
canvas.style.width = '100%'; // Use CSS for layout
```

---

## 🚀 What's Next?

Now that you understand Canvas, learn about **SVG** for vector graphics:

👉 [Next: SVG Graphics →](./svg.md)

Or return to the [HTML Overview →](../index.md)

Master Canvas for games and interactive graphics! 🎨
