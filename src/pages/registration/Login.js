import React,{useState} from 'react'
import "./Login.css"
import {Formik, Form} from "formik"
function Login() {
    let [token,setToken]=useState("");


   

    
    
    return (
      <div className="login_container">
         <div class="Login">
            <div class="title">
            <h2  class="titleText"><span>L</span>ogin</h2>
            </div>
            <Formik
       initialValues={{ email: '', password: '' ,username:''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         else if(!values.username){
           errors.username="Required"
         }
         else if(!values.password){
          errors.password="Required"
        }
         return errors;
       }}
       
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(async() => {
        console.log(values,"values singup")
        alert(JSON.stringify(values))
        await   fetch(`https://covid-tracker-app-19.herokuapp.com/covid/token/`, {
          headers: {
              "Content-Type": "application/json",
            
            },
       method: "POST",
           
            
            body:JSON.stringify(values),
          })
         
            .then(async(res)=>{
                    
              const response=await res.json()
              setToken(response.token)
              localStorage.setItem("token",token);
              
                     
                        
                      
                      
                        
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
           <input type="text" name="username"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.username}

               
           
           ></input>
            {errors.username && touched.username && errors.username}
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
           <button type="submit"  disabled={isSubmitting}>
             Submit
           </button>
           {/* <input type="submit" onClick={submit} value="Sign Up"></input> */}

           </div>

</form>)}
</Formik>
       
            
         </div>
        </div>
        
    )
    }
 
export default Login
