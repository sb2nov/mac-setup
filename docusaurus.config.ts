import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'macOS Setup Guide',
  tagline: 'Installing Development environment on macOS',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://sourabhbajaj.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mac-setup/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sb2nov', // Usually your GitHub org/user name.
  projectName: 'mac-setup', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/', // Serve the docs at the site's root
          editUrl: 'https://github.com/sb2nov/mac-setup/tree/main/',
          sidebarCollapsed: false,
        },
        blog: false, // Disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-XXXXXXXXXX', // Replace with your Google Analytics 4 tracking ID
        anonymizeIP: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'macOS Setup Guide',
      items: [
        {
          href: 'https://github.com/sb2nov/mac-setup',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://sourabhbajaj.com',
          label: 'About',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Guide',
          items: [
            {
              label: 'System Preferences',
              to: '/system-preferences',
            },
            {
              label: 'Homebrew',
              to: '/homebrew',
            },
            {
              label: 'Git',
              to: '/git',
            },
          ],
        },
        {
          title: 'Development Tools',
          items: [
            {
              label: 'Python',
              to: '/python',
            },
            {
              label: 'Node.js',
              to: '/nodejs',
            },
            {
              label: 'Docker',
              to: '/docker',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sb2nov/mac-setup',
            },
            {
              label: 'Issues',
              href: 'https://github.com/sb2nov/mac-setup/issues',
            },
          ],
        },
      ],
      copyright: `This guide is MIT licensed. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
