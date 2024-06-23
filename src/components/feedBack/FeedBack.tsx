import { useState } from "react"
import Button from "../button/Button";
import './feedBack.css'

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
        <div className="containerFeedBack">
            <h3>Feedback form</h3>
            <div className="containerLike">
                <Button onClick={addLike} buttonText={'like'} buttonType={'button-primary'}/>
                <h3>{like}</h3> 
            </div>
            <div className="containerLike">
                <Button onClick={addDislike} buttonText={'dislike'} buttonType={'button-danger'}/>
                <h2>{dislike}</h2> 
            </div>
            <Button onClick={reserResulta} buttonText={'reset'}  buttonType={'neutral'}/>
        </div>
    )
}
