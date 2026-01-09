# Arnob Banik — Portfolio

Personal portfolio built with React, Vite, and Tailwind CSS. Deployed on Vercel.

## Tech Stack
- React 18
- Vite 5
- Tailwind CSS 3
- Font Awesome (icons)

## Features
- Responsive layout with mobile/desktop navigation
- Hero, About, Experience, Education, Projects, Skills, Certifications, Publications, Awards, and Contact sections
- Smooth scroll navigation and back-to-top control
- Typing animation for role highlights

## Getting Started
Install dependencies:
```bash
npm install
```

Run locally:
```bash
npm run dev
```
Open http://localhost:5173/

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure
- `src/` — app entry and shared styles (`index.css`, `custom.css`)
- `src/components/` — page sections (Hero, About, Experience, Projects, Skills, etc.)
- `public/assets/` — static assets (profile image, icons)

## Customization
- Update text/content inside the components in `src/components/`.
- Adjust global styles/effects in `src/custom.css` or Tailwind config.
- Profile image: place your photo in `public/assets/` and update the path in the relevant component if you change the filename.

## Deployment
- Optimized for Vercel. The production output is generated in `dist/` by `npm run build`.

## Contact
Feel free to reach out at arnob.bnk@gmail.com or via LinkedIn.
