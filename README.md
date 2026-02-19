# Serenity Yoga -- Static Website

A static website for a yoga business offering aerial restorative classes, restorative yoga, and guided meditation.

## Tech Stack

- **HTML** -- semantic markup, no templating engine
- **CSS** -- plain CSS with custom properties (variables) for theming; no frameworks or preprocessors
- **JavaScript** -- vanilla JS (~125 lines) for the mobile menu, review carousel, and contact form; zero dependencies
- **Google Fonts** -- Cormorant Garamond (headings) and Inter (body text); the only external resource

No build step, no package manager, no bundler.

## Project Structure

```
public/
  site/
    index.html    -- the full website (single page)
    styles.css    -- all styles
    script.js     -- mobile menu, review carousel, contact form
  images/
    hero-aerial.jpg   -- hero section background
    instructor.jpg    -- about/teacher photo
    restorative.jpg   -- offerings section photo
```

## Sections

| Section      | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| **Hero**     | Full-screen image with headline and call-to-action buttons                 |
| **Intro**    | Short philosophy statement about the classes                               |
| **About**    | Personal introduction with instructor photo and credentials                |
| **Classes**  | Weekly schedule of four publicly bookable classes with details              |
| **Offerings**| Three-card grid: aerial restorative, restorative yoga, private sessions    |
| **Reviews**  | Testimonial carousel with five student reviews                             |
| **Contact**  | Contact form (name, email, subject, message) with studio details           |
| **Footer**   | Branding, quick links, and copyright                                       |

## How to Run Locally

Open the HTML file directly in a browser:

```bash
open public/site/index.html
# or on Linux
xdg-open public/site/index.html
```

Or use any simple local server:

```bash
cd public/site
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Hosting on GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings > Pages**.
3. Set the source to **Deploy from a branch**, select the branch (e.g. `main`), and set the folder to `/public/site` (or move the files to the repo root).
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

No build command or CI pipeline is needed.

## How to Edit Content

- **Text and layout** -- edit `index.html` directly. Each section is clearly labelled with HTML comments (`<!-- HERO -->`, `<!-- ABOUT -->`, etc.).
- **Class schedule** -- update the class cards inside the `<!-- CLASSES -->` section in `index.html`.
- **Reviews** -- edit the `reviews` array at the top of `script.js`.
- **Images** -- replace the JPGs in the `images/` folder, keeping the same filenames (or update the `src` attributes in the HTML).
- **Colours** -- all colours are defined as CSS custom properties at the top of `styles.css` under `:root`. Change them there to retheme the whole site.
- **Fonts** -- swap the Google Fonts `<link>` in `index.html` and update the `--font-serif` / `--font-sans` variables in `styles.css`.
