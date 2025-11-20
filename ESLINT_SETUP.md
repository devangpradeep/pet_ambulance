# ESLint Setup Guide

This project uses ESLint with TypeScript support to maintain code quality and consistency.

## What's Configured

### ESLint Plugins & Rules
- **@eslint/js** - Core JavaScript linting rules
- **typescript-eslint** - TypeScript-specific linting rules
- **eslint-plugin-react-hooks** - React Hooks best practices
- **eslint-plugin-react-refresh** - React Fast Refresh validation

### Configuration Files
- `eslint.config.js` - Main ESLint configuration (flat config format)
- `.eslintignore` - Files and directories to exclude from linting

## Available Commands

### Check for Linting Errors
```bash
npm run lint
```
This will check all TypeScript and TSX files for linting errors without modifying any files.

### Auto-Fix Linting Errors
```bash
npm run lint:fix
```
This will automatically fix all auto-fixable linting errors in your codebase.

### Watch Mode (Experimental)
```bash
npm run lint:watch
```
This will run ESLint in watch mode, re-linting files as you save them.

## IDE Integration

### VS Code Setup

1. **Install Recommended Extensions**
   - Open the Command Palette (`Cmd/Ctrl + Shift + P`)
   - Type "Extensions: Show Recommended Extensions"
   - Install the ESLint extension

2. **Auto-fix on Save** (Optional)
   Create `.vscode/settings.json` with:
   ```json
   {
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": "explicit"
     },
     "eslint.validate": [
       "javascript",
       "javascriptreact",
       "typescript",
       "typescriptreact"
     ]
   }
   ```

### Other IDEs
- **WebStorm/IntelliJ**: ESLint is built-in, enable it in Settings → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint
- **Sublime Text**: Install the SublimeLinter-eslint package
- **Vim/Neovim**: Use ALE or coc-eslint

## Common Linting Rules

### React Hooks Rules
- ✅ All hooks must be called at the top level
- ✅ Hooks must be called in the same order every render
- ✅ Dependencies must be correctly specified in useEffect, useMemo, etc.

### React Refresh Rules
- ⚠️ Components should be exported as default or named exports
- ⚠️ Constant exports alongside components trigger warnings

### TypeScript Rules
- ❌ No unused variables
- ❌ No explicit `any` types (use `unknown` instead)
- ❌ No non-null assertions without good reason
- ✅ Prefer `const` over `let` when possible

## Ignoring Specific Rules

### Disable for a Single Line
```typescript
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = fetchData();
```

### Disable for an Entire File
```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
// Your code here
```

### Disable for a Block
```typescript
/* eslint-disable @typescript-eslint/no-explicit-any */
const data: any = fetchData();
/* eslint-enable @typescript-eslint/no-explicit-any */
```

## Customizing Rules

To modify ESLint rules, edit `eslint.config.js`:

```javascript
export default tseslint.config(
  // ... existing config
  {
    rules: {
      // Add your custom rules here
      '@typescript-eslint/no-unused-vars': 'warn', // Change to warning
      'react-hooks/exhaustive-deps': 'error', // Keep as error
    },
  },
)
```

## Troubleshooting

### ESLint Not Working
1. Ensure dependencies are installed: `npm install`
2. Restart your IDE/editor
3. Check the ESLint output panel in VS Code

### Too Many Errors
Run `npm run lint:fix` to auto-fix what can be fixed automatically, then address remaining issues manually.

### Performance Issues
If linting is slow:
1. Add more patterns to `.eslintignore`
2. Ensure `node_modules` and `dist` are ignored
3. Consider using `eslint.config.js` to exclude specific file patterns

## Pre-commit Hooks (Optional)

To automatically lint before commits, you can set up Husky:

```bash
npm install --save-dev husky lint-staged
npx husky init
```

Then add to `package.json`:
```json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "git add"]
  }
}
```

## Resources

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [React Hooks ESLint Plugin](https://www.npmjs.com/package/eslint-plugin-react-hooks)
