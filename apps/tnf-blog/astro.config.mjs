import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';
import { remarkReadingTime } from './src/lib/utils/remarkReadingTime.mjs';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  outDir: '../../dist/apps/tnf-blog',
  integrations: [mdx(), react(), sitemap(), tailwind({
    configFile: fileURLToPath(new URL('./tailwind.config.cjs', import.meta.url))
  })],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
});
