import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from "yup"
import Button from '../button/Button';
import styles from './auth.module.css'

interface IFormValues {
        username: string;
        password: string
}

interface IUserData {
    id: number;
    gender: string;
    username: string;
    firstName: string;
    image: string;
    email: string;
}

const initial = {
    id: 0,
    gender: '',
    username: '',
    firstName: '',
    image: '',
    email: ''
}

export const Auth = () => {

    const [userData, setUserData] = useState<IUserData>(initial)

    const schema = Yup.object().shape({
        username: Yup
            .string()
            .required('this field is required')
            .min(2, 'field Name minimum 2 sympols')
            .max(20, 'minimum 20 sympols'),
        password: Yup
            .string()
            .required('this field is required')
            .min(2, 'field password minimum 2 sympols')
            .max(20, 'minimum 20 sympols'),
    
    })
    
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        } as IFormValues,
        validationSchema: schema,
        validateOnChange: false,
        onSubmit: async (values: IFormValues, {resetForm}) => {
            console.log(values);
            const res = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: values.username,
                    password: values.password,
                  expiresInMins: 30, // optional, defaults to 60
                })
            })
            const data = await res.json()
            setUserData(data)
            resetForm()
        }
    })

  return (
    <div className={styles.container}>Auth2
        <p>emilys, emilyspass</p>
        <form onSubmit={formik.handleSubmit}>
            <input 
                type="text"
                placeholder='username'
                id='username'
                onChange={formik.handleChange}
                value={formik.values.username}
            />
            <input 
                type="password" 
                placeholder='password'
                id='password'
                onChange={formik.handleChange}
                value={formik.values.password}

            />
            <Button buttonType="submit" buttonText="send" disabled={false} />
            </form>
        <div>
            <p>{userData.username}</p>
            <p>{userData.firstName}</p>
            <img src={userData.image} alt={userData.image} />
        </div>
        <p>{formik.errors.username}</p>
        <p>{formik.errors.password}</p>
    </div>
  )
}

export default Auth;
