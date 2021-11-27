import React from 'react'
import Item from './Item'

const ItemList = ({itemsAMapear}) => {

    return( <>

        {itemsAMapear.map(item => <Item key={item.id} prod={item} />)}
       
    </>
    )
}

export default ItemList
