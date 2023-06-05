import React from 'react'
import logo from '../assets/image/logo.png'
import logo2 from '../assets/image/logo-escrita.png'
import './Header.css'
const Header = () => {
  return (
    
    <header>
        <img src={logo} className="logo" alt="LOGO DA PAGINA ESCRITO AFFLECKS HQS" />
        <img src={logo2} className="logo2" alt="LOGO DA PAGINA ESCRITO AFFLECKS HQS" />      
    </header>

  )
}

export default Header

