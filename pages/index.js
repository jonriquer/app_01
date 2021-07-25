import { Heading, Page, Link, FooterHelp } from "@shopify/polaris";

const Index = () => (
  <Page>
    
    <Heading>Shopify app with Node and React 🎉</Heading>

    <FooterHelp>
    Learn more about{' '}
    <Link external url="https://help.shopify.com/manual/orders/fulfill-orders">
      fulfilling orders
    </Link>
    </FooterHelp>

  </Page>

);

export default Index;
