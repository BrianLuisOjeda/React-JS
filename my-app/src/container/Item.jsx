import React from 'react'
import { Button, Card } from 'react-bootstrap';


const Item = (props) => {

    return <>

        <Card key={props.prod.id} className="card" style={{ width: '13rem' }}>
            <Card.Img variant="top" src={props.prod.urlImg} />
            <Card.Body className="card.body">
                <Card.Title>{props.prod.name}</Card.Title>
                <Card.Text className="cardText">
                    $ {props.prod.price}
                </Card.Text>
                <div className="containerButtons">
                    <Button className="addOneMore" >
                        +
                    </Button>
                    <Button className="addOneMore">
                        x
                    </Button>
                </div>
            </Card.Body>
        </Card>

    </>
}

export default Item
