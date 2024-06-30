import { useState } from "react"
import styles from './feedBack.module.css'
import Button from "../button/Button";

export default function FeedBack() {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    const addLike = () => {
        setLike(count => count + 1)
    }
    const addDislike = () => {
        setDislike(count => count + 1)
    }
    const reserResulta = () => {
        setLike(0);
        setDislike(0);
    }

    return (
        <div className={styles.containerFeedBack}>
            <h3>Feedback form</h3>
            <div className={styles.containerLike}>
                <Button onButtonClick={addLike} buttonText={'like'} />
                <h3>{like}</h3> 
            </div>
            <div className={styles.containerLike}>
                <Button onButtonClick={addDislike} buttonText={'dislike'} />
                <h2>{dislike}</h2> 
            </div>
            <Button onButtonClick={reserResulta} buttonText={'reset'} />
        </div>
    )
}
