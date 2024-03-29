// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Humalect Docs',
  tagline: 'DevOps made simple',
  url: 'https://humalect.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Humalect', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
          breadcrumbs: false,
        },
        blog: {
          routeBasePath: '/tutorials', // Serve the docs at the site's root
          /* other docs plugin options */
          blogTitle: 'Tutorials',
          blogSidebarCount: 100,
          blogSidebarTitle: 'Recent Posts',
          blogDescription: 'Deploy any tech stack in less than a minute',
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
      announcementBar: {
        id: 'support_us',
        content:
          'We became #1 Product of the Day on  <a target="_blank" rel="noopener noreferrer" href="https://www.producthunt.com/posts/humalect-deploy-on-kubernetes-in-30-min">Product Hunt! </a> 🚀 ',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },

      navbar: {
        title: '',
        logo: {
          alt: 'Humalect Docs',
          src: 'img/humalect.png',
          href: 'https://humalect.com/',
          srcDark: 'img/humalect-dark.png',

        },
        items: [

          {
            href: '/',
            label: 'Docs',
            position: 'right',
          },

          {
            href: '/tutorials',
            label: 'Tutorials',
            position: 'right',
          },

          {
            href: 'https://humalect.com/blog/',
            label: 'Blog',
            position: 'right',
          },

          {
            href: 'https://humalect.com/the-deployers-network',
            label: 'Join Community',
            position: 'right',
          },

          {
            href: 'https://console.humalect.com/public/user/login',
            label: 'Sign in',
            position: 'right',
          },

          {
            href: 'https://console.humalect.com/public/org/signup-request',
            label: 'Sign up',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-PNEFLT4BFX',
        anonymizeIP: true,
      },
    ],
        [
          "posthog-docusaurus",
          {
            apiKey: "phc_BnOTgbEN3PMzeSeoijLj5tDS9sd9C3QzsOJDAfgPoul",
            appUrl: "https://app.posthog.com", // optional
            enableInDevelopment: false, // optional
            // other options are passed to posthog-js init as is
          },
        ],



  ],
};

module.exports = config;
