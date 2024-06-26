import Button from "../../components/button/Button";
import style from './homework09.module.css'

export default function Homework09() {

    return (
        <div className={style.container}>
            <h1>Homework09</h1>
            <Button buttonText='Disabled' disabled={true}/>
            <Button buttonText='Active' disabled={false}/>

        </div>
    )
}