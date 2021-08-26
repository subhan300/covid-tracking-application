import React ,{useEffect,useState}from "react";
import {Link} from "react-router-dom"
import "./home.css"
const Header = () =>{
let [currentToken,setCurrentToken]=useState("")

useEffect(() => {
    
    return () => {

        let t= localStorage.getItem("token")
       
        return (setCurrentToken(t) 
        )

    }
}, [])

    // console.log(localStorage.getItem("token"),"tokn")
return <div className="banner">
        <div><h1 className="banner_container_main_title"  >COVID-19 &nbsp; APPLICATION</h1></div>
       <div className="banner_container">
   
           <div className="banner_container_content_left">
             
                   
               
             <div className="banner_container_content">
                 <h1 className="banner_container_content_left_title">Corona Virus </h1>
                 <p className="banner_container_content_left_text">Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
Most people who fall sick with COVID-19 will experience mild to moderate symptoms .</p>
                  <div class="covid_btn-group">
              <Link to="/signup"><div className="covid_btn" type="button">Register</div></Link>
              <Link to="/login"> <div className="covid_btn" type="button">Log In</div></Link>
             
 
           </div>
           <br />
         
           <div class="covid_btn-group">
                  {currentToken?<Link to="/userAccount"><div  className="covid_btn" type="button">result</div></Link>:<div></div>}
               
                 {/* <button className="covid_btn" type="button" style={{width:"50%"}} >Sign out</button> */}
             
 
           </div>
          

             </div>
            
               <br></br>
             
               
           </div>
           {/* <div className="banner_container_content_right"><img src="https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlydXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></img></div> */}
         
       </div>
       
          
</div>
};
export default Header;