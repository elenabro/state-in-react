import React, {useState} from 'react';

function ValidatedForm() {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (value) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(value);
       
    }

    const handleChange = (e) => {
         const value = e.target.value;
         setEmail(value);

            if(!validateEmail(value)) {
                setError('Email is not valid');
            } else {
                setError('');
            }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(error || email === '') {
            alert('Fix the error');
        } else {
            alert('Email submitted ');
        }

    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input 
                  type="email" 
                  value={email} 
                  onChange={handleChange} 
                />
            </label>

            {error && <p style={{color: 'red'}}>{error}</p>}
            <button type="submit">Submit</button>

        </form>
    )

}

export default ValidatedForm;