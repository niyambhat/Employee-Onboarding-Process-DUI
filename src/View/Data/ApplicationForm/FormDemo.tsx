import { useEffect, useState} from 'react'
import InputField from './InputField'
import SimpleForm from './SimpleForm'

type FormType={
  onChange:any
  initialValue:any,
}


const FormDemo:React.FC<FormType>=({onChange, initialValue})=>{
const [formFields, setFormFields] = useState(initialValue);
const [valid, setValid] = useState<boolean>(true)
const [errors, setErrors] = useState<any>({})

useEffect(()=>{
if(onChange) onChange(formFields, valid, errors);
},[onChange, valid, errors])

  return (
    <>
    <div>
      <SimpleForm value={initialValue} onChange={setFormFields}>
      <InputField name="FirstName" label="First Name"/>
      </SimpleForm>
    </div>
  </>
  )
}

export default FormDemo