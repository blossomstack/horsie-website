export interface DocPage {
  slug: string;
  title: string;
  content: string;
}

/**
 * Markdown docs live in src/content/docs/. Vite inlines them at build time.
 * To add a page: drop a <slug>.md file there and register it in DOC_ORDER.
 */
const rawDocs = import.meta.glob<string>("../content/docs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const DOC_ORDER: { slug: string; title: string }[] = [
  { slug: "introduction", title: "Introduction" },
  { slug: "quickstart", title: "Quickstart" },
  { slug: "architecture", title: "Architecture" },
];

export const docs: DocPage[] = DOC_ORDER.map(({ slug, title }) => ({
  slug,
  title,
  content: rawDocs[`../content/docs/${slug}.md`] ?? "",
}));

export function getDoc(slug: string): DocPage | undefined {
  return docs.find((doc) => doc.slug === slug);
}
