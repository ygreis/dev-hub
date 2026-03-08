# Dev Hub SPA

Public dev hub built as a single React SPA for portfolio landing pages and library-specific documentation.

## URL strategy

- Home: `https://ygreis.github.io/dev-hub/`
- Library home: `https://ygreis.github.io/dev-hub/lib/:slug`
- Library docs: `https://ygreis.github.io/dev-hub/lib/:slug/docs`
- Library examples: `https://ygreis.github.io/dev-hub/lib/:slug/examples`

## Stack

- Vite
- React + TypeScript
- React Router (`BrowserRouter`)
- Tailwind CSS
- shadcn/ui (Button, Card, Badge, Separator, Tabs)
- ESLint + Prettier

## Project structure

```text
src/
  app/router/router.tsx
  layouts/
    landing/
    library/
  pages/
    landing/
    library/
    misc/
  components/ui/
  projects/
    registry.ts
    intl-phone-js-core/
  styles/globals.css
```

## Local development

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` starts Vite dev server
- `npm run build` runs TypeScript build and generates static output in `docs/`
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint
- `npm run format` runs Prettier

## Build and deploy

- `vite.config.ts` uses:
  - `base: "/dev-hub/"`
  - `build.outDir = "docs"`
- GitHub Actions workflow at `.github/workflows/deploy.yml`:
  1. checkout
  2. install dependencies
  3. build
  4. deploy `docs/` to GitHub Pages

## SPA fallback for GitHub Pages

This project uses BrowserRouter with clean URLs. To support direct access and refresh on nested routes, it includes:

- `public/404.html` redirect script for unknown routes
- route restoration script in `index.html`

This keeps URLs without `#` while still working on GitHub Pages static hosting.

## Accessibility and theming

- Theme toggle is available in landing and library templates
- Default theme follows the operating system preference
- If OS preference cannot be detected, dark mode is used by default
- Library sidebar is collapsible on mobile, supports keyboard navigation, nested items, and search
- Pages include keyboard-friendly skip links to jump to main content
