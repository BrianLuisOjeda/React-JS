import React from 'react'
import { Card} from 'react-bootstrap'
import ItemCount from '../ItemCount';



const ItemDetail = ({ item }) => {


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
                <ItemCount initial={0} stock={item.stock} />
                
            </Card.Body>
        </Card>
    )
}

export default ItemDetail
