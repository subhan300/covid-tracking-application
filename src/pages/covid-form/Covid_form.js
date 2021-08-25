import React from 'react'
import {Formik, Form} from "formik"
import { TextField } from './TextField'
import {Select} from './select'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Covid_form.css"
const binaryOption = ["yes", "no"];  //variables for form select element with only "Yes" or "No" options 
const bpOptions = ["high", "low"]   //variables for bloodpressure select element with "high" or "low" options 
const hospitals = ["Agha Khan", "Liaquat National", "Essa Lab", "South City"] ////variables for hospital select element with "high" or "low" options 


//defining validation schema for formik registration form
const SignupValidation = Yup.object().shape({
        
        FirstName: Yup.string()
        .max(50, 'must be 50 characters or less' )
        .required('Required'),

        LastName: Yup.string()
        .max(50, 'must be 50 characters or less' )
        .required('Required'),

        Hospital:  Yup.string()
        .required("Required")
        .oneOf(hospitals),

        Fits: Yup.string()
       .required('Required')
        .oneOf(binaryOption),
 
        Diabetes: Yup.string()
        .required('Required')
        .oneOf(binaryOption),
 
        Seizures: Yup.string()
        .required('Required')
        .oneOf(binaryOption),

        HIV: Yup.string()
        .required('Required')
        .oneOf(binaryOption),
    })


const Covid_form = () => {
    return (
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-5">
                <Formik
                    //values generated by this form
                    initialValues=
                    {
                        {
                            FirstName: '',
                            LastName: '',
                            Hospital:'',
                            Fits:'',
                            Diabetes:'',
                            Seizures:'',
                            HIV:'',
                        }
                    }
                    validationSchema={SignupValidation}
                >
                    {
                        ({ errors, touched, ...formik }) => 
                      {
                          console.log(formik.values)
                        (
                            <div>
                                <h1 className="my-4 font-weight-bold .display-4" >Covid Form</h1>
                                <Form>    
                                    <TextField className="space_height" label="First Name" name="FirstName" type="text"/>
                 
                                    <TextField className="space_height"label="Last Name" name="LastName" type="text"/>

                                    <Select className="space_height"
                                        mainLabel="Hospital" 
                                        optionValues={hospitals} 
                                        optionLabels={hospitals} 
                                        formik={formik} 
                                        name="Hospital"
                                        value={formik.values.Hospital}
                                    />

                                    <Select className="space_height"
                                        mainLabel="Have you diagnosed with Fits?" 
                                        optionValues={binaryOption} 
                                        optionLabels={binaryOption}
                                        formik={formik} 
                                        name="Fits"
                                        value={formik.values.Fits}
                                    />

                                    <Select className="space_height"
                                        mainLabel="Are you diabetic?" 
                                        optionValues={binaryOption} 
                                        optionLabels={binaryOption} 
                                        formik={formik}
                                        name="Diabetes" 
                                        value={formik.values.Diabetes}
                                    />

                                    <Select className="space_height"
                                        mainLabel="Have you ever had Seizures?" 
                                        optionValues={binaryOption} 
                                        optionLabels={binaryOption} 
                                        formik={formik} 
                                        name="Seizures"
                                        value={formik.values.Seizures}
                                    />

                                    <Select className="space_height"
                                        mainLabel="Have you ever diagnosed with AIDS?" 
                                        optionValues={binaryOption} 
                                        optionLabels={binaryOption} 
                                        formik={formik}
                                        name="HIV" 
                                        value={formik.values.HIV}
                                    />
                                   <br />
                                    <div className="col-12">
                                        <button type="submit" class="btn " >Sign in</button>
                                    </div>
                                    <br />

                                    <div class="col-12">
                                        <button className = "btn"  type="reset">Reset</button>
                                    </div>                      
                                </Form>
                            </div>
                        )
                      }
                    }  
                </Formik>
            </div>
        </div>
    </div>
    )
}

export default Covid_form;