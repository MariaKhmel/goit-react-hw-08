import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { registrationFormSchema } from "../../utils/schema";
import css from "./RegistrationForm.module.css";

const initialFormValues = { email: "", password: "", name: "" };

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (values) => {
    const { email, name, password } = values;

    dispatch(
      register({
        name,
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Registered successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong... Please try again.");
      });
  };
  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={(values, { resetForm }) => {
        handleFormSubmit(values);
        resetForm();
      }}
      validationSchema={registrationFormSchema}
    >
      <Form className={css.registrationForm}>
        <label htmlFor="name" className={css.label}>
          Username
          <Field type="name" name="name" />
          <ErrorMessage name="name">
            {(msg) => <div className={css.error}>{msg}</div>}
          </ErrorMessage>
        </label>
        <label htmlFor="number" className={css.label}>
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
        <button type="submit">Register</button>
      </Form>
    </Formik>

    // <form autoComplete="off" onSubmit={handleFormSubmit}>
    //   <label htmlFor="name">
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label htmlFor="email">
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label htmlFor="password">
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
  );
};
export default RegistrationForm;
