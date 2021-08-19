import React,{useState} from 'react'
import "./Signup.css"
function Signup() {
    let [userame,setUserName]=useState("");
    let[password,setPassword]=useState("")
    console.log(userame)
   const submit=(e)=>{
       e.preventDefault();
       const data={username:userame,password}
       console.log("data",data)
   }
    return (
        <div class="SignUp">
           <div class="title">
           <h2  class="titleText"><span>S</span>ign Up</h2>
           </div>
           <div class="inputBox">
           <h4>Username</h4>
           <input type="text" value={userame}  placeholder="Name" onChange={(e)=>{setUserName(e.target.value)}}></input>
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

