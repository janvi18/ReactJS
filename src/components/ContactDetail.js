import React from 'react'
import { useParams } from 'react-router-dom';

export const ContactDetail = () => {
    var id = useParams().id;
    return (
        <div>
            <h1>contact detail {id}</h1>
        </div>
    )
}