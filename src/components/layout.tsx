import React from 'react';
import * as CLayer from 'commercelayer-react';
import Header from './header';
import ShoppingBag from './shopping-bag';

const Layout = ({ children, shoppingBagStatus, setShoppingBagStatus }: any) => {
  const sectionOpacity = shoppingBagStatus ? 'open' : '';
  return (
    <React.Fragment>
      <Header
        lang={'en-us'}
        shoppingBagPreviewProps={{
          onClick: setShoppingBagStatus,
        }}
      />
      <section id="main" className={`section ${sectionOpacity}`}>
        <div className="container">{children}</div>
      </section>
      <ShoppingBag
        lang={'en'}
        open={shoppingBagStatus}
        close={setShoppingBagStatus}
      />
      <CLayer.Config
        baseUrl="https://wishkart.commercelayer.io"
        clientId="Yi9DTgsr1EfvxIvRfHya0GzCoz8JjxTxT5KI-aJtJGs"
        marketId={'12545'}
        countryCode={'US'}
        languageCode={'en'}
        cartUrl="https://lucky-tulumba-3141ea.netlify.app/"
        returnUrl="https://lucky-tulumba-3141ea.netlify.app/"
        privacyUrl="https://lucky-tulumba-3141ea.netlify.app/"
        termsUrl="https://lucky-tulumba-3141ea.netlify.app/"
      />
    </React.Fragment>
  );
};

export default Layout;
