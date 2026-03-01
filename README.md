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
- Install: `npm ci --include=dev`
- Build: `npm run build`
- Deploy: `actions/deploy-pages@v4`

### Custom domain
This repository uses:
- `italia.eugeneyip.org`


### Install strategy
- CI uses `npm ci --include=dev` with committed `package-lock.json` for deterministic installs.


### CI lockfile mismatch prevention
- `package-lock.json` is now committed and kept in sync with `package.json`.
- Workflow uses `npm ci --include=dev` + `cache: npm` for reproducible installs.
