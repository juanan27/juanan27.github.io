# juanan27.github.io

Personal website of **Juan Antonio Montalbán Vidal**, using the name **juamonvid**.
Static HTML, CSS and a small JavaScript file. No build step or dependencies.

## Pages

- `index.html`: introduction, profile block on the left, selected work and background.
- `research.html`: PINNs thesis, mathematical physics, Lean and research experience.
- `projects.html`: conversational BI, tennis analytics, industry projects and Lean.
- `cv.html`: education, professional experience, research and skills.
- `assets/documents/juan-antonio-montalban-vidal-cv.pdf`: original downloadable CV.
- `assets/css/style.css`: shared layout, responsive styles and print styles.
- `assets/js/main.js`: accessible mobile navigation and footer year.
- `assets/favicon.svg`: JM monogram.
- `.nojekyll`: serves the static files without Jekyll processing.

All internal URLs are relative so the site works at both a domain root and a
repository subpath. Navigation is available without JavaScript.

## Local preview

From the repository folder:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open <http://127.0.0.1:8000>. Stop the server with Ctrl+C.

## GitHub Pages

Website: <https://juanan27.github.io/>

Repository: <https://github.com/juanan27/juanan27.github.io>

The GitHub username remains `juanan27`. The repository name matches that
username so GitHub Pages serves the site at the domain root. The visible
site identity remains **Juan Antonio Montalbán Vidal / juamonvid**.

The previous repository name was `juamonvid.github.io`. Use the current
repository URL for Git remotes and the root website URL when sharing the site.

In the repository's **Settings → Pages**, select **Deploy from a branch**,
then **main** and **/(root)**. Pushes to `main` publish the static HTML files
and assets directly; no build dependencies are required.

See [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

## Content and maintenance

Biographical content was updated from the owner's supplied CV on 3 November
2026. The downloadable PDF is an unchanged copy of that document. Research
and industry experience are presented together, with detailed work on their
respective pages. Group projects and contributions are described as collaborative.

The MSc in Mathematics and its thesis remain ongoing, with the defence
scheduled for November 2026. Update these statements after the defence.
Warwick is an Erasmus+ exchange; Bonn is prior graduate study before transfer
to Seville, rather than a completed qualification.

The supplied CV contains no photograph. The introduction uses a typographic
monogram on the left until a portrait is supplied. Replace the monogram with
an image using the existing `portrait` class; add meaningful alternative text.
Fonts and visual assets are local; the layout needs no third-party requests.
Contact uses the email and GitHub profile supplied in the CV. No LinkedIn
URL or project repository has been inferred. The original PDF retains its
contact details.

## Editing

Edit content directly in the HTML pages. Keep the navigation and footer
consistent across all four pages; the active navigation link uses
`aria-current="page"`. Add projects as `article.project-detail` elements in
`projects.html`, with stable IDs for links from the homepage.

Colours and fonts are defined in `:root` in the stylesheet.
