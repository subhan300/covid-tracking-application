import React  from "react";

export const Select = ({mainLabel, optionValues, optionLabels, formik, name,value, ...props}) => {

    console.log("optionValues:", optionValues)
    console.log("optionLabels:", optionLabels)
    

    return(    <div>
     {mainLabel}   
    <select
        name={name}
        value={value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
    >
        <option value="" label="Choose an option" />
        {optionLabels.map( (label, i) =>  <option key={label} value={optionValues[i]} label={label} />)}        
    </select>
    </div>

    )
}

export default Select
