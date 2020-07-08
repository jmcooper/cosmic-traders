import React, { useState, useEffect } from 'react'

import formStyles from './FormStyles.module.css'
import styles from './AddressEdit.module.css'

function AddressEdit(props) {
  const [ address, setAddress ] = useState(Object.assign({}, props.address))
  const [ editing, setEditing ] = useState(false)

  useEffect(() => {
    if (!editing)
      setAddress(props.address)
  })

  const handleInputChange = (event) => {
    setEditing(true)
    const newAddress = {...address}
    newAddress[event.target.name] = event.target.value
    setAddress(newAddress)
  }

  function saveAddress() {
    setEditing(false)
    props.onAddressUpdated(address)
  }

  return (
    <div>
      <div className={formStyles.inputGroup}>
        <label htmlFor="name">Name:</label>
        <input name="name" onChange={handleInputChange} value={address.name}/>
      </div>
      <div className={formStyles.inputGroup}>
        <label htmlFor="address">Address:</label>
        <input name="address" onChange={handleInputChange} value={address.address}/>
      </div>
      <div className={formStyles.inputGroup}>
        <label htmlFor="city">City:</label>
        <input name="city" onChange={handleInputChange} value={address.city}/>
      </div>
      <div className={formStyles.inputGroup}>
        <label htmlFor="state">State/Province:</label>
        <input name="state" onChange={handleInputChange} value={address.state}/>
      </div>
      <div className={formStyles.inputGroup}>
        <label htmlFor="postalCode">Postal Code:</label>
        <input name="postalCode" onChange={handleInputChange} value={address.postalCode}/>
      </div>
      <div className={styles.save}>
        <button className="button" onClick={saveAddress}>Save</button>
      </div>
    </div>
  )
}

export default AddressEdit