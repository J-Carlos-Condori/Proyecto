import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({ id }) => {
    return (
        <div>
            <ItemDetail key={id} />
        </div>
    )
}

export default ItemDetailContainer