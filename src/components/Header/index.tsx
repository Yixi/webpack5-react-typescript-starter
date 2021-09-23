import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.scss'

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <NavLink to='/' className={styles.nav}>Home</NavLink>
      <NavLink to='/about' className={styles.nav}>About</NavLink>
    </div>
  )
}

export default Header
