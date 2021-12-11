import React from 'react'
import {useContext} from 'react'
import {CartContext} from '../CartContext/CartContext'

const Cart = () => {

    const {cartList, vaciarCarrito} = useContext(CartContext)
    console.log(cartList)
    return (
        <div>
            { cartList.map(prod => 
                <li key={prod.id}>
                    {prod.name}
                    -
                    {prod.cantidad}
                </li>) }
            <button 
            onClick={vaciarCarrito}>
                vaciar carrito
            </button>
        </div>
    )
}

export default Cart
