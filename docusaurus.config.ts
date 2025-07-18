import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'CodePedia',
  tagline: 'Your developer library for language docs, tips, and cheat sheets.',
  favicon: 'img/logo.png',
  future: { v4: true },

  url: 'https://docs.praveensingh.online',
  baseUrl: '/',
  organizationName: 'Praveenskg',
  projectName: 'codepedia',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'algolia-site-verification',
        content: '6869A3EDC26A8235',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'CodePedia',
        'url': 'https://docs.praveensingh.online',
        'logo': 'https://docs.praveensingh.online/img/logo.svg',
        'sameAs': [
          'https://github.com/Praveenskg',
          'https://x.com/its_praveen_s',
          'https://linkedin.com/in/praveenskg',
        ],
      }),
    },
  ],
  plugins: ['./src/plugins/tailwind-config.js'],
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        gtag: {
          trackingID: 'G-6YM7WQM05W',
          anonymizeIP: true,
        },
        blog: {
          blogTitle: 'CodePedia Blog',
          blogDescription: 'Tech blogs and tutorials on JavaScript, Web Dev, and more!',
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
          showReadingTime: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'CodePedia Blog Feed',
            description: 'Stay updated with the latest posts from CodePedia.',
            copyright: `Copyright © ${new Date().getFullYear()} Praveen Singh`,
            language: 'en',
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          postsPerPage: 10,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content: 'JavaScript, Web Development, Tutorials, Code, Programming, CodePedia',
      },
      { name: 'author', content: 'Praveen Singh' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@codepedia' },
      { name: 'twitter:creator', content: '@its_Praveen_s' },
      { name: 'og:type', content: 'website' },
      {
        name: 'og:title',
        content: 'CodePedia – Learn Web Development with Clean Notes',
      },
      {
        name: 'og:description',
        content: 'JavaScript, frontend, backend, and dev tutorials in clear, organized docs.',
      },
      {
        name: 'og:image',
        content: 'https://docs.praveensingh.online/img/cover.png',
      },
      { name: 'og:url', content: 'https://docs.praveensingh.online' },
      { name: 'robots', content: 'index,follow' },
      { name: 'googlebot', content: 'index,follow' },
    ],
    docs: {
      sidebar: { hideable: true },
    },

    algolia: {
      appId: 'I05FKPCL6E',
      apiKey: '37cfe6d63256aed03b14e335eec696b4',
      indexName: 'codepedia_pages',
      contextualSearch: true,
      placeholder: 'Search CodePedia...',
    },

    navbar: {
      title: 'CodePedia',
      logo: {
        alt: 'CodePedia Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Overview',
        },
        {
          type: 'docSidebar',
          sidebarId: 'javascriptSidebar',
          position: 'left',
          label: 'JavaScript',
        },
        {
          type: 'docSidebar',
          sidebarId: 'reactSidebar',
          position: 'left',
          label: 'React',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cheatSheetSidebar',
          position: 'left',
          label: 'Cheat Sheets',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          'href': 'https://github.com/Praveenskg/codepedia',
          'position': 'right',
          'className': 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },

    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'JavaScript', to: '/docs/javascript' },
            { label: 'TypeScript', to: '/docs/typescript' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/javascript',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/praveenskg',
            },
            {
              label: 'X (Twitter)',
              href: 'https://x.com/its_praveen_s',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodePedia by Praveen Singh.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
