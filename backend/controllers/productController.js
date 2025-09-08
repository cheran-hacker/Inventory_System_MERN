const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.addProduct = async (req, res) => {
  const { name, price, quantity, description, imageUrl } = req.body;
  if (!name || !price || !quantity) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    const newProduct = new Product({ name, price, quantity, description, imageUrl });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch {
    res.status(500).json({ error: 'Server error' });
  }
};
