import React, {useState} from 'react';


function ControlledForm() {
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        alert('Submitted value: ' + name);

    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </label>
            <button type="submit">Submit</button>    
        
       </form>
    )
}

export default ControlledForm;