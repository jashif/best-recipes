import React, {
  createContext,
  useContext,
  useState,
  ReactElement,
  useEffect,
} from 'react';

type OrderProviderType = {
  orderNo?: string;
  setOrderNo?: (orderNo: string) => void;
};
const OrderContext = createContext<OrderProviderType>({ orderNo: '' });
const useOrder = () => useContext<OrderProviderType>(OrderContext);

const OrderProvider = ({ children }: { children: ReactElement }) => {
  const [orderNo, setOrderNo] = useState<string | undefined>();

  useEffect(() => {
    document.addEventListener('clayer-order-ready', function (event) {
      if (event.srcElement && event.srcElement.cookie.split('=')[1]) {
        setOrderNo(event.srcElement && event.srcElement.cookie.split('=')[1]);
        console.log(document.cookie);
      } else {
        setOrderNo(document.cookie.split('=')[1]);
      }
    });
  }, []);

  return (
    <OrderContext.Provider value={{ orderNo, setOrderNo }}>
      {children}
    </OrderContext.Provider>
  );
};
export { OrderProvider, useOrder };
