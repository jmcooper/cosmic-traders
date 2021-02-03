import React from 'react'
import { useLocation } from 'react-router-dom'

import CartItem from './CartItem'
import styles from './Cart.module.css'
import { toCurrencyFormat } from '../../utils/format-utils'

const renderCartItem = (product, i) => {
  return (
    <li className={styles.cartItem} key={i}>
      <img src={require(`../../images/${product.image}`)} alt={product.name}/>
      <span className={styles.flexCenter}>{product.name}</span>
      <span className={styles.flexCenter}>{toCurrencyFormat(product.price)}</span>
    </li>
  )
}

const getCartTotal = (cart) => {
  return toCurrencyFormat(cart.reduce((sum, cur) => sum + (cur.price || 0), 0))
}

function Cart(props) {
  let location = useLocation()
  return (
    <div className={styles.cart}>
      { props.cart.length === 0 
        ? <span>There are no items in your cart</span>
        : <React.Fragment>
            { location.pathname !== '/checkout' && 
              <a href="/checkout" className={`button ${styles.checkoutButton}`} >Checkout</a> 
            }
            <ul> 
              { props.cart.map((product, i) => <CartItem cartItem={product} key={i}/>) }
              <li className={styles.cartTotal}>
                <div className={styles.totalLabel}>Total:</div> 
                <div>{getCartTotal(props.cart)}</div>
              </li>
            </ul>
          </React.Fragment> 
      }

    </div>
  )
}

export default Cart