import React from 'react'
import './Home.css'
import hq1 from '../assets/image/hq1.png'
import hq2 from '../assets/image/hq2.jpg'
import hq3 from '../assets/image/hq3.jpg'
import hq4 from '../assets/image/hq4.jpg'
import hq5 from '../assets/image/hq5.jpg'
import hq6 from '../assets/image/hq6.jpg'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'


const Home = () => {
  return (    



    <main>    
      
      <div class="main">
            <div class="produto">
              <img src={hq2} className="logo" alt="IMAGEM DA HQ DO BATMAN O CAVALEIROS DAS TREVAS" />
              <h3>Produto 1</h3>
              <p>R$ 19,99</p>
              <button>Adicionar ao carrinho</button>        
             </div>                
            </div>
            <div class="produto">
            <img src={hq1} className="logo" alt="IMAGEM DA HQ DO SUPERMAN NÚMERO 4" />
              <h3>Produto 2</h3>
              <p>R$ 29,99</p>
              <button>Adicionar ao carrinho</button>
            </div>                    
            <div class="produto">
            <img src={hq4} className="logo" alt="IMAGEM DA HQ DOS VINGADORES" />
              <h3>Produto 3</h3>
              <p>R$ 39,99</p>
              <button>Adicionar ao carrinho</button>
            </div>
            <div class="produto">
            <img src={hq3} className="logo" alt="IMAGEM DA HQ DO AMAZING SPIDERMAN" />
              <h3>Produto 4</h3>
              <p>R$ 49,99</p>
              <button>Adicionar ao carrinho</button>
            </div>
            <div class="produto">
            <img src={hq5} className="logo" alt="IMAGEM DO HQ BATMAN KNIGHTFALL" />
              <h3>Produto 5</h3>
              <p>R$ 59,99</p>
              <button>Adicionar ao carrinho</button>
            </div>
            <div class="produto">
              <img src={hq6} className="logo" alt="IMAGEM DA HQ DO WATCHMEN" />  
              <h3>Produto 6</h3>
              <p>R$ 29,99</p>
              <button>Adicionar ao carrinho</button>                     
      </div>     
    </main>
  )
}

export default Home

