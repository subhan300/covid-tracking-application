import React,{useState} from 'react'
import {useHistory} from "react-router-dom"
import "./Signup.css"
function Signup() {
    let [username,setUserName]=useState("");
    let[password,setPassword]=useState("")
    let[email,setEmail]=useState("")
    const history = useHistory();
    // console.log(userame)
   const submit=async(e)=>{
       e.preventDefault();
       const data={email,username,password}
       console.log("data",data)

       await   fetch(`https://covid-tracker-app-19.herokuapp.com/covid/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization":"token 694371ebc53cd0190bce48d0817c4f14d7f77503"
        }
       
        ,
        body:JSON.stringify(data),
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
   }
    return (
      <div className="signup_container">
        <div class="SignUp">
          
           <div class="title">
           <h2  class="titleText"><span>S</span>ign Up</h2>
           </div>
           <div class="inputBox">
           <h4>Username</h4>
           <input type="text" value={username}  placeholder="Name" onChange={(e)=>{setUserName(e.target.value)}}></input>
           </div>
           <div class="inputBox">
           <h4>Email</h4>
           <input type="email" value={email}  placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}></input>
           </div>
           <div class="inputBox">
           <h4>Password</h4>
           <input type="password" value={password}  placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
           </div>
           <div class="inputBox">
           <input type="submit" onClick={submit} value="Sign Up"></input>

           </div>

           </div>
           
        </div>
    )
}

export default Signup

