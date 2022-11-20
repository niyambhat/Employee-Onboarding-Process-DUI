import React from 'react'
let setError = () => {}
export const ErrorHandlerContext = React.createContext(() => {})


//Todo from React Cookbook
const ErrorHandlerProvider = (props:any) => {
  if (props.callback) {
    setError = props.callback
  }

  return (
    <ErrorHandlerContext.Provider value={setError}>
      {props.children}
    </ErrorHandlerContext.Provider>
  )
}

export default ErrorHandlerProvider
