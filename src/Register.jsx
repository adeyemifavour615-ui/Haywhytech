import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
    }),
    onSubmit: (values) => {
      console.log('Registration Data Submitted:', values);
      alert('Registration successful! You can now switch to the login screen.');
    },
  });

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <div style={styles.inputGroup}>
          <label htmlFor="username" style={styles.label}>Username</label>
          <input id="username" name="username" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} style={styles.input} />
          {formik.touched.username && formik.errors.username ? <div style={styles.error}>{formik.errors.username}</div> : null}
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="registerEmail" style={styles.label}>Email Address</label>
          <input id="registerEmail" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} style={styles.input} />
          {formik.touched.email && formik.errors.email ? <div style={styles.error}>{formik.errors.email}</div> : null}
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="registerPassword" style={styles.label}>Password</label>
          <input id="registerPassword" name="password" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} style={styles.input} />
          {formik.touched.password && formik.errors.password ? <div style={styles.error}>{formik.errors.password}</div> : null}
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
          <input id="confirmPassword" name="confirmPassword" type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} style={styles.input} />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div style={styles.error}>{formik.errors.confirmPassword}</div> : null}
        </div>
        <button type="submit" style={styles.button}>Create Account</button>
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
  button: { width: '100%', padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }
};

export default Register;