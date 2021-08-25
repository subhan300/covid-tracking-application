import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import "./Signup.css"

import {Formik, Form} from "formik"




function Signup() {
    
    const history = useHistory();
  
    return (
      <div className="signup_container">
        <div class="SignUp">
          
           <div class="title">
           <h2  class="titleText"><span>S</span>ign Up</h2>
           </div>
            
           <Formik
       initialValues={{ email: '', password: '' ,userNAME:''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         else if(!values.userNAME){
           errors.userNAME="Required"
         }
         else if(!values.password){
          errors.password="Required"
        }
         return errors;
       }}
       
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(async() => {
        console.log(values,"values singup")
           await   fetch(`https://covid-tracker-app-19.herokuapp.com/covid/create/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization":"token 694371ebc53cd0190bce48d0817c4f14d7f77503"
            }
           
            ,
            body:JSON.stringify(values),
          })
          .then((error)=>{console.log(error,"errors yaha hai")})
            .then(()=>{
                        //  setUserCredentials(details)
                     
                        
                      
                        console.log("start")
                         history.push("/login")
                        
                        }
                         
                         )
            
             .catch((error) => {
                         
                        console.log(error.message)
          });
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
<div class="inputBox">
           <h4>Username</h4>
           <input type="text" name="userNAME"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.userNAME}

               
           
           ></input>
            {errors.userNAME && touched.userNAME && errors.userNAME}
           </div>
           <div class="inputBox">
           <h4>Email</h4>
           <input required type="email" name="email"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.email}
           ></input>
             {errors.email && touched.email && errors.email}
           </div>
           <div class="inputBox">
           <h4>Password</h4>
           <input 
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
         type="password" placeholder="Password" ></input>
         {errors.password && touched.password && errors.password}
           </div>
           <div class="inputBox">
           <input type="submit"  disabled={isSubmitting}>
             Submit
           </input>
           {/* <input type="submit" onClick={submit} value="Sign Up"></input> */}

           </div>

</form>)}
</Formik>
       
       




           </div>
           
        </div>
    )
}

export default Signup

