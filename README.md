# Next.js Starter Frontend

<div align="center">

<img src="public/favicon.ico" alt="Next.js Starter Frontend logo" width="72" height="72" />

<h1>Next.js Starter Frontend</h1>

<p>
  A production-ready Next.js starter template for modern frontend development.
  It comes pre-configured with the Next.js App Router, TypeScript, Tailwind CSS v4,
  shadcn/ui tooling, theming, code quality tools, and a clean project structure.
</p>

<p>
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-available-scripts">Scripts</a>
</p>

<p>
  <a href="https://github.com/MrSaikatS/nextjs-starter-frontend/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-16.3.2-000000?logo=next.js&logoColor=white" alt="Next.js 16.3.2" />
  <img src="https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react&logoColor=black" alt="React 19.2.8" />
  <img src="https://img.shields.io/badge/TypeScript-6.0.2-3178C6?logo=typescript&logoColor=white" alt="TypeScript 6.0.2" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.3.3-38BDF8?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4.3.3" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome" />
</p>

</div>

---

## 📖 Overview

`nextjs-starter-frontend` is a production-ready starting point for building modern frontend applications with **Next.js 16 and the App Router**.

The project combines a modern React stack with Tailwind CSS v4, shadcn/ui tooling, dark/light theming, TypeScript, ESLint, Prettier, and a clean source structure designed to make development easier from the start.

The goal is simple: **spend less time configuring your project and more time building your product.**

---

## ✨ Features

- ⚡ **Next.js 16** with the App Router
- 🚀 **Turbopack** through the standard Next.js development workflow
- 🧠 **React Compiler** enabled through Next.js configuration
- 🛣️ **Type-safe routes** with `typedRoutes`
- 🎨 **Tailwind CSS v4** for utility-first styling
- 🧩 **shadcn/ui tooling** with reusable UI primitives
- 🌓 **Dark / Light mode** with `next-themes`
- ✨ **Lucide React** icons
- 🛡️ **TypeScript** for type-safe development
- 🖼️ **Sharp** for Next.js image optimization
- 🔤 **Geist and Geist Mono** through `next/font`
- 🧹 **ESLint** for code quality
- 🪄 **Prettier** with Tailwind class sorting
- 🎯 Clean and scalable project structure
- 📦 Modern frontend dependencies with a focused configuration

---

## 🛠️ Tech Stack

| Area                  | Technology                    | Declared Version |
| --------------------- | ----------------------------- | ---------------- |
| Framework             | Next.js (App Router)          | `^16.3.2`        |
| UI                    | React / React DOM             | `^19.2.8`        |
| Language              | TypeScript                    | `^6.0.2`         |
| Styling               | Tailwind CSS                  | `^4.3.3`         |
| Tailwind Integration  | `@tailwindcss/postcss`        | `^4.3.3`         |
| UI Tooling            | `shadcn`                      | `^4.19.0`        |
| Animation Utilities   | `tw-animate-css`              | `^1.4.0`         |
| Theming               | `next-themes`                 | `^0.4.6`         |
| Icons                 | `lucide-react`                | `^1.34.0`        |
| Class Utilities       | `clsx`                        | `^2.1.1`         |
| Tailwind Utilities    | `tailwind-merge`              | `^3.6.0`         |
| Variants              | `class-variance-authority`    | `^0.7.1`         |
| UI Primitives         | `@base-ui/react`              | `^1.7.0`         |
| Image Processing      | `sharp`                       | `^0.35.3`        |
| Linting               | ESLint                        | `^9.39.3`        |
| Formatting            | Prettier                      | `^3.9.6`         |
| Tailwind Formatting   | `prettier-plugin-tailwindcss` | `^0.8.1`         |
| React Hooks Linting   | `eslint-plugin-react-hooks`   | `^7.1.1`         |
| Next.js ESLint Config | `eslint-config-next`          | `^16.3.2`        |
| React Compiler        | `babel-plugin-react-compiler` | `^1.0.0`         |
| Node Types            | `@types/node`                 | `^26.2.0`        |
| React Types           | `@types/react`                | `^19.2.18`       |
| React DOM Types       | `@types/react-dom`            | `^19.2.5`        |

---

## 📁 Project Structure

```text
nextjs-starter-frontend/
├── .github/
│   └── dependabot.yml
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header/
│   │   ├── Providers/
│   │   ├── shadcnui/
│   │   └── ThemeToggleButton.tsx
│   ├── hooks/
│   └── lib/
│       ├── fonts.ts
│       └── utils.ts
├── .gitignore
├── .prettierrc
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js `>=24.x.x`**
- **npm `>=11.x.x`**
- **Bun** or **npm** if you prefer an alternative package manager
- **Git**

The Node.js and npm requirements are declared in `package.json`.

### 1. Clone the repository

```bash
git clone https://github.com/MrSaikatS/nextjs-starter-frontend.git
cd nextjs-starter-frontend
```

### 2. Install dependencies

Choose any of the following package managers.

#### Bun

```bash
bun install
```

#### npm

```bash
npm install
```

#### pnpm

```bash
pnpm install
```

### 3. Start the development server

#### Bun

```bash
bun dev
```

#### npm

```bash
npm run dev
```

#### pnpm

```bash
pnpm dev
```

### 4. Open the application

Visit:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

The project defines the following scripts in `package.json`.

### Development

#### Bun

```bash
bun dev
bun run build
bun start
bun run lint
bun run prod
```

#### npm

```bash
npm run dev
npm run build
npm start
npm run lint
npm run prod
```

#### pnpm

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm prod
```

### Script Reference

| Script  | Description                                                            |
| ------- | ---------------------------------------------------------------------- |
| `dev`   | Start the development server                                           |
| `build` | Create a production build                                              |
| `start` | Start the production server                                            |
| `lint`  | Run ESLint                                                             |
| `prod`  | Run ESLint, create a production build, and start the production server |

### Quick Commands

#### Bun

```bash
# Development
bun dev

# Production build
bun run build

# Production server
bun start

# Lint
bun run lint

# Full production workflow
bun run prod
```

#### npm

```bash
# Development
npm run dev

# Production build
npm run build

# Production server
npm start

# Lint
npm run lint

# Full production workflow
npm run prod
```

#### pnpm

```bash
# Development
pnpm dev

# Production build
pnpm build

# Production server
pnpm start

# Lint
pnpm lint

# Full production workflow
pnpm prod
```

---

## 🎨 Theming

The project uses **`next-themes`** for theme management.

The application includes:

- 🌙 Dark mode
- ☀️ Light mode
- 🔄 Theme switching through the application UI

Theme-related implementation is located in:

```text
src/app/layout.tsx
src/components/ThemeToggleButton.tsx
src/app/globals.css
```

---

## ⚙️ Configuration

The project uses a focused set of configuration files.

### `next.config.ts`

The Next.js configuration currently enables:

- React Compiler
- Type-safe routes with `typedRoutes`

### `tsconfig.json`

Contains the project's TypeScript configuration and compiler settings.

### `components.json`

Contains the configuration used by the project's shadcn/ui tooling.

### `postcss.config.mjs`

Contains the PostCSS configuration used by the Tailwind CSS setup.

### `.prettierrc`

Contains the project's Prettier configuration.

### `eslint.config.mjs`

Contains the ESLint configuration used for code quality checks.

---

## 🖼️ Image Optimization

The project includes **Sharp** as a production image-processing dependency for Next.js image optimization.

A custom favicon is also included in the public assets:

```text
public/favicon.ico
```

---

## 🤝 Contributing

Contributions are welcome and appreciated.

### Contribution Workflow

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Run the lint and build checks.
5. Commit your changes.
6. Open a Pull Request.

Example:

```bash
git checkout -b feature/my-feature
```

Run validation before submitting:

```bash
npm run lint
npm run build
```

You can also use the equivalent commands with Bun or pnpm.

Please keep changes focused and follow the existing project conventions.

---

## 📄 License

This project is licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for more information.

---

## 🙏 Acknowledgments

This starter template is built with the help of excellent open-source tools and documentation:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

---

<div align="center">

Built with ❤️ by [Saikat Sardar](https://github.com/MrSaikatS)

</div>
