import { useState } from 'react';
function Increment() {
    const [contador, setCount] = useState(0);

    function increment() {
        setCount(contador + 1);
    }

    function decrement() {
        setCount(contador - 1);
    }

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Increment