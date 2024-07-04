import { useFormik } from "formik";
import { FC } from "react";
import styles from "./myForm.module.css";
import * as Yup from "yup";
import Button from "../button/Button";

interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const MyForm: FC = () => {
  const schema = Yup.object().shape({
    firstName: Yup
        .string()
        .required("firstname is requered "),
    lastName: Yup
        .number()
        .typeError("введи свой номер 🤔")
        .required("lastname is requered")
        .min(100, "твоя модель с номера 100")
        .max(1000, "ты не такой новый"),
    email: Yup.string().email("не корректный формат").required("обязательный"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    } as IFormValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: IFormValues) => {
      console.log(values);
    },
  });
  console.log(formik);

  return (
    <form onSubmit={formik.handleSubmit} className={styles.container}>
      <label htmlFor="это фопма для робота"></label>
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
      <Button buttonType="submit" buttonText="send" disabled={false} />
      <span>{formik.errors.email}</span>
      <span>{formik.errors.firstName}</span>
      <span>{formik.errors.lastName}</span>
    </form>
  );
};

export default MyForm;
