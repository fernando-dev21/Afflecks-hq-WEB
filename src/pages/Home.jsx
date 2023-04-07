import React from 'react'
import './Home.css'
import logo from '../assets/image/hq.png'

const Home = () => {
  return (    
    <main>      
      <div class="main">
            <div class="produto">
            <img src={logo} className="logo" alt="IMAGEM" />
                <h3>Produto 1</h3>
                <p>R$ 19,99</p>
                <button>Adicionar ao carrinho</button>
                
              </div>
                
            </div>
            <div class="produto">
            <img src={logo} className="logo" alt="IMAGEM" />
              <h3>Produto 2</h3>
              <p>R$ 29,99</p>
              <button>Adicionar ao carrinho</button>
            </div>        
            
            <div class="produto">
            <img src={logo} className="logo" alt="IMAGEM" />
              <h3>Produto 3</h3>
              <p>R$ 39,99</p>
              <button>Adicionar ao carrinho</button>
            </div>
            <div class="produto">
            <img src={logo} className="logo" alt="IMAGEM" />
              <h3>Produto 4</h3>
              <p>R$ 49,99</p>
              <button>Adicionar ao carrinho</button>
            </div>
            <div class="produto">
            <img src={logo} className="logo" alt="IMAGEM" />
              <h3>Produto 5</h3>
              <p>R$ 59,99</p>
              <button>Adicionar ao carrinho</button>
            </div>
            <div class="produto">
              <img src={logo} className="logo" alt="IMAGEM" />  
              <h3>Produto 6</h3>
              <p>R$ 29,99</p>
              <button>Adicionar ao carrinho</button>                     
      </div>            
    </main>
  )
}

export default Home