import React from 'react'
import "./Admin.css";
import Tables from  "./Table_MaterialUi_Comonent"
function Admin() {
    return (
        <div className="admin">
           <div className="container">
              <div className="admin_title"><h1>ADMIN PANNEL</h1></div>
              <div className="tables"> <Tables  /> </div>
              </div>
            
        </div>
    )
}

export default Admin

