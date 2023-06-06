import './App.css';

import Cadastro from './pages/Cadastro/Cadastro';
import Perfil from './pages/Perfil/Perfil';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Pagina2 from './pages/Pagina2/Pagina2';
import Pagina3 from './pages/Pagina3/Pagina3';
import {AuthProvider} from './context/AuthContext'
import { useAuthentication } from './hooks/useAuthentication'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()
  const loadingUser = user===undefined

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
  },[auth])
  if(loadingUser){
    return <p>Carregando...</p>
  }
  return (
  <>
    <AuthProvider value={{user}}>
      <BrowserRouter>
      {user && <NavBar />}
        <Routes>
          <Route path='/perfil' element={user ? <Perfil /> : <Navigate to='/Home' />} />
          <Route path='/' element={!user ? <Home /> : <Navigate to='/perfil' />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/' element={<Home />} />
          <Route path='/pagina2' element={<Pagina2 />} />
          <Route path='/pagina3' element={<Pagina3 />} />          
        </Routes>
      </BrowserRouter>
      <Footer />
    </AuthProvider>
  </>
  );
}

export default App;

