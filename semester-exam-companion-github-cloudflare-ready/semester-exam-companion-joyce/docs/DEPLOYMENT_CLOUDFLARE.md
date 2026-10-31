# Publish privately sourced app to a public website

## Recommended: GitHub private repository + Cloudflare Pages

This separation lets the **source repository stay private** while the deployed site is public. Cloudflare Pages supports Git integration with private GitHub repositories. See the official [Cloudflare Pages Git integration guide](https://developers.cloudflare.com/pages/get-started/git-integration/).

### 1. Create the repository

In your GitHub account (`immanuel1409`), create a **private** repository named `semester-exam-companion-joyce`. Do not put it inside or merge it with another project. The currently available GitHub connection in this environment can work with repositories and files but does not expose the create-repository action, so repository creation must be completed in GitHub's UI: [Create a new GitHub repository](https://github.com/new). Choose Private.

Upload the contents of this project folder to the repository root (not the parent folder). The `index.html`, `assets/`, `data/`, `docs/`, `scripts/`, `package.json` and other project files should be at the repository root.

### 2. Connect Cloudflare Pages

1. Open [Cloudflare Workers & Pages](https://dash.cloudflare.com/).
2. Choose **Create application → Pages → Connect to Git**.
3. Authorize Cloudflare's GitHub integration and restrict access to this repository if offered.
4. Select `immanuel1409/semester-exam-companion-joyce`.
5. Use these build settings:
   - **Production branch:** `main`
   - **Framework preset:** None / no framework
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (repository root)
6. Save and deploy. Cloudflare should provide a public `*.pages.dev` URL when a deployment succeeds.

The build script intentionally publishes only the runtime files to `dist/`, rather than the project documentation, test scripts, source timetable image or CSV. This does not make client-side JavaScript secret: a visitor can still inspect downloaded JavaScript.

### 3. Verify the deployment

- Open the generated Cloudflare Pages URL on a phone.
- Check that the app loads styles and scripts, the 11 exam entries display, and countdown/status reflects Africa/Lagos time.
- Export the `.ics` file and import it into the chosen calendar app. Confirm alerts and notification permissions.
- Push future changes to `main`; Cloudflare's Git integration will redeploy.

## Alternative: GitHub Pages

GitHub Pages on GitHub Free requires a public source repository. This project is intended to keep the source private, so Cloudflare Pages is the recommended route. GitHub's official documentation states that Pages is available for public repositories on GitHub Free, and private repositories for certain paid plans: [What is GitHub Pages?](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

## Privacy and the final-message surprise

The initial visible interface does not hint at the special after-exam celebration. However, this is a static, client-side app. The celebration text is inside the JavaScript shipped to the browser and can be discovered by a technically curious visitor. A true content-secret reveal would require server-side logic or a backend service to release the message only after the scheduled time.
