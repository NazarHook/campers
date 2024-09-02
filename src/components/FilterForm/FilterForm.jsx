import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import css from './FilterForm.module.css';
import sprite from '../../assets/sprite.svg';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { changeBody, changeFilter, changeOption } from '../../redux/filters/slice';
import { selectBodyTypes, selectFilterName, selectOptionFilters } from '../../redux/filters/selectors';
import toast, { Toaster } from 'react-hot-toast';

const locationId = nanoid();
const equipmentValues = [
  { name: 'AC', icon: '#icon-wind' },
  { name: 'Automatic', icon: '#icon-diagram' },
  { name: 'Kitchen', icon: '#icon-cup' },
  { name: 'TV', icon: '#icon-tv' },
  { name: 'Bathroom', icon: '#icon-droplet' },
];
const bodyTypeValues = [
  { name: 'Van', icon: '#icon-grid3' },
  { name: 'Fully', icon: '#icon-grid4' },
  { name: 'Alcove', icon: '#icon-grid9' },
];

const Schema = Yup.object().shape({
  location: Yup.string().min(3, 'Too Short!').max(50, 'Too Long!'),
  equipment: Yup.object().shape({
    AC: Yup.boolean(),
    Automatic: Yup.boolean(),
    Kitchen: Yup.boolean(),
    TV: Yup.boolean(),
    Bathroom: Yup.boolean(),
  }),
  body: Yup.object().shape({
    van: Yup.boolean(),
    fully: Yup.boolean(),
    alcove: Yup.boolean(),
  }),
});

export default function FilterForm() {
  const dispatch = useDispatch();
  const location = useSelector(selectFilterName);
  const equipment = useSelector(selectOptionFilters);
  const body = useSelector(selectBodyTypes);

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: 'red',
              secondary: 'black',
            },
          },
        }}
      />
      <Formik
        initialValues={{
          location: location,
          equipment: equipment,
          body: body,
        }}
        validationSchema={Schema}
        onSubmit={(values, { resetForm }) => {
          if (values.location.trim() === "") {
            toast.error('Location is required');
            return
          }
          dispatch(changeFilter(values.location));
          dispatch(changeOption(values.equipment));
          dispatch(changeBody(values.body));
          resetForm();
        }}
      >
        <Form className={css.form}>
          <label className={css.locationLabel} htmlFor={locationId}>Location</label>
          <div className={css.inputWrapper}>
            <svg className={css.iconMap}>
              <use xlinkHref={`${sprite}#iconMap`}></use>
            </svg>
            <Field
              className={css.locationInput}
              type="text"
              name="location"
              placeholder='City'
              id={locationId}
            />
          </div>
          <span className={css.spanFilter}>Filters</span>
          <label className={css.labelEquipment}>Vehicle Equipment</label>
          <div className={css.checkboxGroup}>
            {equipmentValues.map((obj) => (
              <label key={obj.name} className={css.checkboxLabel}>
                <Field
                  type="checkbox"
                  name={`equipment.${obj.name}`}
                  className={css.checkbox}
                />
                <span className={css.customCheckbox}>
                  <svg width="32" height="32" className={css.iconCatalog}>
                    <use xlinkHref={`${sprite}${obj.icon}`}></use>
                  </svg>
                  {obj.name}
                </span>
              </label>
            ))}
          </div>

          <label className={css.labelEquipment}>Vehicle Body Type</label>
          <div className={css.checkboxGroup}>
            {bodyTypeValues.map((obj) => (
              <label key={obj.name} className={css.checkboxLabel}>
                <Field
                  type="checkbox"
                  name={`body.${obj.name}`}
                  className={css.checkbox}
                />
                <span className={css.customCheckbox}>
                  <svg width="32" height="32" className={css.iconCatalog}>
                    <use xlinkHref={`${sprite}${obj.icon}`}></use>
                  </svg>
                  {obj.name}
                </span>
              </label>
            ))}
          </div>
          <button type="submit" className={css.submitButton}>Submit</button>
        </Form>
      </Formik>
    </>
  );
}
