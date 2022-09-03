import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    var productId = useParams().id
    return (
        <div>
            <h1>Product id = {productId}</h1>
        </div>
    )
}