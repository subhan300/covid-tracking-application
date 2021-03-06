import React,{useState} from 'react'
import {Formik, Form} from "formik"
import { TextField } from './TextField'
import Navbar from "../home/Navbar" 

import {Select} from './select'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useHistory} from "react-router-dom"
import "./Covid_form.css"
const binaryOption = ["Yes", "No"];  //variables for form select element with only "Yes" or "No" options 
const bpOptions = ["high", "low"]   //variables for bloodpressure select element with "high" or "low" options 
const hospital = ['Aga Khan', "Liaquat National", "Essa Lab", "South City"] ////variables for hospital select element with "high" or "low" options 

//defining validation schema for formik registration form
const SignupValidation = Yup.object().shape({
        
        firstName: Yup.string()
        .max(50, 'must be 50 characters or less' )
        .required('Required'),

        lastName: Yup.string()
        .max(50, 'must be 50 characters or less' )
        .required('Required'),

        hospital:  Yup.string()
        .required("Required")
        .oneOf(hospital),

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
    const history = useHistory();
  
 let token=localStorage.getItem("token")
 console.log(token)
 
    return (
 <>


<Navbar />
    <div className="container mt-3">
         
        <div className="row">
            <div className="col-md-5">
                <Formik
                    //values generated by this form
                    initialValues=
                    {
                        {
                            firstName: '',
                            LastName: '',
                            hospital:'',
                            Fits:'',
                            Diabetes:'',
                            Seizures:'',
                            HIV:'',
                        }
                    }
                    validationSchema={SignupValidation}
                      
                      
                      
                      
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(async() => {
                    //    console.log(values,"values singup")
                    
                       await   fetch(`https://covid-tracker-app-19.herokuapp.com/covid/record/`, {
                         headers: {
                             "Content-Type": "application/json",
                             "Authorization":`token ${token}`
                              
                           },
                      method: "POST",
                          
                           
                           body:JSON.stringify(values),
                         })
                        
                           .then(async(res)=>{
                            alert("successfully done !")
                             const response=await res.json()
                             console.log(response,"form res")
                             localStorage.setItem("id",response.pk)
                             alert(JSON.stringify(response))
                             history.push("/userAccount")

                            
                            
                             
                                    
                                       
                                     
                                     
                                       

                                       }   )
            
             .catch((error) => {
                         
                        console.log(error.message)
          });
           setSubmitting(false);
         }, 400);
       }}
                      
                      
                      
                      
                      
                      
                      >
                    {
                        ({    handleSubmit,
                            isSubmitting,errors, touched, ...formik }) => 

                        (
                            <div>
                                <h1 className="my-4 font-weight-bold .display-4" >Covid Form</h1>
                                <Form  onSubmit={handleSubmit}>    
                                    <TextField className="space_height" label="First Name" name="firstName" type="text"/>
                 
                                    <TextField className="space_height"label="Last Name" name="lastName" type="text"/>

                                    <Select className="space_height"
                                        mainLabel="Hospital" 
                                        optionValues={hospital} 
                                        optionLabels={hospital} 
                                        formik={formik} 
                                        name="hospital"
                                        value={formik.values.hospital}
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
                                        {/* <button type="submit" class="btn " >Sign in</button> */}
                                        <button type="submit" className="btn" disabled={isSubmitting}>
                                                 Submit
                                     </button>
                                    </div>
                                    <br />

                                    <div class="col-12">
                                        <button className = "btn"  type="reset">Reset</button>
                                    </div>                      
                                </Form>
                            </div>
                        )
                      
                    }  
                </Formik>
            </div>
        </div>
    </div>













 </>
    )
}

export default Covid_form;