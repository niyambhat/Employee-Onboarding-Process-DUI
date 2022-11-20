import React,{useContext, useState} from 'react';
import { FormContext } from './SimpleForm';
type InputFieldType={
name:string,
label?:string
}

const InputField:React.FC<InputFieldType>=({name, label})=>{
const form = useContext(FormContext);
let value = form.value(name)

return (
    <div>
    <label htmlFor={name}>{label}:</label>
      <input id={name} type="text" value={value} onChange={(e:any)=>{form.setValue(name,e.target.value)}}/>

    </div>
  )
}

export default InputField