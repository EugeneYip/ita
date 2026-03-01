# It-lia

## Deployment

This project deploys to GitHub Pages through:
- `.github/workflows/deploy.yml`

### Structure (mirrors successful project pattern)
- Vite app entry: `index.html` + `src/main.jsx`
- App UI: `src/App.jsx`
- Build config: `vite.config.js`
- Package manifest: `package.json`
- Domain files: `CNAME`, `public/CNAME`, `docs/CNAME`

### Workflow behavior
- Trigger: push on any branch + manual `workflow_dispatch`
- Node: v20 with npm cache enabled
- Install: `npm install --include=dev`
- Build: `npm run build`
- Deploy: `actions/deploy-pages@v4`

### Custom domain
This repository uses:
- `italia.eugeneyip.org`


### Install strategy
- CI uses `npm install --include=dev` to avoid `npm ci` lockfile mismatch failures on merged branches.
- If you want strict lockfile installs later, regenerate and commit a full `package-lock.json` and switch workflow back to `npm ci`.
