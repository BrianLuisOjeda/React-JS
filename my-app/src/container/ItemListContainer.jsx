import React from "react"
//import Item from "./Item"

const ItemListContainer = (props) => {
  
    return <>

        <div className="itemListContainer">  
            {props.children}
        </div>

    </>
}

export default ItemListContainer
