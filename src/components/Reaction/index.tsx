import React, { useState } from 'react'



export default function Reaction({ icon, counter }) {
    const [contador, setContador] = useState(counter)


    function incrementar() {
        setContador(contador + 1)
    }

    return (
        <div className="data" onClick={incrementar}>
            {icon}
            <span className="nu" >{contador}</span>
        </div>
    )
}
