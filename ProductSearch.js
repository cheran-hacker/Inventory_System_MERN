// src/components/ProductSearch.js

import React, { useState, useEffect } from "react";

export default function ProductSearch({ products }) {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, products]);

  return (
    <div style={{ maxWidth: 960, margin: "20px auto", padding: "0 15px" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 20px",
          marginBottom: "25px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "1.1rem"
        }}
        aria-label="Search Products"
      />

      {filteredProducts.length === 0 && (
        <div style={{
          margin: '40px 0',
          color: '#888',
          fontSize: '1.2rem',
          textAlign: 'center'
        }}>
          <span role="img" aria-label="search" style={{ fontSize: "2rem" }}>🔍</span>
          <div>No products found.<br />
            <button
              onClick={() => setQuery("")}
              style={{
                marginTop: 12,
                padding: '8px 16px',
                fontSize: '1rem',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: '#007bff',
                color: 'white'
              }}>
              Browse all
            </button>
          </div>
        </div>
      )}

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
        gap: '20px'
      }}>
        {filteredProducts.map(product => (
          <div key={product._id || product.id} style={{
            border: "1px solid #e0e0e0",
            borderRadius: "12px",
            padding: "15px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <img
              src={product.imageUrl || product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "180px",
                borderRadius: "8px",
                objectFit: "cover"
              }}
            />
            <h3 style={{ marginTop: "15px", fontSize: "1.25rem" }}>{product.name}</h3>
            <p style={{ fontWeight: "600", color: "#007bff" }}>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
