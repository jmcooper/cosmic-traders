import React, { useState } from 'react'

import AddressEdit from './AddressEdit'
import AddressDisplay from './AddressDisplay'
import styles from './Address.module.css'

function Address(props) {
  const [editMode, setEditMode] = useState(true)

  function updateAddress(address) {
    props.onAddressUpdated(address)
    setEditMode(false)
  }

  return (
    <div className={styles.address}>
      { editMode 
        ? <AddressEdit billing={props.billing} address={props.address} onAddressUpdated={updateAddress} />
        : <div className={styles.addressDisplay}>
            <AddressDisplay address={props.address}/>
            <span><button className="link-button" onClick={() => setEditMode(true)}>Change</button></span>
          </div>
      }
    </div>
  )
}

export default Address