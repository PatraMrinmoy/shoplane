import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginPage = () => {
  // initail value
  const initialValues = {
    email: "",
    password: "",
  };

  // onSumit
  const onSubmit = (values) => {
    console.log(values);
  };

  // validate
  // const validate = (values) => {
  //     let errors  ={};

  //     if(!values.email){
  //         errors.email = 'email is required';
  //     }else if(){

  //     }

  // }

  // validationSchema
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("invalid email address"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be 6 char long"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="wrapper">
            <h2>Login</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">{formik.errors.password}</small>
                ) : null}
              </div>
              <Link to='/' button  type="button" class="btn btn-primary btn-block mb-4" >Login</Link>
            </form>
            <br />
            <p className="text-center">
              New User? <Link to="/signup">Click Here</Link>
            </p>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};
export default LoginPage;