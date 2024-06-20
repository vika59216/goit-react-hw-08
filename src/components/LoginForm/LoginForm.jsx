import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./LoginForm.module.css"
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const loginUserSchema = Yup.object().shape({
    email: Yup.string()
    .min(10, "Your email is too Short!")
    .max(50, "Your email is too Long!")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Your password is too Short!")
    .max(50, "Your password is too Long!")
    .required("Password is required"),
  });
  
  const FORM_INITIAL_VALUES = {
    email: "",
    password: "",
  };
const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
      dispatch(login(values));
      actions.resetForm();
      };

  return (
    <div>
        <h2>Login user</h2>
        <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={loginUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <div className={css.formGroup}>
          <label htmlFor="email">Email:</label>
          <Field
            type="tel"
            id="email"
            name="email"
            placeholder="Enter your phone email"
          />
          <ErrorMessage component="p" name="email" />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="email">Password:</label>
          <Field
            type="tel"
            id="password"
            name="password"
            placeholder="Enter your phone password"
          />
          <ErrorMessage component="p" name="password" />
        </div>
        <button type="submit">Sign in</button>
      </Form>
    </Formik>
    </div>
  )
}

export default LoginForm