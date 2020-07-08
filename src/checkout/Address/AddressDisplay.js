import React from 'react'

function AddressDisplay(props) {
  return (
    <div>
        <div>{props.address.name}</div>
        <div>{props.address.address}</div>
        <div>{props.address.city}, {props.address.state} {props.address.postalCode}</div>
    </div>
  )
}

export default AddressDisplay