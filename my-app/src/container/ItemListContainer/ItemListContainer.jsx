import React from "react"
import { useState, useEffect } from 'react'
import Loading from '../Loading'
import ItemList from '../ItemList'
import { useParams } from "react-router"
import './ItemListContainer.css'


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategoria } = useParams()

    const getFetch = new Promise((resolve, reject) => {
        //  Aqui van las Acciones
        setTimeout(() => {// tarea asincronica
            resolve(productosHardcodeados)
        }, 2000)
        //reject('404 not found')
    })



    useEffect(() => {

        if (idCategoria) {
            getFetch
                .then(data => {
                    setProducts(data.filter(prod => prod.categoria === idCategoria))
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            getFetch
                .then(data => {
                    setProducts(data)
                })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }


    }, [idCategoria]);

    return <>

        <div className="itemListContainer">
            {loading ? <Loading className="loading" /> : <ItemList itemsAMapear={products} />}
        </div>

    </>
}

//creo mi array de productos 

export const productosHardcodeados = [
    {
        id: 1,
        name: 'Remera',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit .',
        urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg',
        categoria: 'Remeras',
        price: '5000',
        stock: 7
    },
    {
        id: 2,
        name: 'Pantalon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit .',
        urlImg: 'https://www.guantexindustrial.com.ar/807-large_default/pantalon-jeans-talle-56.jpg',
        categoria: 'Pantalon',
        price: '7000',
        stock: 7
    },
    {
        id: 3,
        name: 'Remera',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit .',
        urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: 'Remeras', price: '2000', stock: 7
    },
    {
        id: 4,
        name: 'Pantalon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit .',
        urlImg: 'https://www.guantexindustrial.com.ar/807-large_default/pantalon-jeans-talle-56.jpg',
        categoria: 'Pantalon',
        price: '2000',
        stock: 7
    },
    {
        id: 5,
        name: 'Remera',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit .',
        urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: 'Remeras', price: '2000', stock: 7
    },
    {
        id: 6,
        name: 'Pantalon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit .',
        urlImg: 'https://www.guantexindustrial.com.ar/807-large_default/pantalon-jeans-talle-56.jpg',
        categoria: 'Pantalon',
        price: '2000',
        stock: 7
    },
    {
        id: 7,
        name: 'Remera',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit .',
        urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: 'Remeras', price: '2000', stock: 7
    },
    {
        id: 8,
        name: 'Pantalon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit .',
        urlImg: 'https://www.guantexindustrial.com.ar/807-large_default/pantalon-jeans-talle-56.jpg',
        categoria: 'Pantalon',
        price: '2000',
        stock: 7
    },
    {
        id: 9, name: 'Remera',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit .',
        urlImg: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: 'Remeras', price: '2000', stock: 7
    },
    {
        id: 10, name: 'Pantalon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit .',
        urlImg: 'https://www.guantexindustrial.com.ar/807-large_default/pantalon-jeans-talle-56.jpg',
        categoria: 'Pantalon',
        price: '2000',
        stock: 7
    }
];

export default ItemListContainer
