import React from 'react'
import ItemListContainer from '../../container/ItemListContainer'

function Navbar() {

    return (

        <ul className="nav justify-content-center">
            <ItemListContainer titulo='Inicio'/>
            <ItemListContainer titulo='Categorias'/>
            <ItemListContainer titulo='Contacto'/>
        </ul>

    )
}

export default Navbar
