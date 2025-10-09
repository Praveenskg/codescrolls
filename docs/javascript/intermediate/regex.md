---
sidebar_position: 6
title: JavaScript Regular Expressions - Complete Guide
description: Master Regular Expressions (RegEx) in JavaScript. Learn patterns, flags, methods, and practical use cases for text matching and validation.
keywords:
  [
    javascript regex,
    regular expressions,
    regex patterns,
    regex methods,
    string matching,
    regex validation,
    pattern matching,
    regex javascript,
  ]
tags:
  - JavaScript
  - RegEx
  - Patterns
  - Intermediate
---

# Regular Expressions

**Regular Expressions (RegEx)** are patterns used to match character combinations in strings. Master RegEx to validate, search, and manipulate text efficiently!

---

## 🎯 Creating RegEx

### Literal Notation

```js
const regex1 = /hello/;
const regex2 = /\d+/; // One or more digits
const regex3 = /[a-z]/i; // Any letter, case insensitive
```

### Constructor

```js
const regex = new RegExp('hello');
const dynamic = new RegExp(userInput); // Dynamic patterns
const withFlags = new RegExp('hello', 'gi'); // Global, case-insensitive
```

---

## 🚩 Flags

```js
/pattern/g; // Global - find all matches
/pattern/i; // Case-insensitive
/pattern/m; // Multiline - ^ and $ match line breaks
/pattern/s; // Dot matches newlines
/pattern/u; // Unicode
/pattern/y; // Sticky - match from lastIndex

// Combine flags
/pattern/gim; // Global, case-insensitive, multiline
```

---

## 🔤 Character Classes

```js
/\d/ // Digit: 0-9
/\D/ // Non-digit
/\w/ // Word character: a-z, A-Z, 0-9, _
/\W/ // Non-word character
/\s/ // Whitespace: space, tab, newline
/\S/ // Non-whitespace
/./ // Any character except newline
/[abc]/ // Match a, b, or c
/[^abc]/ // NOT a, b, or c
/[a-z]/ // Range: a to z
/[0-9]/ // Range: 0 to 9
```

### Examples

```js
const hasDigit = /\d/.test('abc123'); // true
const hasLetter = /[a-z]/i.test('Hello'); // true
const hasSpace = /\s/.test('hello world'); // true
```

---

## 🔢 Quantifiers

```js
/a*/ // 0 or more
/a+/ // 1 or more
/a?/ // 0 or 1 (optional)
/a{3}/ // Exactly 3
/a{2,}/ // 2 or more
/a{2,5}/ // Between 2 and 5
```

### Examples

```js
/\d+/.test('123'); // true - one or more digits
/\d{3}/.test('12'); // false - need exactly 3 digits
/\d{3}/.test('123'); // true
/colou?r/.test('color'); // true
/colou?r/.test('colour'); // true
```

---

## ⚓ Anchors

```js
/^hello/ // Start of string
/world$/ // End of string
/^hello$/  // Exact match
/\b/       // Word boundary
/\B/       // Not word boundary
```

### Examples

```js
/^hello/.test('hello world'); // true
/^hello/.test('say hello'); // false

/world$/.test('hello world'); // true
/world$/.test('world peace'); // false

/^hello$/.test('hello'); // true
/^hello$/.test('hello world'); // false
```

---

## 📦 Groups & Alternation

### Capturing Groups

```js
const regex = /(\d{3})-(\d{3})-(\d{4})/;
const match = '555-123-4567'.match(regex);

console.log(match[0]); // '555-123-4567' (full match)
console.log(match[1]); // '555' (first group)
console.log(match[2]); // '123' (second group)
console.log(match[3]); // '4567' (third group)
```

### Non-Capturing Groups

```js
// (?:...) - group without capturing
const regex = /(?:Mr|Mrs|Ms)\. (\w+)/;
const match = 'Mr. Smith'.match(regex);
console.log(match[1]); // 'Smith'
```

### Alternation (OR)

```js
/cat|dog/.test('I have a cat'); // true
/cat|dog/.test('I have a dog'); // true
/(jpg|png|gif)$/.test('image.png'); // true
```

---

## 🔧 Methods

### test() - Returns boolean

```js
const regex = /hello/i;
console.log(regex.test('Hello World')); // true
console.log(regex.test('Goodbye')); // false
```

### match() - Returns array of matches

```js
const str = 'The year is 2024';
const matches = str.match(/\d+/g);
console.log(matches); // ['2024']

const str2 = 'abc 123 def 456';
const matches2 = str2.match(/\d+/g);
console.log(matches2); // ['123', '456']
```

### replace() - Replace matches

```js
const str = 'Hello World';
const newStr = str.replace(/world/i, 'JavaScript');
console.log(newStr); // 'Hello JavaScript'

// With function
const censored = 'damn hell'.replace(/damn|hell/gi, (match) => '*'.repeat(match.length));
console.log(censored); // '**** ****'
```

### search() - Returns index of match

```js
const str = 'Hello World';
console.log(str.search(/world/i)); // 6
console.log(str.search(/xyz/)); // -1 (not found)
```

### split() - Split string

```js
const str = 'one,two;three four';
const parts = str.split(/[,;\s]+/);
console.log(parts); // ['one', 'two', 'three', 'four']
```

### matchAll() - Returns iterator

```js
const str = 'test1 test2 test3';
const regex = /test(\d)/g;

for (const match of str.matchAll(regex)) {
  console.log(`Found ${match[0]} with number ${match[1]}`);
}
// Found test1 with number 1
// Found test2 with number 2
// Found test3 with number 3
```

---

## 📚 Practical Examples

### Example 1: Email Validation

```js
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log(isValidEmail('user@example.com')); // true
console.log(isValidEmail('invalid.email')); // false
console.log(isValidEmail('user@')); // false
```

### Example 2: Phone Number Validation

```js
function formatPhoneNumber(phone) {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, '');

  // Format as (XXX) XXX-XXXX
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return null;
}

console.log(formatPhoneNumber('5551234567')); // '(555) 123-4567'
console.log(formatPhoneNumber('555-123-4567')); // '(555) 123-4567'
console.log(formatPhoneNumber('(555) 123-4567')); // '(555) 123-4567'
```

### Example 3: Password Validation

```js
function validatePassword(password) {
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    digit: /\d/.test(password),
    special: /[!@#$%^&*]/.test(password),
  };

  const isValid = Object.values(checks).every((check) => check);

  return {
    isValid,
    checks,
  };
}

const result = validatePassword('MyPass123!');
console.log(result);
// {
//   isValid: true,
//   checks: {
//     length: true,
//     uppercase: true,
//     lowercase: true,
//     digit: true,
//     special: true
//   }
// }
```

### Example 4: URL Parsing

```js
function parseURL(url) {
  const regex = /^(https?):\/\/([^\/]+)(\/.*)?$/;
  const match = url.match(regex);

  if (!match) return null;

  return {
    protocol: match[1],
    host: match[2],
    path: match[3] || '/',
  };
}

console.log(parseURL('https://example.com/path/to/page'));
// {
//   protocol: 'https',
//   host: 'example.com',
//   path: '/path/to/page'
// }
```

### Example 5: Text Highlighting

```js
function highlightText(text, searchTerm) {
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

const text = 'JavaScript is awesome. I love JavaScript!';
const highlighted = highlightText(text, 'javascript');
console.log(highlighted);
// 'JavaScript is awesome. I love <mark>JavaScript</mark>!'
```

### Example 6: Extract Hashtags

```js
function extractHashtags(text) {
  const regex = /#(\w+)/g;
  const hashtags = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    hashtags.push(match[1]);
  }

  return hashtags;
}

const tweet = 'Learning #JavaScript and #WebDev is fun! #coding';
console.log(extractHashtags(tweet));
// ['JavaScript', 'WebDev', 'coding']
```

### Example 7: Slugify

```js
function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/-+/g, '-'); // Replace multiple - with single -
}

console.log(slugify('Hello World! This is GREAT!!'));
// 'hello-world-this-is-great'
```

---

## 🎯 Common Patterns

### Username

```js
/^[a-zA-Z0-9_]{3,16}$/; // 3-16 chars, letters, numbers, underscore
```

### Email

```js
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

### URL

```js
/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
```

### Date (MM/DD/YYYY)

```js
/^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
```

### Credit Card

```js
/^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;
```

### Hex Color

```js
/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
```

---

## 🎯 Best Practices

### 1. Test Your Patterns

```js
// Use regex testing tools
// Test with various inputs
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const tests = ['test@example.com', 'invalid', 'test@', '@example.com'];

tests.forEach((test) => {
  console.log(`${test}: ${emailRegex.test(test)}`);
});
```

### 2. Escape Special Characters

```js
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const userInput = 'How much is 5+5?';
const escaped = escapeRegex(userInput);
const regex = new RegExp(escaped);
```

### 3. Use Non-Capturing Groups When Possible

```js
// ✅ Good - non-capturing
/(?:Mr|Mrs|Ms)\. (\w+)/;

// ❌ Wasteful - capturing when not needed
/(Mr|Mrs|Ms)\. (\w+)/;
```

---

## 🔗 What's Next?

Learn about working with JSON data!

👉 [Next: JSON »](./json.md)

---

## 📖 Additional Resources

- [MDN: Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Regex101](https://regex101.com/) - Test patterns online
- [RegExr](https://regexr.com/) - Learn, build, and test RegEx
