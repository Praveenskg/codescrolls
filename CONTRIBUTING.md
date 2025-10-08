# Contributing to CodeScrolls

Thank you for your interest in contributing to CodeScrolls! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)

---

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

---

## 🤝 How Can I Contribute?

### Reporting Bugs

- Use the GitHub issue tracker
- Check if the bug has already been reported
- Include detailed steps to reproduce
- Include screenshots if applicable

### Suggesting Enhancements

- Use the GitHub issue tracker
- Provide a clear description of the enhancement
- Explain why this enhancement would be useful

### Contributing Code

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test your changes
5. Commit your changes (see commit message guidelines)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

---

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn

### Installation

```bash
# Clone your fork
git clone https://github.com/Praveenskg/codescrolls.git
cd codescrolls

# Install dependencies
npm install

# Start development server
npm start
```

### Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm run serve      # Serve production build
npm run typecheck  # Run TypeScript checks
npm run format     # Format code with Prettier
npm run clear      # Clear Docusaurus cache
```

---

## 🔄 Pull Request Process

1. **Update Documentation**: Update the README.md or relevant docs if needed
2. **Follow Style Guidelines**: Ensure your code follows our style guidelines
3. **Test Your Changes**: Make sure everything works as expected
4. **Update Changelog**: Add your changes to the changelog (if applicable)
5. **Request Review**: Request review from maintainers

### PR Checklist

- [ ] Code follows the project's style guidelines
- [ ] Self-review of code completed
- [ ] Comments added for complex code
- [ ] Documentation updated (if needed)
- [ ] No new warnings or errors
- [ ] Changes tested locally
- [ ] Commit messages follow guidelines

---

## 🎨 Style Guidelines

### Code Style

- Use TypeScript for new files
- Use functional components with hooks
- Follow existing code patterns
- Use meaningful variable names
- Add comments for complex logic

### File Organization

```
docs/           # Documentation files
├── cheatsheets/
├── interviews/
├── javascript/
├── react/
└── typescript/

blog/           # Blog posts
├── javascript/
├── react/
└── vscode/

src/            # React components
├── components/
├── css/
└── pages/
```

### Markdown/MDX

- Use proper frontmatter
- Include description and keywords
- Use code blocks with language specification
- Add alt text to images
- Use proper heading hierarchy (H1 → H2 → H3)

Example:

```markdown
---
title: My Document
description: A clear description
keywords: [keyword1, keyword2]
---

# Main Title

## Section

Content here...
```

---

## 📝 Commit Messages

### Format

```
type(scope): subject

body (optional)

footer (optional)
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(cheatsheets): add Python cheatsheet

docs(readme): update installation instructions

fix(navbar): resolve mobile menu issue
```

---

## 📚 Documentation Guidelines

### Writing Style

- Be clear and concise
- Use examples
- Include code snippets
- Add screenshots when helpful
- Use proper grammar and spelling

### Code Examples

- Test all code examples
- Use realistic examples
- Include comments for clarity
- Show expected output

---

## 🧪 Testing

Before submitting a PR:

1. Build the project: `npm run build`
2. Test locally: `npm run serve`
3. Check for TypeScript errors: `npm run typecheck`
4. Format code: `npm run format`

---

## 🆘 Getting Help

- Open an issue for questions
- Join discussions in GitHub Discussions
- Check existing documentation
- Review closed issues and PRs

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## 🙏 Thank You!

Your contributions make CodeScrolls better for everyone. Thank you for taking the time to contribute! 🎉

---

**Happy Coding!** 💻✨
