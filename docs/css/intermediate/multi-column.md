---
id: css-multi-column
title: CSS Multi-column Layout - Complete Guide
description:
  Master CSS multi-column layout for magazine-style designs. Learn column-count,
  column-width, column-gap, column-span, and create beautiful text layouts.
keywords:
  [
    css multi-column,
    css columns,
    column-count,
    column-width,
    column-gap,
    column-span,
    magazine layout,
    newspaper layout,
    text columns,
  ]
tags: [CSS, Multi-column, Layout, Typography, Intermediate]
sidebar_position: 9
---

# 📰 CSS Multi-column Layout

CSS multi-column layout allows you to create magazine-style layouts where
content flows naturally across multiple columns, perfect for long-form text and
newspaper-style designs.

## 📖 What is Multi-column Layout?

Multi-column layout splits content into multiple vertical columns, similar to
newspaper or magazine layouts, with text flowing from one column to the next.

```css
.article {
  column-count: 3;
  column-gap: 2rem;
}
```

---

## 🎯 Basic Column Properties

### column-count

Specifies the number of columns.

```css
/* Fixed number of columns */
.text {
  column-count: 2; /* 2 columns */
  column-count: 3; /* 3 columns */
  column-count: 4; /* 4 columns */
}

/* Auto (determined by column-width) */
.text {
  column-count: auto;
}
```

**Practical Examples:**

```css
/* Two-column article */
.article {
  column-count: 2;
  column-gap: 2rem;
}

/* Three-column layout for wide screens */
@media (min-width: 1024px) {
  .content {
    column-count: 3;
  }
}

/* Responsive columns */
@media (max-width: 768px) {
  .text {
    column-count: 1; /* Single column on mobile */
  }
}
```

### column-width

Suggests optimal width for columns (browser determines count).

```css
/* Suggested column width */
.text {
  column-width: 250px; /* ~250px wide columns */
  column-width: 15em; /* ~15em wide columns */
}

/* Auto (determined by column-count) */
.text {
  column-width: auto;
}
```

**Practical Examples:**

```css
/* Responsive columns based on width */
.article {
  column-width: 300px;
  /* Creates as many 300px columns as fit */
}

/* Flexible columns */
.content {
  column-width: 20em;
  column-gap: 2em;
}
```

### columns (Shorthand)

Combines column-count and column-width.

```css
/* columns: width count */
.text {
  columns: 250px 3; /* 3 columns of 250px */
  columns: 20em auto; /* Auto count, 20em width */
  columns: auto 2; /* 2 columns, auto width */
}
```

---

## 📏 Column Gaps & Rules

### column-gap

Space between columns.

```css
.text {
  column-count: 3;
  column-gap: 2rem; /* 2rem gap */
  column-gap: 40px; /* 40px gap */
  column-gap: 5%; /* 5% of container width */
}
```

**Practical Examples:**

```css
/* Comfortable reading gap */
.article {
  column-count: 2;
  column-gap: 3rem;
}

/* Tight layout */
.compact {
  column-count: 4;
  column-gap: 1rem;
}
```

### column-rule

Visual line between columns (like border).

```css
/* Individual properties */
.text {
  column-rule-width: 1px;
  column-rule-style: solid;
  column-rule-color: #ddd;
}

/* Shorthand */
.text {
  column-rule: 1px solid #ddd;
}
```

**Column Rule Styles:**

```css
.text {
  column-rule: 1px solid #000;
  column-rule: 2px dashed #666;
  column-rule: 3px dotted #999;
  column-rule: 2px double #333;
}
```

**Practical Examples:**

```css
/* Newspaper style */
.newspaper {
  column-count: 3;
  column-gap: 2rem;
  column-rule: 1px solid #ddd;
}

/* Subtle divider */
.article {
  column-count: 2;
  column-gap: 4rem;
  column-rule: 1px solid rgba(0, 0, 0, 0.1);
}
```

---

## 🎨 Column Spanning

### column-span

Makes element span across all columns.

```css
/* Span values */
.element {
  column-span: none; /* Default: single column */
  column-span: all; /* Span all columns */
}
```

**Practical Examples:**

```css
/* Article layout */
.article {
  column-count: 3;
  column-gap: 2rem;
}

/* Heading spans all columns */
.article h2 {
  column-span: all;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

/* Image spans all columns */
.article .featured-image {
  column-span: all;
  width: 100%;
  margin: 2rem 0;
}

/* Pull quote spans all columns */
.pull-quote {
  column-span: all;
  text-align: center;
  font-size: 1.5rem;
  padding: 2rem;
  margin: 2rem 0;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
}
```

---

## 🎯 Column Fill & Break

### column-fill

Controls how content is distributed across columns.

```css
.text {
  column-fill: balance; /* Default: equal height */
  column-fill: auto; /* Fill columns sequentially */
}
```

### Break Control

Controls where content breaks across columns.

```css
/* Break before/after/inside */
.element {
  break-before: auto | avoid | column | page;
  break-after: auto | avoid | column | page;
  break-inside: auto | avoid;
}
```

**Practical Examples:**

```css
/* Keep headings with following content */
h2,
h3 {
  break-after: avoid;
}

/* Prevent breaking inside elements */
.card,
.quote,
figure {
  break-inside: avoid;
}

/* Start new column */
.section {
  break-before: column;
}
```

---

## 🎯 Practical Examples

### Example 1: Magazine Article

```css
.magazine-article {
  column-count: 3;
  column-gap: 3rem;
  column-rule: 1px solid #e0e0e0;
  text-align: justify;
  hyphens: auto;
}

.magazine-article h1 {
  column-span: all;
  font-size: 3rem;
  margin-bottom: 1rem;
}

.magazine-article .intro {
  column-span: all;
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 2rem;
}

.magazine-article h2 {
  column-span: all;
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.magazine-article img {
  width: 100%;
  margin: 1rem 0;
}

@media (max-width: 1024px) {
  .magazine-article {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .magazine-article {
    column-count: 1;
  }
}
```

### Example 2: Newspaper Layout

```css
.newspaper {
  column-count: 4;
  column-gap: 1.5rem;
  column-rule: 1px solid #333;
  font-family: Georgia, serif;
  line-height: 1.6;
}

.newspaper .headline {
  column-span: all;
  font-size: 2.5rem;
  font-weight: bold;
  border-bottom: 3px double #333;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.newspaper .byline {
  column-span: all;
  font-style: italic;
  margin-bottom: 1rem;
}

.newspaper p {
  margin-bottom: 1rem;
  text-indent: 1em;
}
```

### Example 3: Product Listing

```css
.product-grid {
  column-count: 3;
  column-gap: 2rem;
}

.product-card {
  break-inside: avoid;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.product-card img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

@media (max-width: 1024px) {
  .product-grid {
    column-count: 2;
  }
}

@media (max-width: 640px) {
  .product-grid {
    column-count: 1;
  }
}
```

### Example 4: Masonry-Style Gallery

```css
.masonry {
  column-count: 4;
  column-gap: 1rem;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}

.masonry-item img {
  width: 100%;
  display: block;
  border-radius: 8px;
}

@media (max-width: 1200px) {
  .masonry {
    column-count: 3;
  }
}

@media (max-width: 768px) {
  .masonry {
    column-count: 2;
  }
}

@media (max-width: 480px) {
  .masonry {
    column-count: 1;
  }
}
```

### Example 5: FAQ Layout

```css
.faq-columns {
  column-count: 2;
  column-gap: 4rem;
  column-rule: 1px solid #e0e0e0;
}

.faq-item {
  break-inside: avoid;
  margin-bottom: 2rem;
}

.faq-question {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.faq-answer {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .faq-columns {
    column-count: 1;
  }
}
```

---

## ✅ Best Practices

1. **Use responsive column counts**

   ```css
   .article {
     column-count: 1; /* Mobile */
   }

   @media (min-width: 768px) {
     .article {
       column-count: 2; /* Tablet */
     }
   }

   @media (min-width: 1024px) {
     .article {
       column-count: 3; /* Desktop */
     }
   }
   ```

2. **Prevent awkward breaks**

   ```css
   h2,
   h3,
   h4 {
     break-after: avoid;
   }

   .card,
   .quote,
   figure {
     break-inside: avoid;
   }
   ```

3. **Use column-width for flexibility**

   ```css
   /* Better: Browser determines count */
   .content {
     column-width: 300px;
   }

   /* Avoid: Fixed count */
   .content {
     column-count: 3;
   }
   ```

4. **Add sufficient gap**

   ```css
   /* Good: Readable gap */
   .text {
     column-gap: 2rem;
   }

   /* Avoid: Too tight */
   .text {
     column-gap: 0.5rem;
   }
   ```

5. **Consider text justification**
   ```css
   .columns {
     column-count: 3;
     text-align: justify;
     hyphens: auto;
   }
   ```

---

## ⚠️ Common Pitfalls

### ❌ Too Many Columns on Small Screens

```css
/* Bad: Unreadable on mobile */
.text {
  column-count: 4;
}

/* Good: Responsive */
.text {
  column-count: 1;
}

@media (min-width: 1024px) {
  .text {
    column-count: 4;
  }
}
```

### ❌ Narrow Column Width

```css
/* Bad: Too narrow */
.text {
  column-width: 100px;
}

/* Good: Readable width */
.text {
  column-width: 250px;
}
```

### ❌ Not Preventing Breaks

```css
/* Bad: Headings may separate from content */
h2 {
  /* No break control */
}

/* Good: Keep together */
h2 {
  break-after: avoid;
}
```

---

## 🎓 Quick Reference

```css
/* Basic Columns */
column-count: 3;
column-width: 250px;
columns: 250px 3; /* Shorthand */

/* Gaps & Rules */
column-gap: 2rem;
column-rule: 1px solid #ddd;
column-rule-width: 1px;
column-rule-style: solid;
column-rule-color: #ddd;

/* Spanning */
column-span: all;
column-span: none;

/* Fill */
column-fill: balance;
column-fill: auto;

/* Break Control */
break-before: avoid | column;
break-after: avoid | column;
break-inside: avoid;
```

---

## 🆚 Multi-column vs Flexbox/Grid

| Feature          | Multi-column                | Flexbox                | Grid                    |
| ---------------- | --------------------------- | ---------------------- | ----------------------- |
| **Purpose**      | Text flow                   | One-dimensional layout | Two-dimensional layout  |
| **Content Flow** | Vertical, then horizontal   | Horizontal or vertical | Any direction           |
| **Best For**     | Long text, magazine layouts | Navigation, cards      | Page layouts, galleries |
| **Item Control** | Limited                     | High                   | Highest                 |
| **Responsive**   | Column-count based          | Wrapping               | Template-based          |

**When to Use:**

- **Multi-column:** Long-form text, articles, FAQs
- **Flexbox:** Navigation, card grids, toolbars
- **Grid:** Page layouts, complex galleries

---

## 🚀 What's Next?

Congratulations! You've completed **ALL CSS documentation**! 🎉

Return to:

👉 [CSS Overview →](../index.md)  
👉 [Documentation Home →](../../index.mdx)

Master multi-column for magazine-style layouts! 📰
