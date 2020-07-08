import React from 'react'

import formStyles from './FormStyles.module.css'

function AddressDisplay(props) {
  console.log(props.address)
  return (
    <div>
        <div>{props.address.name}</div>
        <div>{props.address.address}</div>
        <div>{props.address.city}, {props.address.state} {props.address.postalCode}</div>
    </div>
  )
}

export default AddressDisplay