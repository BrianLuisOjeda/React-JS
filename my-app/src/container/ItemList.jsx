import React from 'react'
import Item from './Item'


const ItemList = () => {

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


    return <>
        {products.map( <Item />)}
    </>
}

export default ItemList
