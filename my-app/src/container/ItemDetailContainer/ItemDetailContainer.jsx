import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail'
import {productosHardcodeados} from '../ItemListContainer/ItemListContainer'
import Loading from '../Loading'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { idProduct } = useParams();

    const itemPromise = new Promise((resp) => {
        setTimeout(() => {
            resp(productosHardcodeados);
        }, 2000);
    });

    useEffect(() => {
        itemPromise
            .then((resp) => {
                setProduct(resp.find(prod => prod.id == idProduct));
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [idProduct]);


    return (
        <div class="itemDetailContainer">
            {loading ? <Loading className="loading" /> : <ItemDetail item={product}/>}
        </div>
    )
}

export default ItemDetailContainer
