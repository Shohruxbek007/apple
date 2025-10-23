import React from 'react'
import './Element.css'

const Element = (props) => {
  return (
    <div>
      <div className="card">
        <h2>{props.name}</h2>
        <img src={props.img} alt="" />
        
        <div className='div'><p>Starts from ${props.price}</p>
        <button>Get</button></div>
    </div>
    </div>
  )
}

export default Element
