import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      axios.get(`${process.env.REACT_APP_API_URL}/orders`, { withCredentials: true })
        .then(res => setOrders(res.data))
        .catch(console.error);
    }
  }, [user]);

  if (!user) return <h3>Please login to view your orders</h3>;

  if (orders.length === 0) return <h3>No orders placed yet</h3>;

  return (
    <div>
      <h3>Your Orders</h3>
      {orders.map(order => (
        <div key={order._id} className="card mb-3">
          <div className="card-header">
            Order #{order._id} - Status: {order.status}
          </div>
          <div className="card-body">
            <ul>
              {order.products.map(({ product, quantity }) => (
                <li key={product._id}>{product.name} x {quantity}</li>
              ))}
            </ul>
            <strong>Total: ${order.totalPrice.toFixed(2)}</strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
