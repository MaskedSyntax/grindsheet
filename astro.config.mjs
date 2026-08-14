// @ts-check
import { defineConfig } from "astro/config";

/*
  Deployed to GitHub Pages as a project site, which serves from a subpath.
  `base` is overridable so the same build can go elsewhere (Vercel, a custom
  domain) at the root: BASE_PATH="" bun run build
*/
const base = process.env.BASE_PATH ?? "/grindsheet-ios";

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL ?? "https://maskedsyntax.github.io",
  base,
  trailingSlash: "ignore",
  devToolbar: { enabled: false },
});
