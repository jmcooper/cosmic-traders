import React, { useState } from 'react'

import AddressEdit from './AddressEdit'
import AddressDisplay from './AddressDisplay'
import styles from './Address.module.css'

function Address(props) {
  const [editMode, setEditMode] = useState(true)

  console.log(props.billing, props.address)
  function updateAddress(address) {
    // setEditMode(false)
    props.onAddressUpdated(address)
  }

  return (
    <div class={styles.address}>
      { editMode 
        ? <AddressEdit billing={props.billing} address={props.address} onAddressUpdated={updateAddress} />
        : <div className={styles.addressEdit}>
            <AddressDisplay address={props.address} className={styles.addressDisplay} />
            <button className="button" onClick={setEditMode(true)}>Change</button>
          </div>
      }
    </div>
  )
}

export default Address