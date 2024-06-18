
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
//import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
//import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsOps";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Your name is too Short!")
    .max(50, "Your name is too Long!")
    .required("Name is required"),
  number: Yup.string()
    .min(3, "Your number is too Short!")
    .max(50, "Your number is too Long!")
    .required("Number is required"),
});

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  // const onAddContact = (newContact) => {
  //   const finalContact = { ...newContact };
  //   dispatch(addContact(finalContact));
  // };

  const handleSubmit = (values, actions) => {
    dispatch(addContact({
      ...values,
     /* id: nanoid()*/
    }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={FeedbackSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <div className={css.formGroup}>
          <label htmlFor="name">Name:</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
          <ErrorMessage component="p" name="name" />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="number">Number:</label>
          <Field
            type="tel"
            id="number"
            name="number"
            placeholder="Enter your phone number"
          />
          <ErrorMessage component="p" name="number" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;




