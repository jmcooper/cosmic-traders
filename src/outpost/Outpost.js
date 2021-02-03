import React, { useState } from 'react'
import ProductList from '../products/ProductList'
import styles from './Outpost.module.css'
import Cart from '../checkout/cart/Cart'
import products from '../products/products.json'

function Outpost() {
  const [cart, setCart] = useState([])


  let handleAddToCart = (product) => {
    setCart([...cart, product])
  }
  
  return (
    <React.Fragment>
      <div className={styles.mainLeft}>
        <h1 className="section-header">Outpost</h1>
        <ProductList products={products} onAddToCart={handleAddToCart}/>
      </div>
      <div className={styles.rightSidebar}>
        <h1 className="section-header">Cart</h1>
        <Cart cart={cart}/>
      </div>
    </React.Fragment>
  )
}

export default Outpost