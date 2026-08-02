# Robiul Islam — Portfolio Website

A clean, light, single-page portfolio built with plain HTML/CSS/JS (no build step, no dependencies) — ready to publish on GitHub Pages.

## What's inside
```
index.html              → all page content
assets/css/style.css    → the "Soft Slate" design system (colors, type, layout)
assets/js/script.js     → mobile nav toggle + active-section highlighting
assets/images/profile.jpg → your headshot (from your document)
assets/cv/Robiul-Islam-CV.pdf → placeholder — replace with your real CV
```

## Before you publish — 2 things to update

1. **Replace the CV file.** Swap `assets/cv/Robiul-Islam-CV.pdf` with your real CV, keeping the same filename (or update the `href` in `index.html` under `.cv-btn` if you rename it).
2. **Check the GitHub username link.** The Contact/sidebar links point to `github.com/robiulislam35409` (taken from your project link). Update it in `index.html` if that isn't your GitHub username.

## How to publish on GitHub Pages

1. Create a new repository on GitHub — for a personal profile site, name it exactly:
   `your-username.github.io` (e.g. `robiulislam35409.github.io`)
   (You can also use any other repo name — it'll just publish at `your-username.github.io/repo-name` instead.)
2. Upload all the files in this folder to that repository (keep the folder structure — `assets/` must stay a subfolder).
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, branch: `main`, folder: `/ (root)`. Save.
5. Wait 1–2 minutes — your site will be live at `https://your-username.github.io/` (or `.../repo-name/`).

## Customizing later
- Colors: edit the `:root` variables at the top of `assets/css/style.css`.
- Sections/text: edit directly in `index.html` — each section is clearly commented (`<!-- ABOUT -->`, `<!-- PROJECT -->`, etc.).
- Add more projects: duplicate the `.project-card` block inside the `#project` section.
