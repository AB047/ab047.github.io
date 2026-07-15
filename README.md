# ab047.github.io

Personal portfolio site for Atul Bharadwaj, served at [ab047.github.io](https://ab047.github.io).

## Stack

- **Next.js 15** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS v4** (CSS-first config in [src/app/globals.css](src/app/globals.css))
- **framer-motion** for scroll-in animations, **next-themes** for the light/dark toggle
- **@iconify/react** for skill/tech icons, **react-countup** + **react-intersection-observer** for the animated stats
- **particles.js** (vendored at [public/particles.js](public/particles.js)) for the interactive background
- Exported as a fully **static site** (`next build` with `output: 'export'`) — no server, no API routes, no database

## Project structure

```
src/app/
  page.tsx                 # composes every home page section, in order
  layout.tsx                # root layout: theme provider, particles background, header/footer, GA
  content/site-data.tsx     # ALL page copy lives here — the single source of truth
  components/
    home/                    # one folder per home page section (hero, about-me, experience, expertise,
                              #   tech-stacks, projects, achievements, insight, solution)
    layout/                  # header (nav, logo, theme toggle), footer
    contact-form/            # /contact page form (submits client-side to formsubmit.co)
    shared/particles-background/  # interactive canvas background (see below)
public/                     # static assets: images, favicons, resume.pdf, particles.js
legacy-site/                # the original static HTML/CSS/jQuery site this replaced — kept for history,
                              #   not built or served
```

**To update page content** (experience, education, skills, projects, certifications, stats, footer links),
edit [src/app/content/site-data.tsx](src/app/content/site-data.tsx) — every section component reads from
there instead of hardcoding copy.

## Interactive background

[src/app/components/shared/particles-background/index.tsx](src/app/components/shared/particles-background/index.tsx)
renders a fixed full-viewport `<div id="particles-js">` and loads `/particles.js` (Vincent Garreau's
[particles.js](https://vincentgarreau.com/particles.js/), MIT licensed) via `next/script`. Once the script
loads, `window.particlesJS('particles-js', config)` is called with a config that adapts dot/line color to
the active theme. Interactivity (`onhover: grab`, `onclick: push`) is set to `detect_on: 'window'`, so it
reacts to the mouse across the whole page even where foreground content sits on top of the canvas.

The Experience & Education timeline cards use a `.glass-card` utility (defined in `globals.css`) — a
CSS-only translucent/backdrop-blur treatment, not a WebGL library — so the particles are visible through
them.

## Local development

```bash
npm install --legacy-peer-deps   # legacy-peer-deps is required, see .npmrc
npm run dev                      # http://localhost:3000
npm run build                    # static export, output in ./out
```

`--legacy-peer-deps` is needed because the template pins React 18 while some dependencies declare newer
peer ranges; `.npmrc` already sets this as the default so plain `npm install` works too.

## Testing / visual verification

```bash
npm run test:e2e        # Playwright: page loads, sections render, no console errors, dark mode, contact form
node e2e/visual-audit.mjs   # scrolls the whole page (light + dark) and saves full-page screenshots to /tmp
                             # for manual visual review — run the dev server first
```

`e2e/site.spec.ts` boots the dev server itself (see `playwright.config.ts`) and is the regression check to
run after any change. `e2e/visual-audit.mjs` is for eyeballing layout/animation changes — it deliberately
scrolls step-by-step before screenshotting, since most sections use scroll-triggered (`useInView`)
fade-in animations that stay invisible in a naive instant screenshot even though the site isn't broken.

## Deployment

GitHub Pages only serves static files, so this repo builds a static export and publishes it to a
dedicated `gh-pages` branch via [.github/workflows/deploy.yml](.github/workflows/deploy.yml):

1. On every push to `master`, the workflow runs `npm ci` + `npm run build` (static export to `out/`).
2. `out/` is published to the `gh-pages` branch using `peaceiris/actions-gh-pages`.
3. GitHub Pages is configured (repo Settings → Pages) to serve from the `gh-pages` branch, not `master`.

`master` holds the Next.js source; `gh-pages` holds only the generated static site. You should never need
to touch `gh-pages` by hand — just push to `master` and the workflow rebuilds it.

## History

This site was converted from a static StyleShout ("Epitome") HTML/CSS/jQuery template to this Next.js app.
The original template files are preserved, untouched, in [legacy-site/](legacy-site/) for reference — they
are not part of the build.
