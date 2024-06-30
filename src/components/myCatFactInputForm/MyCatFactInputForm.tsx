import Button from '../button/Button'
import MyInput from '../myInput/MyInput'
import styles from './myCatFactInputForm.module.css'

export default function MyCatFactInputForm() {

    return(
        <div className={styles.form}>
            <MyInput type={'email'} placeholder={'add new fact'} label={'Add your fact about cat'}/>
            <Button buttonType={'submit'} buttonText={'submit'} />
        </div>
    )
}