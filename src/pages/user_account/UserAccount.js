import React,{useEffect,useState} from 'react'
import "./UserAccount.css"
import Navbar from '../home/Navbar'
function UserAccount() {
let [id,SetId]=useState("")
let [result,setResult]=useState(".....")
console.log(result)
let token=localStorage.getItem("token")
let ID=localStorage.getItem("id")
console.log(ID,"IDS")
console.log(token,"token")
    const CheckResult=(e)=>{
        e.preventDefault();
        
      
       return fetch(`https://covid-tracker-app-19.herokuapp.com/covid/result/${ID}`,{
        headers: {
            "Content-Type": "application/json",
            "Authorization":`token ${token}`
             
          }
       } )
                  .then(async data=>{const Data=await data.json()
                    console.log(Data)
                    setResult(Data.covidStatus)
                }
                  
                  
                  ).catch(error=>{console.log(error,"eroro")})
       
    }

    return (
        <div className="user_account">
            <Navbar />
            <br />
            <div className="account_container" >
                 <h1 className="account_title">User Account :</h1>
                 <h1  className="account_result">Enter your Id to check Result</h1>

              <div className="account_result">

                  <form onSubmit={CheckResult}>
                       <input   value={ID}   type="number" required placeholder="enter your id "></input>
                        <button type="submit" >Check Result</button>
                  </form>
    
                
                
            </div>

                 <h1  className="account_result">{`your result is ${result}`} </h1>
            </div>
            
        </div>
    )
}

export default UserAccount

