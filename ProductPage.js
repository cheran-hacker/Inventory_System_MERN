import React, { useState } from 'react';
import AddProductForm from './AddProductForm';
import Products from './Products';

const ProductsPage = () => {
  const [refreshFlag, setRefreshFlag] = useState(false);
  
  const handleProductAdded = () => {
    setRefreshFlag(prev => !prev);
  };

  return (
    <>
      <AddProductForm onProductAdded={handleProductAdded} />
      <Products refreshFlag={refreshFlag} />
    </>
  );
};

export default ProductsPage;
