import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const placeOrder = async () => {
    if (!user) {
      alert('Please login to place order');
      return;
    }
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/orders`,
        {
          products: cartItems.map((item) => ({ product: item._id, quantity: item.quantity })),
          totalPrice,
        },
        { withCredentials: true }
      );
      clearCart();
      navigate('/order-placed');
    } catch {
      alert('Order placement failed');
    }
  };

  if (cartItems.length === 0) return <h3>Your cart is empty</h3>;

  return (
    <div>
      <h3>Your Cart</h3>
      <ul className="list-group mb-3">
        {cartItems.map((item) => (
          <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center fade-in-up">
            <div>
              <strong>{item.name}</strong> x {item.quantity}
            </div>
            <div>
              ${(item.price * item.quantity).toFixed(2)}
              <button className="btn btn-secondary btn-sm mx-1" onClick={() => decreaseQuantity(item._id)}>
                -
              </button>
              <button className="btn btn-primary btn-sm mx-1" onClick={() => addToCart(item)}>
                +
              </button>
              <button className="btn btn-danger btn-sm ms-3" onClick={() => removeFromCart(item._id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h5>Total: ${totalPrice.toFixed(2)}</h5>
      <button className="btn btn-success btn-pulse" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
};

export default Cart;
