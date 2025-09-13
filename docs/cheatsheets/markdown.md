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

## Advanced Code Blocks

### Code Blocks with Line Numbers

````markdown
```js {1,3-5} title="highlighted-lines.js"
function example() {
  console.log('Line 1 - highlighted');
  console.log('Line 2 - not highlighted');
  console.log('Line 3 - highlighted');
  console.log('Line 4 - highlighted');
  console.log('Line 5 - highlighted');
}
```
````

### Code Blocks with Show/Hide

````markdown
```js title="example.js" showLineNumbers
const message = "Hello, World!";
console.log(message);
```
````

### Multiple Code Blocks

````markdown
```js title="JavaScript"
const greet = (name) => `Hello, ${name}!`;
```

```python title="Python"
def greet(name):
    return f"Hello, {name}!"
```

```bash title="Terminal"
echo "Hello, World!"
```
````

---

## Advanced Tables

### Table with Multiple Lines

```markdown
| Feature | Description | Status |
|---------|-------------|--------|
| Basic Syntax | Standard Markdown | ✅ Complete |
| Advanced Tables | Multi-line cells | ✅ Complete |
| Code Blocks | Syntax highlighting | 🚧 In Progress |
| Interactive | JSX components | ❌ Not Started |
```

**Output:**

| Feature | Description | Status |
|---------|-------------|--------|
| Basic Syntax | Standard Markdown | ✅ Complete |
| Advanced Tables | Multi-line cells | ✅ Complete |
| Code Blocks | Syntax highlighting | 🚧 In Progress |
| Interactive | JSX components | ❌ Not Started |

### Table with HTML

```markdown
| Name | Age | Actions |
|------|-----|---------|
| John | 25 | <button>Edit</button> |
| Jane | 30 | <button>Delete</button> |
```

---

## Advanced Lists

### Mixed List Types

```markdown
1. First ordered item
2. Second ordered item
   - Unordered sub-item 1
   - Unordered sub-item 2
3. Third ordered item
   1. Nested ordered item
   2. Another nested item
```

**Output:**

1. First ordered item
2. Second ordered item
   - Unordered sub-item 1
   - Unordered sub-item 2
3. Third ordered item
   1. Nested ordered item
   2. Another nested item

### List with Paragraphs

```markdown
1. First item with a paragraph
   
   This is a paragraph inside a list item.

2. Second item with code
   
   ```js
   console.log('Code in list item');
   ```

3. Third item with a quote
   
   > This is a blockquote in a list item
```

---

## Advanced Blockquotes

### Nested Blockquotes

```markdown
> This is a blockquote
> 
> > This is a nested blockquote
> > 
> > > This is a double-nested blockquote
```

**Output:**

> This is a blockquote
> 
> > This is a nested blockquote
> > 
> > > This is a double-nested blockquote

### Blockquote with Attribution

```markdown
> The best way to predict the future is to invent it.
> 
> — Alan Kay
```

**Output:**

> The best way to predict the future is to invent it.
> 
> — Alan Kay

---

## Advanced Links

### Reference-Style Links

```markdown
[Google][1] is a search engine.
[GitHub][github] is a code repository.

[1]: https://google.com
[github]: https://github.com "GitHub Homepage"
```

**Output:**

[Google][1] is a search engine.
[GitHub][github] is a code repository.

[1]: https://google.com
[github]: https://github.com "GitHub Homepage"

### Links with Titles

```markdown
[CodeScrolls](https://codescrolls.site "Visit CodeScrolls for developer docs")
```

**Output:**

[CodeScrolls](https://codescrolls.site "Visit CodeScrolls for developer docs")

### Auto-links with Custom Text

```markdown
<https://codescrolls.site>
<email@example.com>
```

**Output:**

<!-- \<<https://codescrolls.site>\>
\<<email@example.com>\> -->

---

## Advanced Images

### Images with Dimensions

```markdown
![React Logo](/img/react.png "React Logo" width="100" height="100")
```

### Images with Links

```markdown
[![React Logo](/img/react.png)](https://react.dev "Visit React")
```

### Images with Captions (HTML)

```markdown
<figure>
  <img src="/img/react.png" alt="React Logo" />
  <figcaption>React - A JavaScript library for building user interfaces</figcaption>
</figure>
```

---

## Math and Equations

### Inline Math

```markdown
The quadratic formula is $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$
```

### Block Math

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

**Output:**

<!-- $$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

--- -->

## Advanced Admonitions (Docusaurus)

### Admonitions with Titles

```markdown
:::note Important
This is an important note with a custom title.
:::

:::tip Pro Tip
Here's a professional tip for you!
:::

:::warning Deprecated
This feature is deprecated and will be removed in v2.0
:::

:::danger Security Warning
Never commit API keys to version control!
:::

:::info Did You Know?
Markdown was created by John Gruber in 2004.
:::
```

**Output:**

:::note Important
This is an important note with a custom title.
:::

:::tip Pro Tip
Here's a professional tip for you!
:::

:::warning Deprecated
This feature is deprecated and will be removed in v2.0
:::

:::danger Security Warning
Never commit API keys to version control!
:::

:::info Did You Know?
Markdown was created by John Gruber in 2004.
:::

---

## Advanced HTML Integration

### HTML Tables

```markdown
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>25</td>
      <td>New York</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>30</td>
      <td>San Francisco</td>
    </tr>
  </tbody>
</table>
```

### HTML Details/Summary

```markdown
<details>
<summary>Click to expand</summary>

This content is hidden by default and can be expanded.
<!-- 
```js
console.log('Code inside details');
``` -->
</details>
```

---

## Markdown Best Practices

### 1. Consistent Formatting

```markdown
<!-- ✅ Good: Consistent spacing -->
## Section Title

Content here with proper spacing.

### Subsection

More content.

<!-- ❌ Bad: Inconsistent spacing -->
##Section Title
Content here with no spacing.
###Subsection
More content.
```

### 2. Meaningful Link Text

```markdown
<!-- ✅ Good: Descriptive link text -->
[Read our comprehensive React guide](/docs/react)

<!-- ❌ Bad: Generic link text -->
[Click here](/docs/react)
```

### 3. Alt Text for Images

```markdown
<!-- ✅ Good: Descriptive alt text -->
![React component lifecycle diagram](/img/react-lifecycle.png)

<!-- ❌ Bad: Generic alt text -->
![Image](/img/react-lifecycle.png)
```

### 4. Code Block Language Specification

```markdown
<!-- ✅ Good: Specify language -->
```js
const message = "Hello, World!";
```

<!-- ❌ Bad: No language specified -->
```
const message = "Hello, World!";
```
```

---

## Common Markdown Flavors

| Feature | GitHub | GitLab | Docusaurus | CommonMark |
|---------|--------|--------|------------|------------|
| Tables | ✅ | ✅ | ✅ | ✅ |
| Task Lists | ✅ | ✅ | ✅ | ❌ |
| Strikethrough | ✅ | ✅ | ✅ | ❌ |
| Autolinks | ✅ | ✅ | ✅ | ✅ |
| Footnotes | ✅ | ✅ | ✅ | ❌ |
| Definition Lists | ❌ | ✅ | ✅ | ❌ |
| Math | ❌ | ✅ | ✅ | ❌ |
| Admonitions | ❌ | ❌ | ✅ | ❌ |

---

## References

- [Markdown Guide](https://www.markdownguide.org/)
- [Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [CommonMark Specification](https://spec.commonmark.org/)
- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
