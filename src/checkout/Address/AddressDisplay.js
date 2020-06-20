import React from 'react'

import formStyles from './FormStyles.module.css'

function AddressDisplay(props) {
  return (
    <div>
      <div className={formStyles.displayGroup}>
        <span>Name:</span>{props.address.name}
      </div>  
      <div className={formStyles.displayGroup}>
        <span>Address:</span> {props.address.streetAddress}
      </div>  
      <div className={formStyles.displayGroup}>
        <span>City:</span> {props.address.city}
      </div>  
      <div className={formStyles.displayGroup}>
        <span>State/Province:</span> {props.address.state}
      </div>  
      <div className={formStyles.displayGroup}>
        <span>Postal Code:</span> {props.address.postalCode}
      </div>  
    </div>
  )
}

export default AddressDisplay