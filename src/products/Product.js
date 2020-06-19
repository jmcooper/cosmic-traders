import React from 'react';
import './Product.css';

const toCurrencyFormat = (value) => {
  return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'})
}

function Product(props) {
  console.log('props', props)
  return (
    <li className="product">
      <img src={require(`../images/${props.product.image}`)} alt="rocket"/>
      <h2 className="title">{props.product.name}</h2>
      <div className="price-line">
        <h3 className="price">{toCurrencyFormat(props.product.price)}</h3>
        <button class="button">Add to cart</button>
      </div>
    </li>
  )
}

export default Product;