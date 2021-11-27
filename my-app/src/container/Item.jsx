import React from 'react'
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Item = (props) => {

    function onAdd(cant) {
        console.log(cant)//luego hay que hacer que lo muestre en el carrito
    }

    return <>

        <Card key={props.prod.id} className="card" style={{ width: '13rem' }}>
            <Link to={`/detalle/${props.prod.id}`}>
                <Card.Img variant="top" src={props.prod.urlImg} />
            </Link>
            <Card.Body className="card.body">
                <Card.Title>{props.prod.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    $ {props.prod.price}
                </Card.Subtitle>
                <div className="containersButton">
                    <ItemCount initial={0} stock={props.prod.stock} onAdd={onAdd} />
                </div>
            </Card.Body>
        </Card>


    </>
}

export default Item
