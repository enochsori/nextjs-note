import Link from 'next/link';
import React from 'react';
import { getProducts } from '../service/products';
import styles from './page.module.css';
import MeowArticle from '../components/Meowarticle';

// export const revalidate = 3;

const ProductsPage = async () => {
  const products = await getProducts();

  // const res = await fetch('https://meowfacts.herokuapp.com', {
  //   next: { revalidate: 3 },
  // });

  // const res = await fetch('https://meowfacts.herokuapp.com');
  // const data = await res.json();
  // const factText = data.data[0];

  return (
    <>
      <h1 className={styles.header}>Products Introduction Page</h1>
      <ul className={styles.list}>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>
              {product.name.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
};

export default ProductsPage;
