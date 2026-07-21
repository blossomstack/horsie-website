/** Central place for site-wide links and constants. */
export const SITE = {
  name: "Horsie",
  tagline: "Self-hosted LLM agent sessions, from your browser",
  githubUrl: "https://github.com/blossomstack/horsie",
  docsUrl: "https://github.com/blossomstack/horsie/tree/main/docs/guide",
  /**
   * Portal (the hosted horsie app) URL.
   * TODO: portal deployment is undecided — update once it exists.
   */
  portalUrl: null as string | null,
} as const;
