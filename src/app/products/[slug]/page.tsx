import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

const PantsPage = ({ params }: Props) => {
  return <h1>Products - {params.slug.toUpperCase()}</h1>;
};

export default PantsPage;
