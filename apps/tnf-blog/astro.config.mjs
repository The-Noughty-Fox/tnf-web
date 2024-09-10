import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';
import { remarkReadingTime } from './src/lib/utils/remarkReadingTime.mjs';
import mdx from '@astrojs/mdx';
import awsAmplify from 'astro-aws-amplify';

export default defineConfig({
  outDir: '../../dist/apps/tnf-blog',
  integrations: [mdx(), react(), sitemap(), tailwind({
    configFile: fileURLToPath(new URL('./tailwind.config.cjs', import.meta.url))
  })],
  markdown: {
    remarkPlugins: [remarkReadingTime]
  },
  adapter: awsAmplify(),
  output: 'server',
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    }
  }
});
