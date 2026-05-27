# Ray XX TT Portfolio

English single-page portfolio for a game technical animator / character rigger, built with Vite, React, and TypeScript for `XIONGTAO-1.github.io`.

## Local Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm test
npm run build
```

## Content Updates

- Edit profile, contact, resume, and reel links in `src/data/profile.ts`.
- Edit project cards and detail panels in `src/data/projects.ts`.
- Replace thumbnail placeholders in `public/media/`.
- Replace `public/Ray-XX-TT-Resume.pdf` with the final resume PDF before publishing.

Video fields expect embeddable URLs:

- YouTube: `https://www.youtube.com/embed/<video-id>`
- Vimeo: `https://player.vimeo.com/video/<video-id>`

## GitHub Pages

This repository is configured for GitHub Pages via `.github/workflows/deploy.yml`. Push to `main`, then set Pages source to **GitHub Actions** in the repository settings if it is not already selected.
