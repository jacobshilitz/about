// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Karrio',
  tagline: 'The Headless, API-first, open source shipping platform.',
  url: 'https://karrio.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'purplship', // Usually your GitHub org/user name.
  projectName: 'Purplship', // Usually your repo name.

  plugins: [
    'tailwind-loader',
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: 'G-D1CJPS0Z69',
        anonymizeIP: true,
      },
    ],
    [
      "@cmfcmf/docusaurus-search-local",
      {
        indexDocs: true,
        language: "en",
      },
    ]
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/purplship/about/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/purplship/about/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/karrio.png',
      metaImage: 'img/karrio.png',
      navbar: {
        // title: 'Karrio',
        logo: {
          alt: 'Karrio',
          src: 'img/logo.svg',
          srcDark: 'img/logo-inverted.svg',
        },
        items: [
          {
            to: '/guides',
            position: 'left',
            label: 'Guides',
          },
          {
            to: '/reference',
            position: 'left',
            label: 'Reference',
          },
          {
            to: '/carriers',
            position: 'left',
            label: 'Carriers',
          },
          {
            to: 'https://app.karrio.io',
            position: 'left',
            label: 'Login',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right'
          },
          {
            href: 'https://github.com/purplship/purplship',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Overview',
                to: '/',
              },
              {
                label: 'Guides',
                to: '/guides',
              },
              {
                label: 'Reference',
                to: '/reference',
              },
              {
                label: 'Carriers',
                to: '/carriers',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/purplship/purplship/discussions',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/purplship',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/purplship',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/purplship/purplship',
              },
            ],
          },
          {
            title: 'Beta',
            items: [
              {
                label: 'Join our beta',
                href: 'https://app.karrio.io',
              },
            ],
          },
        ],
        logo: {
          alt: 'Karrio Inc.',
          src: 'img/logo-inverted.svg',
        },
        copyright: `Copyright © ${new Date().getFullYear()} karrio Inc.`,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      prism: {
        defaultLanguage: 'js',
        additionalLanguages: ['json'],
        plugins: ['line-numbers', 'show-language'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
