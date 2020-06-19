import React from 'react';
import Product from './Product'
import styles from './ProductList.module.css'

function ProductList(props) {
  return (
    <ul className={styles.products}>
      {
        props.products.map((productToRender, i) => {
          return <Product product={productToRender} onAddToCart={props.onAddToCart} key={i}/>
        })
      }
    </ul>

  )
}

export default ProductList;