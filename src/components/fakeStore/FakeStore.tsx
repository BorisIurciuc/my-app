// FakeStore.tsx
import { useEffect, useState } from 'react';
import styles from './fakeStore.module.css';
import ProductCardStore from './productCardStore/ProductCardStore';

interface IProducts {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const FakeStore = () => {
  const [products, setProducts] = useState<IProducts[]>([]);

  async function getData() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    getData();
  }, []); 
  return (
    <div>
      <h1>FakeStore</h1>
      <div className={styles.container}>
        {products.map((product) => (
          <ProductCardStore
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FakeStore;
