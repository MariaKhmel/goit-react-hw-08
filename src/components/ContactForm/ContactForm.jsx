import { Formik, Field, Form, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { contactFormSchema } from "../../utils/schema";

const initialFormValues = { name: "", number: "" };

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
      validationSchema={contactFormSchema}
    >
      <Form className={css.form}>
        <label htmlFor="name" className={css.label}>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name">
            {(msg) => <div className={css.error}>{msg}</div>}
          </ErrorMessage>
        </label>
        <label htmlFor="number" className={css.label}>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number">
            {(msg) => <div className={css.error}>{msg}</div>}
          </ErrorMessage>
        </label>
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
