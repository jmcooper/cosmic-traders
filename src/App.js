import React from 'react';
import './App.css';
import Product from './products/Product'

function App() {
  // this.state = {
  //   cart: []
  // }

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

  return (
    <div className="content">
        <div className="main-left">
          <h1 className="section-header">Outpost</h1>
          <ul className="products">
            {
              products.map((productToRender) => <Product product={productToRender}/>)
            }
          </ul>
        </div>
        <div className="right-sidebar">
          <h1 className="section-header">Cart</h1>
          { cart.length > 0 
            ? <p>There are no items in your cart</p>
            : <ul> { cart.map((product) => renderCartItem(product)) }</ul>
          }
        </div>
    </div>
  );
}

export default App;
