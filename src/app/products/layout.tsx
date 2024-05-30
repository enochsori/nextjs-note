import Link from 'next/link';
import styles from './layout.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cool products web site | showing all products here',
  description: 'Look our amazing products here.',
};

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/products/women'>Women</Link>
        <Link href='/products/men'>Men</Link>
      </nav>
      <section>{children}</section>
    </>
  );
};

export default ProductLayout;
