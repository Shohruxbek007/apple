import React from 'react'
import './Products.css'
import {Iphones, Macbooks} from './Items.js'
import Element from '../Element/Element'
const Products = () => {
  return (
    <div className='products'>
        <h1>Iphones</h1>
        <div className="Iphone">
            
            {
Iphones.map(t => {
    return <Element key={t.id} name={t.name} img={t.img} price={t.price}/>
})
            }
        </div>
        <h1> Macbooks</h1>
        <div className="Iphone">
            
            {
Macbooks.map(t => {
    return <Element key={t.id} name={t.name} img={t.img} price={t.price}/>

})
            }
        </div>
      
      
    </div>
  )
}

export default Products
