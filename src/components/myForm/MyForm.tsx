import { useFormik } from "formik"
import { FC } from "react"
import styles from './myForm.module.css'

interface IFormValues {
    firstName: string;
    lastName: string;
    email: string
}

const MyForm: FC = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        } as IFormValues,
        onSubmit: (values: IFormValues) => {
            console.log(values);
            console.log('myName', values.firstName, values.lastName)
            console.log('my emai', values.email);
        }
    })
    console.log(formik);
    
    return (
        <form onSubmit={formik.handleSubmit} className={styles.container}>
            <input 
                type="text" 
                id="firstName"
                placeholder="firstName" 
                onChange={formik.handleChange} 
                value={formik.values.firstName}
            />
            <input                 
                type="text" 
                id="lastName"
                placeholder="lasttName" 
                onChange={formik.handleChange} 
                value={formik.values.lastName}
            />
            <input 
                type="text" 
                id="email"
                placeholder="email" 
                onChange={formik.handleChange} 
                value={formik.values.email}
            />
            <button type="submit">send data</button>
        </form>
    )
}

export default MyForm;