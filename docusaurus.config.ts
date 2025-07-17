import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "CodePedia",
  tagline: "Your developer library for language docs, tips, and cheat sheets.",
  favicon: "img/favicon.ico",
  future: {
    v4: true,
  },
  url: "https://docs.praveensingh.online",
  baseUrl: "/",
  organizationName: "Praveenskg",
  projectName: "codepedia",
  trailingSlash: false,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "algolia-site-verification",
        content: "6869A3EDC26A8235",
      },
    },
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: "./sidebars.ts",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    algolia: {
      appId: "I05FKPCL6E",
      apiKey: "37cfe6d63256aed03b14e335eec696b4",
      indexName: "codepedia_pages",
      contextualSearch: true,
      placeholder: "Search CodePedia...",
    },
    navbar: {
      title: "CodePedia",
      logo: {
        alt: "CodePedia Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          to: "/docs/javascript",
          label: "JavaScript",
          position: "left",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/Praveenskg/codepedia",
          label: "GitHub",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "JavaScript",
              to: "/docs/javascript",
            },
            {
              label: "TypeScript",
              to: "/docs/typescript",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/javascript",
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/praveenskg",
            },
            {
              label: "X (Twitter)",
              href: "https://x.com/its_praveen_s",
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
