import React from 'react'
import { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import ItemCount from '../ItemCount';
import { CartContext } from '../../components/CartContext/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = ({ item }) => {

    const [count, setCount] = useState(1)
    const { cartList, agregarProducto } = useContext(CartContext)

    function onAdd(cant) {
        setCount(cant)
        agregarProducto({ ...item, cantidad: cant })
    }
    console.log(cartList)

    const AgregarAlCarrito = () => {
        return <Button
            variant="primary"
            onClick={()=>onAdd()}>
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
        <Card key={item.id} className="card" style={{ width: '18rem' }}>

            <Card.Img variant="top" src={item.urlImg} />
            <Card.Body className="card.body">
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    $ {item.price}
                </Card.Subtitle>
                <Card.Text className="cardText">
                    {item.description}
                </Card.Text>
                <ItemCount
                    initial={1}
                    stock={item.stock}
                    count={count}
                />
                <div className="agregarCarrito">
                    {count === 1 ?
                        <AgregarAlCarrito />
                        :
                        <IrAlCarrito />
                    }
                </div>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail
