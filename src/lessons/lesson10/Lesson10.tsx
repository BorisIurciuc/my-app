import { useEffect, useState } from 'react';

import styles from './lesson10.module.css';

interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Lesson10 = () => {
  const [headerHor] = useState<boolean>(true);
  const [headerVer, setHeaderVer] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  async function getProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
    console.log(' getProducts()!');
  }

  const changeToggleVer = () => {
    setHeaderVer((prev) => !prev);
  };

  // useEffect - это хук функция из react, позволяющая изолировать код от ненужного повторного перевыполнения при перезагрузке компонента

  // * мы прячем это ререндр
  useEffect(() => {
    getProducts();
  }, []);
  // *

  console.log('rerender!');

  // принимает в себя стрелочную функцию с логикой и массив зависимостей - условие перевыполнения


  console.log(headerHor);
  return (
    <div>
        {headerHor && (
      <header className={styles.header}>
        <h3>Lesson10</h3>
        <div>
          <a href="/">Home</a>
          <a href="/">Info</a>
          <a href="/">Profile</a>
          <span onClick={changeToggleVer}>≡</span>
        </div>
      </header>
      )}
        {headerVer && (
            <header className={styles.headerVert}>
        <div>
          <a href="/">Home</a>
          <a href="/">Info</a>
          <a href="/">Profile</a>
        </div>
      </header>
      )}

      {/* если toggle true - мы покажем элемент на странице - если false спрячем */}

      <ul>
        {products.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>

    </div>
  );
};

export default Lesson10;