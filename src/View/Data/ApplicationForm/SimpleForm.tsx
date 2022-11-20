import React, {createContext, useState, useEffect,useCallback} from 'react'

type SimpleFormType={
children:any,
value:any,
onChange:any
}

const updateWith=(oldValue:any, field:any ,value:any)=>{
const newValue = {...oldValue};
console.log(newValue);
}


type FormType ={
  setValue: any,
  value: any,
  name:string,
}


export const FormContext = createContext<FormType>({setValue:"", value:"", name:""});

const SimpleForm:React.FC<SimpleFormType>=({children, value, onChange })=>{
const [values, setValues] = useState(value || {});
useEffect(() => {
  if (onChange) {
    onChange(values)
  }
}, [onChange, values])
let setValue = useCallback(
  (field:any, v:any) => setValues((vs:any) => updateWith(vs, field, v)),
  [setValues]
)
let getValue = useCallback((field:any) => 
values[field], [values])


const form:any = {
  setValue: setValue,
  value: getValue,
}

  return (
    <FormContext.Provider value={form}>
      {children}
    </FormContext.Provider>
  )
}

export default SimpleForm