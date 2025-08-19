---
id: markdown
title: Markdown CheatSheet
sidebar_label: Markdown CheatSheet
---

# Markdown CheatSheet

Master Markdown syntax with this quick reference. Perfect for writing blogs, docs, READMEs, and more.

---

## Headings

```markdown
# H1

## H2

### H3

#### H4

##### H5

###### H6
```

**Output:**

# H1

## H2

### H3

#### H4

##### H5

###### H6

---

## Text Formatting

```markdown
**Bold**
_Italic_
~~Strikethrough~~
**_Bold & Italic_**
```

**Output:**  
**Bold**  
_Italic_  
~~Strikethrough~~  
**_Bold & Italic_**

---

## Lists

### Unordered List

```markdown
- Item 1
  - Sub-item 1
  - Sub-item 2
```

**Output:**

- Item 1
  - Sub-item 1
  - Sub-item 2

### Ordered List

```markdown
1. First
2. Second
3. Third
```

**Output:**

1. First
2. Second
3. Third

---

## Links

```markdown
[Codescrolls](https://www.codescrolls.site)
```

**Output:**  
[Codescrolls](https://www.codescrolls.site)

---

## Images

```markdown
![Alt Text](/img/blog/react.png)
```

**Output:**
![Sample Image](/img/blog/react.png)

---

## Code

### Inline code

```markdown
Use the `useEffect` hook in React.
```

**Output:**  
Use the `useEffect` hook in React.

### Code block (with language)

````markdown
```js title="example.js"
console.log('Hello, Markdown!');
```
````

**Output:**

```js title="example.js"
console.log('Hello, Markdown!');
```

---

## Syntax Highlight with Title

````markdown
```js title="app.js"
console.log('With title!');
```
````

**Output:**

```js title="app.js"
console.log('With title!');
```

---

## Blockquote

```markdown
> This is a quote.
```

**Output:**

> This is a quote.

---

## Horizontal Rule

```markdown
---
```

**Output:**

---

---

## Task Lists

```markdown
- [x] Learn Markdown
- [ ] Write a blog
- [ ] Deploy to GitHub Pages
```

**Output:**

- [x] Learn Markdown
- [ ] Write a blog
- [ ] Deploy to GitHub Pages

---

## Tables

```markdown
| Syntax | Description |
| ------ | ----------- |
| Header | Title       |
| Cell   | Data        |
```

**Output**:
| Syntax | Description |
| ------ | ----------- |
| Header | Title |
| Cell | Data |

### Table Alignment

```markdown
| Left | Center | Right |
| :--- | :----: | ----: |
| a    |   b    |     c |
```

**Output:**

| Left | Center | Right |
| :--- | :----: | ----: |
| a    |   b    |     c |

---

## Escaping Characters

```markdown
\*Not italic\*
\# Not a heading
```

**Output:**

\*Not italic\*  
\# Not a heading

---

## Inline HTML

```markdown
Hello World  
H<sub>2</sub>O  
X<sup>2</sup>
```

**Output:**

Hello World  
H<sub>2</sub>O  
X<sup>2</sup>

---

## Definition Lists

```markdown
Term 1
: Definition 1

Term 2
: Definition 2
```

**Output (works in Docusaurus, Markdown-it, not GitHub):**

Term 1  
: Definition 1

Term 2  
: Definition 2

> ⚠️ Note: Not supported in GitHub Markdown.

---

## Nested Checkboxes

```markdown
- [x] Task 1
- [ ] Task 2
  - [x] Sub-task A
  - [ ] Sub-task B
```

**Output:**

- [x] Task 1
- [ ] Task 2
  - [x] Sub-task A
  - [ ] Sub-task B

---

## Headings with Links

```markdown
### [Markdown Guide](https://www.markdownguide.org/)
```

**Output:**

### [Markdown Guide](https://www.markdownguide.org/)

---

## Image as Link

```markdown
[![Alt Text](/img/blog/react.png)](https://react.dev)
```

**Output:**  
[![Alt Text](/img/blog/react.png)](https://react.dev)

---

## Callouts (Docusaurus)

```markdown
:::note
This is a note.
:::

:::tip
This is a tip.
:::

:::warning
This is a warning.
:::

:::info
This is an info.
:::

:::danger
This is a danger.
:::
```

**Output:**
:::note
This is a note.
:::

:::tip
This is a tip.
:::

:::info
This is some information.
:::

:::warning
This is a warning.
:::

:::danger
This is a danger alert!
:::

---

## Automatic Links

```markdown
https://github.com
```

**Output:**  
https://github.com

---

## Inline Comments (hidden)

```markdown
[comment]: # 'This will not be rendered'

<!-- This will not show -->
```

---

## Navigation Links (Docusaurus)

```markdown
[← Previous Page](/docs/previous)
[Next Page →](/docs/next)
```

---

## Footnotes

```markdown
Here is a footnote reference[^1].

[^1]: And here is the footnote content.
```

**Output:**

Here is a footnote reference[^1].

[^1]: And here is the footnote content.

---

## Emoji Shortcodes

```markdown
:smile: :rocket: :tada:
```

**Output:**

😄 🚀 🎉

---

## References

- [Markdown Guide](https://www.markdownguide.org/)
- [Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features)
