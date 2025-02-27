import React ,{ useState} from 'react';

function Child({value, updatedValue})
{
    return (
        <div>
           <p>Current value: {value}</p>
           <button onClick={() => updatedValue(value + 1)}>Increment</button>
        </div>
    )
}

function Parent() {
    const [sharedValue, setSharedValue] = useState(0);

    return (
        <div>
            <h2>Parent Component</h2>
            <Child value={sharedValue} updatedValue={setSharedValue} />
        </div>
    )
}      

export default Parent;