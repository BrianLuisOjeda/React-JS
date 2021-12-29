import React from 'react'
import {useState} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../../components/CartContext/CartContext'

const ItemCount = ({ stock, initial, onAdd}) => {

    const { cartList } = useContext(CartContext)
    const [count, setCount] = useState(initial)
    //const [cantidad, setCantidad] = useState(0)
    

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
    /*
    function confirm(count) {
        setCantidad(count)
    }
    */
    const AgregarAlCarrito = () => {
        return <Button
            variant="primary"
            onClick={()=>onAdd(count)}>
            Agregar al carrito
        </Button>
    }

    const IrAlCarrito = () => {
        return <Link to='/Cart'>
            <Button
                variant="success">
                Ir al carrito
            </Button>
        </Link>
    }

    return (
        <>
            <div className="buttonsItemsCount">
                <div className="containerItemCount">
                    <Button
                        className="buttonCount"
                        size="sm"
                        onClick={sumar}>
                        +
                    </Button>
                    {count}
                    <Button
                        className="buttonCount"
                        size="sm"
                        onClick={restar}>
                        -
                    </Button>
                </div>
               
            </div>
            <div className="agregarCarrito">
                    {cartList === [] ?
                        <AgregarAlCarrito />
                        :
                        <IrAlCarrito />
                    }
                </div>
            
        </>
    )
}

export default ItemCount
