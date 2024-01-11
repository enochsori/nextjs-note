import styles from './layout.module.css';

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className={styles.nav}>
        <a href=''>Women</a>
        <a href=''>Men</a>
      </nav>
      <section>{children}</section>
    </>
  );
};

export default ProductLayout;
