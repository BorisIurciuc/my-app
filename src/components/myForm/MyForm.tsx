import { useFormik } from "formik";
import { FC } from "react";
import styles from "./myForm.module.css";
import * as Yup from "yup";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import MyInput from "../myInput/MyInput";

interface IFormValues {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  agreemant: boolean
}

const schema = Yup.object().shape({
  firstName: Yup.string().required("firstname is requered "),
  lastName: Yup.string().required("firstname is requered "),
  age: Yup.number()
    .required("lastname is requered")
    .typeError("введи свой номер 🤔")
    .min(18, "только кому больше 18 лет")
    .max(150, "не обольщайся, уточни возраст"),
  email: Yup.string().email("не корректный формат").required("обязательный"),
  agreemant: Yup.boolean().oneOf([true], 'примите соглашение')
});

const MyForm: FC = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
    } as IFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: IFormValues) => {
      console.log(values);
      navigate("/");
    },
  });
  console.log(formik);

  const agreementError = formik.errors.agreemant

  return (
    <form onSubmit={formik.handleSubmit} className={styles.container}>
      <label htmlFor="это форма для робота"></label>
      <MyInput
        type="text"
        name="firstName"
        placeholder="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        error={formik.errors.firstName}
      />
      <MyInput
        type="text"
        name="lastName"
        placeholder="lasttName"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        error={formik.errors.lastName}
      />
      <MyInput
        type="text"
        name="age"
        placeholder="age"
        onChange={formik.handleChange}
        value={formik.values.age}
        error={formik.errors.age}
      />
      <MyInput
        type="text"
        name="email"
        placeholder="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <div>
        <label htmlFor="">Я согласен</label>
        <input 
          type="checkbox"
          checked={formik.values.agreemant} 
          name="agreement" 
          onChange={formik.handleChange}
          id=""
        />
        <span>{agreementError && agreementError}</span>
      </div>
      <Button buttonType="submit" buttonText="send" disabled={false} />
    </form>
  );
};

export default MyForm;
