import React, {useState, memo, useMemo} from 'react';
 
const ItemList = memo(({items}) => {
    console.log("Item list rendered");
    return (
        <div>
            <h2>Our list</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
});
 
const ParentComponent = () => {
    const items = useMemo(() => ['Tesla', 'Mercedes', 'Volvo', 'Saab'], []);
    const [counter, setCounter] = useState(0);
 
    return (
        <div>
            <h1>rendering</h1>
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <ItemList items={items}/>
        </div>
    )
}
 
export default ParentComponent;