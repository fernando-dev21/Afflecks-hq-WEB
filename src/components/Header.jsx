import React from 'react'
import logo from '../assets/image/logo.png'
import './Header.css'
const Header = () => {
  return (
    <header>
        <img src={logo} className="logo" alt="logo Fatec Zona Leste nas cores cinza e vermelho" />
        <h1>Affleck´s HQs</h1>
    </header>
  )
}

export default Header