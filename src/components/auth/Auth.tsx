import { useFormik } from 'formik'
import { useState } from 'react'
import * as Yup from "yup"
import Button from '../button/Button';
import styles from './auth.module.css'
import { Link } from 'react-router-dom';
import MyInput from '../myInput/MyInput';

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

const initial: IUserData = {
    id: 0,
    gender: '',
    username: '',
    firstName: '',
    image: '',
    email: ''
}

export const Auth = () => {

    const [userData, setUserData] = useState<IUserData>(initial)
    const [isLoading, setIsLoding] = useState(false)

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
            setIsLoding(true)
            // navigate('/')
        }
    })

  return (
    <div className={styles.container}>
        <h1>Authentication</h1>
        <p>emilys, emilyspass</p>
        <form onSubmit={formik.handleSubmit}>
            <MyInput 
                type="text"
                placeholder='username'
                name='username'
                onChange={formik.handleChange}
                value={formik.values.username}
                error={formik.errors.username}
            />
            <MyInput 
                type="password" 
                placeholder='password'
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.errors.password}
            />
            <Button buttonType="submit" buttonText="send" disabled={false} />
            </form>
            {isLoading && 
                <div className={styles.output}>
                    <h4>{userData.firstName}</h4>
                    <p>{userData.username}</p>
                    <p>{userData.email}</p>
                    <p>{userData.gender}</p>
                    {userData.image && <img src={userData.image} alt={userData.username} />}        
                </div>
            }
        <Link to={'/'}>home</Link>
    </div>
  )
}
export default Auth;
