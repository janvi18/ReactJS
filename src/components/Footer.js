import React from 'react'
import '../css/footer.css'

export default function Footer(props) {

  return (
    <div className='footer'>
      Footer
      <h1>Country = {props.address.country}</h1>
      <h2>State == {props.address.state}</h2>
      <h3>City : {props.address.city}</h3>
    </div>
  )
}