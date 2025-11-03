# Tailwind CSS Integration Guide

This guide explains how to integrate `@teamsparkai/mcp-registry-ux` into a Tailwind CSS application, ensuring that package components use your application's Tailwind theme configuration (including dark mode support).

## How It Works

The `@teamsparkai/mcp-registry-ux` package does not pre-compile Tailwind CSS. Instead, it distributes:

1. **Compiled JavaScript/TypeScript files** (`dist/` directory) - Contains class name strings that Tailwind can scan
2. **CSS file with Tailwind utilities** (`input.css`) - Contains `@tailwind utilities` and custom `@layer` utilities that your Tailwind build will process

This design allows your application's Tailwind configuration to process both your application code and the package code, generating all styles using your theme configuration. This ensures package components automatically use your custom colors, spacing, typography, and any Tailwind plugins or extensions you've configured.

## Integration Steps

### Step 1: Install the Package

```bash
npm install @teamsparkai/mcp-registry-ux
# or
pnpm add @teamsparkai/mcp-registry-ux
# or
yarn add @teamsparkai/mcp-registry-ux
```

### Step 2: Configure Tailwind Content Paths

Add the package's `dist/` files to your Tailwind `content` configuration so Tailwind can scan them for class names:

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable class-based dark mode (recommended for React apps)
  darkMode: 'class', // or 'media' for system preference
  content: [
    // Your application files (adapt these to your project structure)
    // Examples (choose paths that match your app):
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // or for src-based projects: './src/**/*.{js,ts,jsx,tsx}',
    
    // Package dist files (REQUIRED - add exactly as shown)
    './node_modules/@teamsparkai/mcp-registry-ux/dist/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    // Your custom theme - applies to package components too!
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          900: '#0c4a6e',
        }
      },
      spacing: {
        '18': '4.5rem',
      },
      // ... other customizations
    },
  },
  plugins: [
    // Your Tailwind plugins - apply to package components too!
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
}
```

### Step 3: Import Package CSS

Import the package's CSS file **before** your `@tailwind` directives (CSS requires `@import` to come before other rules):

```css
/* app/globals.css or styles.css */

/* Import package CSS (must come before @tailwind directives due to CSS rules) */
@import '@teamsparkai/mcp-registry-ux/input.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Important:** The package's `input.css` file contains `@tailwind utilities` and custom `@layer` utilities (like `.masked-input`). It must be imported first due to CSS parsing rules, but the package CSS file itself includes the necessary `@tailwind utilities` directive, so Tailwind can process the `@layer utilities` block correctly.

### Step 4: Use Components

Import and use components normally. All styles will be generated using your Tailwind configuration:

```tsx
import { ServerList, ServerDetailView } from '@teamsparkai/mcp-registry-ux';

export default function MyPage() {
  return (
    <ServerList
      servers={servers}
      filteredServers={filteredServers}
      // ... other props
    />
  );
}
```

## Theme Integration

### How Your Theme Applies

When your Tailwind processes the build:

1. **Scans package dist files**: Finds all Tailwind class name strings in the compiled files (e.g., `className="bg-blue-500"`, `className="text-gray-900"`)

2. **Resolves using your theme**: Looks up values in your `tailwind.config.js`:
   - If you customized `blue-500`, package components use that value
   - If you customized spacing scale, package components use that scale
   - All your theme customizations apply to package components

3. **Generates single CSS file**: Creates one CSS output with:
   - Your application styles (using your theme)
   - Package styles (using your theme)
   - No duplicate classes
   - No conflicts

### Example

**Your `tailwind.config.js`:**
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3b82f6', // Your custom blue-500
          600: '#2563eb', // Your custom blue-600
        }
      }
    }
  }
}
```

**Package component uses:**
```tsx
<div className="bg-blue-500 text-blue-600">Content</div>
```

**Generated CSS uses your values:**
```css
.bg-blue-500 { background-color: #3b82f6; } /* Your custom value */
.text-blue-600 { color: #2563eb; } /* Your custom value */
```

## Tailwind Plugins and Extensions

Any Tailwind plugins or extensions you've configured in your `tailwind.config.js` will automatically apply to package components as well. For example:

- **Forms plugin**: If you use `@tailwindcss/forms`, package form elements will use those styles
- **Typography plugin**: If you use `@tailwindcss/typography`, package text elements will use those styles
- **Custom utilities**: Any custom utilities you've defined will be available to package components

## Dark Mode Support

The package components include full dark mode support using Tailwind's `dark:` variants. To enable dark mode:

1. Configure dark mode in your `tailwind.config.js`:
   ```javascript
   module.exports = {
     darkMode: 'class', // Enable class-based dark mode
     // ...
   }
   ```

2. Toggle the `dark` class on your root element (typically `<html>`) based on user preference:
   ```tsx
   // Example: Toggle dark mode
   document.documentElement.classList.toggle('dark');
   ```

All package components will automatically adapt to dark mode when the `dark` class is present on your root element.

## Benefits

✅ **Full Theme Compatibility** - Package components automatically use your theme values  
✅ **Dark Mode Support** - All components include dark mode variants  
✅ **No Conflicts** - Single CSS output with no duplicate class definitions  
✅ **Plugin Support** - Your Tailwind plugins apply to package components  
✅ **Maintainable** - You control all styling through your Tailwind config  

## Troubleshooting

### Classes Not Appearing

If package component classes are missing from generated CSS:

1. Verify package `dist/` path in `tailwind.config.js` `content` array (should be `./node_modules/@teamsparkai/mcp-registry-ux/dist/**/*.{js,jsx,ts,tsx}`)
2. Check that `dist/` directory exists in `node_modules/@teamsparkai/mcp-registry-ux/`
3. Ensure package CSS file is imported with `@import '@teamsparkai/mcp-registry-ux/input.css';`
4. Ensure Tailwind build is running (check build output)

### Theme Values Not Applying

If package is using default Tailwind values instead of your custom theme:

1. Verify your `tailwind.config.js` has custom theme in `theme.extend`
2. Check that package CSS is imported before your `@tailwind` directives
3. Verify Tailwind is processing package files (check for package classes in generated CSS)

### Package CSS Not Found

If you cannot import the package CSS file:

1. Verify package was installed correctly: `npm list @teamsparkai/mcp-registry-ux`
2. Check that `input.css` exists in `node_modules/@teamsparkai/mcp-registry-ux/`
3. Use correct import path: `@import '@teamsparkai/mcp-registry-ux/input.css';`

## Reference Implementation

This approach is similar to how [shadcn/ui](https://ui.shadcn.com/) integrates with Tailwind CSS. shadcn/ui components are installed as source code into your project and processed by your Tailwind configuration, ensuring full theme compatibility.

- **Repository**: [https://github.com/shadcn-ui/ui](https://github.com/shadcn-ui/ui)
- **Theming Documentation**: [https://ui.shadcn.com/docs/theming](https://ui.shadcn.com/docs/theming)
