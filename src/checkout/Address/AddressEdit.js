import React, { useState } from 'react'

import formStyles from './FormStyles.module.css'
import styles from './AddressEdit.module.css'

function AddressEdit(props) {
  const foo = Object.assign({}, props.address)
  const [ address, setAddress ] = useState(foo)

  console.log('ae', props.billing, props.address, address)
  const handleInputChange = (event) => {
    const newAddress = {...address}
    newAddress[event.target.name] = event.target.value
    setAddress(newAddress)
  }

  return (
    <div>
      <div className={formStyles.inputGroup}>
        <label for="name">Name:</label>
        <input name="name" onChange={handleInputChange} value={address.name}/>
      </div>
      <div className={formStyles.inputGroup}>
        <label for="address">Address:</label>
        <input name="address" onChange={handleInputChange} value={address.address}/>
      </div>
      <div className={formStyles.inputGroup}>
        <label for="city">City:</label>
        <input name="city" onChange={handleInputChange} value={address.city}/>
      </div>
      <div className={formStyles.inputGroup}>
        <label for="state">State/Province:</label>
        <input name="state" onChange={handleInputChange} value={address.state}/>
      </div>
      <div className={formStyles.inputGroup}>
        <label for="postal-code">Postal Code:</label>
        <input name="postal-code" onChange={handleInputChange} value={address.postalCode}/>
      </div>
      <div class={styles.save}>
        <button className="button" onClick={() => props.onAddressUpdated(address)}>Save</button>
      </div>
    </div>
  )
}

export default AddressEdit