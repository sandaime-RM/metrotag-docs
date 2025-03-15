// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '電鬼',
  tagline: '街を舞台に、新時代の鬼ごっこ',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://traffic-tag-game.web.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sandaime-RM', // Usually your GitHub org/user name.
  projectName: 'metrotag-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sandaime-RM/metrotag-docs/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sandaime-RM/metrotag-docs/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '電鬼',
        logo: {
          alt: '大規模鬼ごっこ事務局ロゴ',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'ドキュメント',
          },
          {to: '/blog', label: 'ブログ', position: 'left'},
          {
            href: 'https://traffic-tag-game.web.app',
            label: '電鬼２',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'ドキュメント',
            items: [
              {
                label: 'どんなイベント？',
                to: '/docs/0_intro',
              },
              {
                label: '鬼ごっこの開催',
                to: '/docs/1_host',
              },
              {
                label: 'アプリの使用方法',
                to: '/docs/アプリの使用方法/0_intro',
              },
            ],
          },
          {
            title: 'コミュニティ',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/nnphyY9Ujg',
              },
              {
                label: 'X',
                href: 'https://x.com/metrotagTeam',
              },
            ],
          },
          {
            title: 'その他',
            items: [
              {
                label: 'ブログ',
                to: '/blog',
              },
              {
                label: '合同会社FunAMP',
                href: 'https://funamp.jp',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 合同会社FunAMP 大規模鬼ごっこ事務局`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light', // デフォルトをライトモードに
        disableSwitch: true, // ダークモード切り替えを無効化
        respectPrefersColorScheme: false, // OSのダークモード設定も無視
      },
    }),
};

export default config;
