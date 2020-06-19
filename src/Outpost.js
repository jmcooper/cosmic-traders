import React from 'react'
import ProductList from './products/ProductList'
import styles from './Outpost.module.css'

let cart = []
let products = [
  {
    name: 'Double-Retro Laser Blammers',
    price: 5999,
    image: 'base-rocket.png'
  },
  {
    name: 'Power Crystals',
    price: 1999,
    image: 'head-cyclops-shredder.png'
  },
  {
    name: 'Warp Core',
    price: 29995,
    image: 'base-spring.png'
  },
  {
    name: 'Warp Core',
    price: 29995,
    image: 'base-spring.png'
  },
  {
    name: 'Warp Core',
    price: 29995,
    image: 'base-spring.png'
  },
  {
    name: 'Warp Core',
    price: 29995,
    image: 'base-spring.png'
  },
]

const renderCartItem = (product) => {
  return (
    <li className="cart-item">
      <img src={require(`./images/${product.image}`)} />
    </li>
  )
}

function Outpost() {
  return (
    <React.Fragment>
      <div className={styles.mainLeft}>
        <h1 className="section-header">Outpost</h1>
        <ProductList products={products}/>
      </div>
      <div className={styles.rightSidebar}>
        <h1 className="section-header">Cart</h1>
        { cart.length > 0 
          ? <p>There are no items in your cart</p>
          : <ul> { cart.map((product) => renderCartItem(product)) }</ul>
        }
      </div>
    </React.Fragment>
  )
}

export default Outpost