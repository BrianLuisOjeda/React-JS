import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Item = (props) => {

    

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
                
            </Card.Body>
        </Card>


    </>
}

export default Item
