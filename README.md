# It-lia

## GitHub Pages deployment (Actions)

This repo deploys with `.github/workflows/deploy.yml`.

### Important trigger behavior
- Changing **Settings → Pages → Source** to **GitHub Actions** does **not** auto-run a deploy.
- A run starts only when:
  1. a new commit is pushed, or
  2. you manually run **Deploy to GitHub Pages** in the Actions tab.

### Full checklist when "GitHub Actions has no reaction"
1. **Actions enabled**
   - Settings → Actions → General → Allow all actions (or allow this workflow pattern).
2. **Workflow on default branch**
   - Ensure `.github/workflows/deploy.yml` exists on the repository default branch.
3. **Pages source**
   - Settings → Pages → Source = GitHub Actions.
4. **Push/manual trigger**
   - Push one commit after changing Pages source, or use workflow_dispatch in Actions.
5. **Repo permissions**
   - Workflow needs `pages: write` and `id-token: write` (already set in workflow).
6. **Environment rules**
   - If `github-pages` environment has protection rules, approve deployment when prompted.
7. **Branch protection / required checks**
   - Confirm no rule blocks workflow execution on your current branch.
8. **Actions policy at org level**
   - If this is an org repo, confirm org policies do not block Actions or reusable actions.

### Notes
- This workflow is configured to trigger on pushes to `main`/`master`/`work`, on pull requests (build only), and manual dispatch.
- Build output is uploaded from `./dist` and deployed via `actions/deploy-pages@v4`.
- PRs run build validation only; Pages deploy steps are skipped on PR events.

- Concurrency is configured to **not cancel in-progress deployments** (`cancel-in-progress: false`) to avoid automatic cancellation when GitHub Pages has queued requests.

### Environment protection rule compatibility
- The `deploy` job runs only on the default branch or `main`/`master`/`work`.
- Pushes from feature branches (for example `codex/...`) still run `build`, but `deploy` is intentionally skipped to avoid `github-pages` environment rejection.
- If you need deployment from another branch, update **Settings → Environments → github-pages → Deployment branches** to allow that branch pattern.


## File-structure parity with working repo
To match the proven working setup:
- `public/CNAME` is included so Vite copies custom-domain config into `dist/CNAME` during build.
- root `CNAME` is also kept for compatibility with branch-based Pages flows.
- `docs/CNAME` is included as a safety fallback for repos that have historically used `docs/` publishing.
- `.gitignore` is added to keep local build artifacts out of git.


### package-lock.json note
- If `package-lock.json` exists, workflow uses `npm ci` for deterministic installs.
- If lockfile is absent, workflow automatically falls back to `npm install` so build/deploy still works.
- For maximum reproducibility, commit `package-lock.json` from a machine that can access npm registry.


### Lockfile behavior in this repository
- `package-lock.json` is intentionally optional in this branch because CI supports both lockfile and no-lockfile installs.
- Workflow logic: `npm ci --include=dev` when lockfile exists, otherwise `npm install --include=dev`.
- If you want strict reproducible installs, commit a generated `package-lock.json` from your local environment.


### Codex PR update limitation (important)
- If a PR branch is updated outside Codex, Codex may return:
  `Codex does not currently support updating PRs that are updated outside of Codex.`
- In that case, create a **new PR** from the latest branch state instead of trying to update the old PR.
- Recommended flow:
  1. Sync branch with latest target branch changes.
  2. Open a new PR.
  3. Close/supersede the previous PR and link it in the new PR description.


### Vite config compatibility
- `vite.config.js` is intentionally plugin-free (no `@vitejs/plugin-react` import) to avoid module-resolution failures in CI.
- JSX is handled by Vite/esbuild in this project setup.
