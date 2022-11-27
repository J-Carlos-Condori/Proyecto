import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProductById } from './Utils'

const ItemDetailContainer = () => {

    const [item, setItems] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getProductById(id)
                .then(Respuesta => {
                    setItems(Respuesta)
                })
                .catch(Error => {
                    console.log(Error)
                })
        }
    }, [id])


    return (
        <div>
            <ItemDetail producto={{ ...item }} />
        </div>
    )
}

export default ItemDetailContainer