import { useFormik } from "formik";
import React, { useState } from "react";
import styles from "./loginUser.module.css";

interface IInputLoginUser {
  username: string;
  password: string;
}

interface IUserData {
  username: string;
  email: string;
  image: string;
}

const LoginUser = () => {
  const [userData, setUserData] = useState<IUserData | undefined>(undefined);

  async function sendData(values: IInputLoginUser) {
    const res = await fetch("https://dummyjson.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    });
    const data = await res.json();
    setUserData(data);
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    } as IInputLoginUser,
    onSubmit: (values) => {
      sendData(values);
    },
  });

  return (
    <div className={styles.container}>
      <h3>LoginUser</h3>
      <p>username: emilys, password: emilyspass,</p>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          type="text"
          id="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <input
          type="password"
          id="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">send</button>
      </form>
      <div className={styles.output}>
        <p>{userData?.username}</p>
        <p>{userData?.email}</p>
        <img src={userData?.image} alt="img" />
      </div>
    </div>
  );
};
export default LoginUser;
