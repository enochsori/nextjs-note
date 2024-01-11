import Link from 'next/link';
import styles from './layout.module.css';

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
