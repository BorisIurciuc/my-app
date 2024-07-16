import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getProducts } from './reduxProductsAction'

export default function ReduxProducts() {
    const {products, isLoading, error} = useAppSelector(store => store.reduxProducts)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

  return (
    <div>
        <h3>ReduxProducts</h3>
        {isLoading && <h4>loading</h4>}
        {products && products.map(el => [
            <p>{el.title}</p>
        ])}
        {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  )
}
