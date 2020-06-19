import React from 'react'
import ProductList from './products/ProductList'
import styles from './Outpost.module.css'
import Cart from './checkout/Cart'

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

let cart = [
  products[1],
  products[2]
]


function Outpost() {
  return (
    <React.Fragment>
      <div className={styles.mainLeft}>
        <h1 className="section-header">Outpost</h1>
        <ProductList products={products}/>
      </div>
      <div className={styles.rightSidebar}>
        <h1 className="section-header">Cart</h1>
        <Cart cart={cart}/>
      </div>
    </React.Fragment>
  )
}

export default Outpost