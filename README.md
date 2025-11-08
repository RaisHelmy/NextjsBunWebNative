# Bun Monorepo - Next.js + React Native + Shared Packages

A complete Bun-based monorepo featuring Next.js 15, Expo React Native, and shared TypeScript packages.

## 📁 Project Structure

```
my-monorepo/
├── apps/
│   ├── web/                    # Next.js 15 app with App Router
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── globals.css
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── next.config.js
│   │   ├── tailwind.config.js
│   │   └── postcss.config.js
│   │
│   └── native/                 # Expo React Native app
│       ├── App.tsx
│       ├── package.json
│       ├── tsconfig.json
│       ├── app.json
│       ├── babel.config.js
│       └── metro.config.js     # Configured for workspace support
│
├── packages/
│   ├── ui/                     # Shared React Native + React components
│   │   ├── src/
│   │   │   ├── Button.tsx      # Cross-platform button component
│   │   │   └── index.tsx
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── utils/                  # Shared TypeScript utilities
│       ├── src/
│       │   └── index.ts        # greet(), capitalize(), formatDate()
│       ├── package.json
│       └── tsconfig.json
│
├── package.json                # Root workspace configuration
├── tsconfig.json               # Root TypeScript config with project references
└── README.md
```

## 🚀 Features

- **Bun Workspaces**: Fast package management with `workspace:*` protocol
- **TypeScript Project References**: Incremental builds and better IDE support
- **Cross-Platform Components**: Shared UI components work in both web and native
- **Next.js 15**: Latest Next.js with App Router and Server Components
- **Tailwind CSS**: Utility-first CSS framework for web
- **Expo React Native**: Modern React Native development
- **Metro Configuration**: Properly configured for monorepo workspace imports

## 📦 Installation

```bash
# Install dependencies with Bun
bun install
```

This will install all dependencies across the monorepo using Bun's workspace feature.

## 🛠️ Development Commands

### Web App (Next.js)

```bash
# Start the Next.js development server
bun run dev

# Or run from the web app directory
cd apps/web
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Native App (Expo)

```bash
# Start the Expo development server
bun run start

# Or run from the native app directory
cd apps/native
bun run start

# For specific platforms:
bun run ios      # iOS simulator
bun run android  # Android emulator
bun run web      # Web browser
```

## 📚 Shared Packages

### @my-monorepo/ui

Cross-platform React components that work on both web and native.

```typescript
import { Button } from '@my-monorepo/ui';

<Button
  title="Click Me"
  onPress={() => console.log('Pressed!')}
  variant="primary"
/>
```

**Button Props:**
- `title` - Button text
- `onPress` - Click handler
- `variant` - 'primary' | 'secondary' | 'outline'
- `disabled` - Boolean flag

### @my-monorepo/utils

Shared TypeScript utility functions.

```typescript
import { greet, capitalize, formatDate } from '@my-monorepo/utils';

greet('Alice');              // "Hello, Alice! Welcome to the Bun monorepo."
capitalize('hello');         // "Hello"
formatDate(new Date());      // "January 8, 2025"
```

## 🔧 TypeScript Configuration

The monorepo uses TypeScript project references for:
- **Faster builds**: Only rebuild changed packages
- **Better IDE support**: Jump to source definitions
- **Type safety**: Ensure all packages are type-checked

To type-check all packages:

```bash
bun run type-check
```

## 📱 Metro Configuration (React Native)

The `apps/native/metro.config.js` is configured to:
1. Watch all files in the monorepo
2. Resolve workspace packages (`@my-monorepo/*`)
3. Support direct source imports for faster development

## 🏗️ Building for Production

### Web

```bash
cd apps/web
bun run build
bun run start  # Production server
```

### Native

```bash
cd apps/native
bun run build:ios     # iOS build
bun run build:android # Android build
```

## 🧪 Adding New Packages

1. Create a new directory in `packages/`
2. Add `package.json` with name `@my-monorepo/package-name`
3. Add `tsconfig.json` extending the root config
4. Add to root `tsconfig.json` references
5. Run `bun install` to link the package

## 📝 Notes

- **React Native Web**: The Next.js app uses `react-native-web` to render React Native components
- **Bun-first**: All scripts use Bun for maximum performance
- **No npm/yarn/pnpm**: This project exclusively uses Bun
- **Hot Reload**: Both web and native apps support hot module replacement

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

MIT
