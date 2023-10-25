import React from 'react';
import { Provider } from 'react-redux';

import createStore from './src/store/createStore';

import { OrderProvider } from './src/context/OrderContext';

export default ({ element }) => {
  const store = createStore();
  return (
    <Provider store={store}>
      <OrderProvider>{element}</OrderProvider>
    </Provider>
  );
};
