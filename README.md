# It-lia

## GitHub Pages deployment (Actions)

This repo deploys with `.github/workflows/deploy-pages.yml`.

### Important trigger behavior
- Changing **Settings → Pages → Source** to **GitHub Actions** does **not** auto-run a deploy.
- A run starts only when:
  1. a new commit is pushed, or
  2. you manually run **Deploy to GitHub Pages** in the Actions tab.

### Full checklist when "GitHub Actions has no reaction"
1. **Actions enabled**
   - Settings → Actions → General → Allow all actions (or allow this workflow pattern).
2. **Workflow on default branch**
   - Ensure `.github/workflows/deploy-pages.yml` exists on the repository default branch.
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
- This workflow is configured to trigger on **every push** plus manual dispatch.
- Build output is uploaded from `./dist` and deployed via `actions/deploy-pages@v4`.
