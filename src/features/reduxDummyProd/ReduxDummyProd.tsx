import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getDummyProducts } from './reduxDummyProdAction'

export default function ReduxDummyProd() {

    const {productsDummy, isLoading, error} = useAppSelector(store => store.reduxProductsDummy)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getDummyProducts())
    }, [dispatch])

    return (
        <div>
            {isLoading && <h4>is loading...</h4>}
            {productsDummy.length > 0 && productsDummy.map(el => [
                <p key={el.id}>{el.title}</p>
            ])}
            {error && <p style={{color: 'red'}}>{error}</p>}
        </div>
    )
}
