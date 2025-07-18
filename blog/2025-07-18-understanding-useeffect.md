---
title: "Understanding useEffect Hook in React — With Practical Examples 🚀"
description: "Learn how useEffect works in React, common pitfalls, and how to use it like a pro with real-world examples."
tags: [react, hooks, useEffect, beginners]
authors: [praveen]
slug: understanding-useEffect-hook
---

React introduced Hooks in version 16.8 to make functional components powerful. Among them, `useEffect` is one of the most commonly used (and misunderstood!) hooks.

<!-- truncate -->

In this post, we’ll explore:

- What is `useEffect`?
- Basic Syntax
- useEffect as componentDidMount
- Cleanup Functions
- Dependency Array Explained
- Common Mistakes 🚫
- Real-world Examples ✅

---

## 🔍 What is `useEffect`?

`useEffect` lets you perform **side effects** in functional components — things like data fetching, DOM manipulation, subscriptions, etc.

```tsx
useEffect(() => {
  // your side effect here
});
```

---

## 📘 Basic Syntax

```tsx
useEffect(() => {
  // code to run
}, [dependencies]);
```

- The first argument is a callback function.
- The second argument is an optional dependency array.

---

## 🟢 useEffect as `componentDidMount`

Run the effect only once when the component mounts:

```tsx
useEffect(() => {
  console.log("Component mounted!");
}, []);
```

---

## 🔁 useEffect on Dependency Update

```tsx
useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
```

It only runs when `count` changes.

---

## 🧹 Cleanup Function

Used for **unmounting** or unsubscribing:

```tsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log("Cleaned up!");
  };
}, []);
```

---

## ❗ Common Mistakes

1. **Forgetting the dependency array:**  
   This will run on every re-render, which might not be what you want.

2. **Using wrong dependencies:**  
   If you use variables inside `useEffect`, they should be in the dependency array.

3. **Not cleaning up subscriptions:**  
   Leads to memory leaks.

---

## 💡 Real-world Example: Fetching Data

```tsx
import { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## 🧠 Conclusion

`useEffect` is powerful but must be used carefully. Always understand **when** and **why** it's running. Once you master it, your functional components become truly powerful.

---

📝 Stay tuned for more React magic! Next time, we’ll explore `useMemo` and `useCallback`.

---

👍 If you liked this article, share it or leave a star!  
🔁 Follow me for more bite-sized React blogs.

