import React from 'react'
import PowerCrystalsImage from '../images/power-crystals.png'

function Outpost() {
  return (
    <div className="mainLeft">
      <h1 className="section-header">Outpost</h1>
      <ul className="products">
        <li className="product">
          <img src={ require('../images/warp-core.png') } alt="warp core"/>
          <h2 className="title">Warp Core</h2>
          <div className="priceLine">
            <h3 className="price">$29,995</h3>
            <button className="button">Add to cart</button>
          </div>
        </li>
        <li className="product">
          <img src={ PowerCrystalsImage } alt="Power Crystals"/>
          <h2 className="title">Power Crystals</h2>
          <div className="priceLine">
            <h3 className="price">$1,995</h3>
            <button className="button">Add to cart</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Outpost