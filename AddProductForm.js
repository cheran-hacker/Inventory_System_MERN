import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = ({ onProductAdded }) => {
  const [formData, setFormData] = useState({ name: '', price: '', quantity: '', description: '', imageUrl: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/products`, {
        ...formData,
        price: parseFloat(formData.price),
        quantity: parseInt(formData.quantity),
      }, { withCredentials: true });

      alert('Product added!');
      setFormData({ name: '', price: '', quantity: '', description: '', imageUrl: '' });
      if (onProductAdded) onProductAdded();
    } catch {
      alert('Failed to add product');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <h3>Add Product</h3>
      <input className="form-control mb-2" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
      <input className="form-control mb-2" type="number" step="0.01" placeholder="Price" name="price" value={formData.price} onChange={handleChange} required />
      <input className="form-control mb-2" type="number" placeholder="Quantity" name="quantity" value={formData.quantity} onChange={handleChange} required />
      <input className="form-control mb-2" placeholder="Description" name="description" value={formData.description} onChange={handleChange} />
      <input className="form-control mb-3" placeholder="Image URL" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
      <button type="submit" className="btn btn-success btn-pulse">Add Product</button>
    </form>
  );
};

export default AddProductForm;
