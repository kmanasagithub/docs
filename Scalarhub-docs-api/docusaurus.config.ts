import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import type * as openApiTheme from "docusaurus-theme-openapi-docs";


const config: Config = {
  title: 'ScalarHub',
  tagline: '',
  favicon: 'img/favicon.ico',
  url: 'https://kmanasagithub.github.io',
  baseUrl: '/docs/',
  organizationName: 'kmanasagithub',
  projectName: 'docs',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: 'reference/',
          docItemComponent: "@theme/ApiItem", 
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
 
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi", // Keep the ID as it is
        docsPluginId: "classic",
        config: {
          account: {
            specPath: 'examples/account.yaml', 
            outputDir: 'docs/Endpoints/Accounts'   
          },
          user: {
            specPath: 'examples/user.yaml', 
            outputDir: 'docs/Endpoints/Users'       
          },
          customer: {
            specPath: 'examples/customer.yaml',
            outputDir: 'docs/Endpoints/Customers',     
          },
          entity: {
            specPath: 'examples/entity.yaml', 
            outputDir: 'docs/Endpoints/Entities'     
          },
          s_l_nexus: {
            specPath: 'examples/s_l_nexus.yaml', 
            outputDir: 'docs/Endpoints/S_l_Nexuses'      
          },
          product: {
            specPath: 'examples/product.yaml',
            outputDir: 'docs/Endpoints/Products'    
          },
          subscription: {
            specPath: 'examples/subscription.yaml', 
            outputDir: 'docs/Endpoints/Subscriptions'    
          },
          location: {
            specPath: 'examples/location.yaml', 
            outputDir: 'docs/Endpoints/Locations'     
          },
          exemption_certificate: {
            specPath: 'examples/exemption_certificate.yaml', 
            outputDir: 'docs/Endpoints/Exemption Certificates'     
          },
          location_attribute: {
            specPath: 'examples/location_attribute.yaml',
            outputDir: 'docs/Endpoints/Location Attributes'
          }
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guides', // Unique ID for the API reference section
        path: 'guides', // Folder containing API reference docs
        routeBasePath: 'guides/', // Base URL for API reference
        sidebarPath: require.resolve('./sidebarGuides.ts'), // Custom sidebar for API reference
        // editUrl: 'https://github.com/your-repo/edit/main/apireference/',
      },
    ],

  ],
   themes: [
    'docusaurus-theme-openapi-docs', 
  ],
  themeConfig: {
    algolia:{
      apiKey:'96280c372191c326291b1af64b0472b3',
      indexName:'scalarhub-docs',
      appId:'WYFUNULVHN',
    },
    navbar: {
      logo: {
        alt: 'ScalarHub Logo',
        src: 'img/scalarhub_logo.png',
        href: '/',
        style: {
          width: '100px',
          height: 'auto',  
        },
      },
      items: [
        {
          to: "/guides/Overview/",
          sidebarId: 'guideSidebar',
          label: "Guides",
          position: "left",
          activeBasepath: "/guides",
        },
        {
          to:"/reference",
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'API reference',
          activeBasepath: "/reference",
        },
       
        {
          href: "https://github.com/scalarHubTech",
          label: 'Support',
          position: 'right',
        },
      ],
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom', // You can set it to 'top', 'bottom', 'none'
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: '/arc/css/custom.css',
      type: 'text/css',
    },
  ]
};

export default config;
