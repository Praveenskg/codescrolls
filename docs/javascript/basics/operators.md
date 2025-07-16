---
sidebar_position: 3
---
#  Operators

JavaScript includes a wide range of **operators** used to perform operations on variables and values.

---

## 🔹 1. Arithmetic Operators

| Operator | Description          | Example        |
|----------|----------------------|----------------|
| `+`      | Addition              | `5 + 3` → `8`  |
| `-`      | Subtraction           | `5 - 3` → `2`  |
| `*`      | Multiplication        | `5 * 3` → `15` |
| `/`      | Division              | `6 / 2` → `3`  |
| `%`      | Modulus (remainder)   | `5 % 2` → `1`  |
| `**`     | Exponentiation        | `2 ** 3` → `8` |
| `++`     | Increment              | `a++`          |
| `--`     | Decrement              | `a--`          |

```js
let a = 5;
let b = 2;
console.log(a + b);  // 7
console.log(a ** b); // 25
```

---

## 🔹 2. Assignment Operators

| Operator | Description        | Example     |
|----------|--------------------|-------------|
| `=`      | Assign              | `x = 5`     |
| `+=`     | Add and assign      | `x += 3`    |
| `-=`     | Subtract and assign | `x -= 3`    |
| `*=`     | Multiply and assign | `x *= 2`    |
| `/=`     | Divide and assign   | `x /= 2`    |
| `%=`     | Modulus and assign  | `x %= 2`    |

```js
let x = 10;
x += 5; // 15
```

---

## 🔹 3. Comparison Operators

| Operator | Description            | Example          |
|----------|------------------------|------------------|
| `==`     | Equal (loose)          | `5 == '5'` → ✅   |
| `===`    | Equal (strict)         | `5 === '5'` → ❌ |
| `!=`     | Not equal (loose)      | `5 != '5'` → ❌   |
| `!==`    | Not equal (strict)     | `5 !== '5'` → ✅ |
| `>`      | Greater than           | `5 > 3`          |
| `<`      | Less than              | `5 < 3`          |
| `>=`     | Greater or equal       | `5 >= 5`         |
| `<=`     | Less or equal          | `4 <= 5`         |

```js
console.log(5 == '5');   // true
console.log(5 === '5');  // false
```

---

## 🔹 4. Logical Operators

| Operator | Description         | Example         |
|----------|---------------------|-----------------|
| `&&`     | Logical AND          | `true && false` |
| `||`     | Logical OR           | `true || false` |
| `!`      | Logical NOT          | `!true`         |

```js
let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin); // false
console.log(!isLoggedIn);           // false
```

---

## 🔹 5. Ternary Operator

Shortcut for if-else:

```js
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"
```

---

## 🔹 6. Nullish Coalescing Operator `??`

Returns the right-hand operand if the left is `null` or `undefined`.

```js
let name = null;
let displayName = name ?? "Guest";
console.log(displayName); // "Guest"
```

---

## 🔹 7. Optional Chaining `?.`

Safely access nested properties:

```js
const user = { profile: { name: "Praveen" } };
console.log(user?.profile?.name); // "Praveen"
console.log(user?.address?.city); // undefined
```

---

> 💡 Use `===` instead of `==` for strict equality to avoid unexpected type coercion.
