import React  from "react";
import { ErrorMessage, useField } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css'
export const Select = ({mainLabel, ...props}) => {
    const [field, meta] = useField(props);

    return(    
    
    <div className="mb-2">
        <label className="form-label-lg" for="inputState">{mainLabel}</label> 
        <div class="col-sm-10">
            <select
                className={`form-select shadow-none ${meta.touched && meta.error && 'is-invalid'}`} 
                {...field} {...props}
                name={field.name}
                value={field.value}
                onChange={props.formik.handleChange}
                onBlur={props.formik.handleBlur}
            >
                <option value="" label="Choose an option" />
              {/*mapping the list of options provided as optionsValues and OptionLabels insid select input*/}
                {
                    props
                    .optionLabels
                    .map( (label, i) =>  <option key={label} value={props.optionValues[i]} label={label} />)
                }        
           </select>
        </div>
        {/*writing the validation errod messages under the respecrtive options*/}
        <ErrorMessage component="div" name={field.name} className="text-danger" />
    </div>

    )
}

export default Select
