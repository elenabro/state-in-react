import { useState } from 'react'
import Counter from './Counter'
import EventHandlerExample from './EventHandlerExample'
import ControlledForm from './ControlledForm'
import UncontrolledForm from './UncontrolledForm'
import ValidatedForm from './ValidatedForm'


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

      </div>
    
  )
}

export default App
