import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { loginFormSchema } from "../../utils/schema";
import css from "./LoginForm.module.css";
import { fetchContacts } from "../../redux/contacts/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialFormValues = { email: "", password: "" };

  const handleFormSubmit = (values) => {
    const { email, password } = values;
    dispatch(
      login({
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Logged in successfully!");
        dispatch(fetchContacts());
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid email or password");
      });
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={(values, { resetForm }) => {
        handleFormSubmit(values);
        resetForm();
      }}
      validationSchema={loginFormSchema}
    >
      <Form className={css.loginForm}>
        <label htmlFor="email" className={css.label}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email">
            {(msg) => <div className={css.error}>{msg}</div>}
          </ErrorMessage>
        </label>
        <label htmlFor="number" className={css.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password">
            {(msg) => <div className={css.error}>{msg}</div>}
          </ErrorMessage>
        </label>
        <button type="submit" className={css.formBtn}>
          Log in
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
