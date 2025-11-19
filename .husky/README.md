# Git Hooks Documentation

This directory contains Git hooks managed by
[Husky](https://typicode.github.io/husky/).

## 🎯 Purpose

These hooks ensure code quality and consistency by automatically running checks
before commits.

---

## 🪝 Available Hooks

### **pre-commit**

Runs before each commit to ensure code quality.

**What it does:**

1. ✅ **Formats code** with Prettier
2. ✅ **Lints code** with ESLint (auto-fixes issues)
3. ✅ **Type checks** with TypeScript

**Files checked:**

- `*.{js,jsx,ts,tsx}` - Linted and formatted
- `*.{json,md,mdx,css,yml,yaml}` - Formatted only

**Example output:**

```bash
🔍 Running pre-commit checks...

📝 Formatting and linting staged files...
✔ Preparing lint-staged...
✔ Running tasks for staged files...
✔ Applying modifications from tasks...
✔ Cleaning up temporary files...

🔎 Running TypeScript type check...
✅ All checks passed! Proceeding with commit...
```

---

### **commit-msg**

Validates commit message format.

**Format required:**

```
<type>(<scope>): <subject>
```

**Valid types:**

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks
- `build` - Build system changes
- `ci` - CI/CD changes
- `revert` - Revert previous commit

**Examples:**

```bash
✅ feat: add new blog post
✅ fix(navbar): resolve mobile menu issue
✅ docs: update README
✅ style: format code with prettier
✅ refactor(hooks): simplify useAuth hook
✅ chore: update dependencies

❌ Added new feature (invalid - no type)
❌ updated readme (invalid - no type, not capitalized)
```

---

## 🚀 How It Works

### **Automatic Execution**

Hooks run automatically when you commit:

```bash
git add .
git commit -m "feat: add new feature"

# Hooks run automatically:
# 1. pre-commit: formats, lints, type checks
# 2. commit-msg: validates message format
```

---

### **What Happens on Failure**

#### **Pre-commit failure:**

```bash
❌ ESLint found errors
❌ TypeScript found type errors

# Commit is blocked
# Fix the errors and try again
```

#### **Commit-msg failure:**

```bash
❌ Invalid commit message format!

Commit message must follow Conventional Commits format:
  <type>(<scope>): <subject>

Types: feat, fix, docs, style, refactor, perf, test, chore, build, ci, revert
```

---

## 🛠️ Configuration

### **lint-staged** (package.json)

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,md,mdx,css,yml,yaml}": ["prettier --write"]
  }
}
```

### **Modify hooks**

Edit the hook files in `.husky/`:

- `.husky/pre-commit` - Pre-commit checks
- `.husky/commit-msg` - Commit message validation

---

## 🔧 Troubleshooting

### **Skip hooks (NOT RECOMMENDED)**

Only use in emergencies:

```bash
# Skip pre-commit hook
git commit --no-verify -m "feat: emergency fix"

# Or use HUSKY=0
HUSKY=0 git commit -m "feat: emergency fix"
```

**⚠️ Warning:** Skipping hooks bypasses quality checks!

---

### **Hooks not running**

1. **Reinstall Husky:**

   ```bash
   npm run prepare
   ```

2. **Check hook permissions:**

   ```bash
   chmod +x .husky/pre-commit
   chmod +x .husky/commit-msg
   ```

3. **Verify Husky installation:**
   ```bash
   ls -la .husky/
   ```

---

### **Fix common errors**

#### **ESLint errors:**

```bash
# Auto-fix most issues
npm run lint:fix

# Or manually fix and commit again
```

#### **TypeScript errors:**

```bash
# Check errors
npm run typecheck

# Fix the errors in your code
# Then commit again
```

#### **Prettier formatting:**

```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

---

## 📚 Resources

- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/okonet/lint-staged)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)

---

## 🎯 Benefits

### **Code Quality**

- ✅ Consistent code style
- ✅ No linting errors
- ✅ Type-safe code
- ✅ Formatted code

### **Team Collaboration**

- ✅ Consistent commit messages
- ✅ Easy to track changes
- ✅ Better git history
- ✅ Automated quality checks

### **Developer Experience**

- ✅ Catch errors early
- ✅ No manual formatting
- ✅ Automated checks
- ✅ Fast feedback

---

**Happy coding! 🚀**
