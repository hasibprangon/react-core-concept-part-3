import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import StateFullForm from './Components/StateFullForm/StateFullForm'
import FormRef from './Components/FormRef/FormRef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Vite + React</h1>
     {/* <SimpleForm></SimpleForm> */}
     {/* <StateFullForm></StateFullForm> */}
     <FormRef></FormRef>
    </>
  )
}

export default App
