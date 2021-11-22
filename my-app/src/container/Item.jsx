import React from 'react'
import { Card } from 'react-bootstrap';
import ItemCount from './ItemCount';

const Item = (props) => {

    function onAdd(cant){
        console.log(cant)//luego hay que hacerque lo muestre en el carrito
    }

    return <>
        
         <Card key={props.prod.id} className="card" style={{ width: '13rem' }}>
            <Card.Img variant="top" src={props.prod.urlImg} />
            <Card.Body className="card.body">
                <Card.Title>{props.prod.name}</Card.Title>
                <Card.Text className="cardText">
                    $ {props.prod.price}
                </Card.Text>
                <div className="containerItemCount">
                    <ItemCount initial={0} stock={props.prod.stock} onAdd={onAdd} />
                </div>
            </Card.Body>
        </Card>

        
    </>
}

export default Item
