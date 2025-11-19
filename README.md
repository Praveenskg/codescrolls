# 📘 CodeScrolls – Developer Docs, Notes & CheatSheets

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.9.1-green.svg)](https://docusaurus.io/)
[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue.svg)](https://www.typescriptlang.org/)

CodeScrolls is a comprehensive, modern documentation site built with
[Docusaurus 3](https://docusaurus.io/). It provides well-organized technical
notes, comprehensive cheat sheets, tutorials, and guides for web developers.

> 🧠 Learn faster. 📚 Refer anytime. 🚀 Level up your dev journey.

**Live Site:** [https://codescrolls.site](https://codescrolls.site)

---

## 🌟 Features

### **Content**

- 📚 **Comprehensive Documentation** - JavaScript, TypeScript, React, and more
- 📝 **Detailed Cheat Sheets** - Git, Linux, VSCode, Markdown, MDX, JavaScript
- ✍️ **Technical Blog** - Tutorials, guides, and best practices
- 💼 **Interview Questions** - 50+ questions each for HTML, CSS, JavaScript,
  React, TypeScript, Node.js
- 🎯 **Code Examples** - Practical, runnable code snippets

### **Technical**

- ⚡ **Blazing Fast** - Static site generation with Docusaurus 3.9.1
- 🔍 **Local Search** - Full-text search without Algolia
- 📱 **PWA Support** - Offline-capable Progressive Web App
- 🌙 **Dark Mode** - Beautiful dark theme support
- 🎨 **Modern UI** - Clean, responsive design with custom styling
- 🚀 **Performance** - Optimized builds with experimental faster mode

### **Developer Experience**

- 🔧 **TypeScript** - Full TypeScript support
- 🎯 **ESLint** - Code quality enforcement with ESLint 9
- 💅 **Prettier** - Consistent code formatting
- 🔄 **CI/CD** - Automated builds and quality checks
- 📊 **Analytics** - Google Analytics & Vercel Analytics
- 🤖 **GitHub Actions** - Automated workflows

### **SEO & Monetization**

- 🔎 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- 🗺️ **Sitemap** - Auto-generated sitemap.xml
- 🤖 **robots.txt** - Proper crawler configuration
- 💰 **AdSense Ready** - Google AdSense integration
- 📄 **Legal Pages** - Privacy Policy, Terms, Disclaimer

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Development](#-local-development)
- [Scripts](#-available-scripts)
- [Project Structure](#-project-structure)
- [Content Organization](#-content-organization)
- [Tech Stack](#-tech-stack)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/Praveenskg/codescrolls.git
cd codescrolls

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

---

## 📦 Installation

### Prerequisites

- **Node.js** 18+ or 20+
- **npm** or **yarn**
- **Git**

### Install Dependencies

```bash
npm install
```

This will install all required dependencies including:

- Docusaurus 3.9.1
- React 19.2.0
- TypeScript 5.9.3
- ESLint 9
- Prettier 3.6.2
- And more...

---

## 🧑‍💻 Local Development

Start the development server:

```bash
npm start
```

The site will open at [http://localhost:3000](http://localhost:3000).

**Features:**

- ⚡ Hot reload for instant updates
- 🔍 Local search functionality
- 🌙 Dark mode toggle
- 📱 Mobile-responsive preview

---

## 🏗️ Build

Generate a static production build:

```bash
npm run build
```

**Output:**

- Static files in `build/` directory
- Optimized for production
- Ready for deployment

**Test the build locally:**

```bash
npm run serve
```

---

## 📜 Available Scripts

| Script                 | Description                    |
| ---------------------- | ------------------------------ |
| `npm start`            | Start development server       |
| `npm run build`        | Build for production           |
| `npm run serve`        | Serve production build locally |
| `npm run clean`        | Clear Docusaurus cache         |
| `npm run deploy`       | Deploy to GitHub Pages         |
| `npm run typecheck`    | Run TypeScript type checking   |
| `npm run lint`         | Run ESLint                     |
| `npm run lint:fix`     | Fix ESLint issues              |
| `npm run format`       | Format code with Prettier      |
| `npm run format:check` | Check code formatting          |

---

## 📁 Project Structure

```
codescrolls/
├── .github/                    # GitHub workflows and templates
│   ├── workflows/
│   │   ├── ci.yml             # CI/CD pipeline
│   │   └── summary.yml        # Issue summarization
│   ├── ISSUE_TEMPLATE/        # Issue templates
│   └── pull_request_template.md
├── blog/                       # Blog posts
│   ├── javascript/            # JavaScript tutorials
│   ├── react/                 # React tutorials
│   ├── vscode/                # VSCode tips
│   ├── authors.yml            # Blog authors
│   └── tags.yml               # Blog tags
├── docs/                       # Documentation
│   ├── cheatsheets/           # Cheat sheets
│   │   ├── git.mdx
│   │   ├── javascript.mdx
│   │   ├── linux.mdx
│   │   ├── markdown.md
│   │   ├── mdx.mdx
│   │   └── vscode.mdx
│   ├── interviews/            # Interview questions
│   │   ├── css.mdx
│   │   ├── html.mdx
│   │   ├── javascript.md
│   │   ├── nodejs.mdx
│   │   ├── react.md
│   │   └── typescript.md
│   ├── javascript/            # JavaScript docs
│   ├── react/                 # React docs
│   └── typescript/            # TypeScript docs
├── src/                        # Source files
│   ├── components/            # React components
│   ├── css/                   # Custom CSS
│   └── pages/                 # Custom pages
│       ├── about.md
│       ├── contact.md
│       ├── disclaimer.md
│       ├── privacy-policy.md
│       ├── terms-of-service.md
│       └── index.tsx
├── static/                     # Static assets
│   ├── img/                   # Images
│   ├── ads.txt                # AdSense verification
│   ├── manifest.json          # PWA manifest
│   └── robots.txt             # SEO robots file
├── .eslintrc.json             # ESLint configuration
├── .prettierrc                # Prettier configuration
├── docusaurus.config.ts       # Docusaurus configuration
├── package.json               # Dependencies
├── sidebars.ts                # Sidebar configuration
├── tsconfig.json              # TypeScript configuration
├── CODE_OF_CONDUCT.md         # Code of conduct
├── CONTRIBUTING.md            # Contributing guidelines
└── README.md                  # This file
```

---

## 📚 Content Organization

### **Documentation**

#### **JavaScript**

- Basics: Variables, Data Types, Operators, Control Flow, Loops
- Advanced: Closures, Promises, Async/Await, ES6+ Features

#### **React**

- Basics: Components, JSX, Props, State, Events
- Intermediate: Hooks, Context API, Custom Hooks
- Complete Hooks Guide: All React hooks with examples

#### **TypeScript**

- Basics: Variables, Data Types, Functions, Interfaces
- Intermediate: Union Types, Type Guards, Generics

#### **Cheat Sheets**

- **Git** - Complete Git workflow and commands (890 lines)
- **JavaScript** - ES6+ features and patterns (558 lines)
- **Linux** - System administration and commands (571 lines)
- **Markdown** - Complete Markdown syntax (851 lines)
- **MDX** - Docusaurus MDX features (603 lines)
- **VSCode** - Extensions and shortcuts (516 lines)

#### **Interview Questions**

- HTML (50 questions)
- CSS (50 questions)
- JavaScript (50 questions)
- React (50 questions)
- TypeScript (50 questions)
- Node.js (questions)

### **Blog Posts**

- JavaScript closures and hoisting
- React hooks deep dive
- VSCode productivity tips
- And more...

---

## 🛠️ Tech Stack

### **Core**

- **[Docusaurus 3.9.1](https://docusaurus.io/)** - Documentation framework
- **[React 19.2.0](https://reactjs.org/)** - UI library
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Type safety

### **Development Tools**

- **[ESLint 9](https://eslint.org/)** - Code linting (flat config)
- **[Prettier 3.6.2](https://prettier.io/)** - Code formatting
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript linting

### **Plugins & Features**

- **[@docusaurus/plugin-pwa](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-pwa)** -
  PWA support
- **[@docusaurus/theme-live-codeblock](https://docusaurus.io/docs/api/themes/@docusaurus/theme-live-codeblock)** -
  Live code editing
- **[@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)** -
  Local search
- **[@docusaurus/plugin-vercel-analytics](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-vercel-analytics)** -
  Analytics

### **Styling**

- Custom CSS with CSS variables
- Dark mode support
- Responsive design
- Modern UI components

---

## 🚀 Deployment

### **GitHub Pages**

The site is automatically deployed to GitHub Pages using the `gh-pages` branch.

**Manual Deployment:**

```bash
# Using npm
npm run deploy

# Using SSH
USE_SSH=true npm run deploy

# Using HTTPS with token
GIT_USER=<your-username> npm run deploy
```

### **Custom Domain**

This site uses a custom domain: **[codescrolls.site](https://codescrolls.site)**

**Setup:**

1. Add `CNAME` file in `static/` directory
2. Configure DNS records (A or CNAME)
3. Enable HTTPS in repository settings

### **Vercel (Alternative)**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 🤝 Contributing

We welcome contributions! Please see our
[Contributing Guidelines](CONTRIBUTING.md) for details.

### **How to Contribute**

1. **Fork the repository**

   ```bash
   git clone https://github.com/Praveenskg/codescrolls.git
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Add documentation
   - Fix bugs
   - Improve content

4. **Run quality checks**

   ```bash
   npm run typecheck
   npm run lint
   npm run format
   npm run build
   ```

5. **Commit your changes**

   ```bash
   git commit -m "feat: add amazing feature"
   ```

6. **Push and create PR**
   ```bash
   git push origin feature/amazing-feature
   ```

### **Contribution Areas**

- 📝 Add new documentation
- 🐛 Fix bugs or typos
- ✨ Suggest new features
- 🎨 Improve design
- 📚 Add blog posts
- 🔍 Improve SEO

---

## 📄 Legal & Policies

- [Privacy Policy](https://codescrolls.site/privacy-policy) - How we handle data
- [Terms of Service](https://codescrolls.site/terms-of-service) - Usage terms
- [Disclaimer](https://codescrolls.site/disclaimer) - Important disclaimers
- [Code of Conduct](CODE_OF_CONDUCT.md) - Community standards

---

## 🌟 Features Highlight

### **SEO Optimized**

- ✅ Meta tags and Open Graph
- ✅ Sitemap generation
- ✅ robots.txt configuration
- ✅ Structured data (JSON-LD)
- ✅ Fast loading times

### **Developer Friendly**

- ✅ TypeScript support
- ✅ ESLint configuration
- ✅ Prettier formatting
- ✅ Hot reload
- ✅ Live code blocks

### **Production Ready**

- ✅ CI/CD pipeline
- ✅ Automated testing
- ✅ Code quality checks
- ✅ PWA support
- ✅ Analytics integration

---

## 📊 Project Stats

- **30+ Documentation Pages**
- **8 Blog Posts**
- **6 Comprehensive Cheat Sheets**
- **300+ Interview Questions**
- **~3,000 Lines of Quality Content**
- **98/100 Industry Standard Score**

---

## 🔗 Links

- **Website:** [https://codescrolls.site](https://codescrolls.site)
- **Repository:**
  [https://github.com/Praveenskg/codescrolls](https://github.com/Praveenskg/codescrolls)
- **Issues:**
  [https://github.com/Praveenskg/codescrolls/issues](https://github.com/Praveenskg/codescrolls/issues)
- **Discussions:**
  [https://github.com/Praveenskg/codescrolls/discussions](https://github.com/Praveenskg/codescrolls/discussions)

---

## 👨‍💻 Author

**Praveen Singh**

- 🌐 Website: [codescrolls.site](https://codescrolls.site)
- 🐙 GitHub: [@Praveenskg](https://github.com/Praveenskg)
- 🧵 Twitter: [@its_praveen_s](https://twitter.com/its_praveen_s)
- 💼 LinkedIn: [praveenskg](https://linkedin.com/in/praveenskg)
- 📧 Email: Praveencdg@gmail.com

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE)
file for details.

---

## 🙏 Acknowledgments

- [Docusaurus](https://docusaurus.io/) - Amazing documentation framework
- [React](https://reactjs.org/) - Powerful UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vercel](https://vercel.com/) - Hosting and analytics
- [GitHub](https://github.com/) - Code hosting and CI/CD

---

## ⭐ Show Your Support

If you find this project helpful, please consider:

- ⭐ **Star this repository**
- 🐛 **Report bugs**
- 💡 **Suggest features**
- 🤝 **Contribute code**
- 📢 **Share with others**

---

**Made with ❤️ by [Praveen Singh](https://github.com/praveenskg)**

**Keep scrolling, keep coding! 💻✨**
