import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
//import CardWidget from "../components/CardWidget";
import Loading from '../components/Loading';

//creo mi array de productos 

const products = [
    { id: 1, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '5000' },
    { id: 2, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '7000' },
    { id: 3, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000' },
    { id: 4, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000' },
    { id: 5, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000' },
    { id: 6, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000' },
    { id: 7, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000' },
    { id: 8, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000' },
    { id: 9, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000' },
    { id: 10, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000' }
];

const getFetch = new Promise((resolve, reject) => {
    //  Aqui van las Acciones
    setTimeout(() => {// tarea asincronica
        resolve(products)
    }, 2000)
    //reject('404 not found')
})

const ItemList = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        getFetch
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        return () => {
            console.log('clean');
        }
    }, [])

    return <>
        {loading ? <Loading className="loading"/> : products.map(prod => <Card key={prod.id} className="card" style={{ width: '13rem' }}>
            <Card.Img variant="top" src={prod.urlImg} />
            <Card.Body className="card.body">
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text className="cardText">
                    $ {prod.price}
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

        )}
    </>
}

export default ItemList
