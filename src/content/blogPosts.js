/**
 * Add a new blog post by adding an entry here and creating a matching
 * folder in public/blog/articles/:
 *
 *   public/blog/articles/<slug>/article.md   - the article content
 *   public/blog/articles/<slug>/assets/...   - images/files used by that article only
 *
 * Reference images from the markdown with an absolute path, e.g.
 * ![alt text](/blog/articles/<slug>/assets/cover.svg)
 *
 * slug    - folder name under public/blog/articles/, also used in the URL: /blog/<slug>
 * title   - article heading shown on the list page and article page
 * intro   - short summary shown on the list page
 * date    - shown on the list page and article page (any display string)
 */
const blogPosts = [
  {
    slug: 'wires-to-a-working-game',
    title: "From Wires to a Working Game",
    intro:
      'How Rohan Built a Sort Game with Arduino',
    date: '25 July 2026',
  },
];

export default blogPosts;
