# TYK.FILMS

Static portfolio site for TYK.FILMS: a single-page layout with a scroll-driven hero, photo gallery, and contact footer. There is no build step; the browser loads HTML, CSS, JavaScript, and media files directly.

## Who should read what

- **Editors updating copy, images, or links** — Start with [`WHERE-TO-EDIT.txt`](WHERE-TO-EDIT.txt). It points to the right file for common tasks without assuming coding experience.
- **Developers changing layout or animation** — Read the section comments in [`index.html`](index.html), [`css/site.css`](css/site.css), and [`js/hero-animation.js`](js/hero-animation.js). The hero scroll behavior depends on GSAP ScrollTrigger and the `#main-sequence` wrapper; renaming IDs or classes without updating the script will break the effect.

## Repository layout

| Path | Purpose |
|------|---------|
| [`index.html`](index.html) | Page structure, text content, image/video `src` attributes, section IDs used by in-page navigation (`#work`, `#about`, `#contact`). |
| [`css/site.css`](css/site.css) | All styling, including responsive rules at the bottom for small screens. |
| [`js/hero-animation.js`](js/hero-animation.js) | GSAP timeline for the pinned hero scroll (video growth, headline motion, panel transition). |
| [`WHERE-TO-EDIT.txt`](WHERE-TO-EDIT.txt) | Plain-language cheat sheet for non-technical editors. |
| `photo1.jpg` … `photo8.jpg` | Gallery assets (paths referenced in `index.html`). |
| `your-video.mp4` | Hero video (filename must match the `<source>` in `index.html` if you rename it). |
| [`package.json`](package.json) | Optional local preview server only; not required for production hosting. |

## Run locally (optional)

Node.js is used only to serve the folder during development (live reload on save).

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (defaults to [http://127.0.0.1:3000](http://127.0.0.1:3000)). `npm start` runs the same server.

You can also open `index.html` directly in a browser for a quick check, though some behaviors are nicer over `http://` (e.g. video autoplay policies).

## Deployment

The site is static. Host the repository root (where `index.html` lives) on any static host, for example GitHub Pages, Netlify, Vercel, or Cloudflare Pages. Keep the same relative paths (`css/`, `js/`, images, and video next to `index.html` or update paths consistently).

Do not commit `node_modules/`; it is listed in `.gitignore`. CI is not required for deployment.

## Tech notes

- **GSAP 3** and **ScrollTrigger** are loaded from CDN in `index.html`. The hero script runs on `window` `load` so layout is measured before the timeline is built.
- **Accessibility**: Gallery images use empty `alt` by default; replace with descriptive text in `index.html` when you have meaningful captions.

## License

All rights reserved unless the repository owner adds a different license file.
