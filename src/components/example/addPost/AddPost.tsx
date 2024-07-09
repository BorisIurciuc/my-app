import { useFormik } from 'formik'
import React from 'react'

interface IInpput {
  id: number;
  title: string
}

const AddPost = () => {

  const formik = useFormik({
    initialValues: {
      title: '',
      id: 0
    } as IInpput, 
    onSubmit(values, {resetForm}) {
      console.log(values);
      resetForm()
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name='title'
        type="text" 
        placeholder='enter title'
        onChange={formik.handleChange}
        value={formik.values.title}
        
      />
      <button type='submit'>post</button>

    </form>
  )
}

export default AddPost