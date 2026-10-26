// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import icon from 'astro-icon';

import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
  site: 'https://bmeson.style',
  integrations: [mdx(), sitemap(), icon()],

  fonts: [
      {
          provider: fontProviders.fontsource(),
          name: "Zen Maru Gothic",
          cssVariable: "--font-zen-maru-gothic",
      },
	],

  adapter: cloudflare(),
});