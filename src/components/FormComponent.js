import React from 'react';
import { Formik, Form, Field } from 'formik';

const initialValues = {
  name: '',
  id: '',
  projectId: '',
  shore: '',
  location: '',
  skills: [],
  profile: '',
  comments: '',
};
const radioValues = [
  {
    id: 1,
    value: 'on',
    label: 'Onshore',
    isChecked: false,
  },
  {
    id: 2,
    value: 'off',
    label: 'Offshore',
    isChecked: false,
  },
];
const checkBoxValues = [
  {
    id: 1,
    value: 'html',
    label: 'HTML5,CSS3,JS',
    isChecked: false,
  },
  {
    id: 2,
    value: 'angular',
    label: 'Angular 8',
    isChecked: false,
  },
  {
    id: 3,
    value: 'express',
    label: 'Express Js',
    isChecked: false,
  },
  {
    id: 4,
    value: 'sass',
    label: 'SASS',
    isChecked: false,
  },
  {
    id: 5,
    value: 'react',
    label: 'React JS',
    isChecked: false,
  },
  {
    id: 6,
    value: 'node',
    label: 'Node JS',
    isChecked: false,
  },
  {
    id: 7,
    value: 'es',
    label: 'ES5,ES6,ES7',
    isChecked: false,
  },
  {
    id: 8,
    value: 'veu',
    label: 'Veu JS',
    isChecked: false,
  },
  {
    id: 9,
    value: 'mongodb',
    label: 'Mongo DB',
    isChecked: false,
  },
  {
    id: 10,
    value: 'bootstrap',
    label: 'Bootstrap 4',
    isChecked: false,
  },
  {
    id: 11,
    value: 'ts',
    label: 'TypeScript',
    isChecked: false,
  },
];

const validateName = (value) => {
  let error;
  let alpha = /^[a-zA-Z ]*$/;
  if (!value) {
    error = 'Please Enter the Associate Name.';
  } else if (!alpha.test(value)) {
    error = 'Accepts Alphabets, space';
  } else if (value.length < 5 || value.length > 30) {
    error = 'Min 5 to Max 30 Character';
  }
  return error;
};
const validateId = (value) => {
  let error;
  let numeric = /^[0-9]*$/;
  if (!value) {
    error = ' Please Enter the Associate Id.';
  } else if (!numeric.test(value)) {
    error = 'Invalid Associate Id, Accepts only number';
  } else if (value.length < 6 || value.length > 6) {
    error = ' Invalid Associate Id, It has to be 6 digit';
  }
  return error;
};
const validateProjectId = (value) => {
  let error;
  let alphaNumeric = /^[a-zA-Z0-9]*$/;
  if (!value) {
    error = ' Please Enter the Project Id.';
  } else if (!alphaNumeric.test(value)) {
    error = 'Invalid Project ID, Accepts Alphabets & Number';
  } else if (value.length < 12 || value.length > 12) {
    error = 'Invalid Project Id, It has to be 12 digit';
  }
  return error;
};
const validateLocation = (value) => {
  let error;
  if (!value) {
    error = 'Please select the location.';
  }
  return error;
};
const validateSkills = (value) => {
  let error;
  if (value.length < 5) {
    error = ' Please select minimum 5 skills';
  }
  return error;
};
const validateComments = (value) => {
  let error;
  if (!value) {
    error = ' Please Enter Comments';
  }
  return error;
};
const validateProfile = (value) => {
  let error;
  if (!value) {
    error = ' Please Upload Profile Picture';
  }
  return error;
};
const onSubmit = (values, props) => {
  console.log(values);
  console.log(props);
  setTimeout(() => {
    props.resetForm();
    props.setSubmitting(false);
  }, 1000);
};
const resetForm = () => {
  console.log('Reset Clicked');
};

const FormComponent = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        onReset={resetForm}
      >
        {({ errors, touched, values }) => (
          <Form>
            <div className="mb-3">
              <Field
                name="name"
                className="form-control"
                validate={validateName}
                placeholder="Associate Name"
              />
              {errors.name && touched.name && (
                <div className="text-danger small">{errors.name}</div>
              )}
            </div>
            <div className="mb-3">
              <Field
                name="id"
                className="form-control"
                validate={validateId}
                placeholder="Associate Id"
              />
              {errors.id && touched.id && (
                <div className="text-danger small">{errors.id}</div>
              )}
            </div>
            <div className="mb-3">
              <Field
                name="projectId"
                className="form-control"
                validate={validateProjectId}
                placeholder="Project Id"
              />
              {errors.projectId && touched.projectId && (
                <div className="text-danger small">{errors.projectId}</div>
              )}
            </div>
            <div className="radio-btn mb-1">
              {radioValues.map((radio) => {
                return (
                  <div className="form-check" key={radio.id}>
                    <Field
                      type="radio"
                      className="form-check-input"
                      name="shore"
                      value={radio.value}
                    />
                    <label className="form-check-label">{radio.label}</label>
                  </div>
                );
              })}
            </div>
            <div className="mb-3">
              {values.shore === 'on' ? (
                <Field
                  as="select"
                  className="form-select"
                  name="location"
                  value={values.location}
                  validate={validateLocation}
                >
                  <option defaultValue={true}>Select location</option>
                  <option value="us">US</option>
                  <option value="non us">Non US</option>
                </Field>
              ) : (
                <Field
                  as="select"
                  className="form-select"
                  value={values.location}
                  name="location"
                  validate={validateLocation}
                >
                  <option defaultValue={true}>Select location</option>
                  <option value="chennai">Chennai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="pune">Pune</option>
                  <option value="hydrabad">Hydrabad</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="kochi">Kochi</option>
                </Field>
              )}
              {errors.location && touched.location && (
                <div className="text-danger small">{errors.location}</div>
              )}
            </div>
            <div className="row mb-3">
              {checkBoxValues.map((check) => {
                return (
                  <div className="col-4" key={check.id}>
                    <Field
                      type="checkbox"
                      className="form-check-input mr-1"
                      name="skills"
                      value={check.value}
                      validate={validateSkills}
                    />
                    <label className="form-check-label">{check.label}</label>
                  </div>
                );
              })}
              {errors.skills && touched.skills && (
                <div className="text-danger small">{errors.skills}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="file" className="form-label">
                Upload Profile
              </label>
              <Field
                name="profile"
                type="file"
                className="form-control"
                validate={validateProfile}
              />
              {errors.profile && touched.profile && (
                <div className="text-danger small">{errors.profile}</div>
              )}
            </div>
            <div className="mb-3">
              <Field
                name="comments"
                rows="3"
                component="textarea"
                className="form-control"
                validate={validateComments}
                placeholder="Comments"
              />
              {errors.comments && touched.comments && (
                <div className="text-danger small">{errors.comments}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary mr-2">
              Submit
            </button>
            <button type="reset" className="btn btn-danger">
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormComponent;
