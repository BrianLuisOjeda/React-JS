import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import ButtonGroup from './ButtonGroup'


const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial)

    function sumar() {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    function restar(initial) {
        if (count > initial) {
            setCount(count - 1)
        }
    }
    function agregar() {
        if (count > initial) {
            onAdd(count)
        }
        setCount(initial)
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
                <ButtonGroup />
            </div>


        </>
    )
}

export default ItemCount
