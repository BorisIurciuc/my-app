import { useState } from "react"
import styles from './counnterArray.module.css'
export default function CountArray() {

    const [arr, setArr] = useState<string[]>([]);
    
    console.log(arr);
    const addItem = () => {
        setArr([...arr, 'item'])
    };

    const removeItem = () => {
        setArr(arr.slice(0, arr.length - 1))
    }
    return (
        <div className={styles.counterArr}>
            <h3>Count array</h3>
            <button onClick={addItem}> item</button>
            <ul>
                {arr.map((el, index) => (
                    <li key={index}>{el}</li>
                ))}
            </ul>
            <button onClick={removeItem}>remove</button>
        </div>
    )
}
