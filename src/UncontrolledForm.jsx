import React, {useRef} from 'react';

function UncontrolledForm() {   

    const nameRef = useRef(null);

    const handleSubmit = (event) => {
            event.preventDefault();
            alert('Submitted value: ' + nameRef.current.value)
        }

    return(
        <form onSubmit={handleSubmit} >
                    <label>
                Name:
                <input type="text" ref = {nameRef}/>
            </label>
            <button type="submit">Submit</button>

        </form>
    )
}

    export default UncontrolledForm;