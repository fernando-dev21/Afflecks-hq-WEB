import React from 'react'
import logo from '../assets/image/logo.png'
import './Header.css'
const Header = () => {
  return (
    <header>
        <img src={logo} className="logo" alt="LOGO DA PAGINA ESCRITO AFFLECKS HQS" />
        <h1>Affleck´s HQs</h1>        
    </header>
  )
}

export default Header