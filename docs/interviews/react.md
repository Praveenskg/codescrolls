---
title: React Interview Questions
description: 50 React interview questions and answers – from basics to advanced – with examples for interview preparation.
---

# React Interview Questions

Welcome to the **React Interview Questions** hub! 🚀  
We’ve structured the questions into **three levels** — _Basic_, _Intermediate_, and _Advanced_.

## Use this as a quick revision guide or a preparation sheet for your next interview.

## 🟢 Basic Level (1–10)

_Core React concepts every developer must know._

### 1. What is React?

React is a **JavaScript library** for building user interfaces.  
It is **component-based** and helps create reusable UI parts.

---

### 2. What are components in React?

Components are **reusable building blocks** of a UI.

```jsx
function Welcome() {
  return <h1>Hello, World!</h1>;
}
```

---

### 3. What are props in React?

Props are **read-only inputs** passed from parent to child.

```jsx
function Greeting({ name }) {
  return <p>Hello {name}</p>;
}

<Greeting name='Praveen' />;
```

---

### 4. What is state in React?

State stores **mutable data** inside a component.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
```

---

### 5. Difference between state and props?

- **Props:** Read-only, external input
- **State:** Mutable, managed within component

---

### 6. What is JSX?

JSX is a syntax extension that lets you write **HTML inside JavaScript**.

```jsx
const element = <h1>Hello JSX</h1>;
```

---

### 7. Why do we need keys in React lists?

Keys help React **track items** and **optimize re-rendering**.

---

### 8. What are fragments in React?

Fragments let you group elements without extra DOM nodes.

```jsx
<>
  <h1>Title</h1>
  <p>Description</p>
</>
```

---

### 9. Difference between functional and class components?

- Functional: Simple, hooks for state
- Class: Uses `this.state`, lifecycle methods

---

### 10. What is Virtual DOM?

A lightweight copy of DOM where React applies **diffing algorithm** for fast updates.

---

## 🟡 Intermediate Level (11–25)

_Hooks, context, routing, and state management._

### 11. What are React Hooks?

Hooks are functions (like `useState`, `useEffect`) to use **state and lifecycle** in functional components.

---

### 12. Difference between `useEffect` and `useLayoutEffect`?

- `useEffect`: Runs async after render
- `useLayoutEffect`: Runs sync, before paint

```jsx
useEffect(() => console.log('After render'));
useLayoutEffect(() => console.log('Before paint'));
```

---

### 13. What is Context API?

Avoids **prop drilling** by providing global state.

```jsx
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value='dark'>
      <Toolbar />
    </ThemeContext.Provider>
  );
}
```

---

### 14. What is React Router?

A library for client-side routing.

```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
  </Routes>
</BrowserRouter>;
```

---

### 15. How does `useState` work?

Returns a state variable + setter function.

---

### 16. What is `useMemo`?

Memoizes **computed values** to avoid recalculation.

```jsx
const result = useMemo(() => expensiveCalc(a, b), [a, b]);
```

---

### 17. What is `useCallback`?

Memoizes function reference to avoid unnecessary re-renders.

```jsx
const handleClick = useCallback(() => console.log('Clicked'), []);
```

---

### 18. What is `React.memo`?

Prevents re-rendering if props don’t change.

---

### 19. Controlled vs Uncontrolled Components?

- Controlled: State in React (`value` + `onChange`)
- Uncontrolled: DOM manages state (`ref`)

---

### 20. What is Redux?

A **state management library** with a single store.

---

### 21. Redux vs Context API?

- Redux: Scalable, middlewares, dev tools
- Context API: Simpler but limited

---

### 22. What is `useReducer`?

Hook for managing complex state logic.

---

### 23. What is React Fiber?

React’s new reconciliation engine for smooth rendering.

---

### 24. What is reconciliation?

Process of diffing old vs new Virtual DOM to update only changed parts.

---

### 25. Lifecycle Phases in React?

- Mounting
- Updating
- Unmounting

---

## 🔴 Advanced Level (26–50)

_Performance, SSR, Suspense, Next.js, optimization._

### 26. What is server-side rendering (SSR)?

Rendering React components on **server** instead of browser.

---

### 27. What is hydration?

Attaching event listeners to server-rendered HTML on client.

---

### 28. What are React Portals?

Render children into a different DOM node.

```jsx
ReactDOM.createPortal(<Modal />, document.getElementById('modal-root'));
```

---

### 29. What is code splitting?

Splitting bundles into smaller chunks for faster load.

---

### 30. What is lazy loading?

Load components only when required.

```jsx
const LazyComp = React.lazy(() => import('./Comp'));
```

---

### 31. What are Higher-Order Components (HOC)?

A function that returns an enhanced component.

---

### 32. HOC vs Render Props?

- HOC: Wrapper component
- Render Props: Function-as-prop

---

### 33. What is Error Boundary?

Catch runtime errors in children.

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  render() {
    return this.state.hasError ? <p>Error!</p> : this.props.children;
  }
}
```

---

### 34. What is Strict Mode?

Highlights potential issues during development.

---

### 35. What are custom hooks?

Reusable hooks extracted from components.

---

### 36. Performance Optimization in React?

- Memoization
- Virtual DOM
- Code splitting
- Lazy loading

---

### 37. What is concurrent rendering?

React can pause/restart rendering for smooth UI.

---

### 38. What is Suspense?

Lets components wait for async data.

```jsx
<Suspense fallback={<p>Loading...</p>}>
  <LazyComp />
</Suspense>
```

---

### 39. Pitfalls of React keys?

- Don’t use array index as key
- Keys must be unique and stable

---

### 40. What is ref in React?

Way to access DOM elements directly.

---

### 41. `useRef` vs `createRef`?

- `useRef`: Persistent across renders
- `createRef`: New ref each render

---

### 42. What is tree shaking?

Removing unused code from bundles.

---

### 43. CSR vs SSR?

- CSR: Renders on client, slower first load
- SSR: Server-rendered, SEO-friendly

---

### 44. Hydration mismatch?

Mismatch between server HTML & client render causes warnings.

---

### 45. What is SSG?

Static Site Generation – pre-build HTML at build time.

---

### 46. What is Next.js?

A React framework with **SSR, SSG, routing, API routes**.

---

### 47. What is React DevTools?

Browser extension to inspect React state/props.

---

### 48. Render Phases in React Fiber?

- Render phase (reconciliation)
- Commit phase (DOM update)

---

### 49. What is batching in React?

React batches multiple state updates into one re-render.

---

### 50. React 18 performance features?

- Automatic batching
- Concurrent rendering
- Suspense improvements
- Streaming SSR

---

This completes the **50 React Interview Questions** with explanations and code snippets.
