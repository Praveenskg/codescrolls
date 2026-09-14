# 📘 CodeScrolls – Developer Docs, Notes & CheatSheets

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.10.2-green.svg)](https://docusaurus.io/)
[![React](https://img.shields.io/badge/React-19.3.0-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-blue.svg)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-9.39.5-purple.svg)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.9.6-pink.svg)](https://prettier.io/)

CodeScrolls is a comprehensive, modern documentation site built with
[Docusaurus 3](https://docusaurus.io/). It provides well-organized technical
notes, comprehensive cheat sheets, tutorials, and guides for web developers.

> 🧠 Learn faster. 📚 Refer anytime. 🚀 Level up your dev journey.

**Live Site:** [https://codescrolls.vercel.app](https://codescrolls.site)

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

- ⚡ **Blazing Fast** - Static site generation with Docusaurus 3.10.2
- 🔍 **Local Search** - Full-text search without Algolia
- 📱 **PWA Support** - Offline-capable Progressive Web App
- 🌙 **Dark Mode** - Beautiful dark theme support
- 🎨 **Modern UI** - Clean, responsive design with custom styling
- 🚀 **Performance** - Optimized builds with experimental faster mode

### **Developer Experience**

- 🔧 **TypeScript** - Full TypeScript support with strict mode
- 🎯 **ESLint 9** - Code quality enforcement with flat config
- 💅 **Prettier** - Consistent code formatting with auto-organize imports
- 🪝 **Git Hooks** - Pre-commit checks and commit message validation
- 🔄 **CI/CD** - Comprehensive GitHub Actions pipeline
- 📊 **Analytics** - Google Analytics & Vercel Analytics
- ✅ **Quality Checks** - Automated type checking, linting, and formatting
- 🚀 **Fast Development** - Hot reload and optimized builds

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
pnpm install

# Start development server
pnpm start

# Build for production
pnpm build
```

---

## 📦 Installation

### Prerequisites

- **Node.js** 20+ (CI uses Node.js 24)
- **pnpm** 11+
- **Git**

### Install Dependencies

```bash
pnpm install
```

This will install all required dependencies including:

- Docusaurus 3.10.2
- React 19.3.0
- TypeScript 6.0.3
- ESLint 9.39.5 (flat config)
- Prettier 3.9.6
- Husky 9.1.7 (Git hooks)
- lint-staged 17.5.1
- And more...

---

## 🧑‍💻 Local Development

Start the development server:

```bash
pnpm start
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
pnpm build
```

**Output:**

- Static files in `build/` directory
- Optimized for production
- Ready for deployment

**Test the build locally:**

```bash
pnpm serve
```

---

## 📜 Available Scripts

| Script                          | Description                                  |
| ------------------------------- | -------------------------------------------- |
| `pnpm start`                    | Start development server                     |
| `pnpm build`                    | Build for production                         |
| `pnpm serve`                    | Serve production build locally               |
| `pnpm clean`                    | Clear Docusaurus cache                       |
| `pnpm deploy`                   | Deploy to GitHub Pages                       |
| `pnpm typecheck`                | Run TypeScript type checking                 |
| `pnpm lint`                     | Run ESLint                                   |
| `pnpm lint:fix`                 | Fix ESLint issues automatically              |
| `pnpm format`                   | Format code with Prettier                    |
| `pnpm format:check`             | Check code formatting                        |
| `pnpm validate`                 | Run all checks (typecheck + lint + format)   |
| `pnpm audit --ignore-unfixable` | Check dependencies for known vulnerabilities |
| `pnpm write-heading-ids`        | Generate heading IDs for MDX files           |
| `pnpm safe-upgrade`             | Upgrade dependencies safely (minor only)     |

---

## 🪝 Git Hooks

The project uses [Husky](https://typicode.github.io/husky/) for Git hooks to
ensure code quality:

### **Pre-commit Hook**

Automatically runs before each commit:

- ✅ Formats code with Prettier
- ✅ Lints code with ESLint (auto-fixes issues)
- ✅ Type checks with TypeScript (only if TS files staged)
- ✅ Detects merge conflicts
- ✅ Warns about large files (>1MB)
- ✅ Shows timing information

### **Commit-msg Hook**

Validates commit message format:

- ✅ Enforces Conventional Commits format
- ✅ Validates commit types (feat, fix, docs, etc.)
- ✅ Checks subject line length
- ✅ Provides helpful error messages

**Example commit messages:**

```bash
✅ feat: add new blog post
✅ fix(navbar): resolve mobile menu issue
✅ docs: update README
❌ Added new feature  # Invalid - missing type
```

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
│   ├── css/                   # CSS docs
│   ├── html/                  # HTML docs
│   ├── javascript/            # JavaScript docs
│   ├── python/                # Python docs
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
├── .husky/                    # Git hooks (Husky)
│   ├── pre-commit            # Pre-commit checks
│   └── commit-msg            # Commit message validation
├── eslint.config.mjs          # ESLint configuration (flat config)
├── .prettierrc                # Prettier configuration
├── docusaurus.config.ts       # Docusaurus configuration
├── package.json               # Dependencies and scripts
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

#### **Cheat Sheets** (14 comprehensive cheat sheets)

- **Git** - Complete Git workflow and commands
- **JavaScript** - ES6+ features and modern patterns
- **TypeScript** - Type system and advanced features
- **React** - Components, hooks, and patterns
- **CSS** - Layout, animations, and modern features
- **HTML** - Elements, attributes, and semantic HTML
- **Linux** - System administration and commands
- **Markdown** - Complete Markdown syntax
- **MDX** - Docusaurus MDX features
- **VSCode** - Extensions and shortcuts
- **Node.js** - Server-side JavaScript
- **SQL** - Database queries and operations
- **API** - REST API design and best practices
- **Windows** - PowerShell, CMD, and system administration

#### **Interview Questions**

- HTML (50 questions)
- CSS (50 questions)
- JavaScript (50 questions)
- React (50 questions)
- TypeScript (50 questions)
- Node.js (questions)

### **Blog Posts** (15+ comprehensive articles)

- **React 19 Complete Guide** - New features, hooks, and best practices
- **Modern TypeScript Features** - Latest TypeScript capabilities
- **Modern CSS Features** - Container queries, :has(), nesting, and more
- **API Design Best Practices** - RESTful principles and patterns
- **JavaScript Promises & Async** - Complete async programming guide
- **Git Workflows Best Practices** - Branching strategies and collaboration
- **Docker Developer's Guide** - Containerization and best practices
- **Database Design Principles** - Data modeling and optimization
- **CSS Grid vs Flexbox** - Layout system comparison
- **VSCode Tips & Tricks** - Productivity enhancements
- **JavaScript Closures & Hoisting** - Core concepts explained
- And more...

---

## 🛠️ Tech Stack

### **Core**

- **[Docusaurus 3.10.2](https://docusaurus.io/)** - Documentation framework
- **[React 19.3.0](https://react.dev/)** - UI library (latest features)
- **[TypeScript 6.0.3](https://www.typescriptlang.org/)** - Type safety

### **Development Tools**

- **[ESLint 9.39.5](https://eslint.org/)** - Code linting (flat config)
- **[Prettier 3.9.6](https://prettier.io/)** - Code formatting
- **[TypeScript ESLint](https://typescript-eslint.io/)** - TypeScript linting
- **[Husky 9.1.7](https://typicode.github.io/husky/)** - Git hooks
- **[lint-staged 17.5.1](https://github.com/okonet/lint-staged)** - Pre-commit
  formatting

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

### **Vercel**

The site is configured for Vercel deployment with `vercel.json` and the custom
domain [codescrolls.site](https://codescrolls.site).

**Manual Deployment:**

```bash
# Install Vercel CLI
pnpm dlx vercel

# Deploy from the repository root
pnpm dlx vercel --prod
```

### **Custom Domain**

This site uses a custom domain: **[codescrolls.site](https://codescrolls.site)**

**Setup:**

1. Add `CNAME` file in `static/` directory
2. Configure DNS records (A or CNAME)
3. Enable HTTPS in repository settings

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
   pnpm validate    # Runs all checks (typecheck + lint + format)
   pnpm build       # Build for production
   ```

   Or run individually:

   ```bash
   pnpm typecheck   # TypeScript type checking
   pnpm lint        # ESLint checking
   pnpm lint:fix    # Auto-fix ESLint issues
   pnpm format      # Format with Prettier
   pnpm format:check # Check formatting
   ```

5. **Commit your changes**

   ```bash
   git commit -m "feat: add amazing feature"
   ```

   **Note:** The project uses Conventional Commits format. Your commit message
   will be validated automatically.

   Valid formats:
   - `feat: add new feature`
   - `fix(navbar): resolve mobile menu issue`
   - `docs: update README`
   - `refactor(hooks): simplify useAuth hook`

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

- ✅ TypeScript support with strict mode
- ✅ ESLint 9 flat config
- ✅ Prettier formatting with auto-organize imports
- ✅ Git hooks (pre-commit & commit-msg)
- ✅ Hot reload
- ✅ Live code blocks
- ✅ Comprehensive CI/CD pipeline

### **Production Ready**

- ✅ Comprehensive CI/CD pipeline (GitHub Actions)
- ✅ Automated quality checks (TypeScript, ESLint, Prettier)
- ✅ Git hooks for code quality
- ✅ Conventional Commits enforcement
- ✅ PWA support
- ✅ Analytics integration
- ✅ SEO optimized
- ✅ Performance optimized (Docusaurus faster mode)

---

## 📊 Project Stats

- **144 Documentation Files** (HTML, CSS, JavaScript, Python, React, TypeScript)
- **20 Blog Posts** (React, TypeScript, CSS, API Design, Docker, and more)
- **14 Comprehensive Cheat Sheets** (Git, JavaScript, TypeScript, React, CSS,
  HTML, Linux, Markdown, MDX, VS Code, Node.js, SQL, API, Windows)
- **Interview Questions** (HTML, CSS, JavaScript, Node.js, React, TypeScript)
- **Modern Features** - React 19, TypeScript 6, ES2024/2025, CSS Container
  Queries
- **Production Ready** - CI/CD, Git hooks, automated quality checks

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
