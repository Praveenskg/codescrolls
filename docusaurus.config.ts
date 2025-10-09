import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'CodeScrolls',
  tagline: 'Scroll through code. Learn. Build. Repeat.',
  favicon: 'img/logo.png',
  future: { v4: true, experimental_faster: true },

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
      attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'canonical', href: 'https://codescrolls.site' },
    },
    {
      tagName: 'script',
      attributes: {
        async: 'true',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1644548512690379',
        crossorigin: 'anonymous',
      },
    },
    // Enhanced Organization Schema with more details
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'CodeScrolls',
        'alternateName': 'CodeScrolls - Web Development Documentation',
        'url': 'https://codescrolls.site',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://codescrolls.site/img/logo.png',
          'width': 512,
          'height': 512,
        },
        'description':
          'Comprehensive web development documentation covering JavaScript, React, TypeScript, and modern web technologies.',
        'foundingDate': '2024',
        'founder': {
          '@type': 'Person',
          'name': 'Praveen Singh',
          'url': 'https://linkedin.com/in/praveenskg',
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'Technical Support',
          'url': 'https://codescrolls.site/contact',
        },
        'sameAs': [
          'https://github.com/Praveenskg',
          'https://x.com/its_praveen_s',
          'https://twitter.com/its_praveen_s',
          'https://linkedin.com/in/praveenskg',
        ],
      }),
    },
    // WebSite Schema with SearchAction
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'CodeScrolls',
        'url': 'https://codescrolls.site',
        'description':
          'Learn web development with clear documentation, tutorials, and guides for JavaScript, React, TypeScript, and more.',
        'publisher': {
          '@type': 'Organization',
          'name': 'CodeScrolls',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://codescrolls.site/img/logo.png',
          },
        },
        'potentialAction': {
          '@type': 'SearchAction',
          'target': {
            '@type': 'EntryPoint',
            'urlTemplate': 'https://codescrolls.site/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
        'inLanguage': 'en-US',
      }),
    },
    // Educational Organization Schema
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        'name': 'CodeScrolls',
        'url': 'https://codescrolls.site',
        'description': 'Free educational resource for learning web development technologies.',
        'educationalCredentialAwarded': 'Web Development Knowledge',
        'hasOfferCatalog': {
          '@type': 'OfferCatalog',
          'name': 'Web Development Courses',
          'itemListElement': [
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Course',
                'name': 'JavaScript Documentation',
                'description': 'Comprehensive JavaScript tutorials and guides',
                'provider': {
                  '@type': 'Organization',
                  'name': 'CodeScrolls',
                },
              },
              'price': '0',
              'priceCurrency': 'USD',
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Course',
                'name': 'React Documentation',
                'description': 'Complete React.js documentation and tutorials',
                'provider': {
                  '@type': 'Organization',
                  'name': 'CodeScrolls',
                },
              },
              'price': '0',
              'priceCurrency': 'USD',
            },
            {
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Course',
                'name': 'TypeScript Documentation',
                'description': 'TypeScript guides and best practices',
                'provider': {
                  '@type': 'Organization',
                  'name': 'CodeScrolls',
                },
              },
              'price': '0',
              'priceCurrency': 'USD',
            },
          ],
        },
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
    ['vercel-analytics', { debug: true, mode: 'auto' }],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        gtag: { trackingID: 'G-6YM7WQM05W', anonymizeIP: true },
        blog: {
          blogTitle: 'CodeScrolls Blog',
          blogDescription: 'Tech blogs and tutorials on JavaScript, Web Dev, and more!',
          blogSidebarTitle: 'Recent posts',
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
          postsPerPage: 5,
        },
        theme: { customCss: './src/css/custom.css' },
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
      // Basic Meta Tags
      {
        name: 'keywords',
        content:
          'JavaScript, Web Development, Tutorials, Code, Programming, CodeScrolls, React, TypeScript, HTML, CSS, Node.js, Frontend, Backend, Web Design, Coding, Learn to Code, Developer Resources, Programming Tutorials, JavaScript Tutorial, React Tutorial, TypeScript Guide',
      },
      { name: 'author', content: 'Praveen Singh' },
      { name: 'publisher', content: 'CodeScrolls' },
      {
        name: 'robots',
        content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
      },
      { name: 'googlebot', content: 'index,follow' },
      { name: 'bingbot', content: 'index,follow' },

      // Mobile Meta Tags
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'apple-mobile-web-app-title', content: 'CodeScrolls' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#3b82f6' },
      { name: 'msapplication-TileColor', content: '#3b82f6' },
      { name: 'msapplication-config', content: '/browserconfig.xml' },

      // Open Graph Meta Tags (Enhanced)
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'CodeScrolls' },
      { property: 'og:title', content: 'CodeScrolls – Learn Web Development with Clean Notes' },
      {
        property: 'og:description',
        content:
          'Comprehensive web development documentation and tutorials for JavaScript, React, TypeScript, and modern web technologies. Learn to code with clear, organized guides.',
      },
      { property: 'og:url', content: 'https://codescrolls.site' },
      { property: 'og:image', content: 'https://codescrolls.site/img/cover.png' },
      { property: 'og:image:secure_url', content: 'https://codescrolls.site/img/cover.png' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      {
        property: 'og:image:alt',
        content: 'CodeScrolls - Learn Web Development with Clean Documentation',
      },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:updated_time', content: new Date().toISOString() },

      // Twitter Card Meta Tags (Enhanced)
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@its_praveen_s' },
      { name: 'twitter:creator', content: '@its_praveen_s' },
      { name: 'twitter:title', content: 'CodeScrolls – Learn Web Development with Clean Notes' },
      {
        name: 'twitter:description',
        content:
          'Comprehensive web development documentation for JavaScript, React, TypeScript. Free tutorials, guides, and resources for developers.',
      },
      { name: 'twitter:image', content: 'https://codescrolls.site/img/cover.png' },
      { name: 'twitter:image:alt', content: 'CodeScrolls - Web Development Documentation' },
      { name: 'twitter:domain', content: 'codescrolls.site' },

      // Additional SEO Meta Tags
      {
        name: 'description',
        content:
          'Learn web development with comprehensive documentation, tutorials, and guides for JavaScript, React, TypeScript, HTML, CSS, and more. Free educational resource for developers.',
      },
      { name: 'application-name', content: 'CodeScrolls' },
      { name: 'apple-mobile-web-app-title', content: 'CodeScrolls' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'rating', content: 'General' },
      { name: 'distribution', content: 'global' },
      { name: 'coverage', content: 'Worldwide' },

      // Copyright and Author
      {
        name: 'copyright',
        content: `Copyright © ${new Date().getFullYear()} CodeScrolls by Praveen Singh`,
      },
      { name: 'owner', content: 'Praveen Singh' },

      // Geo Tags
      { name: 'geo.region', content: 'US' },
      { name: 'geo.position', content: '37.7749;-122.4194' },
      { name: 'ICBM', content: '37.7749, -122.4194' },
    ],
    liveCodeBlock: { playgroundPosition: 'bottom' },
    docs: { sidebar: { hideable: true } },

    navbar: {
      title: 'CodeScrolls',
      logo: { alt: 'CodeScrolls Logo', src: 'img/logo.png' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'javascriptSidebar',
          position: 'left',
          label: 'JavaScript',
          to: '/javascript',
        },
        {
          type: 'docSidebar',
          sidebarId: 'reactSidebar',
          position: 'left',
          label: 'React',
          to: '/react',
        },
        {
          type: 'docSidebar',
          sidebarId: 'typescriptSidebar',
          position: 'left',
          label: 'Typescript',
          to: '/typescript',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cssSidebar',
          position: 'left',
          label: 'CSS',
          to: '/css',
        },
        {
          type: 'docSidebar',
          sidebarId: 'htmlSidebar',
          position: 'left',
          label: 'HTML',
          to: '/html',
        },
        {
          type: 'docSidebar',
          sidebarId: 'cheatSheetSidebar',
          position: 'left',
          label: 'Cheat Sheets',
          to: '/cheatsheets',
        },
        {
          type: 'docSidebar',
          sidebarId: 'interviewSidebar',
          position: 'left',
          label: 'Interviews',
          to: '/interviews',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
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
            { label: 'JavaScript', to: '/javascript' },
            { label: 'TypeScript', to: '/typescript' },
            { label: 'React', to: '/react' },
            { label: 'Cheat Sheets', to: '/cheatsheets' },
          ],
        },
        {
          title: 'Site',
          items: [
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' },
            { label: 'Blog', to: '/blog' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Privacy Policy', to: '/privacy-policy' },
            { label: 'Terms of Service', to: '/terms-of-service' },
            { label: 'Disclaimer', to: '/disclaimer' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Praveenskg/codescrolls',
            },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/praveenskg' },
            { label: 'X (Twitter)', href: 'https://x.com/its_praveen_s' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CodeScrolls by Praveen Singh.`,
    },

    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
  } satisfies Preset.ThemeConfig,
};

export default config;
