import React from 'react'

import styles from './Product.module.css'
import { toCurrencyFormat } from '../utils/format-utils'

function Product(props) {
  return (
    <li>
      <div className={styles.product}>
        <div className={styles.addToCart}>
          <button className="button" onClick={() => props.onAddToCart(props.product)}>Add to cart</button>
        </div>
        <div>
          <img className={styles.productImage} src={ require(`../images/${props.product.image}`) } alt="warp core"/>
        </div>
      </div>
      <div class={styles.productDetails}>
        <div className={styles.title}>{ props.product.name }</div>
        <div className={styles.price}>{ toCurrencyFormat(props.product.price) }</div>
      </div>
    </li>
  )
}

export default Product