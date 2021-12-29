import React from 'react'
import { useContext } from 'react';
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount';
import { CartContext } from '../../components/CartContext/CartContext'



const ItemDetail = ({ item }) => {

    
    const { cartList, agregarProducto } = useContext(CartContext)

    function onAdd(cant) {
        agregarProducto({...item, unidades: cant})
    }
    console.log(cartList)


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
                    onAdd={onAdd}
                />
                
            </Card.Body>
        </Card>
    )
}

export default ItemDetail
