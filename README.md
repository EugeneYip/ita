# It-lia

## Deployment

This project deploys to GitHub Pages through:
- `.github/workflows/deploy.yml`

### Structure (mirrors successful project pattern)
- Vite app entry: `index.html` + `src/main.jsx`
- App UI: `src/App.jsx`
- Build config: `vite.config.js`
- Package manifests: `package.json`, `package-lock.json`
- Domain files: `CNAME`, `public/CNAME`, `docs/CNAME`

### Workflow behavior
- Trigger: push on any branch + manual `workflow_dispatch`
- Node: v20 with npm cache enabled
- Install: `npm ci --include=dev` with fallback to `npm install --include=dev`
- Build: `npm run build`
- Deploy: `actions/deploy-pages@v4`

### Custom domain
This repository uses:
- `italia.eugeneyip.org`
