import React from "react"
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import ItemList from './ItemList'


//creo mi array de productos 

const productosHardcodeados = [
    { id: 1, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '5000', stock: 7 },
    { id: 2, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '7000', stock: 7},
    { id: 3, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000', stock: 7},
    { id: 4, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000', stock: 7},
    { id: 5, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000', stock: 7},
    { id: 6, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000', stock: 7},
    { id: 7, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000', stock: 7},
    { id: 8, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000', stock: 7},
    { id: 9, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000', stock: 7},
    { id: 10, name: 'Remera', urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', price: '2000', stock: 7}
];



const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getFetch = new Promise((resolve, reject) => {
        //  Aqui van las Acciones
        setTimeout(() => {// tarea asincronica
            resolve(productosHardcodeados)
        }, 2000)
        //reject('404 not found')
    })

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
    },[]);
  
    return <>

        <div className="itemListContainer">  
            {loading ? <Loading className="loading" /> : <ItemList itemsAMapear={products} />}
        </div>

    </>
}

export default ItemListContainer
