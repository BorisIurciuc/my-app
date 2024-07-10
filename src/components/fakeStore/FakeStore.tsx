import { useEffect, useState } from 'react'
import styles from './fakeStore.module.css'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
import ProductCardStore from './productCardStore/ProductCardStore'

export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}

 const FakeStore = () => {

    const [products, setProducts] = useState<IProduct[]>([])

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    setProducts(data)
    
}
useEffect(() => {
    getData()
    console.log(products);
},[products])

  return (
    <div>
        <h1>FakeStore</h1>
        <div className={styles.container}>
            {products.map((product) => (
                <div className={styles.card}>
                    <h2>{product.title}</h2>
                    <span>{product.price}</span>
                    {/* <p>{product.description}</p>
                    <span>{product.category}</span> */}
                    <img src={product.image} alt={product.title} />
                    <div className='buttonWrapper'>
                    <Link to={String(product.id)}><ProductCardStore id={product.id} title={product.title} price={product.price}/></Link>
                    <Link to={String(product.id)}><Button buttonText='to product'></Button></Link>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}
export default FakeStore
