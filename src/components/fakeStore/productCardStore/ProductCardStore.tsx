import { Link } from 'react-router-dom';
import Button from '../../button/Button';
import styles from './productCard.module.css';

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCardStore({ id, title, price, image }: IProductCardProps) {
  return (
    <div key={id} className={styles.card}>
      <h2>{title}</h2>
      <span>${price}</span>
      <img src={image} alt={title} />
      <div className={styles.buttonWrapper}>
        <Link to={String(id)}>
          <Button buttonText="to product" />
        </Link>
      </div>
    </div>
  );
}
