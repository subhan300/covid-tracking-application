import React,{useState} from 'react'
import "./Signup.css"
function Signup() {
    let [username,setUserName]=useState("");
    let[password,setPassword]=useState("")
    let[email,setEmail]=useState("")
    // console.log(userame)
   const submit=async(e)=>{
       e.preventDefault();
       const data={username,password,email}
       console.log("data",data)

       await   fetch(`https://covid-tracker-app-19.herokuapp.com/covid/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "access-token":"694371ebc53cd0190bce48d0817c4f14d7f77503"
        }
       
        ,
        body:JSON.stringify(data),
      })
      .then((error)=>{console.log(error,"errors")})
        .then(()=>{
                    //  setUserCredentials(details)
                 
                    
                  
                    console.log("start")
                    //  history.push("/covid_form")
                    
                    }
                     
                     )
        
         .catch((error) => {
                     
                    console.log(error.message)
      });
   }
    return (
        <div class="SignUp">
           <div class="title">
           <h2  class="titleText"><span>S</span>ign Up</h2>
           </div>
           <div class="inputBox">
           <h4>Username</h4>
           <input type="text" value={username}  placeholder="Name" onChange={(e)=>{setUserName(e.target.value)}}></input>
           </div>
           <div class="inputBox">
           <h4>Username</h4>
           <input type="email" value={email}  placeholder="Name" onChange={(e)=>{setEmail(e.target.value)}}></input>
           </div>
           <div class="inputBox">
           <h4>Password</h4>
           <input type="password" value={password}  placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
           </div>
           <div class="inputBox">
           <input type="submit" onClick={submit} value="Sign Up"></input>

           </div>
           
        </div>
    )
}

export default Signup

