# 📘 CodePedia – Notes, Blogs & CheatSheet

This is a documentation site built using [Docusaurus 3](https://docusaurus.io/), a modern static site generator.  
It contains well-structured JavaScript notes, cheat sheets, and blogs.

## 🚀 Features

- ✍️ Markdown-based docs and blogs
- 🧭 Sidebar navigation
- 🔍 Full-text search
- 🖼️ Local image support
- 🌐 Custom domain: [docs.praveensingh.online](https://docs.praveensingh.online)

---

## 📦 Installation

Install dependencies:

```bash
npm install
```

---

## 🧑‍💻 Local Development

To start the local dev server:

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.  
Live reload works out of the box for Markdown and React files.

---

## 🏗️ Build

Generate a static production build:

```bash
npm run build
```

Static content will be output to the `build/` directory.

---

## 🚀 Deployment

### ✅ GitHub Pages (gh-pages branch)

**Using SSH:**

```bash
USE_SSH=true yarn deploy
```

**Using HTTPS with GitHub token:**

```bash
GIT_USER=<your-github-username> yarn deploy
```

This will:

1. Build the site
2. Push to the `gh-pages` branch
3. Publish at https://<your-github-username>.github.io/<repo-name>/

---

## 🌐 Custom Domain Setup

This site is served via a custom domain:  
👉 [https://docs.praveensingh.online](https://docs.praveensingh.online)

Make sure to:

- Add a `CNAME` file with the domain inside the `static/` directory.
- Point your DNS `A` or `CNAME` records to GitHub Pages servers.
- Enable HTTPS from your repo settings once the certificate is issued.

---

## 📁 Folder Structure (Simplified)

```
.
├── blog/                  # Blog posts
├── docs/                  # Docs pages
├── static/img/            # Static images
├── src/pages/             # Custom pages like homepage
├── docusaurus.config.ts   # Site config
├── sidebars.ts            # Sidebar config
├── README.md              # This file
```

---

## 🧑‍🎓 Author

Made with ❤️ by [Praveen Singh](https://github.com/praveenskg)

---
