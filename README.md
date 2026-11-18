<p align="center">
  <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
    <img src="/favicon.ico" alt="Project logo" width="64" height="56" />
  </a>
</p>

<h1 align="center">Next.js Starter Frontend</h1>

<p align="center">
  <strong>A high-performance, production-ready frontend starter template powered by Next.js 16, React 19, TypeScript, and Tailwind CSS v4.</strong>
</p>

<p align="center">
  <a href="https://github.com/MrSaikatS/nextjs-starter-frontend/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License: MIT" />
  </a>
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-16.4.6-black?style=flat-square&logo=next.js" alt="Next.js" />
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-19.3.1-blue?style=flat-square&logo=react" alt="React" />
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-6.0.3-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4.3.5-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-%3E%3D24.x-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node Version" />
  </a>
  <a href="https://github.com/MrSaikatS/nextjs-starter-frontend/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome" />
  </a>
</p>

<p align="center">
  <a href="#-key-features">Key Features</a> •
  <a href="#-tech-stack--dependencies">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-available-scripts">Scripts</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-contributing">Contributing</a> •
  <a href="#-author">Author</a>
</p>

---

## ⚡ Overview

**Next.js Starter Frontend** provides a robust, scalable architectural foundation for modern web applications. Pre-configured with the latest stable versions of Next.js 16 App Router, Turbopack, React 19 Compiler, Tailwind CSS v4, Base UI primitives, and shadcn/ui readiness — engineered for rapid development velocity and production reliability.

---

## ✨ Key Features

- ⚡ **Next.js 16 (App Router)**
  - 🚀 **Turbopack Engine**: 5–10× faster Fast Refresh and blazing development builds.
  - 🔄 **React Compiler**: Automatic fine-grained memoization without manual `useMemo` or `useCallback`.
  - 🛡️ **Typed Routes**: Compile-time route validation enabled via `typedRoutes`.
  - 📦 **Enhanced Caching & Layouts**: Server Components and streaming architecture out of the box.

- 🎨 **Tailwind CSS v4 & Styling**
  - Modern `@theme inline` CSS variable integration with zero configuration overhead.
  - Dynamic fluid animations via `tw-animate-css`.
  - Clean class composition using `clsx` and `tailwind-merge`.

- 🧩 **Component Architecture & UI Primitives**
  - **Base UI (`@base-ui/react`)**: Modern, accessible unstyled component primitives.
  - **shadcn/ui Compatible**: Configured with `base-nova` style and neutral color palette.
  - **Class Variance Authority (`cva`)**: Type-safe component variant declarations.
  - **Lucide Icons (`lucide-react`)**: High quality, tree-shakable SVG icon set.

- 🌓 **Adaptive Theming**
  - Seamless Dark/Light mode switching powered by `next-themes`.
  - SSR flicker-free theme initialization with custom toggle support.

- 🖼️ **Performance & Optimization**
  - **Sharp (`sharp`)**: Native image pipeline integration for optimized Next.js `<Image />` handling.
  - **Next Font**: Geist Sans and Geist Mono pre-configured for zero layout shift.

- 🛠️ **Code Quality & Developer Experience**
  - **TypeScript 6.0**: Strict type checking with clean path alias support (`@/*`).
  - **ESLint 9**: Flat config rules with `eslint-config-next` and React Hooks validation.
  - **Prettier 3**: Consistent automated formatting with Tailwind class sorting.

---

## 📦 Tech Stack & Dependencies

All dependencies are maintained up-to-date with validated compatibility:

### Core Runtime

| Package                                           | Version   | Purpose                                     |
| :------------------------------------------------ | :-------- | :------------------------------------------ |
| [**Next.js**](https://nextjs.org/)                | `^16.4.6` | React framework with App Router & Turbopack |
| [**React**](https://react.dev/)                   | `^19.3.1` | UI library with React Compiler support      |
| [**React DOM**](https://react.dev/)               | `^19.3.1` | DOM renderer for React                      |
| [**TypeScript**](https://www.typescriptlang.org/) | `^6.0.3`  | Type-safe JavaScript superset               |

### UI & Styling

| Package                                                         | Version   | Purpose                                 |
| :-------------------------------------------------------------- | :-------- | :-------------------------------------- |
| [**Tailwind CSS**](https://tailwindcss.com/)                    | `^4.3.5`  | Utility-first CSS framework (v4 engine) |
| [**@base-ui/react**](https://base-ui.com/)                      | `^1.9.0`  | Accessible unstyled UI primitives       |
| [**class-variance-authority**](https://cva.style/)              | `^0.7.1`  | Variant-driven component styles         |
| [**tailwind-merge**](https://github.com/dcastil/tailwind-merge) | `^3.7.0`  | Conflict-free Tailwind class resolution |
| [**clsx**](https://github.com/lukeed/clsx)                      | `^2.1.1`  | Conditional class name utility          |
| [**lucide-react**](https://lucide.dev/)                         | `^1.74.0` | Modern, clean icon library              |
| [**next-themes**](https://github.com/pacocoursey/next-themes)   | `^0.4.6`  | Theme management (light/dark mode)      |
| [**tw-animate-css**](https://github.com/animate-css)            | `^1.4.0`  | Tailwind-native animation utilities     |

### Tooling & Code Quality

| Package                                               | Version   | Purpose                             |
| :---------------------------------------------------- | :-------- | :---------------------------------- |
| [**Sharp**](https://sharp.pixelplumbing.com/)         | `^0.35.5` | High-performance image optimization |
| [**ESLint**](https://eslint.org/)                     | `^9.39.5` | Code analysis and linting engine    |
| [**Prettier**](https://prettier.io/)                  | `^3.10.1` | Opinionated code formatter          |
| [**babel-plugin-react-compiler**](https://react.dev/) | `^1.0.0`  | Compiler-level optimization plugin  |
| [**shadcn**](https://ui.shadcn.com/)                  | `^4.23.0` | Component scaffolding CLI tool      |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed in your local environment:

- **Node.js**: `24.x` or higher (LTS recommended)
- **Package Manager**: `npm` (>= 11.x), `pnpm` (>= 9.x), or `bun` (>= 1.2.x)
- **Git**: Installed and configured

### 1. Clone the Repository

```bash
git clone https://github.com/MrSaikatS/nextjs-starter-frontend.git
cd nextjs-starter-frontend
```

### 2. Install Dependencies

You can use any of your preferred package managers:

```bash
# Using Bun (fastest)
bun install

# Using npm
npm install

# Using pnpm
pnpm install
```

### 3. Start Development Server

```bash
# Using Bun
bun dev

# Using npm
npm run dev

# Using pnpm
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with live hot reload.

---

## 🛠️ Available Scripts

| Command         | Action                                                             |
| :-------------- | :----------------------------------------------------------------- |
| `npm run dev`   | Launches development server with Turbopack fast refresh            |
| `npm run build` | Compiles and builds production-optimized bundle                    |
| `npm run start` | Boots the Next.js production server locally                        |
| `npm run lint`  | Executes ESLint to check for syntax and style issues               |
| `npm run prod`  | Production pipeline: runs linter, builds bundle, and starts server |

_(You can prefix commands with `pnpm` or `bun` respectively)_

---

## 📂 Project Structure

```text
nextjs-starter-frontend/
├── .github/                 # GitHub workflows & Dependabot configuration
├── public/                  # Static assets
│   ├── favicon.ico          # Project favicon
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # Tailwind v4 configuration & theme variables
│   │   ├── layout.tsx       # Root layout with fonts & ThemeProvider
│   │   └── page.tsx         # Starter landing page
│   ├── components/          # Reusable UI components
│   │   ├── Header/          # Application header bar
│   │   ├── Providers/       # Theme & client context providers
│   │   ├── shadcnui/        # shadcn UI components directory
│   │   └── ThemeToggleButton.tsx # Light/Dark mode switcher
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Shared utilities
│       ├── fonts.ts         # Geist font definitions
│       └── utils.ts         # Tailwind cn helper function
├── components.json          # shadcn/ui configuration
├── eslint.config.mjs        # ESLint flat config
├── next.config.ts           # Next.js configuration (Turbopack, compiler)
├── package.json             # Manifest and dependencies
├── postcss.config.mjs       # PostCSS plugins
└── tsconfig.json            # TypeScript strict configurations
```

---

## 🎨 Theme & Styling Configuration

The starter uses `next-themes` wrapped in `src/components/Providers/ThemeProvider.tsx`:

- **Default Theme**: Dark (no system preference fallback)
- **Attribute**: `class` (toggled via `.dark` selector)
- **Tailwind Variables**: Defined in `src/app/globals.css` with semantic color naming (`background`, `foreground`, `primary`, `muted`, etc.).

---

## 🤝 Contributing & Pull Requests

Contributions, feature proposals, and bug reports are warmly welcome!

1. **Fork** the repository
2. **Create** your feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Validate** your changes locally:
   ```bash
   npm run lint
   npm run build
   ```
4. **Commit** your changes following standard conventional commits:
   ```bash
   git commit -m "feat: add awesome feature"
   ```
5. **Push** to the branch:
   ```bash
   # Add your fork as a remote and push to it
   git remote add fork https://github.com/YOUR_USERNAME/nextjs-starter-frontend.git
   git push fork feature/amazing-feature
   ```

---

## 📄 License

This project is open-source and distributed under the **MIT License**. See the [LICENSE](LICENSE) file for complete details.

---

## 👤 Author

<p align="center">
  <a href="https://github.com/MrSaikatS" target="_blank" rel="noopener noreferrer">
    <img src="https://github.com/MrSaikatS.png?size=150" width="96" height="96" alt="Saikat Sardar" style="border-radius: 50%;" />
  </a>
</p>

<p align="center">
  <strong>Saikat Sardar</strong><br />
  <em>Crafted with care & maintained for modern web development.</em>
</p>

<p align="center">
  <a href="https://github.com/MrSaikatS" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/GitHub-@MrSaikatS-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile" />
  </a>
  &nbsp;
  <a href="https://github.com/MrSaikatS/nextjs-starter-frontend" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Repository-nextjs--starter--frontend-2563EB?style=for-the-badge&logo=git&logoColor=white" alt="Repository" />
  </a>
</p>

---

<p align="center">
  ⭐ <strong>Found this template helpful?</strong> Give it a star on GitHub to support ongoing maintenance!
</p>

<p align="center">
  <a href="https://github.com/MrSaikatS/nextjs-starter-frontend/stargazers" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/github/stars/MrSaikatS/nextjs-starter-frontend?style=social" alt="Star on GitHub" />
  </a>
</p>
