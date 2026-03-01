# It-lia

## GitHub Pages deployment

This repository deploys via GitHub Actions using `.github/workflows/deploy-pages.yml`.

### Important behavior
- Switching **Pages Source** to **GitHub Actions** does **not** itself trigger a deploy run.
- A deploy happens when:
  1. You push a commit (now configured for all branches), or
  2. You manually trigger **Deploy to GitHub Pages** from the Actions tab (`workflow_dispatch`).

### Required repository settings
1. **Settings → Pages → Source**: `GitHub Actions`
2. **Settings → Actions → General**: Actions enabled for this repository
3. Push a commit (or run workflow manually)
