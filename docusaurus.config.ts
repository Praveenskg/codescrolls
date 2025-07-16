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
  url: "https://praveenskg.github.io",
  baseUrl: "/codepedia",
  organizationName: "Praveenskg",
  projectName: "codepedia",
  trailingSlash: false,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
          editUrl: "https://github.com/Praveenskg/codepedia/edit/main/",
        },
        blog: {
          showReadingTime: true,
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
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
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
              to: "/docs/typescript/README",
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
