import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [fontSize, setFontSize] = useState(16); // Tamanho inicial da fonte
  
  const increaseFontSize = () => {
    setFontSize(fontSize + 1);
  }

  const decreaseFontSize = () => {
    setFontSize(fontSize - 1);
  }

  return (
    <nav>
        <Link to="/" style={{ fontSize: `${fontSize}px` }}>Home</Link>
        <Link to="/pagina2" style={{ fontSize: `${fontSize}px` }}>Página 2</Link>
        <Link to="/pagina3" style={{ fontSize: `${fontSize}px` }}>Contato</Link>
        <div>
          <button onClick={increaseFontSize}>Aumentar fonte</button>
          <button onClick={decreaseFontSize}>Diminuir fonte</button>
        </div>
    </nav>
  )
}

export default NavBar;
