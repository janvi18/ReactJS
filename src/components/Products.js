import React from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
    return (
        <div>
            <ul>
                <li><Link to="/productdetail/:1">Product 1</Link></li>
                <li><Link to="/productdetail/:2">Product 2</Link></li>
                <li><Link to="/productdetail/:3">Product 3</Link></li>
            </ul>
        </div>
    )
}