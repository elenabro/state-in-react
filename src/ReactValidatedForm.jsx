import React, {useState} from 'react';



function ReactValidatedForm(){
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const validateFirstName = (value) => {
        const regex = /^[a-zA-Z_-]{2,25}$/;
        return regex.test(value);
    }

    const validateLastName = (value) => {
        const regex = /^[a-zA-Z_-]{1,35}$/;
        return regex.test(value);
    }

    const validatePhone = (value) => {
        const regex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        return regex.test(value);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'FirstName') {
            setFirstName(value);
            if (!validateFirstName(value)) {
                setError('First Name is not valid');
            } else {
                setError('');
            }
        } else if (name === 'LastName') {
            setLastName(value);
            if (!validateLastName(value)) {
                setError('Last Name is not valid');
            } else {
                setError('');
            }
        } else if (name === 'Phone') {
            setPhone(value);
            if (!validatePhone(value)) {
                setError('Phone is not valid');
            } else {
                setError('');
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error || FirstName === '' || LastName === '' || Phone === '') {
            alert('Fix the error');
        } else {
            alert('Form submitted successfully');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <hr/>
            <label>
                First Name:
                <br/>
                    <input
                    type="text"
                    name="FirstName"
                    style = {{
                        borderColor : 'black', 
                        borderWidth : '2px'}}
                    value={FirstName}
                    onChange={handleChange}
                />
            </label>
            </div>

            <div>
            <hr/>
            <label>
                Last Name:
                <br/>
                <input
                    type="text"
                    name="LastName"
                    style = {{
                        borderColor : 'black', 
                        borderWidth : '2px'}}
                    value={LastName}
                    onChange={handleChange}
                />
            </label>
            </div>

            <div>
            <hr/>
            <label>
                Phone:
                <br/>
                <input
                    type="text"
                    name="Phone"
                    style = {{
                        borderColor : 'black', 
                        borderWidth : '2px'}}
                    value={Phone}
                    onChange={handleChange}
                />
            </label>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <hr/>
            <button type="submit"
            style={{
                backgroundColor: 'green',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
            >Submit</button>
            
        </form>
    );
}

export default ReactValidatedForm;