import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const ReducedFormikFormWithYup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        password: Yup.string()
          .max(10, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Name: </label>
      <input
        type="string"
        {...formik.getFieldProps('name')}
        placeholder="Enter Your Name"
      />
      <br />
      {formik.touched.name && formik.errors.name ? (
        <div className="error">{formik.errors.name}</div>
      ) : null}

      <br />
      <label>Email: </label>
      <input
        type="string"
        {...formik.getFieldProps('email')}
        placeholder="Enter Your Email"
      />
      <br />
      {formik.touched.email && formik.errors.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}

      <br />
      <label>Password: </label>
      <input
        type="password"
        {...formik.getFieldProps('password')}
        placeholder="Enter Your password"
      />
      <br />
      {formik.touched.password && formik.errors.password ? (
        <div className="error">{formik.errors.password}</div>
      ) : null}

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ReducedFormikFormWithYup;