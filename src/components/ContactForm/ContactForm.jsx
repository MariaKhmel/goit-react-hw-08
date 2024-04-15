import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const initialFormValues = { name: "", number: "" };

const schema = Yup.object({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const onHandleForm = (values) => {
    const { name, number } = values;
    dispatch(
      addContact({
        name,
        number,
      })
    );
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={(values, { resetForm }) => {
        onHandleForm(values);
        resetForm();
      }}
      validationSchema={schema}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name">
          {(msg) => <div className={css.error}>{msg}</div>}
        </ErrorMessage>

        <label htmlFor="number">Number</label>
        <Field type="tel" name="number" />
        <ErrorMessage name="number">
          {(msg) => <div className={css.error}>{msg}</div>}
        </ErrorMessage>

        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
