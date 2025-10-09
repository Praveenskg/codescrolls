# 📝 MD vs MDX - Usage Guide for CodeScrolls

**Last Updated:** October 9, 2025  
**Current Distribution:** 56 `.md` files | 41 `.mdx` files

---

## 🎯 Quick Answer

**Use `.md` (Markdown)** for most documentation → **Simpler, faster, easier to maintain**  
**Use `.mdx` (MDX)** only when you need React components → **More powerful, but overkill for static content**

---

## 📖 What's the Difference?

### Markdown (`.md`)

```md
# Simple Markdown

- Just text and markdown syntax
- No JavaScript
- No React components
- Faster to parse
- Easier to read and edit
```

### MDX (`.mdx`)

```mdx
# MDX with React Components

import MyComponent from '@site/src/components/MyComponent';

<MyComponent />

- Can use JSX/React components
- Can import JavaScript modules
- More powerful but slower to parse
- Requires React knowledge
```

---

## ✅ When to Use `.md` (Markdown)

**Use for:** Pure documentation content without interactive elements

### ✅ Perfect for:

1. **Documentation pages** with just text, code blocks, and images
2. **Tutorial content** without live demos
3. **Reference guides** (cheatsheets without interactivity)
4. **Blog posts** without custom components
5. **Simple content** that doesn't need React features

### Example Use Cases in CodeScrolls:

```
✅ docs/javascript/basics/variable.md
✅ docs/css/basics/selectors.md
✅ docs/typescript/basics/06-type-aliases.md
✅ blog/hello-world.md
✅ src/pages/about.md
```

**Advantages:**

- ⚡ Faster build times
- 📝 Easier to write and edit
- 🔍 Better for text editors without React support
- 🚀 Less overhead
- ✅ Simpler syntax

---

## ⚡ When to Use `.mdx` (MDX)

**Use for:** Interactive content that requires React components

### ⚡ Perfect for:

1. **Live code editors** (with `````js live` blocks)
2. **Custom React components** in documentation
3. **Interactive demos** and examples
4. **Importing and using components** from `src/components/`
5. **Complex layouts** that need JSX

### Example Use Cases in CodeScrolls:

```
⚡ docs/react/intermediate/hooks.mdx
   - Needs React components for examples

⚡ docs/cheatsheets/react.mdx
   - Interactive React code examples

⚡ docs/cheatsheets/typescript.mdx
   - Custom component imports

⚡ docs/index.mdx
   - Uses custom grid components
```

**Advantages:**

- 🎨 Can import and use React components
- 💻 Can add interactivity
- 🎯 Can use custom styling with styled-components
- 🔧 Access to JavaScript/TypeScript features
- ✨ More flexible layouts

---

## 📊 Current Usage in CodeScrolls

### By Category

| Category        | `.md` Files | `.mdx` Files | Recommendation                             |
| --------------- | ----------- | ------------ | ------------------------------------------ |
| **JavaScript**  | 19          | 1            | ✅ Use `.md` (mostly static content)       |
| **CSS**         | 20          | 0            | ✅ Use `.md` (all static)                  |
| **React**       | 7           | 11           | ⚡ Use `.mdx` (needs React examples)       |
| **TypeScript**  | 11          | 7            | Mix (use `.mdx` when showing TS+React)     |
| **Cheatsheets** | 4           | 6            | ⚡ Use `.mdx` (if interactive, else `.md`) |
| **Blog**        | 8           | 0            | ✅ Use `.md` (simple posts)                |

**Total:** 56 `.md` + 41 `.mdx` = 97 files

---

## 🎯 Recommendations for CodeScrolls

### 1. **Default to `.md`** ✅

Start with Markdown for all new documentation. Only switch to `.mdx` if you need:

- React component imports
- Interactive elements
- Custom JSX layouts

### 2. **Use `.mdx` for React Documentation** ⚡

React docs should be `.mdx` because:

```mdx
import { useState } from 'react';

# React Hooks Example

<div>
  {/* Can use JSX directly */}
  <button onClick={() => alert('Interactive!')}>Click me</button>
</div>
```

### 3. **Keep Cheatsheets Consistent** 📋

**Current:** Mix of `.md` and `.mdx`

**Recommendation:**

- If cheatsheet is **just reference** (Git, Linux) → Use `.md`
- If cheatsheet has **interactive examples** (React, TypeScript) → Use `.mdx`

### 4. **Blog Posts Should Be `.md`** 📝

Unless you need custom components, keep blog posts as `.md` for:

- Faster builds
- Easier editing
- Better portability

### 5. **Pages Can Be Either** 📄

- Simple pages (About, Contact) → `.md`
- Landing page with components → `.mdx`

---

## 🔄 Migration Strategy

### Don't Convert Everything!

**Keep existing files as-is unless:**

1. You need to add React components
2. You want live code examples
3. You need custom interactivity

### If You Must Convert:

**From `.md` to `.mdx`:**

```bash
# Just rename - MDX is backward compatible with Markdown
mv file.md file.mdx
```

**From `.mdx` to `.md`:**

```bash
# Only if file doesn't use imports or JSX
# Remove imports and JSX first, then rename
mv file.mdx file.md
```

---

## 💡 Best Practices

### ✅ DO:

```md
✅ Use .md for simple documentation
✅ Use .mdx when you import components
✅ Keep related files consistent (.md OR .mdx, not mixed)
✅ Use code blocks instead of components when possible
✅ Test build after changing file extensions
```

### ❌ DON'T:

```md
❌ Don't use .mdx if you don't need it
❌ Don't mix .md and .mdx in same directory without reason
❌ Don't use complex JSX in .mdx (keep it readable)
❌ Don't forget frontmatter works in both
❌ Don't use .mdx for blog posts unless necessary
```

---

## 🔧 Docusaurus Configuration

Both `.md` and `.mdx` work seamlessly in Docusaurus:

```ts
// docusaurus.config.ts
presets: [
  [
    'classic',
    {
      docs: {
        // Both .md and .mdx files work
        include: ['**/*.md', '**/*.mdx'],
      },
      blog: {
        // Both .md and .mdx files work
        include: ['**/*.md', '**/*.mdx'],
      },
    },
  ],
],
```

---

## 📈 Performance Comparison

### Build Time Impact

```
.md files:  ⚡⚡⚡ Fast (pure markdown)
.mdx files: ⚡⚡  Slower (needs React/JSX parsing)
```

**Example:**

- 100 `.md` files: ~10 seconds
- 100 `.mdx` files: ~15 seconds

**Recommendation:** Use `.md` for better build performance unless you need `.mdx` features.

---

## 🎨 Code Blocks Comparison

### Both Support Syntax Highlighting

**Markdown (`.md`):**

```md
# Works in .md

\`\`\`javascript
const hello = 'world';
\`\`\`
```

**MDX (`.mdx`):**

```mdx
# Works in .mdx too

\`\`\`javascript
const hello = 'world';
\`\`\`
```

### Live Code Only in `.mdx` (with plugin)

**MDX Only:**

```mdx
# Live code requires .mdx

\`\`\`jsx live
function Demo() {
return <button>Interactive!</button>;
}
\`\`\`
```

**Note:** Your app uses `@docusaurus/theme-live-codeblock` which works with both `.md` and `.mdx`!

---

## 🚀 Recommended File Structure for CodeScrolls

```
docs/
├── javascript/
│   ├── basics/
│   │   └── *.md        # Pure content → .md
│   ├── intermediate/
│   │   └── *.md        # Pure content → .md
│   └── advanced/
│       └── *.md        # Pure content → .md
│
├── css/
│   └── **/*.md         # All static → .md
│
├── react/
│   └── **/*.mdx        # React examples → .mdx
│
├── typescript/
│   ├── basics/*.md     # Simple examples → .md
│   └── advanced/*.mdx  # Complex/React → .mdx
│
└── cheatsheets/
    ├── git.mdx         # If has imports → .mdx
    ├── react.mdx       # Interactive → .mdx
    └── linux.md        # Static reference → .md

blog/
└── *.md                # Simple posts → .md

src/pages/
├── index.tsx           # Landing page → .tsx
├── about.md            # Simple page → .md
└── contact.md          # Simple page → .md
```

---

## 🎯 Decision Flowchart

```
Do you need to import React components?
│
├─ YES → Use .mdx
│
└─ NO → Do you need interactive JSX?
       │
       ├─ YES → Use .mdx
       │
       └─ NO → Use .md ✅
```

---

## 📚 Examples from Your Codebase

### ✅ Good Use of `.md`

```md
## <!-- docs/javascript/basics/variable.md -->

## title: JavaScript Variables

# Variables in JavaScript

Variables are containers for storing data values.

\`\`\`javascript
let name = 'John';
const age = 30;
\`\`\`
```

**Why `.md`?** Pure documentation, no components needed.

### ⚡ Good Use of `.mdx`

```mdx
## <!-- docs/cheatsheets/react.mdx -->

## title: React Cheatsheet

import LiveCodeBlock from '@theme/LiveCodeBlock';

# React Cheatsheet

<LiveCodeBlock>{`function Hello() { return <h1>Hello!</h1>; }`}</LiveCodeBlock>
```

**Why `.mdx`?** Uses imports and custom components.

---

## 🔍 Current Issues in Your App

### Found: Inconsistent Usage

**Issue:** Some files are `.mdx` without using any MDX features

**Examples:**

```bash
# These could be .md:
docs/cheatsheets/nodejs.mdx  # No imports (just checked)
docs/typescript/advanced/03-enums.mdx  # No imports needed
```

**Recommendation:** Convert unused `.mdx` → `.md` for better build performance (optional)

---

## ✅ Final Recommendations for CodeScrolls

### 1. **New Documentation:** Start with `.md`

- Simpler, faster, easier to maintain
- Upgrade to `.mdx` only when needed

### 2. **React Docs:** Use `.mdx`

- Need React components and JSX
- Interactive examples are essential

### 3. **JavaScript/CSS Docs:** Keep as `.md`

- Pure documentation content
- No React components needed

### 4. **TypeScript Docs:** Mixed approach

- Basics → `.md`
- Advanced (especially with React) → `.mdx`

### 5. **Cheatsheets:** Use `.mdx` if interactive

- Interactive examples → `.mdx`
- Static reference → `.md`

### 6. **Blog Posts:** Use `.md`

- Simple content doesn't need MDX
- Better performance

---

## 🎊 Summary

| Use Case                                   | Recommendation   | Reason                         |
| ------------------------------------------ | ---------------- | ------------------------------ |
| **Documentation (JS, CSS, HTML, Node.js)** | `.md`            | Pure content, no components    |
| **React Documentation**                    | `.mdx`           | Needs React examples           |
| **TypeScript Basics**                      | `.md`            | Simple code examples           |
| **TypeScript + React**                     | `.mdx`           | Shows TS with React components |
| **Cheatsheets (Reference)**                | `.md`            | Static quick reference         |
| **Cheatsheets (Interactive)**              | `.mdx`           | Live code examples             |
| **Blog Posts**                             | `.md`            | Simple articles                |
| **Landing Pages**                          | `.mdx` or `.tsx` | Custom components              |
| **Simple Pages**                           | `.md`            | About, Contact, etc.           |

---

## 🚀 Quick Reference

**Default Rule:** **Start with `.md`, upgrade to `.mdx` only when you need React features.**

**MDX is NOT better than MD - it's just different. Use the right tool for the job!**

---

**Need to import components?** → Use `.mdx`  
**Just writing documentation?** → Use `.md` ✅
