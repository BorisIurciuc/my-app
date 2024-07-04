import { useFormik } from 'formik'
import React from 'react'

interface IFormValues {
        username: string;
        password: string
}

export const Auth2 = () => {

    const formik = useFormik({
        initialValues: {
            username: 'emilys',
            password: 'password'
        } as IFormValues,
        onSubmit: (values: IFormValues) => {
            console.log(values);
            
        }
    })

  return (
    <div>Auth2
        <form onSubmit={formik.handleSubmit}>
            <input 
                type="text"
                placeholder='username'
                id='username'
                onChange={formik.handleChange}
                value={formik.values.username}
            />
            <input 
                type="text" 
                placeholder='password'
                id='password'
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <button type='submit'>send</button>
        </form>
    </div>
  )
}

export default Auth2;
