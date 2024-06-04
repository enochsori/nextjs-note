import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from './layout.module.css';
import Link from 'next/link';
import { Open_Sans, Nanum_Gothic } from 'next/font/google';

const sans = Open_Sans({ subsets: ['latin'] });
const gothic = Nanum_Gothic({
  weight: '700',
  subsets: ['latin'],
});
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cool products web site',
  description: 'We are a place that sells amazing products.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={sans.className}>
      <body className={inter.className}>
        <header className={styles.header}>
          <h1 className={gothic.className}>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href='/products'>Products</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/about'>About</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
