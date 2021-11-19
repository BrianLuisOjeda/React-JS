import React from "react"
import { useState, useEffect } from 'react'
import Loading from '../components/Loading';
import ItemList from './ItemList'



const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getFetch = new Promise((resolve, reject) => {
        //  Aqui van las Acciones
        setTimeout(() => {// tarea asincronica
            resolve(products)
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

    },[]);// me tira un error aca

    return <>

        <div className="itemListContainer">
            {loading ? <Loading className="loading" /> : prod => <ItemList />}
        </div>

    </>
}

export default ItemListContainer
