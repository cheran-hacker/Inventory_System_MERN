import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const PlaceOrderButton = () => {
  const { user } = useContext(AuthContext);

  const placeOrder = () => {
    if (!user) {
      alert('Please login to place order');
      return;
    }
    // proceed with order placement logic
  };

  return <button onClick={placeOrder}>Place Order</button>;
};

export default PlaceOrderButton;
