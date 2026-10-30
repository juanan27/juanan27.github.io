# juanan27.github.io

Personal site of Juan Antonio Montalbán Vidal, served by GitHub Pages at
<https://juanan27.github.io>.

Plain HTML + CSS, no build step: whatever is on the `main` branch is the live site.

## Files

```
index.html            all page content
assets/css/style.css  styles (colors are the variables at the top)
assets/js/main.js     mobile menu, active nav link, footer year
assets/favicon.svg    browser tab icon
.nojekyll             tells GitHub Pages to serve files as-is
```

## Editing

- **Fill in placeholders:** anything with `class="todo"` shows up highlighted
  in amber. Replace the content, then delete the `todo` class.
- **Add a project:** copy one `<article class="card">` block in `#projects`.
- **Add a section:** copy the template at the bottom of `<main>` in
  `index.html`, give it a new `id`, and add a matching link to the nav.
- **Change colors:** edit the variables in `:root` at the top of `style.css`
  (the second block is dark mode).
- **Add a CV:** drop `cv.pdf` in the repo root and point the CV button at
  `cv.pdf`.

## Preview locally

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish

```bash
git add -A
git commit -m "Update site"
git push
```

GitHub Pages redeploys in about a minute.
