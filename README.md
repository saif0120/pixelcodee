# Premium Developer Portfolio

A production-ready, fully responsive portfolio built with **React + Vite + Framer Motion**.
Dark/light themes, custom cursor, animated background, page transitions, and 9 routed pages.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

Build & preview production:

```bash
npm run build
npm run preview
```

---

## Make it yours (edit these first)

All content lives in **`src/data/`** — you rarely need to touch components.

| File | What it controls |
|------|------------------|
| `src/data/site.js` | Your name, role, bio, résumé link, hero taglines, socials, stats |
| `src/data/projects.js` | Project cards + case-study modal content |
| `src/data/skills.js` | Skills, levels, categories |
| `src/data/experience.js` | Work timeline |
| `src/data/education.js` | Education timeline |
| `src/data/certificates.js` | Certificate cards |

Other quick edits:

- **Brand name in nav/footer/loader** — `AR` monogram and "Alex Rivera" in
  `src/components/Navbar.jsx`, `Footer.jsx`, `Loader.jsx`.
- **Colors** — the accent gradient and both themes are CSS variables at the top of
  `src/index.css` (`--accent-1`, `--accent-2`, and the `[data-theme]` blocks).
- **Profile photo** — replace the `pravatar` URL in `src/pages/Home.jsx`.
- **Résumé** — drop `resume.pdf` into `public/` (the button already points to `/resume.pdf`).
- **SEO / social preview** — edit meta tags in `index.html`; add an `og-image.png`
  (1200×630) to `public/` and update the URLs.

---

## Contact form (EmailJS)

The form works out of the box in **demo mode** (simulated send). To send real email:

1. Create a free account at https://dashboard.emailjs.com
2. Add an email service + template with variables `from_name`, `from_email`, `message`.
3. Copy `.env.example` to `.env` and fill in:

```
VITE_EMAILJS_SERVICE_ID=xxxx
VITE_EMAILJS_TEMPLATE_ID=xxxx
VITE_EMAILJS_PUBLIC_KEY=xxxx
```

4. Restart the dev server. When all three are set, the form sends for real.
   In Vercel, add the same three variables under **Settings → Environment Variables**.

---

## Deploy to Vercel

**Option A — dashboard (easiest)**

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Vite. Framework preset: **Vite**,
   Build command `npm run build`, Output dir `dist`.
4. Add the three `VITE_EMAILJS_*` env vars (optional).
5. Deploy.

**Option B — CLI**

```bash
npm i -g vercel
vercel            # follow prompts
vercel --prod     # promote to production
```

`vercel.json` already handles SPA routing (so deep links like `/projects` don't 404)
and long-cache headers for hashed assets.

---

## Project structure

```
src/
├── animations/    # shared Framer Motion variants
├── components/    # Navbar, Footer, Cursor, Loader, cards, Button, Timeline…
├── context/       # ThemeContext (dark/light + persistence)
├── data/          # ← all editable content
├── hooks/         # useTypewriter, useScrollProgress
├── pages/         # Home, About, Skills, Projects, Experience, Education,
│                  #   Certificates, Contact, NotFound
├── utils/         # icon map
├── App.jsx        # routes + page transitions + shell
├── main.jsx       # entry
└── index.css      # design tokens + themes + base styles
```

## Notes on quality

- **Accessible**: keyboard-focusable, visible focus rings, `prefers-reduced-motion`
  respected, ARIA on nav/modal/form.
- **Fast**: route-level code splitting, lazy pages, separated vendor chunks,
  lazy-loaded images.
- **Responsive**: fluid type scale, tested layouts down to 360px.
