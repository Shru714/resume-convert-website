# Resume — Shruti Teli

This is a simple static resume website for Shruti Teli. It is a single HTML file with supporting CSS and JS.

Files:
- `index.html` — main page (open in browser)
- `styles.css` — styling and print-friendly rules
- `script.js` — small script for "Download PDF" (calls window.print())
- `assets/profile.svg` — small profile SVG

How to view locally

1. Open `index.html` in your browser (double-click or right-click → Open with).

Optional: Serve locally (recommended when testing links)

PowerShell example:

```powershell
# in the project folder
python -m http.server 8000
# then open http://localhost:8000
```

Node/npm (recommended)

1. Install dependencies (requires Node.js & npm):

```powershell
npm install
```

2. Start a local static server and open http://localhost:8000:

```powershell
npm start
```

Deploy

- You can host this on GitHub Pages by creating a repo and pushing these files, then enabling Pages from the repo settings.
- Or drop onto Netlify / Vercel as a static site.

Notes

- The "Download PDF" button triggers the browser print dialog. Use "Save as PDF" in the print dialog to save.
- If you want an automated PDF download without user interaction, I can add a client-side library (html2pdf) or create a server-side PDF generator. Let me know which you prefer.
