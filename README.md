# Robiul Islam — Portfolio Website

A clean, light, single-page portfolio built with plain HTML/CSS/JS (no build step, no dependencies) — ready to publish on GitHub Pages. Layout follows a sidebar-nav, single-scroll academic/professional portfolio pattern: fixed left navigation, a hero profile card, a quick "stats" strip, a colour-accented timeline for Education, and card/chip based sections for Experience, Project, Recognition, Skills and Contact.

## What's inside
```
index.html              → all page content
assets/css/style.css    → the "Soft Slate" design system (colors, type, layout)
assets/js/script.js     → mobile nav toggle + active-section highlighting
assets/images/profile.jpg → your headshot (from your document)
assets/cv/Robiul-Islam-CV.pdf → placeholder — replace with your real CV
```

## What's new in this version
- **About — Snapshot stats row:** four quick stat cards (MBA CGPA, BBA CGPA, ACCA progress, FinXcel ranking) under the About copy, echoing a citation/highlights strip.
- **Education — timeline redesign:** each degree now sits on a connected vertical timeline with a colour-accented marker dot, a pill-style date badge, a short description of the programme, and a **"Competencies Gained"** row of tag chips (e.g. Financial Statement Analysis, Auditing & Assurance, Business Research Methods for the MBA) so recruiters can scan what each qualification actually built, not just the grade.

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
