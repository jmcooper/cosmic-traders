import React from 'react'
import products from '../products/products.json'
import { toCurrencyFormat } from '../utils/format-utils'

function Outpost() {
  return (
    <div className="mainLeft">
      <h1 className="section-header">Outpost</h1>
      <ul className="products">
        { products.map( (product) => { return (
          <li className="product">         
            <img src={ require(`../images/${product.image}`) } alt="warp core"/>
            <h2 className="title">{ product.name }</h2>
            <div className="priceLine">
              <h3 className="price">{ toCurrencyFormat(product.price) }</h3>
              <button className="button">Add to cart</button>
            </div>
          </li>
          )}
        )}
      </ul>
    </div>
  )
}

export default Outpost