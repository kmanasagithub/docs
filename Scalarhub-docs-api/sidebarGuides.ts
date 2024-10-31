const sidebarsGuides = {
    guidesSidebar: [
      
        'overview',
        'core-concepts',
      {
        type: 'category',
        label: 'Quickstart-guide',
        items: [
          'Quickstart guide/introduction',
          'Quickstart guide/ingest-an-event',
          'Quickstart guide/create-a-simple-metric',
          'Quickstart guide/configure-your-price',
          'Quickstart guide/subscribe-a-customer',
          'Quickstart guide/test-your-invoicing-setup',
          'Quickstart guide/set-up-prepaid-credits',
        ],
      },
        'login-and-authentication',
        'using-postman',
        'sdk',
        {
          type: 'category',
          label: 'Events and metrics',
          items: [
            'Events and metrics/ingest-usage-events',
            'Events and metrics/integrate-with-s3-or-gcs-cloud-storage',
            'Events and metrics/import-from-segment',
            'Events and metrics/construct-usage-metrics',
            'Events and metrics/alias-customer-ids',
            'Events and metrics/scale-ingestion-throughput',
            'Events and metrics/querying-data-with-sql',
            'Events and metrics/backfill-and-amend-events'
          ],
        },
        {
          type: 'category',
          label: 'Plans and subscriptions',
          items: [
            'Plans and subscriptions/build-your-product-catalog',
            'Plans and subscriptions/creating-subscriptions',
          ],
        },
    ],
  };
  
  export default sidebarsGuides;
  