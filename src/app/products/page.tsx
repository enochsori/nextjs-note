import Link from 'next/link';
import React from 'react';

const ProductsPage = () => {
  const products = ['shirts', 'pants', 'skirts', 'shoes'];

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
