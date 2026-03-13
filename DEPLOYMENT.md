# Portfolio — Deployment Guide

## GitHub Pages Deployment

### 1. Update `vite.config.js`
Change the `base` to your actual GitHub repo name:
```js
base: '/your-repo-name/',   // e.g. '/portfolio/'
```

### 2. Create GitHub repository
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 3. Deploy
```bash
npm run deploy
```
This runs `npm run build` (Vite → `dist/`) then `gh-pages -d dist` to
push to the `gh-pages` branch automatically.

### 4. Enable GitHub Pages
- Go to **Settings → Pages** in your repo
- Set source: **Deploy from a branch → gh-pages → / (root)**

Your site will be live at:
`https://YOUR_USERNAME.github.io/portfolio/`

---

## Local Development
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Build for production
```bash
npm run build
npm run preview    # preview the production build locally
```

---

## Customization Checklist
- [ ] Replace `anthony@clarkoutsourcing.com` with real email in `Contact.jsx`
- [ ] Replace GitHub / LinkedIn URLs in `Hero.jsx`, `Navbar.jsx`, `Footer.jsx`
- [ ] Add real project screenshots → pass `image` prop in `ProjectGrid.jsx`
- [ ] Set correct `base` path in `vite.config.js`
- [ ] Wire up contact form to Formspree/EmailJS in `Contact.jsx`
