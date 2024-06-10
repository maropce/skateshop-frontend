import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetchProducts();
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
