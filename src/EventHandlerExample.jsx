import React, {useState} from 'react';

function EventHandlerExample() {

    const [inputValue, setInputValue] = useState('');


    const handleClick = () => {
        console.log('Button Clicked');
        // alert('Button Clicked');
    }

    const handlerChange = (event) => {
        console.log("Change handler called:  " + event.target.value);
        setInputValue(event.target.value);
    }



  return (
    <div> 
        <button onClick={handleClick}>ClickMe</button>
        <input type="text" onChange={handlerChange} />
        <h3>{inputValue}</h3>
    </div>
  );
}

export default EventHandlerExample;