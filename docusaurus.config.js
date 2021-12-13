// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DeCash",
  tagline:
    "Welcome to DeCash documentation - find out how to use and integrate with DeCash",
  url: "https://docs.decash.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "DeCash-Official",
  projectName: "docs.decash.com",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/DeCash-Official/docs.decash.com/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/DeCash-Official/docs.decash.com/edit/main/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "DeCash Docs",
        logo: {
          alt: "DeCash Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/DeCash-Official",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Solutions",
            items: [
              {
                label: "Crypto Exchanges",
                to: "https://www.decash.com/crypto-exchanges/",
              },
              {
                label: "Payment Platforms",
                to: "https://www.decash.com/payment-platforms/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/decash.transparently.stable",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/decash_official/",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/DeCash_",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Website",
                to: "https://www.decash.com/",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/DeCash-Official",
              },
            ],
          },
        ],
        copyright: `Copyright © 2020-${new Date().getFullYear()} DCIC Ltd - All right reserved\nDCIC Limited, 3rd Floor, Yamaraj Building, Market Square, P.O. Box 3175, Road Town, Tortola, British Virgin Islands`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
