import React from 'react'
import styles from "../Footer/Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p>© Melvin S. Bulan | 2023</p>
      <p>Made with <span className={styles.span}>&hearts;</span> in Philippines</p>
    </div>
  )
}

export default Footer