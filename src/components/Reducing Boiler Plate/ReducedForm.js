import React from "react";
// import { useFormik } from "formik";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./../../App.css"
import * as Yup from "yup";
// import App from "../../App";

const ReducedForm = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       name: "",
  //       email: "",
  //       password: "",
  //     },
  //     validationSchema: Yup.object({
  //         name: Yup.string()
  //           .max(15, 'Must be 15 characters or less')
  //           .required('Required'),
  //         password: Yup.string()
  //           .max(10, 'Must be 20 characters or less')
  //           .required('Required'),
  //         email: Yup.string().email('Invalid email address').required('Required'),
  //       }),
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values, null, 2));
  //       console.log(values);
  //     },
  //   });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label>Name: </label>
        <Field type="string" name="name" placeholder="Enter Your Name" />
        <br />
        <ErrorMessage name="name" className="error" />
        <br />
        <label>Email: </label>
        <Field type="string" name="email" placeholder="Enter Your Email" />
        <br />
        <ErrorMessage name="email" className="error" />
        <br />
        <label>Password: </label>
        <Field
          type="password"
          name="password"
          placeholder="Enter Your password"
        />
        <br />
        <ErrorMessage name="password" className="error" />
        <br />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ReducedForm;