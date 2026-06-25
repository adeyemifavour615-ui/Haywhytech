import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = ({ onLoginSuccess }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Login Data Submitted:', values);
      onLoginSuccess(values.email);
    },
  });

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email Address</label>
          <input id="email" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} style={styles.input} />
          {formik.touched.email && formik.errors.email ? <div style={styles.error}>{formik.errors.email}</div> : null}
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password</label>
          <input id="password" name="password" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} style={styles.input} />
          {formik.touched.password && formik.errors.password ? <div style={styles.error}>{formik.errors.password}</div> : null}
        </div>
        <button type="submit" style={styles.button}>Sign In</button>
      </form>
    </div>
  );
};

const styles = {
  card: { maxWidth: '360px', width: '100%', minWidth: '280px', padding: '25px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  title: { marginTop: 0, textAlign: 'center', color: '#333' },
  inputGroup: { marginBottom: '15px' },
  label: { display: 'block', marginBottom: '5px', fontWeight: '500', color: '#555' },
  input: { width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' },
  error: { color: '#dc3545', fontSize: '12px', marginTop: '5px' },
  button: { width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
};

export default Login;