import React, { useEffect } from 'react';
import useToken from '../hooks/useToken';
import { useOrder } from '../context/OrderContext';

const Checkout = () => {
  const token = useToken();
  const { orderNo } = useOrder();

  function onClick() {
    window.location.href = `https://wishkart.commercelayer.app/checkout/${orderNo}?accessToken=${token?.access_token}`;
  }

  return (
    <button
      onClick={onClick}
      className={'button is-fullwidth is-success'}
      type="submit"
    >
      {'Checkout'}
    </button>
  );
};

export default Checkout;
