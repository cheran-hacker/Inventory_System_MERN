const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    const { products, totalPrice } = req.body;
    const order = new Order({
      user: req.user._id,
      products,
      totalPrice,
    });
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('products.product');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
