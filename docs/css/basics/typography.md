---
id: css-typography
title: CSS Typography - Complete Guide
description:
  Master CSS typography including fonts, text styling, line height, letter
  spacing, text alignment, web fonts, and creating beautiful readable text.
keywords:
  [
    css typography,
    css fonts,
    font-family,
    font-size,
    line-height,
    text-align,
    web fonts,
    google fonts,
    font-weight,
  ]
tags: [CSS, Typography, Fonts, Design, Basics]
sidebar_position: 4
---

# ✍️ CSS Typography

Typography is the art of arranging type to make text legible, readable, and
visually appealing. Great typography elevates your website's design and user
experience.

## 📖 Font Properties

### font-family

Specifies the typeface for text.

```css
/* Single font */
body {
  font-family: Arial;
}

/* Font stack (fallbacks) */
body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

/* Generic families */
.serif {
  font-family: Georgia, serif;
}
.sans-serif {
  font-family: Arial, sans-serif;
}
.monospace {
  font-family: 'Courier New', monospace;
}
.cursive {
  font-family: 'Comic Sans MS', cursive;
}
.fantasy {
  font-family: Impact, fantasy;
}
```

**Font Stack Best Practices:**

```css
/* Modern sans-serif stack */
body {
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
}

/* Elegant serif stack */
body {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

/* Code/monospace stack */
code {
  font-family: 'Monaco', 'Courier New', Courier, monospace;
}
```

### font-size

```css
/* Absolute units */
p {
  font-size: 16px;
}
p {
  font-size: 12pt;
}

/* Relative units (recommended) */
p {
  font-size: 1rem;
} /* Relative to root */
p {
  font-size: 1.2em;
} /* Relative to parent */
p {
  font-size: 100%;
} /* Percentage */

/* Viewport units */
h1 {
  font-size: 5vw;
} /* 5% of viewport width */

/* Keywords */
p {
  font-size: small;
}
p {
  font-size: medium;
}
p {
  font-size: large;
}
p {
  font-size: x-large;
}
p {
  font-size: xx-large;
}
```

**Recommended Scale:**

```css
:root {
  --font-size-xs: 0.75rem; /* 12px */
  --font-size-sm: 0.875rem; /* 14px */
  --font-size-base: 1rem; /* 16px */
  --font-size-lg: 1.125rem; /* 18px */
  --font-size-xl: 1.25rem; /* 20px */
  --font-size-2xl: 1.5rem; /* 24px */
  --font-size-3xl: 1.875rem; /* 30px */
  --font-size-4xl: 2.25rem; /* 36px */
}

h1 {
  font-size: var(--font-size-4xl);
}
h2 {
  font-size: var(--font-size-3xl);
}
h3 {
  font-size: var(--font-size-2xl);
}
p {
  font-size: var(--font-size-base);
}
```

### font-weight

```css
/* Keyword values */
p {
  font-weight: normal;
} /* 400 */
p {
  font-weight: bold;
} /* 700 */
p {
  font-weight: lighter;
} /* Relative */
p {
  font-weight: bolder;
} /* Relative */

/* Numeric values (100-900) */
p {
  font-weight: 100;
} /* Thin */
p {
  font-weight: 200;
} /* Extra Light */
p {
  font-weight: 300;
} /* Light */
p {
  font-weight: 400;
} /* Normal */
p {
  font-weight: 500;
} /* Medium */
p {
  font-weight: 600;
} /* Semi Bold */
p {
  font-weight: 700;
} /* Bold */
p {
  font-weight: 800;
} /* Extra Bold */
p {
  font-weight: 900;
} /* Black */
```

**Practical Usage:**

```css
h1,
h2,
h3 {
  font-weight: 700; /* Bold headings */
}

p {
  font-weight: 400; /* Normal body text */
}

.lead {
  font-weight: 300; /* Light intro text */
}

strong,
b {
  font-weight: 700; /* Bold text */
}
```

### font-style

```css
p {
  font-style: normal;
}
em {
  font-style: italic;
}
p {
  font-style: oblique;
}
p {
  font-style: oblique 10deg;
} /* With angle */
```

---

## 📐 Text Spacing

### line-height

Controls the vertical space between lines of text.

```css
/* Unitless (recommended) */
p {
  line-height: 1.5; /* 1.5× the font-size */
}

/* Fixed units */
p {
  line-height: 24px;
  line-height: 1.5rem;
}

/* Percentage */
p {
  line-height: 150%;
}
```

**Recommended Values:**

```css
body {
  line-height: 1.6; /* Body text */
}

h1,
h2,
h3 {
  line-height: 1.2; /* Headings (tighter) */
}

code {
  line-height: 1.4; /* Code blocks */
}
```

### letter-spacing

Controls the space between characters.

```css
/* Increase spacing */
h1 {
  letter-spacing: 0.05em;
  letter-spacing: 2px;
}

/* Decrease spacing (tracking) */
p {
  letter-spacing: -0.02em;
}

/* Uppercase with spacing */
.uppercase {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
```

### word-spacing

Controls the space between words.

```css
p {
  word-spacing: 0.2em;
  word-spacing: 5px;
}
```

---

## 📝 Text Alignment & Decoration

### text-align

```css
.left {
  text-align: left;
}
.center {
  text-align: center;
}
.right {
  text-align: right;
}
.justify {
  text-align: justify;
}
```

### text-wrap

Controls how text wraps within its container.

```css
/* Default wrapping */
p {
  text-wrap: wrap; /* Normal wrapping */
}

/* Prevent wrapping */
.title {
  text-wrap: nowrap;
}

/* Balance text (experimental) */
.heading {
  text-wrap: balance; /* Attempts to balance lines */
}

/* Pretty wrapping (experimental) */
p {
  text-wrap: pretty; /* Prevents orphans/widows */
}
```

### text-box-trim

Controls vertical spacing using font metrics.

```css
.heading {
  text-box-trim: trim-both; /* Trim space above and below */
  text-box-trim: trim-start; /* Trim space above */
  text-box-trim: trim-end; /* Trim space below */
}
```

**Browser Support**: Chrome 120+, Firefox (experimental), Safari (experimental)

### text-decoration

```css
/* Underline */
a {
  text-decoration: underline;
}

/* Remove underline */
a {
  text-decoration: none;
}

/* Multiple decorations */
p {
  text-decoration: underline overline;
  text-decoration-color: red;
  text-decoration-style: wavy;
  text-decoration-thickness: 2px;
}

/* Shorthand */
p {
  text-decoration: underline wavy red 2px;
}
```

### text-transform

```css
.uppercase {
  text-transform: uppercase;
} /* ALL CAPS */
.lowercase {
  text-transform: lowercase;
} /* all lowercase */
.capitalize {
  text-transform: capitalize;
} /* First Letter */
.none {
  text-transform: none;
}
```

### text-indent

```css
/* Indent first line */
p {
  text-indent: 2em;
}

/* Hanging indent */
p {
  text-indent: -2em;
  padding-left: 2em;
}
```

---

## 📏 Text Overflow & Wrapping

### text-overflow

```css
.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Result: "This is a long te..." */
```

### white-space

```css
.normal {
  white-space: normal;
} /* Default */
.nowrap {
  white-space: nowrap;
} /* No wrapping */
.pre {
  white-space: pre;
} /* Like <pre> */
.pre-wrap {
  white-space: pre-wrap;
} /* Preserve + wrap */
.pre-line {
  white-space: pre-line;
} /* Collapse + wrap */
```

### word-break

```css
.break-all {
  word-break: break-all;
} /* Break anywhere */
.keep-all {
  word-break: keep-all;
} /* No break */
.break-word {
  word-break: break-word;
} /* Break long words */
```

### overflow-wrap

```css
.wrap {
  overflow-wrap: normal;
  overflow-wrap: break-word; /* Break long words */
}
```

---

## 🌐 Web Fonts

### Google Fonts

```html
<!-- In HTML <head> -->
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
  rel="stylesheet"
/>
```

```css
body {
  font-family: 'Roboto', sans-serif;
}
```

### @font-face

```css
@font-face {
  font-family: 'CustomFont';
  src:
    url('custom-font.woff2') format('woff2'),
    url('custom-font.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Better loading performance */
}

body {
  font-family: 'CustomFont', sans-serif;
}
```

### Variable Fonts

```css
@font-face {
  font-family: 'Inter var';
  src: url('Inter-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-style: oblique 0deg 10deg;
}

body {
  font-family: 'Inter var', sans-serif;
}

h1 {
  font-weight: 800;
  font-variation-settings: 'wght' 800;
}
```

---

## 🎯 Practical Examples

### Example 1: Modern Article

```css
article {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  max-width: 65ch; /* Optimal line length */
}

article h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

article h2 {
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 1.3;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

article p {
  margin-bottom: 1.5rem;
}

article .lead {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.6;
  color: #666;
}
```

### Example 2: Card Title

```css
.card-title {
  font-family: 'Georgia', serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: #1a1a1a;
  margin-bottom: 0.5rem;

  /* Prevent long titles from breaking layout */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
```

### Example 3: Button Text

```css
.button {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1;
}
```

### Example 4: Code Block

```css
code {
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: #f5f5f5;
  padding: 0.2em 0.4em;
  border-radius: 3px;
}

pre code {
  display: block;
  padding: 1rem;
  overflow-x: auto;
}
```

---

## ✅ Best Practices

1. **Use System Font Stack**

   ```css
   body {
     font-family:
       -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
   }
   ```

2. **Set Base Font Size**

   ```css
   html {
     font-size: 16px; /* 1rem = 16px */
   }
   ```

3. **Use Relative Units**

   ```css
   /* Good: Scales with root font-size */
   h1 {
     font-size: 2.5rem;
   }

   /* Avoid: Fixed sizes */
   h1 {
     font-size: 40px;
   }
   ```

4. **Optimal Line Length**

   ```css
   p {
     max-width: 65ch; /* 45-75 characters per line */
   }
   ```

5. **Comfortable Line Height**

   ```css
   body {
     line-height: 1.6;
   } /* Body text */
   h1,
   h2,
   h3 {
     line-height: 1.2;
   } /* Headings */
   ```

6. **Limit Font Families**
   - Maximum 2-3 font families per site
   - Use font weights for hierarchy

7. **Load Fonts Efficiently**
   ```css
   @font-face {
     font-family: 'MyFont';
     src: url('font.woff2') format('woff2');
     font-display: swap; /* Prevent invisible text */
   }
   ```

---

## ⚠️ Common Pitfalls

### ❌ Too Many Fonts

```css
/* Bad: Font overload */
body {
  font-family: Arial;
}
h1 {
  font-family: 'Fancy Font';
}
h2 {
  font-family: 'Another Font';
}
.card {
  font-family: 'Yet Another';
}

/* Good: Consistent */
body {
  font-family: 'Roboto', sans-serif;
}
h1 {
  font-weight: 700;
}
```

### ❌ Poor Line Height

```css
/* Bad: Too tight */
p {
  font-size: 18px;
  line-height: 1; /* Hard to read */
}

/* Good: Comfortable */
p {
  font-size: 18px;
  line-height: 1.6;
}
```

### ❌ Missing Font Fallbacks

```css
/* Bad: No fallback */
body {
  font-family: 'CustomFont';
}

/* Good: With fallbacks */
body {
  font-family: 'CustomFont', Arial, sans-serif;
}
```

---

## 🎓 Quick Reference

```css
/* Font Properties */
font-family: Arial, sans-serif;
font-size: 1rem;
font-weight: 400; /* 100-900 */
font-style: italic;

/* Text Spacing */
line-height: 1.6;
letter-spacing: 0.05em;
word-spacing: 0.2em;

/* Text Alignment */
text-align: left | center | right | justify;
text-decoration: underline;
text-transform: uppercase;
text-indent: 2em;

/* Text Overflow */
text-overflow: ellipsis;
white-space: nowrap;
word-break: break-word;

/* Web Fonts */
@font-face {
  font-family: 'Custom';
  src: url('font.woff2') format('woff2');
}
```

---

## 🚀 What's Next?

Now that you understand typography, learn about **Units & Values**:

👉 [Next: Units & Values →](./units-values.md)

Master typography to create beautiful, readable content! ✍️
