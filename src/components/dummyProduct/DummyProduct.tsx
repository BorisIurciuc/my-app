import { useEffect, useState } from 'react'
import { IProduct } from './type/IProduct';
import styles from './dummyProduct.module.css'
import DummyProductCard from './dummyProductCard/DummyProductCard';


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
                    <DummyProductCard 
                        id={product.id} 
                        title={product.title}
                        thumbnail={product.thumbnail}/>
                ))}
        </ul>
    </div>
  )
}

export default DummyProduct;
