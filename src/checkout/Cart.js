import React from 'react'
import styles from './Cart.module.css'
import { toCurrencyFormat } from '../utils/format-utils'

const renderCartItem = (product, i) => {
  return (
    <li className={styles.cartItem} key={i}>
      <img src={require(`../images/${product.image}`)} alt={product.name}/>
      <span className={styles.flexCenter}>{product.name}</span>
      <span className={styles.flexCenter}>{toCurrencyFormat(product.price)}</span>
    </li>
  )
}

function Cart(props) {
  return (
    <div className={styles.cart}>
      <button className={`button ${styles.checkoutButton}`}>Checkout</button>
      { props.cart.length === 0 
        ? <span>There are no items in your cart</span>
        : <ul> { props.cart.map((product, i) => renderCartItem(product, i)) }</ul> }
    </div>
  )
}

export default Cart