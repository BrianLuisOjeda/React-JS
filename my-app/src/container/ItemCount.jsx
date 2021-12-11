import React from 'react'
import {useState} from 'react'
import { Button } from 'react-bootstrap'

const ItemCount = ({ stock, initial}) => {

    const [cant, setCant] = useState(initial)

    function sumar() {
        if (cant < stock) {
            setCant(cant + 1)
            console.log(cant);
        }
    }
    function restar() {
        if (cant > initial) {
            setCant(cant - 1)
            console.log(cant);
        }
    }

    return (
        <>
            <div className="buttonsItemsCount">
                <div className="containerItemCount">
                    <Button
                        className="buttonCount"
                        size="sm"
                        onClick={sumar}>
                        +
                    </Button>
                    {cant}
                    <Button
                        className="buttonCount"
                        size="sm"
                        onClick={restar}>
                        -
                    </Button>
                </div>
            </div>
            
        </>
    )
}

export default ItemCount
