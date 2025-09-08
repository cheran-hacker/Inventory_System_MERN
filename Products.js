import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const Products = ({ refreshFlag }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/products`)
      .then(res => setProducts(res.data))
      .catch(console.error);
  }, [refreshFlag]);

  return (
   <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
  {products.map(product => (
    <div key={product._id} className="col">
      <div className="card h-100 shadow-sm">
        {product.imageUrl && (
          <img src={product.imageUrl} alt={product.name} className="card-img-top" style={{ objectFit: 'cover', height: '220px' }} />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-truncate">{product.description}</p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="badge bg-success fs-6">${product.price.toFixed(2)}</span>
            <button className="btn btn-primary btn-sm" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
  );
};

export default Products;
