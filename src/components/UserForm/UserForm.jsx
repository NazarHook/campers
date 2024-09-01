import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './UserForm.module.css';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { reserveCamp } from '../../redux/transports/operations';

const initialValues = {
  name: '',
  email: '',
  date: null,
  comment: ''
};

const Schema = Yup.object({
  name: Yup.string().min(3, 'Name must be at least 3 characters').required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  date: Yup.date().required('Date is required'),
  comment: Yup.string().max(256, 'Comment cannot exceed 256 characters')
});

export default function UserForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Schema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        dispatch(reserveCamp(values));
        resetForm(); 
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.form}>
          <div className={css.headInfo}>
            <h3 className={css.mainText}>Book your campervan now</h3>
            <p className={css.secText}>Stay connected! We are always ready to help you.</p>
          </div>

          <Field
            className={css.input}
            placeholder="Name*"
            type="text"
            name="name"
          />
          <ErrorMessage name="name" component="div" className={css.error} />

          <Field
            className={css.input}
            placeholder="Email*"
            type="email"
            name="email"
          />
          <ErrorMessage name="email" component="div" className={css.error} />

          <div className={css.datePicker}>
            <ReactDatePicker
              className={css.input}
              placeholderText="Booking date*"
              dateFormat="dd/MM/yyyy"
              selected={values.date} 
              onChange={(date) => {
                setFieldValue('date', date); 
              }}
            />
            <ErrorMessage name="date" component="div" className={css.error} />
          </div>

          <Field
            className={css.input}
            as="textarea"
            placeholder="Comment"
            name="comment"
            rows="5"
          />
          <ErrorMessage name="comment" component="div" className={css.error} />

          <button className={css.btn} type="submit">Send</button>
        </Form>
      )}
    </Formik>
  );
}
