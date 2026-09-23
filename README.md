# Sabrin Alam — Personal Portfolio

A modern, responsive AI-focused student portfolio built for a university assignment.

## Technologies
- HTML5
- CSS3
- Vanilla JavaScript

No React, Tailwind, Bootstrap, jQuery, Node.js, npm, Vite, or build process is required.

## Features
- Responsive mobile/tablet/desktop layout
- Purple + sky-blue AI-inspired visual identity
- Glassmorphism, gradients, glow effects and CSS illustrations
- Sticky navigation
- Mobile hamburger navigation
- Dark/light theme with localStorage persistence
- Active navigation while scrolling
- Smooth scrolling
- IntersectionObserver scroll-reveal animations
- Contact form validation with success/error feedback
- Accessible labels, focus states and semantic sections

## Folder Structure
```text
Sabrin-Alam-Portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
├── images/
│   └── profile.jpg
└── assets/
```

## How to Run
1. Download/extract the project.
2. Open the folder in VS Code.
3. Open `index.html` in a web browser.
4. No npm installation or build command is required.

For the easiest development workflow, you may optionally use the VS Code Live Server extension, but it is not required.

## Replace Profile Picture
Put your own image at:
`images/profile.jpg`

Keep the filename `profile.jpg`, or update the `<img>` path in `index.html`.

If the image is missing, the website automatically shows a CSS placeholder instead of a broken-image icon.

## Replace Social Links
Search in `index.html` for:
- `YOUR_LINKEDIN_URL`
- `YOUR_GITHUB_URL`
- `YOUR_EMAIL`

Replace them with your actual details.

## Edit Research
The research cards intentionally contain placeholders because verified paper titles, conference names, authors, years, and links were not supplied in the assignment brief. Replace:
- `[Research Paper Title]`
- `[Conference/Journal]`
- `[Year]`
- `[Authors]`
- `[Publication Link]`

Do not add invented publication information.

## Edit Projects
Project names/descriptions are already included from the assignment brief. Technology tags can be edited directly in `index.html`.

## Certificate
Replace `CERTIFICATE_LINK` in `index.html` with the real certificate URL.

## JavaScript
All interactive behavior is in `script.js`:
- theme toggle
- localStorage
- mobile menu
- active navigation
- scroll reveal
- contact form validation
- current year

## Academic Note
The implementation intentionally uses plain HTML5 + CSS3 + JavaScript so the source can be opened, understood, edited and demonstrated directly in VS Code.
