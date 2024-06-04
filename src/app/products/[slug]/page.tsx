import { getProduct, getProducts } from '@/app/service/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);
  return {
    title: `Product: ${product?.name}`,
  };
};

const ProductPage = async ({ params: { slug } }: Props) => {
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }

  // showing the selected product's information among data in server file
  return (
    <>
      <h1>Products - {product.name.toUpperCase()}</h1>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width='300'
        height='300'
      />
    </>
  );
};
export default ProductPage;

// In case of dynamic routing pages, if needed, make it static component by using generateStaticParams()
export const generateStaticParams = async () => {
  // SSG making all the product's pages of all product items in advance
  const products = await getProducts();

  return products.map((product) => ({ slug: product.id }));
};
