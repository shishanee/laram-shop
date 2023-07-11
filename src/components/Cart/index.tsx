import React from 'react'
import styles from './Cart.module.css'
import InfoBlock from './InfoBlock'
import CartBlock from './CartBlock'

const Cart = () => {
  return (
    <div className={styles.main}>
      <InfoBlock/>
      <CartBlock/>
    </div>
  )
}

export default Cart
