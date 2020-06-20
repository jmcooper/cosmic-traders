import React, { useState } from 'react'

import Cart from './Cart'
import Address from './Address/Address'
import styles from './Checkout.module.css'

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
function Checkout() {
  let [ addresses, setAddresses ] = useState({shippingAddress: {}, billingAddress: {}})

  function updateShippingAddress(shippingAddress) {
    setAddresses(Object.assign({}, addresses, {billingAddress: shippingAddress}))
  }

  function updateBillingAddress(billingAddress) {
    setAddresses(Object.assign({}, addresses, {billingAddress}))
  }

  return (
    <div className={styles.checkout}>
      <h1 className={`section-header ${styles.sectionHeader}`}>Cart</h1>
      <Cart cart={products}/>
      <h2 className={`section-header ${styles.sectionHeader}`}>Shipping Address</h2>
      <Address address={addresses.shippingAddress} onAddressUpdated={updateShippingAddress} />
      <h2 className={`section-header ${styles.sectionHeader}`}>Billing Address</h2>
      <Address address={addresses.billingAddress} billing="billing" onAddressUpdated={updateBillingAddress} />
    </div>
  )
}

export default Checkout