import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteDummyProduct, getDummyProducts } from './reduxDummyProdAction';
import styles from './reduxDummyProd.module.css';

export default function ReduxDummyProd() {
    const { productsDummy, isLoading, error } = useAppSelector(store => store.reduxProductsDummy);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getDummyProducts());
    }, [dispatch]);

    const handleDelete = (id: number) => {
        dispatch(deleteDummyProduct(id));
    };

    return (
        <div className={styles.containerProductDummy}>
            <h2>Dummy products (Redux)</h2>
            <ul>
                {isLoading && <h4>is loading...</h4>}
                {productsDummy.length > 0 && productsDummy.map(el => (
                    <li key={el.id}>
                        <h4>{el.title}</h4>
                        <img src={el.thumbnail} alt={el.title} />
                        <p>{el.price}</p>
                        <button type='button' onClick={() => handleDelete(el.id)}>
                            delete
                        </button>
                    </li>
                ))}
            </ul>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
