import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('posts');
  return rss({
    title: 'Buzz’s Blog',
    description: 'A humble Astronaut’s guide to the stars',
    site: context.site || 'https://thenoughtyfox',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.subTitle,
      // Compute RSS link from post `slug`
      // This example assumes all posts are rendered as `/posts/[slug]` routes
      link: `/posts/${post.slug}/`,
    })),
  });
}
