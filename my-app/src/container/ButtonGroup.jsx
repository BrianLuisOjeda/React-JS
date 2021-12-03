import React from 'react'
import { useState } from 'react'

const ButtonGroup = () => {

    const [compra, setCompra] = useState('agregar')

    function onAdd(cant) {
        console.log(cant)//luego hay que hacer que lo muestre en el carrito
        setCompra('compra')
    }

    const AgregarAlCarrito = () => {
        return <button onClick={onAdd}>Agregar al carrito</button>
    }

    const IrAlCarrito = () => {
        return <button onClick={() => console.log('ir al cart')}>Ir al carrito</button>
    }

    
    
    return (
        <div>
            { compra === 'agregar' ? 
                <AgregarAlCarrito onAdd={onAdd} /> 
                : 
                <IrAlCarrito /> 
            }
        </div>
    )
}

export default ButtonGroup
