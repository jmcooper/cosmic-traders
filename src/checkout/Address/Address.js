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
            <span><a href="" onClick={() => setEditMode(true)}>Change</a></span>
          </div>
      }
    </div>
  )
}

export default Address