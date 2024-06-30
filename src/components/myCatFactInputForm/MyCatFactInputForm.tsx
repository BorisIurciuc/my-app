import React, { useState } from 'react'
import Button from '../button/Button'
import MyInput from '../myInput/MyInput'
import styles from './myCatFactInputForm.module.css'

export default function MyCatFactInputForm() {

    const [isFormVisible, setFormVisible] = useState<boolean>(true)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setFormVisible(false);
    }

    return(
        <>
            {isFormVisible && (
            <form className={styles.form} onSubmit={handleSubmit}>
                <MyInput type={'text'} placeholder={'add new fact'} label={'Add your fact about cat'}/>
                <Button buttonType={'submit'} buttonText={'submit'} />
            </form>
            )}
        </>
    )
}