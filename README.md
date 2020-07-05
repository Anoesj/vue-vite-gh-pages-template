# Vue 3, Vite & GitHub Pages hosting template
## What is it?
It's a setup with:
- Dev server: [Vite](https://github.com/vitejs/vite).
- Framework: [Vue 3](https://github.com/vuejs/vue-next) (with [Vue Router Next](https://github.com/vuejs/vue-router-next)).
- Hosting: [GitHub Pages](https://pages.github.com/) with a crawler-proof SPA hack (no SEO penalties).
- Automated deployments using [GitHub Actions](https://github.com/features/actions).
- [pnpm](https://github.com/pnpm/pnpm) for managing Node.js packages. Why? Because it's strict, secure and faaaast 🚀.
  - Recommended, but optional. If you prefer `npm`, just replace `pnpm` with `npm` in the `"scripts"` in `package.json`.

## How does it work?
Builds will be made automatically after pushing to `master`, using a GitHub Actions workflow. They will also be deployed to GitHub Pages automatically, by pushing them to the `gh-pages` branch. All _you_ need to do is setup GitHub Pages on your repository.

Just create a new repository using this template and you can start working immediately. Vue Router Next is also installed. An example of preloading dynamically imported route components on link hover is also present.

![DeployBot](https://github.com/anoesj/vite-test/workflows/DeployBot/badge.svg)
