import React,{useState} from 'react'
import "./Login.css"
function Login() {
    let [username,setUserName]=useState("");
    let[password,setPassword]=useState("");
    let[email,setEmail]=useState("")

   

    const submit=async(e)=>{
        e.preventDefault();
        const data={username,password,email}
        // console.log("data",data)

 
        await   fetch(`https://covid-tracker-app-19.herokuapp.com/covid/token/`, {
            headers: {
                "Content-Type": "application/json",
              
              },
         method: "POST",
         body:JSON.stringify(data),
        
        
       
       })
       
         .then(async(res)=>{
                     //  setUserCredentials(details)
                  
                     
                     console.log("poimt")
                     const response =await res.json();
                     console.log(response)
                    //   history.push("/covid_form")
                     
                     }
                      
                      )
         
          .catch((error) => {
                      
                     console.log(error.message,"bottt error")
       });
    }
    return (
      <div className="login_container">
         <div class="Login">
            <div class="title">
            <h2  class="titleText"><span>L</span>ogin</h2>
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
            <input type="submit" onClick={submit} value="Login"></input>

            </div>
            
         </div>
        </div>
        
    )
    }
 
export default Login
