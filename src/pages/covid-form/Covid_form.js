import React from "react";
import "./Covid_form.css";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import { Select } from "./select";
import * as Yup from "yup";

const binaryOption = ["yes", "no"];
const genderOptions = ["male", "female", "transgender"];
const bpOptions = ["high", "low"];

const SignupValidation = Yup.object().shape({
  firstName: Yup.string()
    .max(50, "must be 50 characters or less")
    .required("Required"),

  lastName: Yup.string()
    .max(50, "must be 50 characters or less")
    .required("Required"),

  gender: Yup.string().required("Required").oneOf(genderOptions),

  age: Yup.number()
    .typeError("Age must be a number")
    .min(18, "age must be equal to or greator than 18 years old.")
    .max(60, "age must be less than 60 years.")
    .required(),

  bloodPressure: Yup.string().required("Required").oneOf(bpOptions),

  allergicReaction: Yup.string().required("Required").oneOf(binaryOption),

  diabetic: Yup.string().required("Required").oneOf(binaryOption),

  seizures: Yup.string().required("Required").oneOf(binaryOption),
});

const Covid_form = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        gender: "",
        age: new Int16Array(),
        bloodPressure: "",
        allergicReaction: "",
        diabetic: "",
        seizures: "",
        hiv: "",
      }}
      validationSchema={SignupValidation}
    >
      {({ errors, touched, ...formik }) => (
        <div className="body">
          <div className="container">
            <h1 className="head">Covid Form</h1>
            {console.log("Form Values: ", formik)}
            <Form className="censtyl">
              <div className="box">
                <TextField
                  className="input"
                  errors={errors}
                  touched={touched}
                  label="First Name"
                  name="firstName"
                />

                <TextField
                  className="input"
                  errors={errors}
                  touched={touched}
                  label="Last Name"
                  name="lastName"
                />
                <TextField
                  className="input"
                  errors={errors}
                  touched={touched}
                  label="age"
                  name="age"
                />
                <Select
                  className="input"
                  mainLabel="Gender"
                  optionValues={genderOptions}
                  optionLabels={genderOptions}
                  formik={formik}
                  name="gender"
                  value={formik.values.gender}
                />
                <Select
                  className="input"
                  mainLabel="Blood Pressure"
                  optionValues={bpOptions}
                  optionLabels={bpOptions}
                  formik={formik}
                  name="bloodPressure"
                  value={formik.values.bloodPressure}
                />

                <Select
                  className="input"
                  mainLabel="Are you alergic to anything?"
                  optionValues={binaryOption}
                  optionLabels={binaryOption}
                  formik={formik}
                  name="allergicReaction"
                  value={formik.values.allergicReaction}
                />

                <Select
                  className="input"
                  mainLabel="Are you diabetic?"
                  optionValues={binaryOption}
                  optionLabels={binaryOption}
                  formik={formik}
                  name="diabetic"
                  value={formik.values.diabetic}
                />

                <Select
                  className="input"
                  mainLabel="Have you ever had Seizures?"
                  optionValues={binaryOption}
                  optionLabels={binaryOption}
                  formik={formik}
                  name="seizures"
                  value={formik.values.seizures}
                />

                <Select
                  className="input"
                  mainLabel="Have you ever diagnosed with AIDS?"
                  optionValues={binaryOption}
                  optionLabels={binaryOption}
                  formik={formik}
                  name="hiv"
                  value={formik.values.hiv}
                />
                <button className="" type="submit">
                  Register
                </button>
                <button type="reset">Reset</button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Covid_form;
