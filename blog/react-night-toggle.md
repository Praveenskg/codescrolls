---
slug: react-night-toggle
title: 'Introducing react-night-toggle – A Dark/Light Mode Switch for React'
description:
  'A lightweight, customizable React component for dark/light mode toggle with
  smooth animations and TypeScript support.'
authors: praveen
tags: [react, javascript, darkmode, opensource]
image: /img/blog/react.png
date: 2025-08-14
keywords:
  [
    'react dark mode',
    'react toggle',
    'dark mode switch',
    'react component',
    'night mode',
    'theme toggle',
  ]
---

We all love dark mode, but implementing a clean and customizable toggle can be a
bit annoying.  
That’s why I built
**[react-night-toggle](https://www.npmjs.com/package/react-night-toggle)** – a
lightweight, flexible React component that makes switching between dark and
light mode super easy.

<!-- truncate -->

## 🚀 Features

- 🌙 Clean & modern **dark mode toggle**
- ⚡ Built with **TypeScript**
- 🎨 **Customizable icons** (uses `lucide-react` by default)
- 🎨 **Customizable colors** via `sunColor` & `moonColor` props
- ✨ Smooth **Framer Motion animations**
- 📦 Lightweight and easy to use in any React project

---

## 📦 Installation

```bash
npm install react-night-toggle
# or
yarn add react-night-toggle
# or
pnpm add react-night-toggle
```

---

## 🔧 Usage

### 1️⃣ Basic Usage Example

```tsx
import { useState } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';

export default function App() {
  const [dark, setDark] = useState(false);

  const toggleDarkMode = (checked: boolean) => setDark(checked);

  return (
    <div className={dark ? 'dark' : ''}>
      <DarkModeSwitch
        checked={dark}
        onChange={toggleDarkMode}
        sunColor="orange" // optional, defaults to currentColor
        moonColor="black" // optional, defaults to currentColor
      />
      <h1>{dark ? '🌙 Dark Mode' : '☀️ Light Mode'}</h1>
    </div>
  );
}
```

### 2️⃣ Custom Icons Example

You can pass your own icons instead of the default **Sun/Moon**:

```tsx
import { useState } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';
import { CloudSun, Star } from 'lucide-react';

export default function App() {
  const [dark, setDark] = useState(false);

  // onChange handler to toggle dark mode
  const toggleDarkMode = (checked: boolean) => setDark(checked);

  return (
    <div>
      <DarkModeSwitch
        checked={dark}
        onChange={toggleDarkMode}
        lightIcon={<CloudSun size={24} />}
        darkIcon={<Star size={24} />}
      />
      <h2>{dark ? 'Dark Mode Enabled 🌙' : 'Light Mode Enabled ☀️'}</h2>
    </div>
  );
}
```

### 3️⃣ Follow System Theme Example

You can automatically follow the user’s system color scheme by setting
`followSystem` to `true`:

```tsx
import { useState } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <DarkModeSwitch
        followSystem
        checked={dark}
        onChange={setDark}
        size={40}
      />
      <h2>{dark ? 'Dark Mode Enabled 🌙' : 'Light Mode Enabled ☀️'}</h2>
    </div>
  );
}
```

### 4️⃣ Colored Sun & Moon Example

You can customize the colors of the **Sun** and **Moon** icons:

```tsx
import { useState } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <DarkModeSwitch
        checked={dark}
        onChange={setDark}
        size={56}
        sunColor="orange"
        moonColor="blueviolet"
      />
      <h2>{dark ? 'Dark Mode Enabled 🌙' : 'Light Mode Enabled ☀️'}</h2>
    </div>
  );
}
```

### 5️⃣ Large Toggle Example

You can increase the size of the toggle button by passing a numeric value or a
string:

```tsx
import { useState } from 'react';
import { DarkModeSwitch } from 'react-night-toggle';

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div>
      <DarkModeSwitch checked={dark} onChange={setDark} size={72} />
      <h2>{dark ? 'Dark Mode Enabled 🌙' : 'Light Mode Enabled ☀️'}</h2>
    </div>
  );
}
```

✨ This way you can use **any React node** (Lucide, Material UI, custom SVGs,
etc.) for icons.

---

## ⚙️ Props

| Prop           | Type                         | Default        | Description                                                                                  |
| -------------- | ---------------------------- | -------------- | -------------------------------------------------------------------------------------------- |
| `checked`      | `boolean`                    | — (required)   | Whether dark mode is active (`true` = dark, `false` = light).                                |
| `onChange`     | `(checked: boolean) => void` | — (required)   | Callback fired when the toggle is switched.                                                  |
| `size`         | `number \| string`           | `24`           | Size of the toggle button (applied to both icons).                                           |
| `lightIcon`    | `React.ReactNode`            | `<Sun />`      | Custom icon for light mode.                                                                  |
| `darkIcon`     | `React.ReactNode`            | `<Moon />`     | Custom icon for dark mode.                                                                   |
| `sunColor`     | `string`                     | `currentColor` | Color of the default **Sun** icon. Ignored if `lightIcon` is provided.                       |
| `moonColor`    | `string`                     | `currentColor` | Color of the default **Moon** icon. Ignored if `darkIcon` is provided.                       |
| `followSystem` | `boolean`                    | `false`        | Automatically follow the user’s system color scheme. Overrides `checked` when set to `true`. |

---

## 🔗 Links

- 📦 **npm**:
  [react-night-toggle](https://www.npmjs.com/package/react-night-toggle)
- 💻 **GitHub**:
  [github.com/Praveenskg/react-night-toggle](https://github.com/Praveenskg/react-night-toggle)
- 🌍 **Live Demo**:
  [react-night-toggle.vercel.app](https://react-night-toggle.vercel.app)

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to **open an issue** or **submit a pull request**.

---

## ⭐ Show your support

Give a ⭐️ if this project helped you!
