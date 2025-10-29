# Next.js Starter Frontend

A production-ready Next.js starter template for frontend use cases with modern tooling and best practices out of the box. Built with TypeScript, Tailwind CSS, and Next.js App Router.

## ✨ Features

- ⚡ **Next.js 16** with App Router (latest stable)
  - 🚀 Turbopack (stable) - 5-10x faster Fast Refresh
  - 🔄 React Compiler Support (stable)
  - 🛠️ Enhanced Routing & Caching APIs
  - 🔍 Type-safe Routes with `typedRoutes` for better development experience
- 🎨 **Tailwind CSS** v4 with `tailwind-merge` for class composition
- 🌓 **Dark/Light Mode** with `next-themes`
- ✨ **Lucide Icons** for beautiful, consistent icons
- 🛠 **TypeScript** for type safety
- 🎯 **React 19.2** with:
  - 🆕 `<Activity />` component
  - ⚡ `cacheSignal` for optimized re-renders
  - 🚀 Performance Tracks for better optimization
- 🧩 **UI Components** with `class-variance-authority` for type-safe variants
- 🖼️ **Image Optimization** with `sharp`
- 🔍 **ESLint** and **Prettier** for code quality

## 🚀 Getting Started

### Prerequisites

- Node.js 22.x (LTS recommended)
- npm 11.x or later (included with Node.js)
- Git for version control

> **Note:** This project uses Next.js 16 with React 19.2, featuring Turbopack and React Compiler for optimal performance.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MrSaikatS/nextjs-starter-frontend.git
   cd nextjs-starter-frontend
   ```

2. Install dependencies (using Bun is recommended for faster installation):

   ```bash
   # Using Bun (recommended)
   bun install

   # Or using npm
   npm install

   # Or using pnpm
   pnpm install
   ```

3. Start the development server:

   ```bash
   # Using Bun (recommended for faster development)
   bun dev

   # Or using npm
   npm run dev

   # Or using pnpm
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Development

### Available Scripts

#### Using Bun (recommended)

- `bun dev` - Start the development server with Turbopack (5-10x faster)
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun test` - Run tests
- `bun prod` - Lint, build, and start production server

#### Using npm/pnpm

- `npm run dev` or `pnpm dev` - Start the development server
- `npm run build` or `pnpm build` - Build for production
- `npm start` or `pnpm start` - Start production server
- `npm run lint` or `pnpm lint` - Run ESLint
- `npm test` or `pnpm test` - Run tests
- `npm run prod` or `pnpm prod` - Lint, build, and start production server

## 🎨 Theming

This project uses `next-themes` for theme management. The default theme is set to `dark` but can be toggled using the theme toggle button in the header. The theming system supports both light and dark modes with smooth transitions between them.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)

---

Built with ❤️ by [Saikat Sardar](https://github.com/MrSaikatS)
