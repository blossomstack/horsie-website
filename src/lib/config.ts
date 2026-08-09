/** Central place for site-wide links and constants. */
export const SITE = {
  name: "horsie",
  tagline: "An open-source managed agent harness",
  githubUrl: "https://github.com/blossomstack/horsie",
  /**
   * The documentation site. It is built from `docs/` in the horsie repo and
   * deployed to its own Cloudflare Pages project, so that a behaviour change
   * and its documentation land in the same commit.
   */
  docsUrl: "https://docs.horsie.dev",
} as const;

/** Deep links into the docs, used by the nav and the landing page. */
export const DOCS = {
  quickstart: `${SITE.docsUrl}/start-here/quickstart/`,
  whatItIs: `${SITE.docsUrl}/start-here/what-horsie-is/`,
  deploying: `${SITE.docsUrl}/operating/deploying/`,
  localRuntime: `${SITE.docsUrl}/operating/local-runtime/`,
  cloudVendors: `${SITE.docsUrl}/operating/cloud-vendors/`,
  sessions: `${SITE.docsUrl}/using/sessions/`,
  workflows: `${SITE.docsUrl}/using/workflows/`,
  internals: `${SITE.docsUrl}/internals/sessions-and-durability/`,
} as const;
