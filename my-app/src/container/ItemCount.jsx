import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(0)

    function sumar() {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    function restar(){
        if (count > 0) {
            setCount(count - 1)
        }
    }
    function agregar(){
        onAdd(count)
        setCount(0)
    }

    
    return (
        <>
        
        <button onClick={sumar}>+</button>
        {count}
        <button onClick={restar}>-</button>
        <button onClick={agregar}>Agregar al carrito</button>
        
        </>
    )
}

export default ItemCount
