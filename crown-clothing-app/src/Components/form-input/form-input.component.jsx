import React from 'react';

import './form-input.styles.scss';


const FormInput = ({handleChange, label , ...otherProps}) => (

    <div className="group"> 
             {/* other props consists of all the name , value ,type, required */}
           <input onChange={handleChange} className="form-input" {...otherProps} />
           { 
            // here this is conditional rendering if 
            //developer passes label props in the Form INput
            // component then label is rendered using conditional 
            //rendering else null is rendered
               label ? 
               (
                   <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                       {
                           label
                       }
                   </label>
               ) : null
           }
    </div>
)

export default FormInput;