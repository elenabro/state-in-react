import React, {useState} from 'react';


function Calculator() {
    const [calc, setCalc] = useState('');

    const handlerButtonClick = (value) => {
        setCalc(calc + value);
    };

    const handlerEqual = () => {
        try {
            const result = eval(calc);
            setCalc(result.toString());
        } catch (error){
            setCalc('Error');
        }

    }

    const handlerClear = () => {
        setCalc('');
    }

    return (
        <div>
        <div>
            {calc || '0'}
        </div>
        <div>
            <button onClick={() => handlerButtonClick('1')}>1</button>
            <button onClick={() => handlerButtonClick('2')}>2</button>
            <button onClick={() => handlerButtonClick('3')}>3</button>
            <button onClick={() => handlerButtonClick('+')}>+</button>
            <br/>
            <button onClick={() => handlerButtonClick('4')}>4</button>
            <button onClick={() => handlerButtonClick('5')}>5</button>
            <button onClick={() => handlerButtonClick('6')}>6</button>
            <button onClick={() => handlerButtonClick('-')}>-</button>
            <br/>
            <button onClick={() => handlerButtonClick('7')}>7</button>
            <button onClick={() => handlerButtonClick('8')}>8</button>
            <button onClick={() => handlerButtonClick('9')}>9</button>
            <button onClick={() => handlerButtonClick('*')}>*</button>
            <br/>
            <button onClick={() => handlerButtonClick('0')}>0</button>
            <button onClick={() => handlerButtonClick('.')}>.</button>
            <button onClick={handlerEqual}>=</button>
            <button onClick={() => handlerButtonClick('/')}>/</button>
            <br/>
            <button onClick={handlerClear}>Clear</button>
        </div>
    </div>
    )
}

export default Calculator;