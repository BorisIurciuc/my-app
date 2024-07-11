import React from 'react'
import { IProduct } from "../type/IProduct";
import styles from './dummyProductCard.module.css'
import { Link } from 'react-router-dom';
import Button from '../../button/Button';

export default function DummyProductCard({id, title, thumbnail, price}: IProduct) {
  return (
    <div className={styles.containerProductCard}>
    <li key={id}>
                        <h4>{title}</h4>
                        <img src={thumbnail} alt={title} />
                        <p>price: {price}€</p>
                        <Link to={String(id)}>
                            <Button buttonText='to product'></Button>
                        </Link>
                    </li>

    </div>
  )
}
