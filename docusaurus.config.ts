import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'CodeScrolls',
  tagline: 'Scroll through code. Learn. Build. Repeat.',
  favicon: 'img/logo.png',
  future: { v4: true },

  url: 'https://codescrolls.site',
  baseUrl: '/',
  organizationName: 'Praveenskg',
  projectName: 'codescrolls',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'script',
      attributes: {
        async: 'true',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1644548512690379',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'CodeScrolls',
        'url': 'https://codescrolls.site',
        'logo': 'https://codescrolls.site/img/logo.svg',
        'sameAs': [
          'https://github.com/Praveenskg',
          'https://x.com/its_praveen_s',
          'https://linkedin.com/in/praveenskg',
        ],
      }),
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
        pwaHead: [
          { tagName: 'link', rel: 'icon', href: '/img/logo-192.png' },
          { tagName: 'link', rel: 'manifest', href: '/manifest.json' },
          { tagName: 'meta', name: 'theme-color', content: '#3b82f6' },
        ],
      },
    ],
    [
      'vercel-analytics',
      {
        debug: true,
        mode: 'auto',
      },
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
    '@docusaurus/theme-live-codeblock',
  ],

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
          blogTitle: 'CodeScrolls Blog',
          blogDescription: 'Tech blogs and tutorials on JavaScript, Web Dev, and more!',
          blogSidebarTitle: 'All Posts',
          blogSidebarCount: 'ALL',
          showReadingTime: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'CodeScrolls Blog Feed',
            description: 'Stay updated with the latest posts from CodeScrolls.',
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
        content: 'JavaScript, Web Development, Tutorials, Code, Programming, CodeScrolls',
      },
      { name: 'author', content: 'Praveen Singh' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@codescrolls' },
      { name: 'twitter:creator', content: '@its_Praveen_s' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'CodeScrolls – Learn Web Development with Clean Notes' },
      {
        name: 'og:description',
        content: 'JavaScript, frontend, backend, and dev tutorials in clear, organized docs.',
      },
      { name: 'og:image', content: 'https://codescrolls.site/img/cover.png' },
      { name: 'og:url', content: 'https://codescrolls.site' },
      { name: 'robots', content: 'index,follow' },
      { name: 'googlebot', content: 'index,follow' },
    ],
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    docs: {
      sidebar: { hideable: true },
    },
    navbar: {
      title: 'CodeScrolls',
      logo: {
        alt: 'CodeScrolls Logo',
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
          sidebarId: 'typescriptSidebar',
          position: 'left',
          label: 'Typescript',
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
          'href': 'https://github.com/Praveenskg/codescrolls',
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
          title: 'Site',
          items: [
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' },
            { label: 'Privacy Policy', to: '/privacy-policy' },
            { label: 'Terms of Service', to: '/terms-of-service' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/javascript',
            },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/praveenskg' },
            { label: 'X (Twitter)', href: 'https://x.com/its_praveen_s' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodeScrolls by Praveen Singh.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
