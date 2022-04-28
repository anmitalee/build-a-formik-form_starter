import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik';
import validator from 'validator';
function App() {
  // TODO: add a const called formik assigned to useFormik()
const formik = useFormik({
  initialValues: {
    emailField: '',
    pswField: ''
  },
  onSubmit: (values) => {
    alert("Login Successful");
  },
  validate: values =>{
    let errors = {};
    if (!values.emailField) errors.emailField = 'field required';
    else if (!validator.isEmail(values.emailField)) errors.emailField = 'username should be an email';
    if (!values.pswField) errors.pswField = 'field required';
    return errors;
  }
});
  return (
   <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here.
      </p>
      <div>
        <form onSubmit = {formik.handleSubmit}>
          <div>Email</div>
          <input name='emailField' type='text' onChange = {formik.handleChange} value={formik.values.emailField}/>
          {formik.errors.emailField ? <div style = {{color: 'red'}}>{formik.errors.emailField}</div>: null}
          <div>Password</div>
          <input name='pswField' type='text' onChange = {formik.handleChange} value={formik.values.pswField}/>
          {formik.errors.pswField ? <div style = {{color: 'red'}}>{formik.errors.pswField}</div>: null}
          <button type='submit'>Submit</button> 
        </form>
      </div>
    </div>
  );
}

export default App;
