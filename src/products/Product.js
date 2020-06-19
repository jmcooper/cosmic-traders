import React from 'react';
import styles from './Product.module.css';
import { toCurrencyFormat } from '../utils/format-utils'

function Product(props) {
  return (
    <li className={styles.product}>
      <img src={require(`../images/${props.product.image}`)} alt="rocket"/>
      <h2 className={styles.title}>{props.product.name}</h2>
      <div className={styles.priceLine}>
        <h3 className={styles.price}>{toCurrencyFormat(props.product.price)}</h3>
        <button className="button">Add to cart</button>
      </div>
    </li>
  )
}

export default Product;