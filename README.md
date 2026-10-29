# Anuj Singh — Developer Portfolio

A responsive, dark portfolio for a Laravel / PHP web developer. Built with plain HTML, CSS, and JavaScript. No backend, build step, database, account, or paid hosting is required to run it.

## Features and technologies

- Sticky navigation, accessible mobile menu, skip link, keyboard focus states, and reduced-motion support.
- Resume-based experience, skills, services, development process, and contact details.
- Filterable projects with native, keyboard-accessible details dialogs.
- Lightweight CSS illustrations: no external fonts, image services, or runtime libraries.
- Working PDF download, email and phone links. Social links appear when configured.
- SEO title, description, keywords, Open Graph text metadata, and SVG favicon.
- Relative paths support local files, GitHub Pages project sites, and a future custom domain.

## Files

```text
portfolio/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/data.js         # Main content editor
│   ├── js/script.js       # Rendering and interactions
│   ├── images/favicon.svg
│   └── resume/Anuj-Singh-Resume.pdf
├── .gitignore
├── .nojekyll
└── README.md
```

`.tools/` contains local verification utilities and is ignored by Git. It is not part of the website and must not be uploaded through GitHub's manual file upload.

## Run locally

Open `index.html` directly in Chrome, Edge, Firefox, or Safari. No installation is needed. With WAMP running, you can also visit `http://localhost/portfolio/`. WAMP is optional; the portfolio does not use PHP.

## Edit your content

Open `assets/js/data.js`. The `window.PORTFOLIO` object holds:

| Field | What to update |
| --- | --- |
| `name`, `role`, `years` | Professional identity and experience |
| `email`, `phone`, `location` | Contact information; set phone to `''` to hide it |
| `github`, `linkedin` | Full HTTPS profile links; GitHub is still empty, LinkedIn is configured |
| `resume` | Relative PDF path |
| `about`, `education` | Summary and education |
| `skills` | Skill categories and labels |
| `experience` | Companies, dates, roles, responsibilities, and current status |
| `projects` | Project descriptions, contributions, technology, highlights, URLs |
| `services`, `process` | Services and working process |

Save the file and reload the browser. Use quotes around strings and commas between items. Escape apostrophes inside single-quoted strings, or use double quotes for those strings. Keep `index.html` title, metadata, hero text, and no-JavaScript fallback aligned when changing identity or positioning. Colors, typography, layout, and responsive breakpoints live in `assets/css/style.css`.

### Add a project

Copy an existing object inside `projects`, or use this example:

```js
{
  name: 'Your actual project',
  category: 'Web applications', // Or 'E-commerce'
  type: 'api', // commerce, dashboard, website, network, or api
  label: 'BACKEND DEVELOPMENT',
  description: 'What the project does.',
  role: 'Describe only your own contribution.',
  technologies: ['Laravel', 'PHP'],
  features: ['A verified feature', 'Another verified feature'],
  live: '',
  github: ''
},
```

Empty project links display an unavailable label, not a fake button. If you add a category, add a matching filter button in `index.html`. All project preview panels are CSS illustrations, not screenshots or evidence of a client's actual interface. The five initial projects and their domain links come from the supplied resume; external site availability and current ownership are not verified. The portfolio describes contributions, not sole authorship. Check these links before publishing.

### Resume and social links

Replace `assets/resume/Anuj-Singh-Resume.pdf` with your updated PDF, or change `resume` to the new relative filename. All download links update together. Set `github` and `linkedin` to your actual profile URLs to reveal those links in Contact. No profiles were invented. The email button opens a mail app; there is no contact form or backend submission.

## Upload to GitHub

Create an empty **public** GitHub repository named `portfolio`. Do not initialize it with another README. In PowerShell from this directory, replace `YOUR_GITHUB_REPOSITORY_URL` with your repository HTTPS URL and run:

```powershell
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Authenticate to your own GitHub account when Git asks. Example remote: `https://github.com/YOUR_USERNAME/portfolio.git`. If Git asks for your identity, configure `git config user.name "Your Name"` and `git config user.email "your GitHub email"`, then retry the commit. If a remote already exists, inspect `git remote -v` before changing it.

Alternatively, use GitHub's **Add file → Upload files** and upload the website files, preserving the `assets/` structure. Exclude `.tools/` and `node_modules/`.

## Enable GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/(root)**, then **Save**.
4. Wait for deployment to finish. The Pages settings will show the published URL, normally `https://YOUR_USERNAME.github.io/portfolio/`.
5. Open the published site and test navigation, project details, contact links, and the PDF download.

See [GitHub's publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). The included `.nojekyll` keeps deployment as plain static files. This project has not been pushed or deployed automatically.

To publish later updates:

```powershell
git add .
git commit -m "Update portfolio content"
git push
```

## Add a custom domain later

The same site can stay on GitHub Pages when you buy a domain; paid hosting is optional. Add your domain in **Settings → Pages → Custom domain**, then configure the DNS records at your domain provider using [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). Follow the appropriate apex-domain or subdomain instructions, wait for DNS and certificate provisioning, then enable **Enforce HTTPS** when available. GitHub creates a `CNAME` file for branch publishing; pull that change before making further local commits. Do not create a `CNAME` until you have an actual domain.

If you move to another static hosting provider, upload `index.html` and `assets/` together. Relative links need no rewriting. Once your final public URL is known, add an absolute canonical URL and `og:url` to the HTML head; optionally add an absolute `og:image` URL for a social preview image.

## Before publishing

- Review `assets/js/data.js`: confirm current employment, experience wording, contacts, skills, project domains, and contributions. The brief specifies **3+ years**; the resume summarizes **3 years**, with listed employment beginning December 2023. Adjust the displayed total to your preferred accurate wording, including training if applicable.
- Add your GitHub profile URL if you want it displayed. LinkedIn is configured from the supplied URL.
- Confirm the supplied resume is the version you want visitors to download.
- Update `index.html` metadata if you change your professional positioning.
- Keep only project/client details you intend to publish.

## Validation

Browser checks cover widths of 1920, 1440, 1024, 768, 480, and 375 pixels; horizontal overflow; internal navigation targets; mobile menu open/close; project filtering; project dialog and Escape behavior; and JavaScript runtime errors. The site also works directly from a `file://` URL without any backend. External project services are outside this site's control.
