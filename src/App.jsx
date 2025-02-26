import { useState } from 'react'
import Counter from './Counter'
import EventHandlerExample from './EventHandlerExample'
import ControlledForm from './ControlledForm'
import UncontrolledForm from './UncontrolledForm'
import ValidatedForm from './ValidatedForm'
import ReactValidatedForm from './ReactValidatedForm'


function App() {
    return (
   
      <div>
        <Counter />
      
      <hr/>
      <EventHandlerExample />

    <hr/>
    <ControlledForm />

    <hr/>
    <UncontrolledForm />

    <hr/>
    <ValidatedForm /> 

    <hr/>
    <ReactValidatedForm />

      </div>
    
  )
}

export default App
