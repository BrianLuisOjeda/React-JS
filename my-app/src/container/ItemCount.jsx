import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)
    const [compra, setCompra] = useState('agregar')


    function sumar() {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    function restar() {
        if (count > initial) {
            setCount(count - 1)
        }
    }
    function onAdd() {
        setCompra(count)
        setCount(initial)
    }

    const AgregarAlCarrito = () => {
        return <Button variant="primary" onClick={onAdd}>Agregar al carrito</Button>
    }

    const IrAlCarrito = () => {
        return <Link to='/Cart'>
            <Button variant="success">Ir al carrito</Button>
        </Link>
    }

    return (
        <>
            <div className="buttonsItemsCount">
                <div className="containerItemCount">
                    <Button className="buttonCount" size="sm" onClick={sumar}>+</Button>
                    {count}
                    <Button className="buttonCount" size="sm" onClick={restar}>-</Button>
                </div>
            </div>
            <div className="agregarCarrito">
                {compra === 'agregar' ?
                    <AgregarAlCarrito />
                    :
                    <IrAlCarrito />
                }
            </div>
        </>
    )
}

export default ItemCount
