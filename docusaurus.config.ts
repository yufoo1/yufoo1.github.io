import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const config: Config = {
  title: "yufoo1's Docs",
  url: 'https://yufoo1.github.io',
  baseUrl: '/',
  organizationName: 'yufoo1',
  projectName: 'yufoo1.github.io',
  trailingSlash: false,
  onBrokenLinks: 'throw',

  future: {
    v4: true,
  },

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  markdown: {
    // All authored content is standard Markdown. JSX/MDX is intentionally
    // disabled so writing a document never requires React knowledge.
    format: 'md',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: './docs',
          routeBasePath: 'docs',
          showLastUpdateTime: false,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "yufoo1's Docs",
      items: [
        {
          to: '/docs/',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/yufoo1',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Docs',
              to: '/docs/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/yufoo1',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} yufoo1. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
