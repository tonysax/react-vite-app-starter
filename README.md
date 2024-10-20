# React + TypeScript + Vite + Prettier + ESLint + Vitest + Reaxt Test Tools

```bash
npm create vite@latest react-vite-app-starter -- --template react-ts
git init
git branch -m main
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
    languageOptions: {
        // other options...
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname,
        },
    },
})
```

-   Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-   Optionally add `...tseslint.configs.stylisticTypeChecked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
    // Set the react version
    settings: { react: { version: '18.3' } },
    plugins: {
        // Add the react plugin
        react,
    },
    rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
    },
})
```

## Prettier + Vitest + React Test Tools

```bash
npm i -D -E prettier
npm i -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-import
```

```js
// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs
/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
}

export default config
```

```js
// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommanded from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
    { ignores: ['dist'] },
    // applies to everything
    eslintPluginPrettierRecommanded,
    {
        name: 'tseslint',
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
    },
    // prettier config
    prettier
)
```

```js
// vite.config.ts
//import { defineConfig } from 'vite'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        // globals: true,
        environment: 'jsdom',
        setupFiles: 'setupTests.ts',
        coverage: {
            include: ['src/**/*'],
            exclude: ['src/vite-env.d.ts', 'src/main.tsx', 'src/**/*.test.ts'],
        },
    },
})
```

VS Code Settings

```json
// .vscode/settings.json
{
    "eslint.useFlatConfig": true,
    "eslint.options": {
        "overrideConfigFile": "./eslint.config.js"
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnPaste": true, // required
    "editor.formatOnType": false, // required
    "editor.formatOnSave": true, // optional
    "editor.formatOnSaveMode": "file", // required to format on save
    "files.autoSave": "onFocusChange" // optional but recommended
}
```

```json
// package.json
  "scripts": {
    // new
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "test": "vitest",
    "test:coverage": "vitest run --coverage"
  },
```
