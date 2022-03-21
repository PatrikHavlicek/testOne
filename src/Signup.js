import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  /* const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(''); */

  /*  Git change */
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 char or less')
        .required('Required'),
      lastName: Yup.string()
        .max(10, 'Must be 10 char or less')
        .required('Required'),
      email: Yup.string().max('Invalid email adress').required('Required'),
    }),
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : null}
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p>{formik.errors.lastName}</p>
        ) : null}
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
