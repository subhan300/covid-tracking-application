import React,{useEffect,useState} from 'react'
import "./UserAccount.css"
function UserAccount() {
let [id,SetId]=useState("")
let [result,setResult]=useState(".....")
console.log(result)
let token=localStorage.getItem("token")
console.log(token,"token")
    const CheckResult=(e)=>{
        e.preventDefault();
        
        console.log(token,id,"id")
       return fetch(`https://covid-tracker-app-19.herokuapp.com/covid/result/${id}`,{
        headers: {
            "Content-Type": "application/json",
            "Authorization":`token ${token}`
             
          }
       } )
                  .then(async data=>{const Data=await data.json()
                    console.log(Data)
                    setResult(Data.covidStatus)
                }
                  
                  
                  )
       
    }

    return (
        <div className="user_account">
            <div className="account_container" >
                 <h1 className="account_title">User Account :</h1>
                 <h1  className="account_result">Enter your Id to check Result</h1>

              <div className="account_result">

                  <form onSubmit={CheckResult}>
                       <input onChange={(e)=>{SetId(e.currentTarget.value)}}  value={id}   type="number" required placeholder="enter your id "></input>
                        <button type="submit" >Check Result</button>
                  </form>
    
                
                
            </div>

                 <h1  className="account_result">{`your result is ${result}`} </h1>
            </div>
            
        </div>
    )
}

export default UserAccount

