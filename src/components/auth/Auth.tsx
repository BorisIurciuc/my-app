import { useFormik } from 'formik';
import { useState } from 'react';

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
    refreshToken: string
    email: string;
}

const initial = {
    id: 0,
    gender: '',
    username: '',
    firstName: '',
    image: '',
    refreshToken: '',
    email: ''
}

export default function Auth() {

    const[userData, setUserData] = useState<IUserData>(initial)

        console.log();



    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        } as IFormValues,
        onSubmit: async (values: IFormValues, {resetForm}) => {
            console.log(values);
            
        const res = await fetch('https://dummyjson.com/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: values.username,
              password: values.password,
            })
          });
          const data = await res.json()
          setUserData(data);
            resetForm();
        }    
    })

  return (
    <div>
        <span>Formik auth</span>
        <p>username: emilys, password: emilyspass,</p>
        <form onSubmit={formik.handleSubmit}>
            <input
                name='username' 
                type="text" 
                placeholder='username'
                value={formik.values.username}
                onChange={formik.handleChange}
            />
            <input 
                name='password'
                type="text" 
                placeholder='password'
                value={formik.values.password}
                onChange={formik.handleChange}
            />
            <button type='submit'>log in</button>
        </form>
        {userData.firstName && (
            <>
                <p>{userData.firstName}</p>
                <p>{userData.gender}</p>
                <img src={userData.image} alt="" />

            </>
        )

        }

    </div>
  );
}
