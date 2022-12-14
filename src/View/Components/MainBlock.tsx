import React,{useState} from 'react'
import Application from '../Data/ApplicationForm/Application'
import FormDemo from '../Data/ApplicationForm/FormDemo'
import ShowData from '../Data/ApplicationForm/ShowData'
import Header from './Header'

function MainBlock() {
const [formFields, setFormFields] = useState({})
const [errors, setErrors] = useState({})
const [valid, setValid] = useState()

const InitForm=(ff:any, v:any, e:any) => {
  setFormFields(ff);
  setValid(v);
  setErrors(e);
}
  return (
    <div>
        <Header/>
        <div className="container">
        <div className="formWrapper">
          <FormDemo onChange={InitForm}
          initialValue={{FirstName: ''}}/>
        </div>
        <ShowData formFields={formFields} valid={valid} errors={errors}/>
        </div>      
    </div>
  )
}

export default MainBlock