import { useEffect, useState } from 'react'
import styles from './lesson1002.module.css'

interface ICat {
    fact: string;
}

interface IImgCat{
    url: string;
}

export default function Lesson1002() {

   const [factCat, setFactCat] = useState<ICat[]>([])
   const [imgCat, setImgCat] = useState<IImgCat[]>([])
   const [isLoading, setIsLoading] = useState<boolean>(false)

    async function getInfoCat() {
        setIsLoading(true)
        const res = await fetch('https://catfact.ninja/fact')
        const data = await res.json()
        setFactCat(prev => [...prev, data])
        setIsLoading(false)
    }

    async function getImageCat() {
            const res = await fetch ('https://api.thecatapi.com/v1/images/search')
            const data = await res.json()
            setImgCat(data)
            setIsLoading(false)
    }

    const resetCatCard = () => {
        setFactCat([])
    }
    useEffect(() => {
        getInfoCat()
        getImageCat()
    }, [])    
    
    return (
        <div className={styles.container1002}>

            <h1>Lesson1002</h1>
            <button onClick={() => {
                getInfoCat();
                getImageCat();
                }} >more</button>

            <button onClick={resetCatCard}>reset</button>
            {isLoading && <p>is loading</p>}
            { ( !isLoading || imgCat.length === 0 ) && ( 
                <>
                <ul>
                    {factCat.map((el, index) => (
                        <li key={index}>
                            <p>{el.fact}</p>
                        </li>
                    ))}
                </ul>
                <ol>
                    {imgCat.map((el, index) => (
                        <li key ={index}>
                            <img src={el.url} alt={'cat'} />
                        </li>
                    ))}
                </ol>
                </>
                )
                
            }
        </div>
    )
}