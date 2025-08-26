# College Website — React + Vite + Tailwind (Starter)

This starter matches a clean, modern version of a college/institute homepage.

## How to run (Windows/Mac/Linux)

1. Install **Node.js LTS** from https://nodejs.org (v18 or v20).
2. Open this folder in **VS Code**.
3. In the VS Code terminal, run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Where to edit content

- Navbar title: `src/components/Navbar.jsx`
- Notice items + Events: `src/data.js`
- Hero image + text: `src/components/Hero.jsx`
- Cards on the homepage: `src/components/FeatureCard.jsx` (used in `src/App.jsx`)
- Gallery images: `src/data.js`
- Footer contact details: `src/components/Footer.jsx`

## Build for production

```bash
npm run build
npm run preview
```

Then deploy the `dist/` folder to Netlify/Vercel/GitHub Pages.
