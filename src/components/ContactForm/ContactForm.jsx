import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const telId = useId();

  const handleSubmit = (values) => {
    dispatch(addContact(values));
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validate={validateForm}
    >
      <Form className={css.contactForm}>
        <div className={css.formField}>
          <label htmlFor={nameId}>Name</label>
          <Field name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formField}>
          <label htmlFor={telId}>Phone</label>
          <Field name="number" id={telId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

const validateForm = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 50) {
    errors.name = "Too long!";
  }

  if (!values.number) {
    errors.number = "Required";
  } else if (isNaN(values.number)) {
    errors.number = "Must be a number";
  }

  return errors;
};
