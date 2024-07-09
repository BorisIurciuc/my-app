import { useEffect, useState } from 'react'
import { IProduct } from './type/IProduct';
import styles from './dummyProduct.module.css'
import { Link } from 'react-router-dom';
import Button from '../button/Button';


 const DummyProduct = () => {

    const [allProducts, setAllProducts] = useState<IProduct[]>([])

    async function getAllProducts() {

        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        setAllProducts(data.products)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

  return (
    <div className={styles.containerProductDummy}>
        <h1>DummyProduct</h1>
        <ul>
            {allProducts.map(product => (
                    <li key={product.id}>
                        <h4>{product.title}</h4>
                        {product.category}
                        <img src={product.thumbnail} alt={product.title} />
                        <p>price: {product.price}€</p>
                        <Link to={String(product.id)}>
                            <Button buttonText='to product'></Button>
                        </Link>
                    </li>
                ))}
        </ul>
    </div>
  )
}

export default DummyProduct;
