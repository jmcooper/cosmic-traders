import React from 'react'

import Product from './Product'

function ProductListing(props) {
  return (
    <ul className="products">
      { props.products.map( (product) => <Product product={ product } /> )}
    </ul>
  )
}

export default ProductListing