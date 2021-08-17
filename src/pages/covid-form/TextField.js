import React  from "react";
import { useField } from "formik";

export const TextField = ({errors, touched, label, ...props}) => {
    const [field, meta] = useField(props);

    return(
        <div>
            <label htmlFor={field.name}>{label}</label>
            {
                errors[field.name] && touched[field.name]  
                ?   (<div>{errors[field.name] }</div>) 
                :   null
            }

            
            <input  {...field}{...props} autoComplete="off" />      
        </div>
    )
}


