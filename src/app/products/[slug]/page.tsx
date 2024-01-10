import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const PantsPage = ({ params }: Props) => {
  if (params.slug === 'nothing') {
    notFound();
  }
  return <h1>Products - {params.slug.toUpperCase()}</h1>;
};
export default PantsPage;

export const generateStaticParams = () => {
  const products = ['pants', 'skirts'];
  return products.map((product) => ({ slug: product }));
};
