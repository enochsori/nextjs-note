'use client';
import { useEffect, useState } from 'react';
import styles from '../products/page.module.css';

const MeowArticle = () => {
  const [text, setText] = useState('data preparing....');
  useEffect(() => {
    const res = fetch('https://meowfacts.herokuapp.com')
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
};

export default MeowArticle;
