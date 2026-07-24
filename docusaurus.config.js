// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tic Tac Toe Documentation',
  tagline: 'Comprehensive documentation for Tic Tac Toe covering installation, setup, features, and support.',
  favicon: 'images/logo/logo.png',

  // Set the production url of your site here
  url: 'https://wrteam-in.github.io', // TODO: update to your GitHub Pages URL
  baseUrl: '/tic_tac_toe_Doc/', // TODO: update to your repository name, preceded by a slash
  organizationName: 'WRTeam-in', // TODO: your GitHub username/org
  projectName: 'tic-tac-toe-doc', // TODO: your repository name
  trailingSlash: true,
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Multiple independently-versioned doc instances, one per section
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mobile-app',
        path: 'mobile-app',
        routeBasePath: 'mobile-app',
        sidebarPath: require.resolve('./mobileAppSidebar.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'features',
        path: 'features',
        routeBasePath: 'features',
        sidebarPath: require.resolve('./featuresSidebar.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'support',
        path: 'support',
        routeBasePath: 'support',
        sidebarItemsGenerator: async () => [],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'faqs',
        path: 'faqs',
        routeBasePath: 'faqs',
        sidebarItemsGenerator: async () => [],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'changelog',
        path: 'changelog',
        routeBasePath: 'changelog',
        sidebarItemsGenerator: async () => [],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'images/logo/logo.png',
      navbar: {
        logo: {
          alt: 'Tic Tac Toe Logo',
          src: 'images/logo/logo.png',
        },
        items: [
          {
            docsPluginId: 'mobile-app',
            type: 'docSidebar',
            sidebarId: 'mobileAppSidebar',
            position: 'left',
            label: 'Mobile App',
          },
          {
            docsPluginId: 'features',
            type: 'docSidebar',
            sidebarId: 'featuresSidebar',
            position: 'left',
            label: 'Features',
          },
          {
            docId: 'index',
            docsPluginId: 'support',
            type: 'doc',
            position: 'left',
            label: 'Support',
          },
          {
            docId: 'index',
            docsPluginId: 'faqs',
            type: 'doc',
            position: 'left',
            label: 'FAQs',
          },
          {
            docId: 'index',
            docsPluginId: 'changelog',
            type: 'doc',
            position: 'left',
            label: 'Changelog',
          },
          {
            href: 'https://www.wrteam.in/',
            label: 'WRTeam',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} WRTeam. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
  stylesheets: [
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
  ],
};

export default config;
