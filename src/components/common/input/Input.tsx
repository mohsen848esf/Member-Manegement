import React from 'react';
import { Field, ErrorMessage } from 'formik';
import inputStyle from './Input.module.css'
export interface InputProps {
    labelInput: string,
    inputType: string,
    inputName: string,
    inputPlaceHolder: string,
}
 
const Input: React.FC<InputProps > = ({labelInput , inputType , inputName , inputPlaceHolder}) => {
    return (<div  className={inputStyle.classdiv}>
        
           
        
        <div className={inputStyle.part}>
            <p className={inputStyle.inputLabel}>
                {labelInput}
            </p>
            <Field name={inputName} type={inputType} placeHolder={inputPlaceHolder} className={inputStyle.classnn}/>
        </div>
        <ErrorMessage name={inputName} component='span' className={ inputStyle['input-error-message']}/>
    </div>  );
}
 
export {Input} ;