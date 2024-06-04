'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function GoProductsButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.push('/products')}>
      Click here to the products page.
    </button>
  );
}
